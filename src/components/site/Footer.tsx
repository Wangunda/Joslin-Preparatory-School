import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/joslin-logo.jpg";
import { settings } from "@/lib/content";
import { Link } from "@/lib/router";

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Joslin Preparatory School logo"
              className="h-12 w-12 rounded-full object-cover bg-white"
            />
            <span className="font-display text-2xl font-bold leading-tight">
              Joslin Preparatory School
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            {settings.tagline}. CBC-aligned early childhood education in Bondo, Kenya.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs">
              CBC Aligned
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs">
              NACECE Registered
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About" },
              { to: "/programs", l: "Programs" },
              { to: "/admissions", l: "Admissions" },
              { to: "/gallery", l: "Gallery" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-brand-red">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-red" /> {settings.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand-red" /> {settings.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-red" /> {settings.email}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-brand-red" /> Mon–Fri 7am–5:30pm
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Joslin Preparatory School. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link to="/privacy" className="hover:text-brand-red">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-brand-red">
              Terms
            </Link>
            <Link to="/accessibility" className="hover:text-brand-red">
              Accessibility
            </Link>
          </div>
          <p>Site by Beicode Enterprises Limited</p>
        </div>
      </div>
    </footer>
  );
}
