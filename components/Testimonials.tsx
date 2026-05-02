import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initial: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thomas",
    role: "Anfänger",
    initial: "T",
    quote:
      "Erstaunlich schnell konnte ich einfache Sätze auf Spanisch sagen. Vielen Dank Cristina!",
  },
  {
    name: "Regula",
    role: "Reisende",
    initial: "R",
    quote:
      "Ich freue mich jedes Mal auf den Unterricht. Inzwischen kann ich mich ohne Probleme im Ausland auf Spanisch verständigen.",
  },
  {
    name: "Eva",
    role: "Fortgeschrittene",
    initial: "E",
    quote:
      "In kurzer Zeit konnte ich gute Fortschritte machen, da Cristina den Unterricht genau an meine Wünsche und mein Tempo angepasst hat. So macht das Lernen sehr viel Spass und ich freue mich auf jede weitere Lektion.",
  },
  {
    name: "Pascal",
    role: "Unternehmer",
    initial: "P",
    quote:
      "Als Unternehmer ist meine Zeit knapp. Cristinas flexible Unterrichtszeiten ermöglichen es mir, Spanisch effektiv zu lernen, ohne meinen Arbeitsalltag zu stören.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Bewertungen
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Was meine Schüler:innen sagen
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Über{" "}
            <span className="font-semibold text-ink">15 Jahre Unterricht</span> –
            hier sind ein paar ehrliche Stimmen.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="relative flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
            >
              <Quote
                aria-hidden
                className="absolute right-6 top-6 size-8 text-brand-100"
              />

              <div
                className="flex items-center gap-1"
                aria-label="5 von 5 Sternen"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className="size-4 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>

              <blockquote className="mt-5 grow text-base leading-relaxed text-ink/90 sm:text-[1.05rem]">
                {t.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                <span
                  aria-hidden
                  className="grid size-11 place-items-center rounded-full bg-brand-50 font-display text-lg font-semibold text-brand-700"
                >
                  {t.initial}
                </span>
                <div className="text-sm leading-tight">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-soft">{t.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
