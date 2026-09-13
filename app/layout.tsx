import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/lib/site";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext", "greek", "greek-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext", "greek"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Choropoulos Sound | DJ & Ηχητική Κάλυψη Αγρίνιο",
    template: "%s | Choropoulos Sound",
  },
  description: site.tagline,
  keywords: [
    "DJ Αγρίνιο",
    "ηχητική κάλυψη γάμου Αγρίνιο",
    "karaoke party Αγρίνιο",
    "DJ γάμου Αγρίνιο",
    "φωτισμός εκδηλώσεων Αγρίνιο",
    "ηχητικά συστήματα Αγρίνιο",
    "Choropoulos Sound",
    "Χορόπουλος DJ",
    "Χορόπουλος Νικόλαος",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    locale: "el_GR",
    type: "website",
    siteName: site.name,
    title: "Choropoulos Sound | DJ & Ηχητική Κάλυψη Αγρίνιο",
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: "Choropoulos Sound | DJ Αγρίνιο",
    description: site.tagline,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: site.name,
  alternateName: site.legalName,
  description: site.tagline,
  url: site.url,
  telephone: [site.phones[0].href.replace("tel:", ""), site.phones[1].href.replace("tel:", "")],
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.area,
    postalCode: site.address.postal,
    addressRegion: site.address.region,
    addressCountry: "GR",
  },
  areaServed: "Αγρίνιο",
  sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="el"
      className={`${garamond.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[90] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
