import Link from "next/link";
import { BUSINESS, HOURS, BOOKING_TIMES, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  const mapQuery = encodeURIComponent(BUSINESS.address);

  return (
    <footer id="contact" className="bg-emerald-deep text-white border-t border-rose-gold/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-deep font-serif text-lg font-bold">
                L
              </span>
              <p className="font-serif text-xl font-bold">{BUSINESS.name}</p>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
              In partnership with {BUSINESS.partner}. Providing science-backed hair, skin, and beauty solutions led by a Doctor of Pharmacy.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-rose-gold hover:bg-white/20 transition-colors border border-white/15"
              >
                <span>✨ WhatsApp Booking Form →</span>
              </Link>
            </div>
          </div>

          {/* Visit & Contact */}
          <address className="text-sm not-italic">
            <p className="font-serif font-bold text-base text-rose-gold">Visit Us</p>
            <p className="mt-2.5 text-white/80">{BUSINESS.address}</p>
            <a
              className="mt-3 block font-semibold text-white hover:text-rose-gold transition-colors"
              href={`tel:${BUSINESS.phoneTel}`}
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              className="mt-2 block text-xs text-[#25D366] hover:underline"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp: +233 24 056 5892
            </a>
            <p className="mt-3 inline-block rounded-lg bg-white/10 px-2.5 py-1 text-xs text-white/80">
              {BUSINESS.payment}
            </p>
          </address>

          {/* Operating Hours */}
          <div id="hours" className="text-sm">
            <p className="font-serif font-bold text-base text-rose-gold">Opening Hours</p>
            <dl className="mt-2.5 space-y-1.5 text-xs sm:text-sm">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between gap-3 py-0.5 border-b border-white/5">
                  <dt className="text-white/80">{h.day}</dt>
                  <dd className={h.closed ? "font-semibold text-rose-gold" : "text-white"}>
                    {h.hours}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-xl bg-white/10 p-2.5 text-xs">
              <span className="font-bold text-rose-gold block mb-1">Booking Slots:</span>
              <span className="text-white/85">{BOOKING_TIMES.join(" • ")}</span>
            </div>
          </div>

          {/* Directions & Maps */}
          <div>
            <p className="font-serif font-bold text-base text-rose-gold mb-2.5">Find Studio</p>
            <p className="text-xs text-white/70 mb-3">
              Dave Junction, Ho, Volta Region. Easy access and secure parking available.
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="grid min-h-28 place-items-center rounded-2xl border border-white/20 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0_8px,transparent_8px_16px)] text-sm transition-transform hover:scale-[1.02] p-4 text-center"
            >
              <span className="rounded-full bg-white px-4 py-2 font-semibold text-xs text-emerald-deep shadow-md">
                🗺️ Open in Google Maps
              </span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & quick links */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {BUSINESS.fullName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/#policy" className="hover:text-white transition-colors">Salon Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact & Book</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
