import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { BUSINESS, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Hair, Makeup & Skincare in Ho`,
  description:
    "PharmD-led skincare consultations, natural hair care and professional makeup artistry at Dave Junction, Ho, Volta Region.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: BUSINESS.fullName,
  telephone: BUSINESS.phoneTel,
  url: WHATSAPP_URL,
  paymentAccepted: "Cash",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dave Junction",
    addressLocality: "Ho",
    addressRegion: "Volta Region",
    addressCountry: "GH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </SmoothScroll>
      </body>
    </html>
  );
}
