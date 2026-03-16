import { SKILLS, CERTIFICATIONS } from "../data/portfolio";

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-50 mb-8">Skills & Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div
            key={cat}
            className="bg-sky-400/5 border border-sky-400/10 rounded-2xl p-6"
          >
            <h3 className="text-[15px] font-semibold text-sky-400 mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-sm bg-sky-400/8 text-slate-300 rounded-lg px-3.5 py-1.5 border border-sky-400/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-slate-50 mt-12 mb-5">
        Certifications
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {CERTIFICATIONS.map((c, i) => (
          <div
            key={i}
            className="bg-sky-400/4 border border-sky-400/8 rounded-xl px-5 py-3.5 text-sm text-slate-400 flex items-center gap-2.5"
          >
            <span className="text-sky-400">✦</span> {c}
          </div>
        ))}
      </div>
    </div>
  );
}