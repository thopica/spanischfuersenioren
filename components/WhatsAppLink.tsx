"use client";

import { WHATSAPP_URL } from "@/lib/links";
import { trackLead } from "@/lib/track";

type Props = {
  className?: string;
  children: React.ReactNode;
  source: string;
  ariaLabel?: string;
};

export function WhatsAppLink({ className, children, source, ariaLabel }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackLead(`whatsapp-${source}`)}
      className={className}
    >
      {children}
    </a>
  );
}
