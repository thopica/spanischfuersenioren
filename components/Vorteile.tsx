import {
  CalendarHeart,
  Clock,
  Coffee,
  Laptop,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Vorteil = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
};

const VORTEILE: Vorteil[] = [
  {
    icon: Coffee,
    title: "Ganz auf dich abgestimmt",
    description:
      "Wir lernen, was dich wirklich interessiert: das Gespräch im Café in Sevilla, die Speisekarte in Valencia, der Anruf bei den Nachbarn in deinem Ferienhaus. Kein starrer Lehrplan.",
  },
  {
    icon: CalendarHeart,
    title: "Dein Tempo, deine Tageszeit",
    description:
      "Vormittags, nachmittags, wann immer es dir passt. Kein Abendstress, keine Hektik.",
  },
  {
    icon: Clock,
    title: "60 echte Minuten, keine «Schulstunde»",
    description:
      "Viele unterrichten 45 Minuten und nennen das eine Stunde. Bei mir bekommst du volle 60.",
    highlight: "33 % mehr als üblich",
  },
  {
    icon: Laptop,
    title: "Wo du möchtest",
    description:
      "Online aus deinem Wohnzimmer. Falls du mit dem Computer nicht so vertraut bist, helfe ich dir beim Einrichten. Oder wir treffen uns bei mir in Zürich.",
  },
  {
    icon: ShieldCheck,
    title: "Keine Abos. Keine Verpflichtung.",
    description:
      "CHF 60 pro Lektion. Du buchst, wann es passt. Ferien, Arzttermin, Besuch von den Enkeln? Kein Problem.",
  },
];

export function Vorteile() {
  return (
    <section className="bg-cream-dark px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Deine Vorteile
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Warum dieser Unterricht zu dir passt
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Kein starres Schulbuch, kein Druck. Einfach Spanisch, so wie du es
            dir vorgestellt hast.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {VORTEILE.map(({ icon: Icon, title, description, highlight }) => (
            <li
              key={title}
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-400 group-hover:text-cream"
              >
                <Icon className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {description}
              </p>
              {highlight && (
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  {highlight}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
