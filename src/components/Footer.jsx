import { Link } from "react-router-dom";
import { PROFILE } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-warm-200 py-8 px-6 bg-warm-50">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-warm-400 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
        <div className="flex gap-6">
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-warm-400 text-sm no-underline hover:text-teal-600 transition-colors"
          >
            Email
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-400 text-sm no-underline hover:text-teal-600 transition-colors"
          >
            LinkedIn
          </a>
          <Link
            to="/resume"
            className="text-warm-400 text-sm no-underline hover:text-teal-600 transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}