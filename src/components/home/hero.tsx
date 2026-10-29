"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { PILLARS, WHATSAPP_URL, BOOKING_TIMES } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % PILLARS.length), 5000);
    return () => clearInterval(t);
  }, [isPaused]);

  const pillar = PILLARS[index];

  return (
    <section className="relative isolate overflow-hidden">
      <AuroraBackground />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:gap-12 md:py-24">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:col-span-7"
        >
          {/* PharmD Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/40 bg-white/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-deep shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-semibold">PharmD Led</span>
            <span className="text-ink/40">•</span>
            <span>Doctor of Pharmacy Supervised Beauty Sanctuary</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-emerald-deep leading-[1.12]">
            Where Health Meets <br />
            <span className="italic font-normal text-[#8d4757]">Timeless Glamour.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/80 leading-relaxed">
            Personalized natural hair care, bridal & soft glam artistry, and clinical skincare consultations
            at Dave Junction, Ho, Ghana. Crafted with pharmaceutical precision and gentle beauty rituals.
          </p>

          {/* Booking Slots Pill Notice */}
          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-2xl bg-nude/80 border border-rose-gold/30 p-3 text-xs sm:text-sm text-ink/80 shadow-xs">
            <span className="font-semibold text-emerald-deep flex items-center gap-1">
              <span>⏰</span> Daily Booking Times:
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {BOOKING_TIMES.map((time) => (
                <span
                  key={time}
                  className="rounded-lg bg-white px-2.5 py-0.5 font-medium text-emerald-deep shadow-xs border border-rose-gold/20"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href="/contact#booking-form"
              className="shimmer flex items-center justify-center gap-2 rounded-full bg-emerald-deep px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-emerald-deep/90 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <span>✨ Book Hair & Glam</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-emerald-deep/30 bg-white/70 px-6 py-3.5 text-sm sm:text-base font-medium text-emerald-deep shadow-xs hover:bg-white hover:border-emerald-deep transition-all text-center"
            >
              <span>Chat Front Desk</span>
              <span className="text-emerald-deep">→</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-rose-gold/20 pt-6">
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-emerald-deep">PharmD</p>
              <p className="text-xs text-ink/65">Skin Health Expert</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-emerald-deep">5 Days/Wk</p>
              <p className="text-xs text-ink/65">Mon-Wed, Fri-Sat</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-emerald-deep">3 Slots</p>
              <p className="text-xs text-ink/65">9am, 12pm & 3pm</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Pillar Showcase Card */}
        <div
          className="md:col-span-5 relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Pillar Selector Tabs */}
          <div className="mb-3 flex items-center justify-between gap-1 rounded-2xl bg-white/80 p-1.5 shadow-sm border border-rose-gold/20 backdrop-blur-md">
            {PILLARS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                className={`flex-1 rounded-xl py-2 px-2 text-xs font-semibold transition-all ${
                  index === i
                    ? "bg-emerald-deep text-white shadow-sm"
                    : "text-ink/70 hover:text-ink hover:bg-nude/60"
                }`}
              >
                {p.id === "hair" ? "💇 Hair" : p.id === "makeup" ? "💄 Makeup" : "🌿 Skin"}
              </button>
            ))}
          </div>

          {/* Visual Showcase Card */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl border-2 border-white/60">
            <AnimatePresence mode="wait">
              <motion.figure
                key={pillar.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full bg-neutral-900"
              >
                {/* Real High-Resolution Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pillar.images[0]}
                  alt={pillar.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Aesthetic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-emerald-deep shadow-md">
                    {pillar.badge}
                  </span>
                </div>

                {/* Bottom Details Caption */}
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-gold">
                    {pillar.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold leading-tight text-white drop-shadow-sm">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/85 line-clamp-2">
                    {pillar.blurb}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-xs text-white/75">{pillar.services.length} specialty services</span>
                    <Link
                      href={`/#${pillar.id}`}
                      className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-emerald-deep hover:bg-white transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Carousel Progress Indicators */}
          <div className="mt-3 flex justify-center gap-2">
            {PILLARS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`View slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === i ? "w-8 bg-emerald-deep" : "w-2 bg-emerald-deep/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
