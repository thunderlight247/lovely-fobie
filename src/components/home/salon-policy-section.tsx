"use client";

import Link from "next/link";
import { BOOKING_TIMES, HOURS, SALON_POLICIES, BUSINESS, WHATSAPP_URL } from "@/lib/site";

export function SalonPolicySection() {
  return (
    <section id="policy" className="bg-nude/40 border-y border-rose-gold/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-emerald-deep shadow-xs border border-rose-gold/30">
            <span>⚠️</span> Essential Guest Guidelines
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight text-emerald-deep">
            Salon Policy & Booking Schedule
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-ink/75">
            To provide every client with undivided attention and pharmaceutical-grade beauty care, we operate strictly by appointment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Working Days & Booking Slots (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-rose-gold/30 bg-white p-6 sm:p-8 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-rose-gold/20">
              <div>
                <h3 className="font-serif text-xl font-bold text-emerald-deep">
                  Operating Schedule
                </h3>
                <p className="text-xs text-ink/65 mt-0.5">Studio opening & closing hours</p>
              </div>
              <span className="rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-bold text-emerald-deep">
                Ho, Volta Region
              </span>
            </div>

            {/* Days Table */}
            <div className="mt-5 space-y-2.5 text-sm">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                    h.closed ? "bg-red-50/50 text-ink/50" : "bg-nude/30 text-ink/90"
                  }`}
                >
                  <span className="font-medium">{h.day}</span>
                  <span
                    className={`font-semibold text-xs ${
                      h.closed ? "text-rose-gold uppercase tracking-wider" : "text-emerald-deep"
                    }`}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Daily Booking Slots */}
            <div className="mt-6 rounded-2xl bg-emerald-deep text-white p-5">
              <div className="flex items-center gap-2">
                <span className="text-xl">⏰</span>
                <div>
                  <h4 className="font-serif text-base font-bold">Standard Daily Booking Slots</h4>
                  <p className="text-xs text-white/75">Three curated appointment windows each working day</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {BOOKING_TIMES.map((slot) => (
                  <div
                    key={slot}
                    className="rounded-xl bg-white/15 p-2.5 backdrop-blur-xs border border-white/20"
                  >
                    <span className="block text-xs uppercase tracking-wider text-rose-gold font-medium">Slot</span>
                    <span className="font-serif text-base font-bold text-white">{slot}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/contact#booking-form"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-deep py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-deep/90 transition-colors"
              >
                ✨ Reserve A Time Slot
              </Link>
            </div>
          </div>

          {/* Salon Policies (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-rose-gold/30 bg-white p-6 sm:p-8 shadow-lg">
            <div className="pb-4 border-b border-rose-gold/20">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-gold">
                Please Read Before Booking
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-emerald-deep">
                Official Salon Guidelines
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-ink/70">
                These policies ensure smooth scheduling and respect for both our specialists and clients.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Policy Item 1 */}
              <div className="rounded-2xl border border-rose-gold/20 bg-nude/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold text-sm">
                    ⏱️
                  </div>
                  <h4 className="font-bold text-emerald-deep text-sm">Punctuality First</h4>
                </div>
                <p className="mt-2 text-xs text-ink/75 leading-relaxed">
                  Please come on time for your appointment. Arriving promptly guarantees the full dedicated duration for your treatment.
                </p>
              </div>

              {/* Policy Item 2 */}
              <div className="rounded-2xl border border-rose-gold/20 bg-nude/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold text-sm">
                    💵
                  </div>
                  <h4 className="font-bold text-emerald-deep text-sm">Deposit & Payments</h4>
                </div>
                <p className="mt-2 text-xs text-ink/75 leading-relaxed">
                  You can make a deposit before the service to secure your slot. We are a cash-only facility for balance payments at the studio.
                </p>
              </div>

              {/* Policy Item 3 */}
              <div className="rounded-2xl border border-rose-gold/20 bg-nude/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold text-sm">
                    💇🏽‍♀️
                  </div>
                  <h4 className="font-bold text-emerald-deep text-sm">Hair Preparation</h4>
                </div>
                <p className="mt-2 text-xs text-ink/75 leading-relaxed">
                  Hair should be unbraided before coming unless very tangled and must be included in the service detangling time.
                </p>
              </div>

              {/* Policy Item 4 */}
              <div className="rounded-2xl border border-rose-gold/20 bg-nude/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-white font-bold text-sm">
                    ⚠️
                  </div>
                  <h4 className="font-bold text-emerald-deep text-sm">30-Minute Grace Limit</h4>
                </div>
                <p className="mt-2 text-xs text-ink/75 leading-relaxed">
                  Late arrivals beyond 30 minutes may be rescheduled to ensure following clients receive their full booked session.
                </p>
              </div>
            </div>

            {/* Note Box */}
            <div className="mt-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">💕</div>
                <div className="text-xs sm:text-sm text-ink/80">
                  <span className="font-bold text-emerald-deep block">Thank you for booking with us!</span>
                  We look forward to creating your dream healthy hair, glow, or makeup experience.
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
              >
                Front Desk WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
