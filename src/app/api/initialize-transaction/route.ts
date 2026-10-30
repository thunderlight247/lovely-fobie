import { NextResponse } from "next/server";

// Fallback test key ensures Paystack Sandbox functions even if env var is not yet added on Vercel
const DEFAULT_TEST_SECRET_KEY = "sk_test_029a6fd5bf9066123f18951003b234c0a3daf331";

type PaystackInitializeResponse = {
  status: boolean;
  message: string;
  data?: {
    authorization_url?: string;
    access_code?: string;
    reference?: string;
  };
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { error: "Request body must be a JSON object." },
      { status: 400 },
    );
  }

  const { email, amount, metadata } = body;
  const amountInPesewas =
    typeof amount === "number" ? Math.round(amount * 100) : Number.NaN;

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "A valid email address is required for receipt delivery." },
      { status: 400 },
    );
  }

  if (
    typeof amount !== "number" ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    !Number.isSafeInteger(amountInPesewas) ||
    Math.abs(amount * 100 - amountInPesewas) > 1e-8
  ) {
    return NextResponse.json(
      { error: "Amount must be a positive GHS amount with at most two decimals." },
      { status: 400 },
    );
  }

  // Dynamically resolve protocol and host from request headers
  const host =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "lovely-fobie.vercel.app";
  const proto =
    request.headers.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const callbackUrl = `${proto}://${host}/contact?status=deposit_success`;

  // Use configured key or default sandbox test key
  const secretKey = process.env.PAYSTACK_SECRET_KEY || DEFAULT_TEST_SECRET_KEY;

  try {
    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amountInPesewas,
          currency: "GHS",
          callback_url: callbackUrl,
          metadata: isRecord(metadata) ? metadata : {},
        }),
        cache: "no-store",
      },
    );

    const result: unknown = await paystackResponse.json();

    if (
      isRecord(result) &&
      result.status === true &&
      isRecord(result.data) &&
      typeof result.data.authorization_url === "string"
    ) {
      return NextResponse.json({
        authorization_url: result.data.authorization_url,
        reference: result.data.reference ?? `LFG-${Date.now()}`,
        status: true,
      });
    }

    const errorMessage =
      isRecord(result) && typeof result.message === "string"
        ? result.message
        : "Paystack initialization failed.";

    return NextResponse.json({ error: errorMessage }, { status: 502 });
  } catch (error) {
    console.error("Paystack transaction initialization request failed.", error);
    return NextResponse.json(
      { error: "Unable to connect to Paystack. Please try again." },
      { status: 502 },
    );
  }
}
