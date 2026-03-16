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
    <nav className="sticky top-0 z-50 bg-[#0a0f1a]/92 backdrop-blur-md border-b border-sky-400/10">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[60px]">
        <Link to="/" className="font-bold text-lg text-sky-400 tracking-wide no-underline">
          SMA
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
                pathname === l.to
                  ? "text-sky-400 bg-sky-400/15"
                  : "text-slate-400 hover:text-sky-400 hover:bg-sky-400/8"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none text-sky-400 text-2xl cursor-pointer"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium no-underline ${
                pathname === l.to
                  ? "text-sky-400 bg-sky-400/15"
                  : "text-slate-400"
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