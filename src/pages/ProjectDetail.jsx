import { useParams, Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import { PROJECTS } from "../data/portfolio";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = PROJECTS.find((proj) => proj.id === id);

  if (!p) {
    return (
      <div className="text-center pt-20">
        <p className="text-warm-400">Project not found.</p>
        <Link to="/projects" className="text-teal-600 mt-4 inline-block">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/projects"
        className="inline-block bg-teal-50 text-teal-700 no-underline rounded-lg px-4 py-2 text-sm mb-6 hover:bg-teal-100 transition-colors font-medium"
      >
        ← Back to Projects
      </Link>

      <FadeIn>
        <div className="flex items-center gap-4 flex-wrap mb-2">
          <span className="text-4xl">{p.icon}</span>
          <div>
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest">{p.domain}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-warm-800 mt-1">{p.title}</h2>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {p.tags.map((t) => (
            <span key={t} className="text-xs bg-teal-50 text-teal-600 rounded-lg px-3.5 py-1 border border-teal-100">{t}</span>
          ))}
        </div>
      </FadeIn>

      {/* Quick Stats */}
      {p.quickStats && (
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {p.quickStats.map((s, i) => (
              <div key={i} className="bg-white border border-warm-200/80 rounded-xl py-4 px-4 text-center shadow-sm">
                <div className="text-xl font-bold text-teal-600">{s.value}</div>
                <div className="text-xs text-warm-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Story */}
      {p.story && (
        <FadeIn delay={0.2}>
          <div className="bg-white border border-warm-200/80 rounded-xl p-6 mb-4 shadow-sm border-l-[3px] border-l-teal-400">
            <h3 className="text-[15px] font-semibold text-teal-700 mb-2">The Story</h3>
            {p.story.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-warm-500 leading-relaxed mb-2.5 last:mb-0">{para}</p>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Block Diagram */}
      {p.blockDiagram && (
        <FadeIn delay={0.25}>
          <div className="bg-white border border-warm-200/80 rounded-xl p-6 mb-4 shadow-sm">
            <h3 className="text-[15px] font-semibold text-warm-700 mb-3">Block Diagram</h3>
            <img
              src={p.blockDiagram}
              alt={`${p.title} block diagram`}
              className="w-full rounded-lg"
            />
          </div>
        </FadeIn>
      )}

      {/* Problem */}
      <FadeIn delay={0.2}>
        <div className="bg-white border border-warm-200/80 rounded-xl p-6 mb-4 shadow-sm border-l-[3px] border-l-red-300">
          <h3 className="text-[15px] font-semibold text-red-500 mb-2">Problem Statement</h3>
          <p className="text-sm text-warm-500 leading-relaxed">{p.problem}</p>
        </div>
      </FadeIn>

      {/* Solution */}
      <FadeIn delay={0.25}>
        <div className="bg-white border border-warm-200/80 rounded-xl p-6 mb-4 shadow-sm border-l-[3px] border-l-teal-400">
          <h3 className="text-[15px] font-semibold text-teal-700 mb-2">Solution & Methodology</h3>
          <ul className="pl-5 space-y-1">
            {p.solution.map((item, i) => (
              <li key={i} className="text-sm text-warm-500 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Impact */}
      <FadeIn delay={0.3}>
        <div className="bg-white border border-warm-200/80 rounded-xl p-6 mb-4 shadow-sm border-l-[3px] border-l-emerald-400">
          <h3 className="text-[15px] font-semibold text-emerald-600 mb-2">Impact & Results</h3>
          <ul className="pl-5 space-y-1">
            {p.impact.map((item, i) => (
              <li key={i} className="text-sm text-warm-500 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Waveforms placeholder */}
      <FadeIn delay={0.35}>
        <div className="bg-warm-100/50 border border-dashed border-warm-300 rounded-xl py-6 px-6 text-center mt-2">
          <p className="text-warm-400 text-sm">📎 Waveform captures and simulation screenshots coming soon</p>
        </div>
      </FadeIn>
    </div>
  );
}