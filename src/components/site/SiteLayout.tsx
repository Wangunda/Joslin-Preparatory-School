import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieConsent } from "./CookieConsent";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-white">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
