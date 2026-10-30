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

export interface Treatment {
  slug: string;
  name: string;
  category: PillarId;
  categoryTitle: string;
  duration: string;
  shortNote: string;
  description: string;
  benefits: readonly string[];
  steps: readonly string[];
  suitableFor: string;
  image: string;
  priceGuide: string;
  depositAmount: number; // in GHS
}

export interface Pillar {
  id: PillarId;
  title: string;
  subtitle: string;
  blurb: string;
  images: readonly [string, string];
  gradient: string;
  accentColor: string;
  badge: string;
  priceNote: string;
  treatments: readonly Treatment[];
}

export const TREATMENTS: readonly Treatment[] = [
  // Hair Treatments
  {
    slug: "wash-and-go",
    name: "Wash & Go / Wash & Twist",
    category: "hair",
    categoryTitle: "Natural Hair Washing & Styling",
    duration: "90 min",
    shortNote: "Deep cleansing, botanical detangling & curl hydration definition",
    description:
      "A therapeutic sulfate-free clarifying wash followed by restorative steam conditioning and careful finger-detangling. Styled with natural plant-based gels or butters for defined, frizz-free coils or protective two-strand twists.",
    benefits: [
      "Removes build-up without stripping natural sebum",
      "Enhances natural curl clumping and definition",
      "Locks in moisture for up to two weeks",
      "Gentle scalp massage to stimulate healthy follicles",
    ],
    steps: [
      "Gentle pre-poo oil detangling",
      "Clarifying botanical wash & scalp cleanse",
      "Deep moisture steam infusion",
      "Section-by-section twist or curl definition styling",
    ],
    suitableFor: "Types 3A through 4C coils, curls, locs, and transitioners.",
    image: "/images/hair-1.jpg",
    priceGuide: "GHS 120 – 180 (based on hair length & density)",
    depositAmount: 50,
  },
  {
    slug: "deep-moisture",
    name: "Deep Moisture Conditioning",
    category: "hair",
    categoryTitle: "Natural Hair Washing & Styling",
    duration: "60 min",
    shortNote: "Steam hydration therapy for brittle, dry, or thirsty strands",
    description:
      "Targeted hydration therapy using micro-mist warm steam to gently open the hair cuticles, allowing pharmaceutical-grade humectants, ceramides, and organic oils to penetrate deeply into the hair shaft.",
    benefits: [
      "Replenishes depleted moisture reservoirs",
      "Restores elasticity and significantly reduces breakage",
      "Revitalizes dull or chemically treated strands",
      "Soothes dry, itchy, or tight scalp",
    ],
    steps: [
      "Clarifying gentle cleanse",
      "Custom nutrient mask application",
      "25-minute warm micro-steam infusion",
      "Cold-water cuticle seal & leave-in protection",
    ],
    suitableFor: "Dry, brittle, high-porosity, heat-damaged, or colored natural hair.",
    image: "/images/treatment-steam.jpg",
    priceGuide: "GHS 100 – 150",
    depositAmount: 50,
  },
  {
    slug: "bentonite-clay",
    name: "Bentonite Clay Scalp Detox",
    category: "hair",
    categoryTitle: "Natural Hair Washing & Styling",
    duration: "75 min",
    shortNote: "Clarifying mineral treatment that purifies the scalp and restores pH",
    description:
      "An ancient therapeutic mineral clay treatment blended with raw organic apple cider vinegar and herbal extracts. Acts like a natural magnet to draw out heavy product residue, environmental toxins, and excess sebum.",
    benefits: [
      "Unclogs hair follicles to promote healthy new growth",
      "Eliminates flakes and alleviates product buildup",
      "Restores scalp acid mantle and natural pH balance",
      "Enhances curl clumping and overall strand softness",
    ],
    steps: [
      "Scalp examination & sectioning",
      "Warm botanical bentonite clay application",
      "Thermal processing & scalp massage",
      "Thorough clarification & pH balancing rinse",
    ],
    suitableFor: "Anyone with persistent buildup, itchy scalp, dandruff, or limp coils.",
    image: "/images/treatment-clay.jpg",
    priceGuide: "GHS 130 – 180",
    depositAmount: 50,
  },
  {
    slug: "ayurvedic-protein",
    name: "Ayurvedic & Protein Treatments",
    category: "hair",
    categoryTitle: "Natural Hair Washing & Styling",
    duration: "90 min",
    shortNote: "Structural repair and breakage prevention with authentic Ayurvedic herbs",
    description:
      "A fortified restorative treatment infused with Brahmi, Amla, Shikakai, and hydrolyzed wheat protein. Strengthens weakened hair fibers, stops premature shedding, and fortifies the cortex against breakage.",
    benefits: [
      "Reconstructs compromised hair protein structure",
      "Dramatically reduces shedding and snapping",
      "Nourishes hair roots with pure Ayurvedic nutrients",
      "Leaves hair noticeably thicker, resilient, and manageable",
    ],
    steps: [
      "Scalp pre-treatment & stimulation",
      "Ayurvedic herbal blend application",
      "Infrared warmth penetration",
      "Strengthening protein sealant & hydration",
    ],
    suitableFor: "Weak, shedding, over-manipulated, or chemically damaged hair.",
    image: "/images/hair-2.jpg",
    priceGuide: "GHS 140 – 200",
    depositAmount: 50,
  },

  // Makeup Treatments
  {
    slug: "soft-glam",
    name: "Soft Glam Makeup",
    category: "makeup",
    categoryTitle: "Professional Makeup Artistry",
    duration: "60 min",
    shortNote: "Subtle, radiant everyday elegance with skin-like finish",
    description:
      "Designed to elevate your natural beauty with an undetectable, glowing complexion. Features seamless undertone matching, subtle sculpting, feather-light lashes, and hydrating nude or rosy lips.",
    benefits: [
      "Flawless skin-like radiance without cakey heaviness",
      "Long-lasting finish comfortable for daytime or evening",
      "Precisely color-matched to African skin undertones",
      "Photography-ready with zero flashback",
    ],
    steps: [
      "PharmD skin prep & barrier hydration primer",
      "Air-light base application and seamless blending",
      "Soft neutral eye styling & lash enhancement",
      "Long-wear hydration setting mist",
    ],
    suitableFor: "Graduations, birthdays, photo sessions, corporate dinners, or dates.",
    image: "/images/makeup-1.jpg",
    priceGuide: "GHS 200 – 300",
    depositAmount: 100,
  },
  {
    slug: "full-glam",
    name: "Full Glam Artistry",
    category: "makeup",
    categoryTitle: "Professional Makeup Artistry",
    duration: "90 min",
    shortNote: "Dramatic, sculpted red-carpet event styling",
    description:
      "High-impact luxury beauty with sculpted cheekbones, bold smokey or cut-crease eyes, luxury lashes, and statement lips crafted to command the spotlight for hours.",
    benefits: [
      "24-hour waterproof and sweat-resistant durability",
      "Sculpted contouring tailored to your facial structure",
      "High-definition camera ready finish",
      "Complete touch-up advice and setting protocol",
    ],
    steps: [
      "Complexion balancing prep",
      "High-definition foundation & contour sculpting",
      "Statement eye artistry & multi-dimensional pigments",
      "Luxury lash application & transfer-proof lip seal",
    ],
    suitableFor: "Parties, galas, red-carpet events, pageants, and high-fashion shoots.",
    image: "/images/makeup-2.jpg",
    priceGuide: "GHS 350 – 500",
    depositAmount: 100,
  },
  {
    slug: "bridal-package",
    name: "Luxury Bridal Artistry",
    category: "makeup",
    categoryTitle: "Professional Makeup Artistry",
    duration: "Consult & Event Day",
    shortNote: "Comprehensive wedding day concierge styling & preview trial",
    description:
      "The premier bridal beauty experience. Includes an in-depth preliminary consultation, skin analysis by our Doctor of Pharmacy, pre-wedding trial session, and bespoke on-site wedding day artistry with bridal kit.",
    benefits: [
      "Includes full bridal preview trial session",
      "PharmD bridal skincare timeline guidance 4 weeks prior",
      "Concierge day-of timeline and bridesmaid coordination",
      "Touch-up kit included for evening reception",
    ],
    steps: [
      "Initial consultation & bridal skin assessment",
      "Full bridal preview trial in studio",
      "Skin prep regimen coordination",
      "Wedding day VIP concierge styling",
    ],
    suitableFor: "Brides seeking perfection, peace of mind, and timeless elegance on their wedding day.",
    image: "/images/treatment-bridal.jpg",
    priceGuide: "Custom bridal package quotes upon consultation",
    depositAmount: 200,
  },

  // Skincare Treatments
  {
    slug: "skin-consult",
    name: "Skin Health Consultation",
    category: "skin",
    categoryTitle: "Skincare Consulting & Retail",
    duration: "45 min",
    shortNote: "One-on-one pharmaceutical analysis by Doctor of Pharmacy",
    description:
      "A comprehensive clinical assessment conducted by a licensed Doctor of Pharmacy (PharmD). We analyze your current skin barrier integrity, lifestyle factors, previous product reactions, and hormonal causes of hyperpigmentation or acne.",
    benefits: [
      "Evidence-based pharmaceutical skincare evaluation",
      "Identifies irritants and comedogenic ingredients in current routine",
      "Customized AM/PM routine protocol with proven actives",
      "Direct access to dermatologist-grade authentic products",
    ],
    steps: [
      "Clinical questionnaire & skin history review",
      "Magnified barrier and pore examination",
      "Routine audit and ingredient interaction check",
      "Written prescription-level care regimen",
    ],
    suitableFor: "Anyone struggling with persistent hyperpigmentation, acne, eczema, barrier damage, or product confusion.",
    image: "/images/treatment-consult.jpg",
    priceGuide: "GHS 150 (Credited toward curated product purchases)",
    depositAmount: 50,
  },
  {
    slug: "product-retail",
    name: "Curated Skincare & Hair Retail",
    category: "skin",
    categoryTitle: "Skincare Consulting & Retail",
    duration: "In-Store & Online",
    shortNote: "Authentic dermatological brands, cleansers, serums, and sunscreens",
    description:
      "Carefully vetted, 100% authentic dermatological and hair care products selected by our PharmD team. From barrier-repairing ceramides and gentle chemical exfoliants to mineral sunscreens leaving zero white cast.",
    benefits: [
      "100% genuine guaranteed products—no counterfeit cosmetics",
      "Safe formulations for melanin-rich skin",
      "PharmD on-site guidance to choose the right concentration",
      "Hair and scalp wellness supplements available",
    ],
    steps: [
      "Needs assessment",
      "Texture & sensitivity patch testing",
      "Routine integration instructions",
    ],
    suitableFor: "Clients wanting verified, effective skincare and hair maintenance products in Ho.",
    image: "/images/skin-2.jpg",
    priceGuide: "Retail prices per product",
    depositAmount: 50,
  },
  {
    slug: "regimen-design",
    name: "Post-Treatment Regimen Design",
    category: "skin",
    categoryTitle: "Skincare Consulting & Retail",
    duration: "Ongoing",
    shortNote: "Personalized maintenance protocol for long-term skin health",
    description:
      "Custom ongoing skin coaching to protect your salon investments. We track your skin's response over 6 to 12 weeks, fine-tuning actives like niacinamide, azelaic acid, or retinoids safely.",
    benefits: [
      "Prevents post-inflammatory hyperpigmentation (PIH)",
      "Monitored barrier tolerance and recovery",
      "Seasonal routine adaptations",
      "WhatsApp follow-up checks with front desk",
    ],
    steps: [
      "Baseline evaluation",
      "4-week check-in & adjustment",
      "Long-term maintenance guide",
    ],
    suitableFor: "Clients serious about sustaining their glowing, even-toned results.",
    image: "/images/skin-1.jpg",
    priceGuide: "Included with consultations or treatment packages",
    depositAmount: 50,
  },
];

