import FadeIn from "../components/FadeIn";
import { ABOUT, EDUCATION, EXPERIENCE } from "../data/portfolio";

export default function About() {
  return (
    <div>
      <FadeIn>
        <h2 className="text-3xl font-bold text-warm-800 mb-6">About Me</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="bg-white border border-warm-200/80 rounded-2xl p-7 mb-8 shadow-sm">
          {ABOUT.map((p, i) => (
            <p key={i} className="text-[15px] text-warm-600 leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h3 className="text-lg font-semibold text-teal-700 mb-4">Education</h3>
      </FadeIn>
      <div className="flex flex-col gap-3 mb-8">
        {EDUCATION.map((e, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.08}>
            <div className="bg-white border border-warm-200/80 rounded-xl p-5 shadow-sm">
              <div className="font-semibold text-warm-800 text-[15px]">{e.school}</div>
              <div className="text-warm-400 text-sm mt-1">{e.degree} · GPA: {e.gpa}</div>
              <div className="text-warm-400 text-xs mt-1">{e.year}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15}>
        <h3 className="text-lg font-semibold text-teal-700 mb-4">Experience</h3>
      </FadeIn>
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((e, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-white border border-warm-200/80 rounded-xl px-5 py-4 flex justify-between items-start flex-wrap gap-2 shadow-sm">
              <div>
                <div className="font-semibold text-warm-800 text-[15px]">{e.role}</div>
                <div className="text-warm-400 text-sm">{e.company}</div>
              </div>
              <div className="text-right">
                <div className="text-warm-400 text-xs">{e.period}</div>
                <div className="text-warm-400 text-xs">{e.location}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}