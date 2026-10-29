import { Hero } from "@/components/home/hero";
import { TriadMatrix } from "@/components/home/triad-matrix";
import { SalonPolicySection } from "@/components/home/salon-policy-section";
import Link from "next/link";
import { WHATSAPP_URL, BUSINESS } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TriadMatrix />
      <SalonPolicySection />

      {/* Floating CTA Banner */}
      <section className="bg-emerald-deep py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d9a99a_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-rose-gold border border-white/15 mb-4">
            ✨ Reserve Your Personal Beauty Experience
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Ready for your hair, skin, or glam transformation?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
            Fill out our quick WhatsApp booking form or contact our front desk at Dave Junction, Ho. Open Monday, Tuesday, Wednesday, Friday, and Saturday.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact#booking-form"
              className="shimmer w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-bold text-emerald-deep shadow-xl hover:bg-nude transition-all text-center"
            >
              ✨ Open WhatsApp Booking Form
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all text-center"
            >
              Chat With Front Desk
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span>📍 Dave Junction, Ho, Ghana</span>
            <span>•</span>
            <span>📞 {BUSINESS.phoneDisplay}</span>
            <span>•</span>
            <span>🕒 Booking Times: 9am • 12pm • 3pm</span>
          </div>
        </div>
      </section>
    </>
  );
}
