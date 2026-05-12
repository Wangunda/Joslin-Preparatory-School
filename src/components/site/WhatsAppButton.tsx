import { MessageCircle } from "lucide-react";
import { settings } from "@/lib/content";

export function WhatsAppButton() {
  const wa = `https://wa.me/${settings.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Joslin%20Preparatory%20School!`;
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-brand-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
