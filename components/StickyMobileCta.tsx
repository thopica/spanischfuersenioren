import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-cream/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="flex gap-2">
        <WhatsAppLink
          source="sticky-mobile"
          ariaLabel="Auf WhatsApp schreiben"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-success text-sm font-semibold text-white shadow-md transition active:bg-success-dark"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </WhatsAppLink>
        <a
          href="#kontakt"
          className="inline-flex h-12 flex-[1.6] items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream shadow-md transition active:bg-brand-500"
        >
          Gratis Probelektion
        </a>
      </div>
    </div>
  );
}
