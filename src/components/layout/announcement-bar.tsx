const MESSAGE =
  "✨ Verified PharmD-Led Consultations | 🗓️ Open Mon, Tue, Wed, Fri, Sat (9am – 8pm) | ⏰ Booking Slots: 9am, 12pm & 3pm | 📍 Dave Junction, Ho | 💵 Cash-Only Facility";

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-emerald-deep py-2 text-xs text-white border-b border-white/10" role="note">
      <div className="marquee flex w-max gap-16 whitespace-nowrap">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} aria-hidden={i > 0} className="font-medium tracking-wide">
            {MESSAGE}
          </span>
        ))}
      </div>
    </div>
  );
}
