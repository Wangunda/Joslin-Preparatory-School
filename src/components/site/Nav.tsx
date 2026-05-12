import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/joslin-logo.jpg";
import { Link, useCurrentPath } from "@/lib/router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const currentPath = useCurrentPath();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-brand-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-brand-black">
          <img
            src={logo}
            alt="Joslin Preparatory School logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-brand-border"
          />
          <span className="font-display text-lg font-bold leading-tight tracking-tight">
            Joslin Preparatory
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-brand-red">School</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                currentPath === l.to ? "text-brand-red" : "text-brand-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-brand-white transition-transform hover:scale-105"
          >
            Book a Tour
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden text-brand-black"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-border bg-brand-white md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-brand-surface hover:text-brand-red ${
                  currentPath === l.to ? "text-brand-red" : "text-brand-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-red px-5 py-2 text-center text-sm font-semibold text-brand-white"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
