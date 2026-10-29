"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PILLARS, WHATSAPP_URL } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3" aria-label="Main">
        <Link href="/" className="font-serif text-lg font-semibold text-emerald-deep">
          Lovely Fobie Glam
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="py-2" aria-expanded={open} onFocus={() => setOpen(true)}>
              Services
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full w-80 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur-xl"
                >
                  {PILLARS.map((p) => (
                    <a key={p.id} href={`#${p.id}`} className="block rounded-xl px-3 py-2 hover:bg-nude">
                      <span className="block font-medium">{p.title}</span>
                      <span className="text-xs text-ink/60">{p.blurb}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer rounded-full bg-emerald-deep px-5 py-2 text-sm font-medium text-white"
        >
          Book on WhatsApp
        </a>
      </nav>
    </header>
  );
}
