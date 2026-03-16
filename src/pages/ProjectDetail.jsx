import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/portfolio";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = PROJECTS.find((proj) => proj.id === id);

  if (!p) {
    return (
      <div className="text-center pt-20">
        <p className="text-slate-400">Project not found.</p>
        <Link to="/projects" className="text-sky-400 mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/projects"
        className="inline-block bg-sky-400/10 text-sky-400 no-underline rounded-lg px-4 py-2 text-sm mb-6 hover:bg-sky-400/20 transition-colors"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4 flex-wrap mb-2">
        <span className="text-4xl">{p.icon}</span>
        <div>
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
            {p.domain}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mt-1">
            {p.title}
          </h2>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 mb-8">
        {p.tags.map((t) => (
          <span key={t} className="text-xs bg-sky-400/10 text-sky-400 rounded-lg px-3.5 py-1">
            {t}
          </span>
        ))}
      </div>

      {/* Quick Stats */}
      {p.quickStats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {p.quickStats.map((s, i) => (
            <div
              key={i}
              className="bg-sky-400/5 border border-sky-400/10 rounded-xl py-5 px-4 text-center"
            >
              <div className="text-2xl font-bold text-sky-400">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Story */}
      {p.story && (
        <div className="bg-sky-400/4 border border-sky-400/10 rounded-2xl p-7 mb-5 border-l-[3px] border-l-sky-300">
          <h3 className="text-base font-semibold text-sky-300 mb-3">The Story</h3>
          {p.story.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm text-slate-300 leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Block Diagram */}
      {p.blockDiagram && (
        <div className="bg-sky-400/4 border border-sky-400/10 rounded-2xl p-7 mb-5">
          <h3 className="text-base font-semibold text-slate-200 mb-4">Block Diagram</h3>
          <img
            src={p.blockDiagram}
            alt={`${p.title} block diagram`}
            className="w-full rounded-lg bg-white/95 p-4"
          />
        </div>
      )}

      {/* Problem */}
      <div className="bg-sky-400/4 border border-sky-400/10 rounded-2xl p-7 mb-5 border-l-[3px] border-l-red-400">
        <h3 className="text-base font-semibold text-red-400 mb-3">Problem Statement</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{p.problem}</p>
      </div>

      {/* Solution */}
      <div className="bg-sky-400/4 border border-sky-400/10 rounded-2xl p-7 mb-5 border-l-[3px] border-l-sky-400">
        <h3 className="text-base font-semibold text-sky-400 mb-3">Solution & Methodology</h3>
        <ul className="pl-5 space-y-1.5">
          {p.solution.map((item, i) => (
            <li key={i} className="text-sm text-slate-300 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div className="bg-sky-400/4 border border-sky-400/10 rounded-2xl p-7 mb-5 border-l-[3px] border-l-green-400">
        <h3 className="text-base font-semibold text-green-400 mb-3">Impact & Results</h3>
        <ul className="pl-5 space-y-1.5">
          {p.impact.map((item, i) => (
            <li key={i} className="text-sm text-slate-300 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Waveforms placeholder */}
      <div className="bg-sky-400/8 border border-dashed border-sky-400/25 rounded-2xl py-8 px-6 text-center mt-3">
        <p className="text-slate-400 text-sm">
          📎 Waveform captures, simulation screenshots, and additional diagrams coming soon
        </p>
      </div>
    </div>
  );
}