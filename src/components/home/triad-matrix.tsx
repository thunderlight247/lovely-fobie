"use client";

import { useState } from "react";
import Link from "next/link";
import { PILLARS, WHATSAPP_NUMBER } from "@/lib/site";

export function TriadMatrix() {
  // Track active image for each pillar (0 or 1)
  const [activeImage, setActiveImage] = useState<Record<string, number>>({
    hair: 0,
    makeup: 0,
    skin: 0,
  });

  const toggleImage = (id: string, idx: number) => {
    setActiveImage((prev) => ({ ...prev, [id]: idx }));
  };

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-rose-gold/20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-nude px-3.5 py-1 text-xs font-semibold text-emerald-deep mb-3">
            <span>✨</span> Curated Beauty & Health Menu
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-emerald-deep">
            Three Dedicated Specialties. <br />
            <span className="italic font-normal text-[#8d4757]">One Cohesive Front Desk.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-ink/75">
            Every appointment receives individual care in our private, calming studio in Ho. Select a service below to customize and book your time slot.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact#booking-form"
            className="inline-flex items-center justify-center rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-deep/90 transition-all text-center"
          >
            ✨ Open Booking Form
          </Link>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {PILLARS.map((p) => {
          const selectedImgIdx = activeImage[p.id] ?? 0;
          const currentImg = p.images[selectedImgIdx];
          const serviceQuery = encodeURIComponent(p.title);
          const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hello Lovely Fobie Glam! I would like to inquire about booking: ${p.title}.`
          )}`;

          return (
            <div
              key={p.id}
              id={p.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-rose-gold/30 bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Banner Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentImg}
                  alt={`${p.title} at Lovely Fobie Glam`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Pillar Badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-emerald-deep shadow-sm backdrop-blur-md">
                    {p.badge}
                  </span>
                </div>

                {/* Image Switcher Pills (Thumbnail toggle) */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 backdrop-blur-md">
                  <span className="text-[10px] text-white/80 font-medium mr-1">Photo</span>
                  {p.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleImage(p.id, idx)}
                      aria-label={`View photo ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        selectedImgIdx === idx ? "w-5 bg-white" : "w-2.5 bg-white/40 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-gold">
                    {p.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-emerald-deep leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-ink/70 leading-relaxed">
                    {p.blurb}
                  </p>
                </div>

                {/* Services List with Duration & Details */}
                <div className="mt-6 border-t border-rose-gold/20 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3">
                    Available Treatments & Packages
                  </h4>
                  <ul className="space-y-3.5">
                    {p.services.map((s) => (
                      <li key={s.name} className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-deep font-bold mt-0.5">•</span>
                          <div>
                            <span className="font-semibold text-ink/90 block leading-tight">
                              {s.name}
                            </span>
                            <span className="text-xs text-ink/60">{s.note}</span>
                          </div>
                        </div>
                        {s.duration && (
                          <span className="shrink-0 rounded-md bg-nude px-2 py-0.5 text-[11px] font-medium text-emerald-deep">
                            {s.duration}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Note */}
                <div className="mt-6 rounded-xl bg-nude/60 p-3 text-xs text-ink/75 border border-rose-gold/15">
                  <span className="font-semibold text-emerald-deep">Pricing: </span>
                  {p.priceNote}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-2 pt-2">
                  <Link
                    href={`/contact?service=${serviceQuery}#booking-form`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-deep py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-deep/90 transition-all active:scale-[0.98]"
                  >
                    <span>✨ Book This Service</span>
                  </Link>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-deep/20 bg-white py-2.5 text-xs font-semibold text-emerald-deep hover:bg-nude/40 transition-colors"
                  >
                    <span>Ask Question on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
