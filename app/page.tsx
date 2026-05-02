import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Kontakt } from "@/components/Kontakt";
import { Methode } from "@/components/Methode";
import { Preis } from "@/components/Preis";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Testimonials } from "@/components/Testimonials";
import { UeberMich } from "@/components/UeberMich";
import { Vorteile } from "@/components/Vorteile";
import { EMAIL } from "@/lib/links";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Spanisch mit Cristina",
  description:
    "Privatunterricht Spanisch mit Muttersprachlerin – online aus der ganzen Schweiz oder vor Ort in Zürich.",
  image: "https://onlinespanischlernen.ch/images/cristina.jpg",
  url: "https://onlinespanischlernen.ch",
  telephone: "+41772920903",
  email: EMAIL,
  priceRange: "CHF 60",
  inLanguage: ["de", "es"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zürich",
    addressRegion: "ZH",
    addressCountry: "CH",
  },
  areaServed: [
    { "@type": "Country", name: "Schweiz" },
    { "@type": "City", name: "Zürich" },
  ],
  serviceType: "Spanischunterricht",
  founder: { "@type": "Person", name: "Cristina Caamaño" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vorteile />
        <Methode />
        <Preis />
        <Testimonials />
        <UeberMich />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
      <StickyMobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
    </>
  );
}
