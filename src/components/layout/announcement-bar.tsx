const MESSAGE =
  "🔒 Verified PharmD Led Consultations | 💵 Cash-Only Facility | 🗓️ Appointment Highly Recommended";

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-emerald-deep py-2 text-xs text-white" role="note">
      <div className="marquee flex w-max gap-16 whitespace-nowrap">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} aria-hidden={i > 0}>{MESSAGE}</span>
        ))}
      </div>
    </div>
  );
}
