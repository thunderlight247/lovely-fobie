"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { PILLARS, WHATSAPP_URL } from "@/lib/site";

export function TriadMatrix() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-card]", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="mx-auto max-w-7xl px-5 py-20">
      <h2 className="max-w-xl font-serif text-4xl text-emerald-deep">Three services, one front desk</h2>
      <p className="mt-3 max-w-lg text-ink/70">Pick a service below, then message us on WhatsApp to book.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.id} id={p.id} data-card>
            <SpotlightCard className={`h-full bg-gradient-to-br ${p.gradient} text-white`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.images[1]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="relative z-20 flex h-full flex-col p-7">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-white/85">{p.blurb}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.services.map((s) => (
                    <li key={s.name} className="border-t border-white/25 pt-3">
                      <span className="block font-medium">{s.name}</span>
                      <span className="text-white/75">{s.note}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-xs text-white/80">{p.priceNote}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-emerald-deep"
                >
                  Ask about this service
                </a>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}
