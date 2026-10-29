import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppBookingForm } from "@/components/contact/whatsapp-booking-form";
import { BUSINESS, HOURS, BOOKING_TIMES, WHATSAPP_URL, SALON_POLICIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Hair Appointment Booking | Lovely Fobie Glam & Health Consult",
  description:
    "Book your natural hair styling, bridal makeup, or PharmD skin health consultation at Dave Junction, Ho, Ghana. Operating Mon, Tue, Wed, Fri, Sat 9am-8pm.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(BUSINESS.address);

  return (
    <div className="bg-[#fffaf7] pb-24">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-emerald-deep text-white py-14 sm:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d9a99a_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            {/* Top Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-gold uppercase tracking-wider mb-3">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Contact & Appointments</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
              Connect With Front Desk & <br />
              <span className="italic text-rose-gold">Secure Your Appointment.</span>
            </h1>

            {/* Official Automated Greeting Quote */}
            <div className="mt-5 rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/15 backdrop-blur-md">
              <p className="font-serif text-base sm:text-lg text-white font-medium italic">
                &ldquo;Thank you for contacting Lovely Fobie Glam and Health Consult! Please let us know how we can help you.&rdquo;
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/80">
                Our working days are <strong className="text-white">Monday, Tuesday, Wednesday, Friday and Saturday</strong>. Time: <strong className="text-white">9am to 8pm</strong>. Booking times are <strong className="text-white">9am, 12pm and 3pm</strong>.
              </p>
            </div>

            {/* Schedule Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white">
                🗓️ 5 Working Days / Wk
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white">
                ⏰ Slots: 9am • 12pm • 3pm
              </span>
              <span className="rounded-full bg-[#25D366]/20 px-3 py-1 font-semibold text-emerald-100 border border-[#25D366]/40">
                💬 WhatsApp Instant Front Desk
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white">
                📍 Dave Junction, Ho
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form Section */}
      <section id="booking-form" className="mx-auto max-w-7xl px-4 sm:px-6 -mt-8 relative z-20">
        <Suspense
          fallback={
            <div className="rounded-3xl bg-white p-12 text-center shadow-xl border border-rose-gold/20">
              <p className="text-sm font-medium text-emerald-deep animate-pulse">
                Loading WhatsApp Booking Form...
              </p>
            </div>
          }
        >
          <WhatsAppBookingForm />
        </Suspense>
      </section>

      {/* Salon Policies & Studio Details Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 sm:mt-20">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Official Salon Policy Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-rose-gold/30 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">⚠️</span>
              <h2 className="font-serif text-2xl font-bold text-emerald-deep">
                Official Salon Policy
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink/70">
              Please review our guest guidelines before visiting our Dave Junction studio:
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3 rounded-2xl bg-nude/40 p-3.5 border border-rose-gold/15">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white text-xs font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-sm text-emerald-deep">Please come on time</h3>
                  <p className="text-xs text-ink/70 mt-0.5">
                    Arriving promptly allows us to give your hair and skin our full, undivided attention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-nude/40 p-3.5 border border-rose-gold/15">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white text-xs font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-sm text-emerald-deep">
                    You can make a deposit before the service
                  </h3>
                  <p className="text-xs text-ink/70 mt-0.5">
                    Secures your preferred date and time slot. Note that balance payments are cash-only at the facility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-nude/40 p-3.5 border border-rose-gold/15">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white text-xs font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-sm text-emerald-deep">
                    Hair should be unbraided before coming
                  </h3>
                  <p className="text-xs text-ink/70 mt-0.5">
                    Unless hair is very tangled and unbraiding/detangling is booked as part of the service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-nude/40 p-3.5 border border-rose-gold/15">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white text-xs font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-bold text-sm text-emerald-deep">
                    Late arrivals beyond 30 minutes may be rescheduled
                  </h3>
                  <p className="text-xs text-ink/70 mt-0.5">
                    To maintain our schedule integrity for the next scheduled appointments.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-rose-gold/20 p-4 text-center">
              <p className="font-serif font-bold text-emerald-deep text-base">
                Thank you for booking with us 💕
              </p>
              <p className="text-xs text-ink/70 mt-0.5">
                Lovely Fobie Glam & Health Consult
              </p>
            </div>
          </div>

          {/* Quick Contact & Map Guide (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="rounded-3xl border border-rose-gold/30 bg-white p-6 sm:p-7 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-emerald-deep mb-4">
                Front Desk Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#25D366]/10 p-3.5 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white font-bold">
                    💬
                  </div>
                  <div>
                    <span className="block font-bold text-emerald-deep">WhatsApp Direct</span>
                    <span className="text-xs text-ink/70">+233 24 056 5892 (Instant Response)</span>
                  </div>
                </a>

                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex items-center gap-3 rounded-2xl bg-nude/50 p-3.5 border border-rose-gold/20 hover:bg-nude transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold">
                    📞
                  </div>
                  <div>
                    <span className="block font-bold text-emerald-deep">Phone Call</span>
                    <span className="text-xs text-ink/70">{BUSINESS.phoneDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-2xl bg-nude/50 p-3.5 border border-rose-gold/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold">
                    📍
                  </div>
                  <div>
                    <span className="block font-bold text-emerald-deep">Physical Location</span>
                    <span className="text-xs text-ink/70">{BUSINESS.address}</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50 p-3 text-xs text-amber-950 border border-amber-200">
                  <span className="font-bold">💵 Payment Notice:</span> {BUSINESS.payment}
                </div>
              </div>
            </div>

            {/* Location & Map Card */}
            <div className="rounded-3xl border border-rose-gold/30 bg-white p-6 shadow-xl">
              <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">
                Directions to Studio
              </h3>
              <p className="text-xs text-ink/70 mb-4">
                Conveniently located at Dave Junction in Ho, Volta Region.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-deep py-3 text-sm font-semibold text-white hover:bg-emerald-deep/90 transition-colors shadow-sm"
              >
                <span>🗺️ Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
