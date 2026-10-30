import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PILLARS, getPillarById, getTreatmentsByCategory, PillarId } from "@/lib/site";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { category: "hair" },
    { category: "makeup" },
    { category: "skin" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const pillar = getPillarById(category as PillarId);
  if (!pillar) return { title: "Category Not Found" };

  return {
    title: `${pillar.title} | Lovely Fobie Glam & Health Consult`,
    description: pillar.blurb,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const pillar = getPillarById(category as PillarId);

  if (!pillar) {
    notFound();
  }

  const treatments = getTreatmentsByCategory(category as PillarId);

  return (
    <div className="bg-[#fffaf7] pb-24">
      {/* Breadcrumb Navigation */}
      <nav className="border-b border-neutral-200/60 bg-white/60 py-4" aria-label="Breadcrumb">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-xs font-medium text-ink/60 sm:px-6">
          <Link href="/" className="hover:text-emerald-deep">Home</Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-emerald-deep">Services</Link>
          <span>/</span>
          <span className="text-emerald-deep font-semibold">{pillar.title}</span>
        </div>
      </nav>

      {/* Category Hero Banner */}
      <section className="relative overflow-hidden bg-white/80 border-b border-neutral-200/60 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-nude px-3 py-1 text-xs font-semibold text-emerald-deep mb-3">
              <span>{pillar.id === "hair" ? "💇" : pillar.id === "makeup" ? "💄" : "🌿"}</span>
              {pillar.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-emerald-deep leading-tight">
              {pillar.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-ink/75 leading-relaxed">
              {pillar.blurb}
            </p>
            <div className="mt-5 flex items-center gap-4 text-xs font-medium text-ink/60">
              <span>{treatments.length} Dedicated Specialty Treatments</span>
              <span>•</span>
              <span>Dave Junction, Ho</span>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid (Clean 21st.dev Card Collection) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-emerald-deep">
              Available Treatments & Packages
            </h2>
            <p className="text-xs sm:text-sm text-ink/65 mt-0.5">
              Click any treatment below to inspect photos, procedure steps, and full details.
            </p>
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-full bg-emerald-deep px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-deep/90 transition-all"
          >
            Book Appointment
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {treatments.map((treatment) => (
            <div
              key={treatment.slug}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-xs hover:shadow-lg transition-all"
            >
              {/* Image thumbnail (sm:w-2/5) */}
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

              {/* Details & Action */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-emerald-deep group-hover:text-rose-gold transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink/70 line-clamp-2 leading-relaxed">
                    {treatment.shortNote}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {treatment.benefits.slice(0, 2).map((b, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-neutral-100 px-2 py-0.5 text-[11px] text-ink/75"
                      >
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                  <span className="text-xs font-semibold text-ink/60">
                    {treatment.priceGuide}
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${category}/${treatment.slug}`}
                      className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-emerald-deep hover:bg-neutral-50 transition-colors"
                    >
                      View Details →
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
      </section>
    </div>
  );
}
