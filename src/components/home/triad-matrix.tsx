"use client";

import Link from "next/link";
import { PILLARS } from "@/lib/site";

export function TriadMatrix() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200/70">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-nude px-3 py-1 text-xs font-semibold text-emerald-deep mb-3">
            <span>✨</span> Signature Specialties
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-emerald-deep">
            Three Core Disciplines. <br />
            <span className="italic font-normal text-[#8d4757]">Dedicated Sub-Pages & Details.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-ink/75 leading-relaxed">
            Click on any individual treatment below to inspect photos, step-by-step procedure details, and personalized recommendations.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-deep/90 transition-all text-center"
        >
          View Full Menu →
        </Link>
      </div>

      {/* 3 Pillars Clean Bento Grid */}
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            id={pillar.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md"
          >
            {/* Image Banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pillar.images[0]}
                alt={pillar.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-emerald-deep shadow-xs backdrop-blur-md">
                  {pillar.badge}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-gold">
                  {pillar.subtitle}
                </span>
                <h3 className="font-serif text-xl font-bold leading-tight">
                  {pillar.title}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                {pillar.blurb}
              </p>

              {/* Individual Treatments as Clickable Sub-Page Links (21st.dev Style Pill List) */}
              <div className="mt-6 flex-1 space-y-2 border-t border-neutral-100 pt-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-ink/50 mb-2">
                  Specialty Treatments (Click for Details)
                </div>
                {pillar.treatments.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/services/${pillar.id}/${treatment.slug}`}
                    className="group/item flex items-center justify-between rounded-2xl border border-neutral-150 bg-neutral-50/70 p-3 text-xs transition-all hover:border-emerald-deep/40 hover:bg-white hover:shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-deep/10 text-emerald-deep font-bold text-[11px] group-hover/item:bg-emerald-deep group-hover/item:text-white transition-colors">
                        →
                      </span>
                      <span className="font-semibold text-ink group-hover/item:text-emerald-deep transition-colors">
                        {treatment.name}
                      </span>
                    </div>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-emerald-deep border border-neutral-200/60 shadow-2xs">
                      {treatment.duration}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 flex items-center gap-2 pt-2 border-t border-neutral-100">
                <Link
                  href={`/services/${pillar.id}`}
                  className="flex-1 rounded-xl border border-neutral-200 bg-white py-2.5 text-center text-xs font-bold text-emerald-deep hover:bg-neutral-50 transition-colors"
                >
                  Explore Category →
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(pillar.title)}`}
                  className="rounded-xl bg-emerald-deep px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-deep/90 transition-colors"
                >
                  Book
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
