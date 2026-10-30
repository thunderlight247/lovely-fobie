import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  TREATMENTS,
  getTreatmentBySlug,
  getPillarById,
  WHATSAPP_NUMBER,
  Treatment,
} from "@/lib/site";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({
    category: t.category,
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: `${treatment.name} | Lovely Fobie Glam & Health Consult`,
    description: treatment.shortNote,
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const pillar = getPillarById(treatment.category);
  const relatedTreatments = TREATMENTS.filter(
    (t) => t.category === treatment.category && t.slug !== treatment.slug
  );

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Lovely Fobie Glam! I am interested in booking: ${treatment.name} (${treatment.duration}). Please let me know the next available slot.`
  )}`;

  return (
    <div className="bg-[#fffaf7] pb-24">
      {/* Top Breadcrumb Bar */}
      <nav className="border-b border-neutral-200/60 bg-white/60 py-4" aria-label="Breadcrumb">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-xs font-medium text-ink/60 sm:px-6">
          <Link href="/" className="hover:text-emerald-deep">Home</Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-emerald-deep">Services</Link>
          <span>/</span>
          <Link href={`/services/${treatment.category}`} className="hover:text-emerald-deep">
            {treatment.categoryTitle}
          </Link>
          <span>/</span>
          <span className="text-emerald-deep font-semibold">{treatment.name}</span>
        </div>
      </nav>

      {/* Main Treatment Hero Section (21st.dev Inspired Product/Service Detail Layout) */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: High-Res Image Display (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={treatment.image}
                alt={treatment.name}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-emerald-deep shadow-md backdrop-blur-md">
                  {treatment.categoryTitle}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  ⏱️ {treatment.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Treatment Details & Booking CTA (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-nude px-3 py-1 text-xs font-semibold text-emerald-deep mb-3">
                <span>✨</span> Specialty Treatment
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-emerald-deep">
                {treatment.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-ink/80 leading-relaxed">
                {treatment.description}
              </p>

              {/* Quick Specs Pill Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-y border-neutral-200/60 py-5">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-ink/50 font-semibold">
                    Duration
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-deep">
                    {treatment.duration}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-ink/50 font-semibold">
                    Pricing Guide
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-deep">
                    {treatment.priceGuide}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-ink/50 font-semibold">
                    Supervision
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-deep">
                    PharmD Guided
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(treatment.name)}`}
                  className="shimmer flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-deep px-6 py-4 text-sm font-bold text-white shadow-lg hover:bg-emerald-deep/90 transition-all hover:scale-[1.01] active:scale-[0.99] text-center"
                >
                  <span>Book This Treatment</span>
                  <span>→</span>
                </Link>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-4 text-sm font-bold text-emerald-deep hover:bg-[#25D366]/20 transition-all text-center"
                >
                  <span>Inquire on WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>

            {/* Suitable For Card */}
            <div className="mt-8 rounded-2xl bg-white p-5 border border-neutral-200/80 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-gold block mb-1">
                Recommended For:
              </span>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                {treatment.suitableFor}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits & Step-by-Step Procedure Grid */}
        <div className="mt-14 sm:mt-18 grid gap-8 md:grid-cols-2">
          {/* Benefits */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-emerald-deep mb-4 flex items-center gap-2">
              <span>🌿</span> Key Benefits & Results
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-ink/75">
              {treatment.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-deep/10 text-emerald-deep text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Steps / Procedure */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white/80 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-emerald-deep mb-4 flex items-center gap-2">
              <span>💆🏽‍♀️</span> What to Expect During Your Session
            </h3>
            <ol className="space-y-3.5 text-xs sm:text-sm text-ink/75">
              {treatment.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-emerald-deep text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <span className="font-medium text-ink/90">{step}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Related Treatments from same category */}
        {relatedTreatments.length > 0 && (
          <div className="mt-16 sm:mt-20 border-t border-neutral-200/60 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-gold">
                  Explore More Options
                </span>
                <h3 className="font-serif text-2xl font-bold text-emerald-deep mt-1">
                  Other {treatment.categoryTitle} Services
                </h3>
              </div>
              <Link
                href={`/services/${treatment.category}`}
                className="hidden sm:inline-flex text-xs font-bold text-emerald-deep hover:underline"
              >
                View Category Hub →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTreatments.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.category}/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {item.duration}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="font-serif text-lg font-bold text-emerald-deep group-hover:text-rose-gold transition-colors">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 text-xs text-ink/65 line-clamp-2">
                      {item.shortNote}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between text-xs font-semibold text-emerald-deep">
                      <span>View Details</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
