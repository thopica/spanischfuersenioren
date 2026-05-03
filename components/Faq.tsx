import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "Bin ich nicht zu alt, um eine neue Sprache zu lernen?",
    answer:
      "Ganz klar nein. Das ist sogar der häufigste Grund, warum Menschen gar nicht erst anfangen, und einer der hartnäckigsten Mythen. Erwachsene haben einen grossen Vorteil: du weisst, wie Sprache funktioniert, du hast Lebenserfahrung, du weisst, was du sagen willst. Was Kinder über jahrelange Wiederholung lernen, lernst du durch Verstehen. Das geht oft schneller.",
  },
  {
    question:
      "Ich kenne mich mit Computern nicht so gut aus. Kann ich trotzdem online lernen?",
    answer:
      "Ja, und ich helfe dir Schritt für Schritt. Wir nutzen Zoom. Das ist ein Programm, das ich dir einmal kurz einrichte (auf Wunsch auch telefonisch). Danach ist es ein Klick, und wir sind verbunden. Falls online für dich nicht das Richtige ist, treffen wir uns einfach bei mir in Zürich.",
  },
  {
    question: "Wie schnell kann ich erste Sätze sprechen?",
    answer:
      "Schon in der ersten Lektion. Spanisch ist eine dankbare Sprache für den Anfang: die Aussprache ist klar, und viele Wörter ähneln dem Französischen oder Italienischen, das du vielleicht aus der Schule kennst.",
  },
  {
    question: "Muss ich Hausaufgaben machen?",
    answer:
      "Nein, nichts muss. Wer mag, bekommt von mir Material zum Üben zwischen den Lektionen. Wer einfach nur in der Stunde lernen möchte, ist auch willkommen.",
  },
  {
    question: "Wann findet der Unterricht statt?",
    answer:
      "Wann es dir passt. Vormittags, nachmittags, am Wochenende. Termine machen wir flexibel ab.",
  },
  {
    question: "Wie funktioniert die Bezahlung?",
    answer:
      "CHF 60 pro 60-Minuten-Lektion, nach der Lektion. Per TWINT, Banküberweisung oder bar in Zürich. Keine Abos, keine Vorauszahlung.",
  },
  {
    question:
      "Kann ich auch zu zweit lernen, zum Beispiel mit meinem Mann oder meiner Frau?",
    answer:
      "Sehr gerne. Schreib mir oder ruf mich an, wir finden eine passende Lösung.",
  },
];

export function Faq() {
  return (
    <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Häufige Fragen
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Antworten auf häufige Fragen
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Falls deine Frage nicht dabei ist: ruf an oder schreib mir kurz.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink/10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 md:mt-14">
          {FAQS.map(({ question, answer }) => (
            <details
              key={question}
              className="group px-5 py-1 transition open:bg-brand-50/40 sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-ink transition hover:text-brand-600 sm:text-lg">
                <span>{question}</span>
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 transition group-open:rotate-180 group-open:bg-brand-400 group-open:text-cream"
                >
                  <ChevronDown className="size-5" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="-mt-1 pb-6 pr-12 text-base leading-relaxed text-ink-soft">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
