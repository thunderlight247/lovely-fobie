import { BUSINESS, HOURS } from "@/lib/site";

export function Footer() {
  const mapQuery = encodeURIComponent(BUSINESS.address);
  return (
    <footer id="contact" className="bg-emerald-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-xl">{BUSINESS.name}</p>
          <p className="mt-2 text-sm text-white/70">In partnership with {BUSINESS.partner}.</p>
        </div>

        <address className="text-sm not-italic">
          <p className="font-medium">Visit us</p>
          <p className="mt-2 text-white/80">{BUSINESS.address}</p>
          <a className="mt-3 block underline" href={`tel:${BUSINESS.phoneTel}`}>
            {BUSINESS.phoneDisplay}
          </a>
          <p className="mt-3 rounded-lg bg-white/10 p-2 text-xs">{BUSINESS.payment}</p>
        </address>

        <div id="hours" className="text-sm">
          <p className="font-medium">Opening hours</p>
          <dl className="mt-2 space-y-1">
            {HOURS.map((h) => (
              <div key={h.day} className="flex justify-between gap-3">
                <dt className="text-white/80">{h.day}</dt>
                <dd className={h.closed ? "text-rose-gold" : ""}>{h.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="grid min-h-40 place-items-center rounded-2xl border border-white/20 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0_8px,transparent_8px_16px)] text-sm"
        >
          <span className="rounded-full bg-white px-4 py-2 text-emerald-deep">Open in Google Maps</span>
        </a>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {BUSINESS.fullName}
      </p>
    </footer>
  );
}