export const PILLARS: readonly Pillar[] = [
  {
    id: "hair",
    title: "Natural Hair Washing & Styling",
    subtitle: "Gentle, Therapeutic Coil & Curl Care",
    blurb:
      "Dedicated care designed to strengthen, nourish, and honor natural textures with clean botanical products.",
    images: ["/images/hair-1.jpg", "/images/hair-2.jpg"],
    gradient: "from-[#a0684f] via-[#7d4e39] to-[#4e2f20]",
    accentColor: "#d9a99a",
    badge: "Texture & Scalp Care",
    priceNote: "Personalized pricing based on length & density",
    treatments: TREATMENTS.filter((t) => t.category === "hair"),
  },
  {
    id: "makeup",
    title: "Professional Makeup Artistry",
    subtitle: "Soft Glam, Bridal & Editorial Looks",
    blurb:
      "Skin-like flawless finish tailored to your facial structure and tone for everyday luxury or special occasions.",
    images: ["/images/makeup-1.jpg", "/images/makeup-2.jpg"],
    gradient: "from-[#9e5263] via-[#7a3749] to-[#4a1c29]",
    accentColor: "#f6ece6",
    badge: "Flawless Artistry",
    priceNote: "Bridal packages include custom beauty trial",
    treatments: TREATMENTS.filter((t) => t.category === "makeup"),
  },
  {
    id: "skin",
    title: "Skincare Consulting & Retail",
    subtitle: "PharmD Doctor of Pharmacy Led",
    blurb:
      "Clinical skincare assessments and evidence-based routines formulated for hyperpigmentation, acne, and barrier repair.",
    images: ["/images/skin-1.jpg", "/images/skin-2.jpg"],
    gradient: "from-[#2f5d4a] via-[#1f4a3a] to-[#123126]",
    accentColor: "#a9bfa9",
    badge: "PharmD Supervised",
    priceNote: "Consultation credited toward curated retail purchase",
    treatments: TREATMENTS.filter((t) => t.category === "skin"),
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(category: PillarId): readonly Treatment[] {
  return TREATMENTS.filter((t) => t.category === category);
}

export function getPillarById(id: PillarId): Pillar | undefined {
  return PILLARS.find((p) => p.id === id);
}

export interface WhatsAppFormPayload {
  fullName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  serviceNeeded: string;
  hairType: string;
  hairLength: string;
  preferredStyle: string;
  depositReference?: string;
}

export function formatWhatsAppBookingMessage(payload: WhatsAppFormPayload): string {
  const depositLine = payload.depositReference
    ? `\n💳 Paystack Deposit Ref: ${payload.depositReference}`
    : "";

  return `Thank you for contacting Lovely Fobie Glam and Health Consult! Please let us know how we can help you.
Our working days are Monday, Tuesday, Wednesday,Friday and Saturday. Time: 9am to 8pm. Booking times are 9am, 12pm and 3pm
✨ HAIR APPOINTMENT BOOKING FORM ✨
Lovely Fobie Glam and Health Consult

Please fill in the details below to secure your appointment 😊

👤 Full Name: ${payload.fullName || "—"}
📞 Phone Number: ${payload.phone || "—"}${payload.email ? `\n✉️ Email: ${payload.email}` : ""}
📅 Preferred Date: ${payload.preferredDate || "—"}
⏰ Preferred Time: ${payload.preferredTime || "—"}
💇🏽‍♀️ Service Needed: ${payload.serviceNeeded || "—"}
🧵 Hair Type: ${payload.hairType || "—"}
📏 Hair Length: ${payload.hairLength || "—"}
🎨 Preferred Style: ${payload.preferredStyle || "—"}${depositLine}
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
