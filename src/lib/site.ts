export const WHATSAPP_NUMBER = "233240565892";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Lovely Fobie Glam, I would like to book an appointment."
)}`;

export const BUSINESS = {
  name: "Lovely Fobie Glam & Health Consult",
  shortName: "Lovely Fobie Glam",
  partner: "Xupreme Skincare and Beauty Services",
  fullName:
    "Lovely Fobie Glam & Health Consult in Partnership with Xupreme Skincare and Beauty Services",
  address: "Dave Junction, Ho, Volta Region, Ghana",
  phoneDisplay: "+233 24 056 5892",
  phoneTel: "+233240565892",
  payment: "Cash-Only Facility / Appointments Recommended",
  welcomeMessage:
    "Thank you for contacting Lovely Fobie Glam and Health Consult! Please let us know how we can help you.",
  scheduleSummary:
    "Our working days are Monday, Tuesday, Wednesday, Friday and Saturday. Time: 9am to 8pm. Booking times are 9am, 12pm and 3pm.",
} as const;

export const BOOKING_TIMES = ["9:00 AM", "12:00 PM", "3:00 PM"] as const;

export const HAIR_TYPES = ["Natural", "Relaxed", "Locs", "Colored"] as const;
export const HAIR_LENGTHS = ["Short", "Medium", "Long"] as const;

export const SALON_POLICIES = [
  "Please come on time for your scheduled appointment",
  "You can make a deposit before the service to secure your booking",
  "Hair should be unbraided before coming unless very tangled and must be included in the service",
  "Late arrivals beyond 30 minutes may be rescheduled",
] as const;

export interface HoursRow {
  day: string;
  hours: string;
  closed: boolean;
}

export const HOURS: readonly HoursRow[] = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Tuesday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Wednesday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Thursday", hours: "Closed", closed: true },
  { day: "Friday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Saturday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

export type PillarId = "hair" | "makeup" | "skin";

export interface Pillar {
  id: PillarId;
  title: string;
  subtitle: string;
  blurb: string;
  images: readonly [string, string];
  gradient: string;
  accentColor: string;
  badge: string;
  services: readonly { name: string; note: string; duration?: string }[];
  priceNote: string;
}

export const PILLARS: readonly Pillar[] = [
  {
    id: "hair",
    title: "Natural Hair Washing & Styling",
    subtitle: "Gentle, Therapeutic Coil & Curl Care",
    blurb: "Dedicated care designed to strengthen, nourish, and honor natural textures with clean botanical products.",
    images: ["/images/hair-1.jpg", "/images/hair-2.jpg"],
    gradient: "from-[#a0684f] via-[#7d4e39] to-[#4e2f20]",
    accentColor: "#d9a99a",
    badge: "Texture & Scalp Care",
    services: [
      { name: "Wash & Go / Wash & Twist", note: "Deep cleansing, detangling & hydrating definition", duration: "90 min" },
      { name: "Deep Moisture Conditioning", note: "Steam hydration therapy for brittle or dry strands", duration: "60 min" },
      { name: "Bentonite Clay Scalp Detox", note: "Removes product buildup and restores scalp pH", duration: "75 min" },
      { name: "Ayurvedic & Protein Treatments", note: "Structural repair and breakage prevention", duration: "90 min" },
    ],
    priceNote: "Personalized pricing based on length & density",
  },
  {
    id: "makeup",
    title: "Professional Makeup Artistry",
    subtitle: "Soft Glam, Bridal & Editorial Looks",
    blurb: "Skin-like flawless finish tailored to your facial structure and tone for everyday luxury or special occasions.",
    images: ["/images/makeup-1.jpg", "/images/makeup-2.jpg"],
    gradient: "from-[#9e5263] via-[#7a3749] to-[#4a1c29]",
    accentColor: "#f6ece6",
    badge: "Flawless Artistry",
    services: [
      { name: "Soft Glam", note: "Radiant, refined complexion for dinners, photoshoots & day events", duration: "60 min" },
      { name: "Full Glam", note: "Dramatic eyes, sculpted contour, and long-wear red-carpet finish", duration: "90 min" },
      { name: "Luxury Bridal Package", note: "Consultation, trial, and full bridal day concierge styling", duration: "Consult" },
    ],
    priceNote: "Bridal packages include custom beauty trial",
  },
  {
    id: "skin",
    title: "Skincare Consulting & Retail",
    subtitle: "PharmD Doctor of Pharmacy Led",
    blurb: "Clinical skincare assessments and evidence-based routines formulated for hyperpigmentation, acne, and barrier repair.",
    images: ["/images/skin-1.jpg", "/images/skin-2.jpg"],
    gradient: "from-[#2f5d4a] via-[#1f4a3a] to-[#123126]",
    accentColor: "#a9bfa9",
    badge: "PharmD Supervised",
    services: [
      { name: "Comprehensive Skin Health Consult", note: "One-on-one pharmaceutical analysis of your skin barrier & routine", duration: "45 min" },
      { name: "Curated Skincare & Hair Products", note: "Authentic dermatological brands, serums, cleansers and sunscreens", duration: "In-store" },
      { name: "Post-Treatment Regimen Design", note: "Customized maintenance protocol for long-term skin radiance", duration: "Ongoing" },
    ],
    priceNote: "Consultation credited toward curated retail purchase",
  },
];

export interface WhatsAppFormPayload {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceNeeded: string;
  hairType: string;
  hairLength: string;
  preferredStyle: string;
}

export function formatWhatsAppBookingMessage(payload: WhatsAppFormPayload): string {
  return `Thank you for contacting Lovely Fobie Glam and Health Consult! Please let us know how we can help you.
Our working days are Monday, Tuesday, Wednesday,Friday and Saturday. Time: 9am to 8pm. Booking times are 9am, 12pm and 3pm
✨ HAIR APPOINTMENT BOOKING FORM ✨
Lovely Fobie Glam and Health Consult

Please fill in the details below to secure your appointment 😊

👤 Full Name: ${payload.fullName || "—"}
📞 Phone Number: ${payload.phone || "—"}
📅 Preferred Date: ${payload.preferredDate || "—"}
⏰ Preferred Time: ${payload.preferredTime || "—"}
💇🏽‍♀️ Service Needed: ${payload.serviceNeeded || "—"}
🧵 Hair Type: ${payload.hairType || "—"}
📏 Hair Length: ${payload.hairLength || "—"}
🎨 Preferred Style: ${payload.preferredStyle || "—"}
📸 Please send inspiration pictures if available.

⚠️ Salon Policy:
• Please come on time
• You can make a deposit before the service 
• Hair should be unbraided before coming unless very tangled and must be included in the service 
• Late arrivals beyond 30minutes may be rescheduled.

Thank you for booking with us 💕`;
}

export function generateWhatsAppBookingUrl(payload: WhatsAppFormPayload): string {
  const text = formatWhatsAppBookingMessage(payload);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
