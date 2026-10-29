export const WHATSAPP_NUMBER = "233240565892";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Lovely Fobie Glam, I'd like to book an appointment."
)}`;

export const BUSINESS = {
  name: "Lovely Fobie Glam & Health Consult",
  partner: "Xupreme Skincare and Beauty Services",
  fullName:
    "Lovely Fobie Glam & Health Consult in Partnership with Xupreme Skincare and Beauty Services",
  address: "Dave Junction, Ho, Volta Region, Ghana",
  phoneDisplay: "+233 24 056 5892",
  phoneTel: "+233240565892",
  payment: "Cash-Only Facility / Appointments Recommended",
} as const;

export interface HoursRow {
  day: string;
  hours: string;
  closed: boolean;
}

export const HOURS: readonly HoursRow[] = [
  { day: "Monday – Wednesday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Thursday", hours: "Closed", closed: true },
  { day: "Friday – Saturday", hours: "9:00 AM – 8:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

export type PillarId = "hair" | "makeup" | "skin";

export interface Pillar {
  id: PillarId;
  title: string;
  blurb: string;
  /** Drop files in /public/images or swap for Unsplash/Pexels URLs. */
  images: readonly [string, string];
  gradient: string;
  services: readonly { name: string; note: string }[];
  priceNote: string;
}

export const PILLARS: readonly Pillar[] = [
  {
    id: "hair",
    title: "Natural Hair Washing & Styling",
    blurb: "Gentle, therapeutic care for coils and curls.",
    images: ["/images/hair-1.jpg", "/images/hair-2.jpg"],
    gradient: "from-[#c9a58f] to-[#8a6a58]",
    services: [
      { name: "Wash & Go / Wash & Twist", note: "Cleansing packages" },
      { name: "Deep Moisture Conditioning", note: "Hydration therapy" },
      { name: "Bentonite Clay Scalp Detox", note: "Clarifying" },
      { name: "Ayurvedic & Protein Treatments", note: "Restorative" },
    ],
    priceNote: "Prices on request",
  },
  {
    id: "makeup",
    title: "Professional Makeup Artistry",
    blurb: "From everyday soft glam to full bridal.",
    images: ["/images/makeup-1.jpg", "/images/makeup-2.jpg"],
    gradient: "from-[#d9a99a] to-[#a8707a]",
    services: [
      { name: "Soft Glam", note: "Subtle, everyday elegance" },
      { name: "Full Glam", note: "Party and event styling" },
      { name: "Luxury Bridal", note: "Packages and consultations" },
    ],
    priceNote: "Bridal quotes after consultation",
  },
  {
    id: "skin",
    title: "Skincare Consulting & Retail",
    blurb: "Skin advice from a Doctor of Pharmacy.",
    images: ["/images/skin-1.jpg", "/images/skin-2.jpg"],
    gradient: "from-[#7f9a86] to-[#2f5d4a]",
    services: [
      { name: "Skin Health Consultation", note: "PharmD-led" },
      { name: "Product Retail", note: "Skincare, hair and cosmetics" },
    ],
    priceNote: "Consultation fee on request",
  },
];
