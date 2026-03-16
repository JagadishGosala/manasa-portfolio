import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-lg border-b border-warm-200/60">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[56px]">
        <Link to="/" className="font-bold text-lg text-teal-600 tracking-wide no-underline">
          SMA
        </Link>

        <div className="hidden md:flex gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium no-underline transition-all duration-200 ${
                pathname === l.to
                  ? "text-teal-700 bg-teal-500/10"
                  : "text-warm-500 hover:text-teal-600 hover:bg-teal-500/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none text-teal-600 text-xl cursor-pointer"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-3 bg-cream/95">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium no-underline ${
                pathname === l.to
                  ? "text-teal-700 bg-teal-500/10"
                  : "text-warm-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}