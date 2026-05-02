import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Methode } from "@/components/Methode";
import { Preis } from "@/components/Preis";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Testimonials } from "@/components/Testimonials";
import { UeberMich } from "@/components/UeberMich";
import { Vorteile } from "@/components/Vorteile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Vorteile />
        <Methode />
        <Preis />
        <UeberMich />

        {/* Placeholder so hero CTAs have a target. Replaced in Feature 4. */}
        <section
          id="kontakt"
          className="border-t border-brand-100/80 bg-cream px-4 py-20 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Kontaktbereich folgt im nächsten Schritt
            </h2>
            <p className="mt-3 text-ink-soft">
              Hier erscheint das Kontaktformular sowie die direkten Kontaktwege per
              WhatsApp und E-Mail.
            </p>
          </div>
        </section>
      </main>
      <StickyMobileCta />
    </>
  );
}
