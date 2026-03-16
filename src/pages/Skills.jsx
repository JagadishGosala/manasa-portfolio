import FadeIn from "../components/FadeIn";
import { SKILLS, CERTIFICATIONS } from "../data/portfolio";

export default function Skills() {
  return (
    <div>
      <FadeIn>
        <h2 className="text-3xl font-bold text-warm-800 mb-6">Skills & Tools</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <FadeIn key={cat} delay={i * 0.1}>
            <div className="bg-white border border-warm-200/80 rounded-xl p-5 shadow-sm h-full">
              <h3 className="text-[15px] font-semibold text-teal-700 mb-3">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-sm bg-warm-50 text-warm-600 rounded-lg px-3 py-1.5 border border-warm-200/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <h3 className="text-xl font-semibold text-warm-800 mt-10 mb-4">Certifications</h3>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {CERTIFICATIONS.map((c, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.06}>
            <div className="bg-white border border-warm-200/80 rounded-xl px-5 py-3 text-sm text-warm-500 flex items-center gap-2.5 shadow-sm">
              <span className="text-teal-500">✦</span> {c}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}