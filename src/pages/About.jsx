import { ABOUT, EDUCATION, EXPERIENCE } from "../data/portfolio";

export default function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-50 mb-8">About Me</h2>

      {/* Bio */}
      <div className="bg-sky-400/5 border border-sky-400/10 rounded-2xl p-8 mb-8">
        {ABOUT.map((p, i) => (
          <p key={i} className="text-[15px] text-slate-300 leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </div>

      {/* Education */}
      <h3 className="text-lg font-semibold text-sky-400 mb-4">Education</h3>
      <div className="flex flex-col gap-3 mb-8">
        {EDUCATION.map((e, i) => (
          <div key={i} className="bg-sky-400/5 border border-sky-400/10 rounded-xl p-5">
            <div className="font-semibold text-slate-50 text-[15px]">{e.school}</div>
            <div className="text-slate-400 text-sm mt-1">{e.degree} · GPA: {e.gpa}</div>
            <div className="text-slate-500 text-xs mt-1">{e.year}</div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <h3 className="text-lg font-semibold text-sky-400 mb-4">Experience</h3>
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className="bg-sky-400/5 border border-sky-400/10 rounded-xl px-5 py-4 flex justify-between items-start flex-wrap gap-2"
          >
            <div>
              <div className="font-semibold text-slate-50 text-[15px]">{e.role}</div>
              <div className="text-slate-400 text-sm">{e.company}</div>
            </div>
            <div className="text-right">
              <div className="text-slate-500 text-xs">{e.period}</div>
              <div className="text-slate-500 text-xs">{e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}