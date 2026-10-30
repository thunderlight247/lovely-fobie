"use client";

import Link from "next/link";
import { BOOKING_TIMES, HOURS, WHATSAPP_URL } from "@/lib/site";

export function SalonPolicySection() {
  return (
    <section id="policy" className="bg-white/60 border-y border-neutral-200/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-nude px-3.5 py-1 text-xs font-semibold text-emerald-deep">
            <span>⚠️</span> Guest Policy & Schedule
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-tight text-emerald-deep">
            Studio Policies & Hours
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-ink/70">
            To provide every client with undivided attention and pharmaceutical-grade care, we operate by scheduled reservation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 items-start">
          {/* Operating Schedule (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-neutral-200/80 bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div>
                <h3 className="font-serif text-xl font-bold text-emerald-deep">
                  Operating Hours
                </h3>
                <p className="text-xs text-ink/60 mt-0.5">Ho, Volta Region</p>
              </div>
              <span className="rounded-full bg-emerald-deep/10 px-3 py-1 text-xs font-bold text-emerald-deep">
                5 Days / Week
              </span>
            </div>

            {/* Days Table */}
            <div className="mt-5 space-y-2 text-xs sm:text-sm">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                    h.closed ? "bg-neutral-50 text-ink/45" : "bg-neutral-50/70 text-ink/85"
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
                <span className="text-lg">⏰</span>
                <div>
                  <h4 className="font-serif text-sm font-bold">Standard Daily Booking Slots</h4>
                  <p className="text-[11px] text-white/70">Three dedicated appointments each working day</p>
                </div>
              </div>

              <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                {BOOKING_TIMES.map((slot) => (
                  <div
                    key={slot}
                    className="rounded-xl bg-white/10 p-2 border border-white/10"
                  >
                    <span className="block text-[10px] uppercase tracking-wider text-rose-gold font-medium">Slot</span>
                    <span className="font-serif text-sm font-bold text-white">{slot}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 text-center">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-deep py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-emerald-deep/90 transition-colors"
              >
                Reserve A Time Slot →
              </Link>
            </div>
          </div>

          {/* Salon Policies (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-neutral-200/80 bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <div className="pb-4 border-b border-neutral-100">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-gold">
                Guest Guidelines
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-emerald-deep">
                Official Salon Policy
              </h3>
              <p className="mt-1 text-xs text-ink/65">
                Smooth scheduling guidelines for the best studio experience.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200/70 bg-neutral-50/50 p-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-deep text-white text-xs font-bold">
                    ⏱️
                  </div>
                  <h4 className="font-bold text-emerald-deep text-xs sm:text-sm">Punctuality First</h4>
                </div>
                <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                  Please come on time. Arriving promptly guarantees the full dedicated duration for your treatment.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/70 bg-neutral-50/50 p-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-deep text-white text-xs font-bold">
                    💵
                  </div>
                  <h4 className="font-bold text-emerald-deep text-xs sm:text-sm">Deposit & Payments</h4>
                </div>
                <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                  You can make a deposit before the service to secure your booking. Balance payments are cash-only at the studio.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/70 bg-neutral-50/50 p-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-deep text-white text-xs font-bold">
                    💇🏽‍♀️
                  </div>
                  <h4 className="font-bold text-emerald-deep text-xs sm:text-sm">Hair Preparation</h4>
                </div>
                <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                  Hair should be unbraided before coming unless unbraiding is specifically booked as part of the service.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/70 bg-neutral-50/50 p-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-deep text-white text-xs font-bold">
                    ⚠️
                  </div>
                  <h4 className="font-bold text-emerald-deep text-xs sm:text-sm">30-Minute Grace Limit</h4>
                </div>
                <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                  Late arrivals beyond 30 minutes may be rescheduled to ensure subsequent appointments begin on time.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-emerald-deep/5 border border-emerald-deep/15 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-ink/75">
                <span className="font-bold text-emerald-deep block">Thank you for booking with us 💕</span>
                We look forward to creating your healthy hair and skin results.
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-xl bg-emerald-deep px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-deep/90 transition-colors"
              >
                Front Desk Chat →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
