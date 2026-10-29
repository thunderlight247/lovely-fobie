"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  BOOKING_TIMES,
  HAIR_TYPES,
  HAIR_LENGTHS,
  WHATSAPP_NUMBER,
  formatWhatsAppBookingMessage,
  generateWhatsAppBookingUrl,
} from "@/lib/site";

const POPULAR_SERVICES = [
  "Wash & Go / Wash & Twist",
  "Deep Moisture Conditioning (Steam Hydration)",
  "Bentonite Clay Scalp Detox",
  "Ayurvedic & Protein Treatment",
  "Soft Glam Makeup Artistry",
  "Luxury Bridal Makeup Package",
  "Full Glam / Event Makeup",
  "PharmD Skin Health Consultation",
  "Hair & Scalp Health Consultation",
  "Other / Custom Service",
];

export function WhatsAppBookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    preferredDate: "",
    preferredTime: "9:00 AM",
    serviceNeeded: preselectedService || "Wash & Go / Wash & Twist",
    hairType: "Natural",
    hairLength: "Medium",
    preferredStyle: "",
  });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  // If query string updates, update service
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: preselectedService }));
    }
  }, [preselectedService]);

  // Set min date to today's date formatted as YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, preferredTime: time }));
  };

  const handleHairTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, hairType: type }));
  };

  const handleHairLengthSelect = (length: string) => {
    setFormData((prev) => ({ ...prev, hairLength: length }));
  };

  const messageText = formatWhatsAppBookingMessage(formData);
  const whatsappUrl = generateWhatsAppBookingUrl(formData);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="rounded-3xl border border-rose-gold/30 bg-white shadow-2xl overflow-hidden">
      {/* WhatsApp Inspired Header Banner */}
      <div className="bg-[#075E54] text-white p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white font-serif text-xl font-bold shadow-md">
              <span>L</span>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-white border-2 border-[#075E54] flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  Lovely Fobie Glam & Health Consult
                </h3>
                <span className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                  Verified Front Desk
                </span>
              </div>
              <p className="text-xs text-white/80 mt-0.5">
                Dave Junction, Ho, Ghana • WhatsApp Booking Assistant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:self-center">
            {/* Mobile View Toggle between Form and Live Message */}
            <div className="inline-flex lg:hidden rounded-xl bg-black/20 p-1 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className={`rounded-lg px-3 py-1.5 font-medium transition-colors ${
                  activeTab === "form" ? "bg-white text-[#075E54] font-bold" : "text-white/80"
                }`}
              >
                📝 Fill Form
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`rounded-lg px-3 py-1.5 font-medium transition-colors ${
                  activeTab === "preview" ? "bg-white text-[#075E54] font-bold" : "text-white/80"
                }`}
              >
                💬 WhatsApp Preview
              </button>
            </div>
          </div>
        </div>

        {/* Automated Welcome Note Banner */}
        <div className="mt-4 rounded-xl bg-black/20 p-3 sm:p-4 text-xs sm:text-sm text-white/90 border border-white/10 leading-relaxed">
          <p className="font-semibold text-rose-gold mb-1">
            ✨ Front Desk Automated Welcome:
          </p>
          <p>
            &ldquo;Thank you for contacting Lovely Fobie Glam and Health Consult! Please let us know how we can help you.
            Our working days are Monday, Tuesday, Wednesday, Friday and Saturday. Time: 9am to 8pm. Booking times are 9am, 12pm and 3pm.&rdquo;
          </p>
        </div>
      </div>

      {/* Main Grid: Form on Left, Live WhatsApp Card on Right */}
      <div className="grid gap-0 lg:grid-cols-12">
        {/* Form Column */}
        <div
          className={`p-5 sm:p-8 lg:col-span-7 ${
            activeTab === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          <div className="mb-6 pb-4 border-b border-rose-gold/20">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-emerald-deep">
              ✨ Hair & Glam Appointment Form
            </h4>
            <p className="text-xs sm:text-sm text-ink/70 mt-1">
              Please fill in your details below to generate your direct appointment message 😊
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappUrl, "_blank");
            }}
            className="space-y-5"
          >
            {/* Full Name & Phone Number */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                  👤 Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Ama Mensah"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-rose-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                  📞 Phone Number <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 024 123 4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-rose-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Preferred Date & Preferred Time */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                  📅 Preferred Date <span className="text-rose-600">*</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  min={todayStr}
                  required
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-rose-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep focus:outline-none transition-colors"
                />
                <span className="text-[11px] text-ink/50 mt-1 block">
                  Working days: Mon, Tue, Wed, Fri, Sat
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                  ⏰ Preferred Time Slot <span className="text-rose-600">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {BOOKING_TIMES.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      className={`rounded-xl py-2.5 px-2 text-xs font-bold transition-all ${
                        formData.preferredTime === time
                          ? "bg-emerald-deep text-white shadow-sm ring-2 ring-emerald-deep/20"
                          : "border border-rose-gold/40 bg-nude/40 text-ink/80 hover:bg-nude"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] text-ink/50 mt-1 block">
                  Fixed slot booking model (9am, 12pm, 3pm)
                </span>
              </div>
            </div>

            {/* Service Needed */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                💇🏽‍♀️ Service Needed <span className="text-rose-600">*</span>
              </label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-rose-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep focus:outline-none transition-colors"
              >
                {POPULAR_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Hair Type (Natural / Relaxed / Locs / Colored) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                🧵 Hair Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {HAIR_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleHairTypeSelect(type)}
                    className={`rounded-xl py-2 px-2 text-xs font-bold transition-all ${
                      formData.hairType === type
                        ? "bg-emerald-deep text-white shadow-xs"
                        : "border border-rose-gold/30 bg-nude/30 text-ink/80 hover:bg-nude/80"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Length (Short / Medium / Long) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                📏 Hair Length
              </label>
              <div className="grid grid-cols-3 gap-2">
                {HAIR_LENGTHS.map((length) => (
                  <button
                    key={length}
                    type="button"
                    onClick={() => handleHairLengthSelect(length)}
                    className={`rounded-xl py-2 px-2 text-xs font-bold transition-all ${
                      formData.hairLength === length
                        ? "bg-emerald-deep text-white shadow-xs"
                        : "border border-rose-gold/30 bg-nude/30 text-ink/80 hover:bg-nude/80"
                    }`}
                  >
                    {length}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1.5">
                🎨 Preferred Style
              </label>
              <input
                type="text"
                name="preferredStyle"
                placeholder="e.g. Chunky Two-Strand Twists with deep scalp steam or Soft Glam Bridal"
                value={formData.preferredStyle}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-rose-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep focus:outline-none transition-colors"
              />
            </div>

            {/* Inspiration Pictures Note */}
            <div className="rounded-xl bg-amber-50/70 border border-amber-200/80 p-3.5 text-xs text-amber-950 flex items-start gap-2.5">
              <span className="text-base shrink-0">📸</span>
              <div>
                <span className="font-bold">Inspiration Pictures:</span>
                <p className="mt-0.5 text-amber-900/80 leading-relaxed">
                  Have pictures of your desired style or current hair condition? You can attach them directly in WhatsApp after clicking Book!
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 shimmer flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 px-6 font-bold text-white shadow-lg hover:bg-[#20ba59] transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Send Booking to WhatsApp</span>
                <span>💬</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 rounded-xl border border-rose-gold/40 bg-white py-3.5 px-5 text-sm font-semibold text-emerald-deep hover:bg-nude/50 transition-colors"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-deep">✓</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* WhatsApp Preview Column (7 Cols on right or tab on mobile) */}
        <div
          className={`bg-[#e5ddd5] p-4 sm:p-7 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-rose-gold/20 ${
            activeTab === "form" ? "hidden lg:flex" : "flex"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075E54]">
                💬 Live WhatsApp Message Preview
              </span>
              <span className="text-[11px] bg-white/70 px-2.5 py-0.5 rounded-full text-ink/70">
                To: +233 24 056 5892
              </span>
            </div>

            {/* WhatsApp Chat Bubble */}
            <div className="relative rounded-2xl bg-white p-4 shadow-sm border border-black/5 text-xs sm:text-[13px] text-ink leading-relaxed space-y-2">
              <p className="font-semibold text-emerald-deep">
                Thank you for contacting Lovely Fobie Glam and Health Consult! Please let us know how we can help you.
              </p>
              <p className="text-ink/80 text-[12px] bg-nude/60 p-2 rounded-lg border border-rose-gold/15">
                Our working days are Monday, Tuesday, Wednesday,Friday and Saturday. Time: 9am to 8pm. Booking times are 9am, 12pm and 3pm
              </p>

              <div className="font-bold text-[#075E54] pt-1">
                ✨ HAIR APPOINTMENT BOOKING FORM ✨
                <br />
                <span className="font-normal text-ink/70 text-xs">
                  Lovely Fobie Glam and Health Consult
                </span>
              </div>

              <p className="italic text-ink/70 text-xs">
                Please fill in the details below to secure your appointment 😊
              </p>

              <div className="space-y-1.5 pt-1 border-t border-ink/10 font-mono text-xs">
                <div>
                  <span className="font-bold">👤 Full Name:</span>{" "}
                  <span className="text-emerald-deep font-semibold">
                    {formData.fullName || "(Not filled yet)"}
                  </span>
                </div>
                <div>
                  <span className="font-bold">📞 Phone Number:</span>{" "}
                  <span>{formData.phone || "(Not filled yet)"}</span>
                </div>
                <div>
                  <span className="font-bold">📅 Preferred Date:</span>{" "}
                  <span className="text-emerald-deep font-semibold">
                    {formData.preferredDate || "(Select date)"}
                  </span>
                </div>
                <div>
                  <span className="font-bold">⏰ Preferred Time:</span>{" "}
                  <span className="text-emerald-deep font-semibold">
                    {formData.preferredTime}
                  </span>
                </div>
                <div>
                  <span className="font-bold">💇🏽‍♀️ Service Needed:</span>{" "}
                  <span>{formData.serviceNeeded}</span>
                </div>
                <div>
                  <span className="font-bold">🧵 Hair Type:</span>{" "}
                  <span>{formData.hairType}</span>
                </div>
                <div>
                  <span className="font-bold">📏 Hair Length:</span>{" "}
                  <span>{formData.hairLength}</span>
                </div>
                <div>
                  <span className="font-bold">🎨 Preferred Style:</span>{" "}
                  <span>{formData.preferredStyle || "(Describe or leave blank)"}</span>
                </div>
                <div className="text-amber-800 text-[11px] pt-1">
                  📸 Please send inspiration pictures if available.
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 p-2.5 text-[11px] text-amber-950 border border-amber-200/60 mt-2 space-y-0.5">
                <span className="font-bold text-amber-900 block">⚠️ Salon Policy:</span>
                <p>• Please come on time</p>
                <p>• You can make a deposit before the service</p>
                <p>• Hair should be unbraided before coming unless very tangled and must be included in the service</p>
                <p>• Late arrivals beyond 30minutes may be rescheduled.</p>
              </div>

              <p className="font-serif font-bold text-emerald-deep pt-1 text-center">
                Thank you for booking with us 💕
              </p>

              {/* Message metadata (time & checkmark) */}
              <div className="flex justify-end items-center gap-1 text-[10px] text-ink/40 pt-1">
                <span>Just now</span>
                <span className="text-[#34B7F1] font-bold">✓✓</span>
              </div>
            </div>
          </div>

          {/* Quick Direct Link */}
          <div className="mt-5 pt-4 border-t border-black/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#20ba59] transition-all text-center"
            >
              <span>🚀 Open in WhatsApp Now</span>
            </a>
            <p className="text-[11px] text-ink/60 text-center mt-2">
              Opens WhatsApp directly with the pre-filled message above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
