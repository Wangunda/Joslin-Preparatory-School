import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "@/lib/router";

const STORAGE_KEY = "totonest-cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const t = window.setTimeout(() => setOpen(true), 400);
      return () => window.clearTimeout(t);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage failures in private browsing or restricted environments.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-brand-black/40 px-4 pb-4 sm:items-center sm:pb-0">
      <div className="w-full max-w-2xl rounded-2xl border border-brand-border bg-brand-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-xl font-bold text-brand-black">
                We value your privacy
              </h2>
              <button
                aria-label="Close"
                onClick={() => decide("rejected")}
                className="text-brand-muted hover:text-brand-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              We use cookies to make Joslin Preparatory School work, remember your preferences, and
              understand how families use our site. Please choose how you'd like us to handle
              cookies before continuing. Read our{" "}
              <Link to="/privacy" className="text-brand-red underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                onClick={() => decide("rejected")}
                className="rounded-full border border-brand-border px-5 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-surface"
              >
                Reject all
              </button>
              <button
                onClick={() => decide("accepted")}
                className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-brand-white transition-transform hover:scale-[1.02]"
              >
                Accept all cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
