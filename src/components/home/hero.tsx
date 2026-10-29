"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { PILLARS, WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % PILLARS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" });
    }, copyRef);
    return () => ctx.revert();
  }, []);

  const pillar = PILLARS[index];

  return (
    <section className="relative isolate overflow-hidden">
      <AuroraBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div ref={copyRef}>
          <h1 data-hero className="font-serif text-5xl leading-tight text-emerald-deep md:text-6xl">
            Where Health Meets Glamour.
          </h1>
          <p data-hero className="mt-5 max-w-md text-lg text-ink/75">
            Science-backed hair, skin, and beauty solutions led by a Doctor of Pharmacy.
          </p>
          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer rounded-full bg-emerald-deep px-6 py-3 font-medium text-white"
            >
              Book on WhatsApp
            </a>
            <a href="#services" className="rounded-full border border-emerald-deep/30 px-6 py-3 font-medium">
              See services
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.04, rotate: 2 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              className={`absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br ${pillar.gradient} shadow-2xl`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pillar.images[0]}
                alt={pillar.title}
                className="h-full w-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 font-serif text-xl text-white">
                {pillar.title}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
