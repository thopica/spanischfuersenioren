declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead(label: string) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead", { content_name: label });
}
