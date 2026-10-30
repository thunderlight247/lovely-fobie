import type { Metadata } from "next";
import Link from "next/link";
import { PILLARS, TREATMENTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Salon Services & Treatments | Lovely Fobie Glam & Health Consult",
  description:
    "Explore our complete service menu: Natural hair care, professional bridal & event makeup artistry, and clinical PharmD skincare consultations in Ho, Ghana.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#fffaf7] pb-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-white/70 border-b border-neutral-200/60 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-deep mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>•</span>
            <span>Services Menu</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-emerald-deep">
            Signature Services & Treatments
          </h1>
          <p className="mt-3 text-sm sm:text-base text-ink/70 max-w-xl mx-auto">
            Science-backed beauty solutions tailored to African hair textures and skin health, supervised by a Doctor of Pharmacy.
          </p>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 space-y-16">
        {PILLARS.map((pillar) => (
          <div key={pillar.id} id={pillar.id} className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-neutral-200/70">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-gold">
                  {pillar.subtitle}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep mt-1">
                  {pillar.title}
                </h2>
                <p className="text-xs sm:text-sm text-ink/70 mt-1 max-w-xl">
                  {pillar.blurb}
                </p>
              </div>
              <Link
                href={`/services/${pillar.id}`}
                className="shrink-0 text-xs font-bold text-emerald-deep hover:underline"
              >
                View Category Hub →
              </Link>
            </div>

            {/* Treatments in this pillar */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {pillar.treatments.map((treatment) => (
                <div
                  key={treatment.slug}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 shrink-0 overflow-hidden bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-emerald-deep shadow-xs">
                      {treatment.duration}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-emerald-deep group-hover:text-rose-gold transition-colors">
                        {treatment.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-ink/70 line-clamp-2 leading-relaxed">
                        {treatment.shortNote}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                      <span className="text-xs font-semibold text-ink/60">
                        {treatment.priceGuide}
                      </span>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/services/${pillar.id}/${treatment.slug}`}
                          className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-emerald-deep hover:bg-neutral-50 transition-colors"
                        >
                          Details →
                        </Link>
                        <Link
                          href={`/contact?service=${encodeURIComponent(treatment.name)}`}
                          className="rounded-xl bg-emerald-deep px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-deep/90 transition-colors"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
