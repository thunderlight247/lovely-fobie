import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppBookingForm } from "@/components/contact/whatsapp-booking-form";
import { BUSINESS, HOURS, SALON_POLICIES, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments | Lovely Fobie Glam & Health Consult",
  description:
    "Book an appointment for natural hair styling, bridal makeup, or PharmD skin consultation at Dave Junction, Ho, Ghana.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(BUSINESS.address);

  return (
    <div className="bg-[#fffaf7] pb-24">
      {/* Clean Minimalist Hero */}
      <section className="relative overflow-hidden bg-white/60 border-b border-neutral-200/60 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-deep mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>•</span>
            <span>Appointments</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-emerald-deep">
            Book an Appointment
          </h1>
          <p className="mt-3 text-sm sm:text-base text-ink/70 max-w-lg mx-auto">
            Experience therapeutic natural hair care, flawless artistry, and PharmD skin health consultations in Ho.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-6 relative z-10">
        <Suspense
          fallback={
            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-lg border border-neutral-200">
              <p className="text-sm font-medium text-emerald-deep animate-pulse">
                Loading Booking Form...
              </p>
            </div>
          }
        >
          <WhatsAppBookingForm />
        </Suspense>
      </section>

      {/* Studio Info & Salon Policy (Clean 21st.dev Style Bento Grid) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 mt-14 sm:mt-18">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Studio Hours & Visit */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-deep/10 text-emerald-deep text-sm font-bold">
                📍
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep">
                  Studio & Hours
                </h3>
                <p className="text-xs text-ink/60">Dave Junction, Ho, Volta Region</p>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-ink/80 border-t border-neutral-100 pt-3">
              <div className="flex justify-between py-1">
                <span className="font-medium">Monday – Wednesday</span>
                <span className="font-semibold text-emerald-deep">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between py-1 text-ink/50">
                <span>Thursday</span>
                <span className="font-semibold text-rose-gold">Closed</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Friday – Saturday</span>
                <span className="font-semibold text-emerald-deep">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between py-1 text-ink/50">
                <span>Sunday</span>
                <span className="font-semibold text-rose-gold">Closed</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5 pt-2 border-t border-neutral-100">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-deep px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-emerald-deep/90 transition-all"
              >
                <span>🗺️ Google Maps</span>
              </a>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-ink/80 hover:bg-neutral-50 transition-all"
              >
                <span>📞 {BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-emerald-deep hover:bg-[#25D366]/20 transition-all"
              >
                <span>💬 Front Desk Chat</span>
              </a>
            </div>
          </div>

          {/* Salon Policy Card */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-deep/10 text-emerald-deep text-sm font-bold">
                ⚠️
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep">
                  Salon Policy
                </h3>
                <p className="text-xs text-ink/60">Important guest guidelines</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-ink/75 border-t border-neutral-100 pt-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-deep font-bold mt-0.5">•</span>
                <span>Please arrive on time for your scheduled session.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-deep font-bold mt-0.5">•</span>
                <span>You can make a deposit before the service to secure your slot.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-deep font-bold mt-0.5">•</span>
                <span>Hair should be unbraided before coming unless unbraiding is booked.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-deep font-bold mt-0.5">•</span>
                <span>Late arrivals beyond 30 minutes may be rescheduled.</span>
              </li>
            </ul>

            <div className="mt-5 rounded-2xl bg-nude/60 p-3.5 text-xs text-ink/70 border border-neutral-100 flex items-center justify-between">
              <span className="font-medium">💵 Studio Balance Payment:</span>
              <span className="font-semibold text-emerald-deep">Cash-Only at Studio</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
