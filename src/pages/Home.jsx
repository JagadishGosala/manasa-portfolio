import { Link } from "react-router-dom";
import { PROFILE, PROJECTS, EXPERIENCE } from "../data/portfolio";

const FEATURED_IDS = ["aes-gcm", "protocol-converter", "digital-design"];
const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));

const HIGHLIGHTS = [
  { num: "4.0", label: "Master's GPA" },
  { num: "98%", label: "Functional Coverage at WDC" },
  { num: "3", label: "Design Domains" },
  { num: "6+", label: "Industry Certifications" },
];

const DOMAINS = [
  {
    title: "RTL Design",
    desc: "Synthesizable SystemVerilog — FIFOs, DMA controllers, cryptographic engines, and network switches",
    color: "text-sky-400",
  },
  {
    title: "UVM Verification",
    desc: "Constrained-random testbenches, functional coverage closure, and reusable verification IP",
    color: "text-emerald-400",
  },
  {
    title: "Analog/Mixed-Signal",
    desc: "Op-amps, DACs, and analog front-ends designed and validated in Cadence Virtuoso across PVT corners",
    color: "text-amber-400",
  },
];

export default function Home() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="text-center pt-16 pb-20 border-b border-sky-400/10">
        <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-sky-400 to-sky-600 mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-[#0a0f1a] shadow-[0_0_40px_rgba(99,179,237,0.3)] ring-4 ring-sky-400/20">
          {PROFILE.initials}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-3">
          {PROFILE.name}
        </h1>
        <p className="text-xl text-sky-400 font-medium mb-6">{PROFILE.tagline}</p>
        <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Master's candidate at Sacramento State with hands-on ASIC verification
          experience at Western Digital. I design hardware that's fast, correct,
          and secure — from RTL to silicon-ready analog.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/projects"
            className="bg-gradient-to-r from-sky-500 to-sky-700 text-white no-underline rounded-xl px-8 py-3.5 text-[15px] font-semibold shadow-[0_4px_20px_rgba(66,153,225,0.3)] hover:-translate-y-0.5 transition-transform"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-sky-400/40 text-sky-400 no-underline rounded-xl px-8 py-3.5 text-[15px] font-semibold hover:bg-sky-400/8 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ─── Highlights ─── */}
      <section className="py-16 border-b border-sky-400/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((s, i) => (
            <div
              key={i}
              className="bg-sky-400/5 border border-sky-400/10 rounded-2xl py-7 px-4 text-center"
            >
              <div className="text-3xl font-bold text-sky-400">{s.num}</div>
              <div className="text-xs text-slate-400 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What I Do ─── */}
      <section className="py-16 border-b border-sky-400/10">
        <h2 className="text-2xl font-bold text-slate-50 mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DOMAINS.map((d, i) => (
            <div
              key={i}
              className="bg-sky-400/5 border border-sky-400/10 rounded-2xl p-6"
            >
              <h3 className={`text-base font-semibold ${d.color} mb-2`}>
                {d.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="py-16 border-b border-sky-400/10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-50">Featured Projects</h2>
            <p className="text-slate-400 text-sm mt-1">
              A selection of design and verification work
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sky-400 text-sm no-underline hover:underline"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="no-underline bg-sky-400/5 border border-sky-400/10 rounded-2xl p-6 transition-all hover:border-sky-400/35 hover:-translate-y-0.5 group flex flex-col"
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <div className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest mb-1.5">
                {p.domain}
              </div>
              <h3 className="text-[15px] font-semibold text-slate-50 mb-2 group-hover:text-sky-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-sky-400/10 text-sky-400 rounded-md px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Experience Snapshot ─── */}
      <section className="py-16 border-b border-sky-400/10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-slate-50">Experience</h2>
          <Link
            to="/about"
            className="text-sky-400 text-sm no-underline hover:underline"
          >
            Full background →
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {EXPERIENCE.map((e, i) => (
            <div
              key={i}
              className="bg-sky-400/5 border border-sky-400/10 rounded-xl px-5 py-4 flex justify-between items-start flex-wrap gap-2"
            >
              <div>
                <div className="font-semibold text-slate-50 text-[15px]">
                  {e.role}
                </div>
                <div className="text-slate-400 text-sm">{e.company}</div>
              </div>
              <div className="text-right">
                <div className="text-slate-500 text-xs">{e.period}</div>
                <div className="text-slate-500 text-xs">{e.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-50 mb-3">
          Let's Build Something Together
        </h2>
        <p className="text-slate-400 text-[15px] mb-8 max-w-lg mx-auto">
          I'm actively looking for full-time roles in ASIC design, verification,
          and mixed-signal IC engineering.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/resume"
            className="bg-gradient-to-r from-sky-500 to-sky-700 text-white no-underline rounded-xl px-8 py-3.5 text-[15px] font-semibold shadow-[0_4px_20px_rgba(66,153,225,0.3)] hover:-translate-y-0.5 transition-transform"
          >
            View Resume
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            className="border border-sky-400/40 text-sky-400 no-underline rounded-xl px-8 py-3.5 text-[15px] font-semibold hover:bg-sky-400/8 transition-colors"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}