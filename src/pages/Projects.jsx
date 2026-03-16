import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <div>
      <FadeIn>
        <h2 className="text-3xl font-bold text-warm-800 mb-1">Projects</h2>
        <p className="text-warm-400 mb-8 text-[15px]">
          Select a project to view detailed design and verification methodology.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.1}>
            <Link
              to={`/projects/${p.id}`}
              className="no-underline bg-white border border-warm-200/80 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col h-full"
            >
              <div className="text-2xl mb-2">{p.icon}</div>
              <div className="text-[10px] font-semibold text-teal-600 uppercase tracking-widest mb-1.5">
                {p.domain}
              </div>
              <h3 className="text-[16px] font-semibold text-warm-800 mb-2 group-hover:text-teal-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-[13px] text-warm-400 leading-relaxed mb-4 flex-1">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] bg-teal-50 text-teal-600 rounded-md px-2.5 py-0.5 border border-teal-100">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}