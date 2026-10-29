"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PILLARS, BUSINESS, WHATSAPP_URL } from "@/lib/site";

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-gold/20 bg-white/85 backdrop-blur-xl transition-all">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-deep text-white font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
            L
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-emerald-deep leading-tight">
              {BUSINESS.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-ink/60 font-medium">
              Health & Glam Consult
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 text-sm font-medium text-ink/80 md:flex">
          <li>
            <Link
              href="/"
              className={`transition-colors hover:text-emerald-deep ${
                pathname === "/" ? "text-emerald-deep font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 py-2 transition-colors hover:text-emerald-deep"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full w-84 rounded-2xl border border-rose-gold/20 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="mb-2 px-3 pt-1 text-[11px] font-semibold uppercase tracking-wider text-ink/50">
                    Our Core Pillars
                  </div>
                  {PILLARS.map((p) => (
                    <Link
                      key={p.id}
                      href={`/#${p.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-nude/60"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-deep/10 text-emerald-deep text-xs font-bold group-hover:bg-emerald-deep group-hover:text-white transition-colors">
                        {p.id === "hair" ? "💇" : p.id === "makeup" ? "💄" : "🌿"}
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-emerald-deep group-hover:text-ink">
                          {p.title}
                        </span>
                        <span className="block text-xs text-ink/65 line-clamp-1">{p.blurb}</span>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-ink/10 pt-2 px-1">
                    <Link
                      href="/contact#booking-form"
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-lg bg-nude px-3 py-2 text-center text-xs font-semibold text-emerald-deep hover:bg-rose-gold/30 transition-colors"
                    >
                      ✨ Open WhatsApp Booking Form →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              href="/#policy"
              className="transition-colors hover:text-emerald-deep"
            >
              Salon Policy
            </Link>
          </li>
          <li>
            <Link
              href="/#hours"
              className="transition-colors hover:text-emerald-deep"
            >
              Hours & Location
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`rounded-full px-3.5 py-1.5 transition-colors ${
                pathname === "/contact"
                  ? "bg-emerald-deep text-white font-medium"
                  : "text-emerald-deep font-semibold hover:bg-emerald-deep/10"
              }`}
            >
              Contact & Book
            </Link>
          </li>
        </ul>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex shimmer rounded-full bg-emerald-deep px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-deep/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-gold/30 bg-nude/60 text-emerald-deep transition-colors md:hidden hover:bg-nude focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-b border-rose-gold/20 bg-white/95 backdrop-blur-2xl px-5 pb-6 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-1 py-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  pathname === "/" ? "bg-nude text-emerald-deep font-semibold" : "text-ink hover:bg-nude/50"
                }`}
              >
                🏠 Home
              </Link>

              <div className="rounded-2xl bg-nude/40 p-3 my-1 border border-rose-gold/15">
                <div className="px-2 pb-2 text-[11px] font-bold uppercase tracking-wider text-emerald-deep/70">
                  Salon Services
                </div>
                <div className="space-y-1">
                  {PILLARS.map((p) => (
                    <Link
                      key={p.id}
                      href={`/#${p.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-ink hover:bg-white"
                    >
                      <span className="text-base">{p.id === "hair" ? "💇" : p.id === "makeup" ? "💄" : "🌿"}</span>
                      <span>{p.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "bg-emerald-deep text-white"
                    : "bg-emerald-deep/10 text-emerald-deep hover:bg-emerald-deep/20"
                }`}
              >
                <span>✨ Contact & Book Form</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">WhatsApp Ready</span>
              </Link>

              <Link
                href="/#policy"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-nude/50"
              >
                ⚠️ Salon Policy
              </Link>

              <Link
                href="/#hours"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-nude/50"
              >
                🕒 Opening Hours & Directions
              </Link>
            </div>

            {/* Quick Action Buttons in Mobile Menu */}
            <div className="mt-4 flex flex-col gap-2.5 border-t border-ink/10 pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-emerald-deep py-3 font-semibold text-white shadow-md active:scale-[0.98]"
              >
                ✨ Book Appointment Form
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white shadow-sm active:scale-[0.98]"
              >
                <span>Chat Front Desk on WhatsApp</span>
              </a>
              <div className="text-center text-xs text-ink/60 pt-1">
                Mon, Tue, Wed, Fri, Sat • 9am – 8pm • Ho, Ghana
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
