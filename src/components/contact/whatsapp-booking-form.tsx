"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BOOKING_TIMES,
  HAIR_TYPES,
  HAIR_LENGTHS,
  TREATMENTS,
  generateWhatsAppBookingUrl,
  WhatsAppFormPayload,
} from "@/lib/site";

export function WhatsAppBookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [bookingMode, setBookingMode] = useState<"whatsapp" | "paystack">("whatsapp");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "9:00 AM",
    serviceNeeded: preselectedService || TREATMENTS[0].name,
    hairType: "Natural",
    hairLength: "Medium",
    preferredStyle: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [depositSuccess, setDepositSuccess] = useState<{
    reference: string;
    isSandbox: boolean;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: preselectedService }));
    }
  }, [preselectedService]);

  const todayStr = new Date().toISOString().split("T")[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Find matching treatment to get deposit recommendation
  const matchedTreatment = TREATMENTS.find((t) => t.name === formData.serviceNeeded);
  const depositAmount = matchedTreatment?.depositAmount || 50;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // If pure WhatsApp booking
    if (bookingMode === "whatsapp") {
      const payload: WhatsAppFormPayload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        serviceNeeded: formData.serviceNeeded,
        hairType: formData.hairType,
        hairLength: formData.hairLength,
        preferredStyle: formData.preferredStyle,
      };
      const url = generateWhatsAppBookingUrl(payload);
      window.open(url, "_blank");
      return;
    }

    // Paystack Sandbox Deposit Flow
    if (bookingMode === "paystack") {
      if (!formData.email) {
        setErrorMessage("Please enter an email address to receive your Paystack deposit receipt.");
        return;
      }

      setIsSubmitting(true);
      try {
        const response = await fetch("/api/initialize-transaction", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            amount: depositAmount,
            metadata: {
              fullName: formData.fullName,
              phone: formData.phone,
              preferredDate: formData.preferredDate,
              preferredTime: formData.preferredTime,
              serviceNeeded: formData.serviceNeeded,
              hairType: formData.hairType,
              hairLength: formData.hairLength,
              preferredStyle: formData.preferredStyle,
              purpose: "Salon Appointment Deposit",
            },
          }),
        });

        const data = await response.json();

        if (!response.ok || data.error) {
          throw new Error(data.error || "Could not initiate Paystack sandbox checkout.");
        }

        // If sandbox demo mode
        if (data.isSandboxDemo) {
          setDepositSuccess({
            reference: data.reference,
            isSandbox: true,
          });
          setIsSubmitting(false);
          return;
        }

        // Real Paystack authorization redirect
        if (data.authorization_url) {
          window.location.assign(data.authorization_url);
        }
      } catch (err) {
        setErrorMessage(
          err instanceof Error ? err.message : "Failed to initialize Paystack sandbox checkout."
        );
        setIsSubmitting(false);
      }
    }
  };

  const handleFinishWhatsAppWithDeposit = () => {
    if (!depositSuccess) return;
    const payload: WhatsAppFormPayload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      serviceNeeded: formData.serviceNeeded,
      hairType: formData.hairType,
      hairLength: formData.hairLength,
      preferredStyle: formData.preferredStyle,
      depositReference: depositSuccess.reference,
    };
    const url = generateWhatsAppBookingUrl(payload);
    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Main Booking Card (21st.dev Inspired Minimalist Luxury) */}
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 p-6 sm:p-10 shadow-xl backdrop-blur-xl transition-all">
        {/* Soft Background Accent */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-deep/5 blur-3xl" />

        {/* Card Header */}
        <div className="relative mb-8 border-b border-neutral-100 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-nude px-3 py-1 text-xs font-semibold text-emerald-deep">
            <span>✨</span> Private Appointment Booking
          </div>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-medium tracking-tight text-emerald-deep">
            Reserve Your Session
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-ink/70">
            Fill in your preferred details. Choose to book directly on WhatsApp or secure your slot with a test deposit via Paystack sandbox.
          </p>

          {/* Booking Mode Selector (21st.dev Segmented Tab) */}
          <div className="mt-6 flex rounded-2xl bg-neutral-100/90 p-1.5 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => {
                setBookingMode("whatsapp");
                setDepositSuccess(null);
                setErrorMessage(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 font-semibold transition-all ${
                bookingMode === "whatsapp"
                  ? "bg-white text-emerald-deep shadow-sm"
                  : "text-ink/65 hover:text-ink"
              }`}
            >
              <span>💬 Book on WhatsApp</span>
              <span className="rounded-md bg-emerald-deep/10 px-2 py-0.5 text-[11px] text-emerald-deep font-bold">
                Instant
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setBookingMode("paystack");
                setDepositSuccess(null);
                setErrorMessage(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 font-semibold transition-all ${
                bookingMode === "paystack"
                  ? "bg-white text-emerald-deep shadow-sm"
                  : "text-ink/65 hover:text-ink"
              }`}
            >
              <span>💳 Paystack Sandbox</span>
              <span className="rounded-md bg-emerald-deep/10 px-2 py-0.5 text-[11px] text-emerald-deep font-bold">
                Deposit
              </span>
            </button>
          </div>
        </div>

        {/* Success Banner if Paystack Sandbox test completed */}
        <AnimatePresence>
          {depositSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 rounded-2xl border border-emerald-deep/20 bg-emerald-50/70 p-5 text-emerald-950 shadow-xs"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold text-sm">
                  ✓
                </span>
                <div>
                  <h4 className="font-serif text-base font-bold text-emerald-deep">
                    Paystack Sandbox Deposit Simulated!
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-900/80">
                    Test Reference: <strong className="font-mono text-emerald-deep">{depositSuccess.reference}</strong>
                  </p>
                  <p className="mt-1 text-xs text-emerald-800/70">
                    Amount: GHS {depositAmount}.00 (Deposit test secured). Click below to send your confirmed booking details to the WhatsApp front desk.
                  </p>
                  <button
                    type="button"
                    onClick={handleFinishWhatsAppWithDeposit}
                    className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-deep px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-deep/90 transition-all"
                  >
                    <span>Send Confirmed Booking to WhatsApp →</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs sm:text-sm text-rose-900">
            {errorMessage}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Guest Identity */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Ama Mensah"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-emerald-deep focus:outline-none focus:ring-1 focus:ring-emerald-deep transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. 024 123 4567"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-emerald-deep focus:outline-none focus:ring-1 focus:ring-emerald-deep transition-all"
              />
            </div>
          </div>

          {/* Email (Especially required for Paystack Sandbox receipt) */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
              Email Address {bookingMode === "paystack" && <span className="text-rose-500">*</span>}
              <span className="text-[11px] font-normal text-ink/50 lowercase ml-1">
                (for booking summary & deposit receipt)
              </span>
            </label>
            <input
              type="email"
              name="email"
              required={bookingMode === "paystack"}
              placeholder="e.g. ama@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-emerald-deep focus:outline-none focus:ring-1 focus:ring-emerald-deep transition-all"
            />
          </div>

          {/* Service Needed Dropdown */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
              Service / Treatment <span className="text-rose-500">*</span>
            </label>
            <select
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleInputChange}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink focus:border-emerald-deep focus:outline-none focus:ring-1 focus:ring-emerald-deep transition-all"
            >
              <optgroup label="Natural Hair Care">
                {TREATMENTS.filter((t) => t.category === "hair").map((t) => (
                  <option key={t.slug} value={t.name}>
                    {t.name} ({t.duration})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Makeup Artistry">
                {TREATMENTS.filter((t) => t.category === "makeup").map((t) => (
                  <option key={t.slug} value={t.name}>
                    {t.name} ({t.duration})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Skincare & Consultations">
                {TREATMENTS.filter((t) => t.category === "skin").map((t) => (
                  <option key={t.slug} value={t.name}>
                    {t.name} ({t.duration})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Date & Time Slot Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                min={todayStr}
                required
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink focus:border-emerald-deep focus:outline-none focus:ring-1 focus:ring-emerald-deep transition-all"
              />
              <span className="mt-1 block text-[11px] text-ink/50">
                Working Days: Mon, Tue, Wed, Fri, Sat
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
                Time Window <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {BOOKING_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, preferredTime: time }))}
                    className={`rounded-xl py-3 px-1 text-xs font-bold transition-all ${
                      formData.preferredTime === time
                        ? "bg-emerald-deep text-white shadow-xs"
                        : "border border-neutral-200 bg-white text-ink/75 hover:bg-neutral-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <span className="mt-1 block text-[11px] text-ink/50">
                Studio appointment slots
              </span>
            </div>
          </div>

          {/* Hair Type & Length (Clean 21st.dev Pills) */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
                Hair Texture
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {HAIR_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, hairType: type }))}
                    className={`rounded-xl py-2 px-2 text-xs font-semibold transition-all ${
                      formData.hairType === type
                        ? "bg-emerald-deep text-white shadow-xs"
                        : "border border-neutral-200 bg-white text-ink/75 hover:bg-neutral-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
                Hair Length
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {HAIR_LENGTHS.map((len) => (
                  <button
                    key={len}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, hairLength: len }))}
                    className={`rounded-xl py-2 px-2 text-xs font-semibold transition-all ${
                      formData.hairLength === len
                        ? "bg-emerald-deep text-white shadow-xs"
                        : "border border-neutral-200 bg-white text-ink/75 hover:bg-neutral-50"
                    }`}
                  >
                    {len}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preferred Style / Notes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1.5">
              Specific Style or Notes
            </label>
            <input
              type="text"
              name="preferredStyle"
              placeholder="e.g. Chunky twists, steam scalp focus, or bridal theme"
              value={formData.preferredStyle}
              onChange={handleInputChange}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-emerald-deep focus:outline-none focus:ring-1 focus:ring-emerald-deep transition-all"
            />
            <p className="mt-1 text-[11px] text-ink/50">
              📸 You can also send reference photos directly on WhatsApp after booking.
            </p>
          </div>

          {/* Paystack Sandbox Notice when Paystack mode is active */}
          {bookingMode === "paystack" && (
            <div className="rounded-2xl border border-emerald-deep/20 bg-nude/40 p-4 text-xs text-ink/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-emerald-deep">Paystack Sandbox Deposit</span>
                <span className="rounded-md bg-emerald-deep text-white px-2 py-0.5 font-bold">
                  GHS {depositAmount}.00
                </span>
              </div>
              <p className="text-ink/65 leading-relaxed">
                Test checkout supports simulated Mobile Money (MTN, Telecel) and card payments. This secures your reservation without needing real funds.
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            {bookingMode === "whatsapp" ? (
              <button
                type="submit"
                className="shimmer w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-deep py-4 text-sm font-bold text-white shadow-lg hover:bg-emerald-deep/90 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Reserve on WhatsApp</span>
                <span>→</span>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#1b4332] py-4 text-sm font-bold text-white shadow-lg hover:bg-[#163829] transition-all disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Connecting to Paystack Sandbox...</span>
                ) : (
                  <>
                    <span>Proceed with Paystack Sandbox (GHS {depositAmount}.00)</span>
                    <span>→</span>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
