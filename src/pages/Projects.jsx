import { Link } from "react-router-dom";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-50 mb-2">Projects</h2>
      <p className="text-slate-400 mb-8 text-[15px]">
        Select a project to view detailed design and verification methodology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="no-underline bg-sky-400/5 border border-sky-400/10 rounded-2xl p-7 transition-all hover:border-sky-400/35 hover:-translate-y-0.5 group"
          >
            <div className="text-3xl mb-3">{p.icon}</div>
            <div className="text-[11px] font-semibold text-sky-400 uppercase tracking-widest mb-2">
              {p.domain}
            </div>
            <h3 className="text-[17px] font-semibold text-slate-50 mb-2.5 group-hover:text-sky-300 transition-colors">
              {p.title}
            </h3>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
              {p.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] bg-sky-400/10 text-sky-400 rounded-md px-2.5 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}