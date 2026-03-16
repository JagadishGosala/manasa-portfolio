import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { PROFILE, PROJECTS, EXPERIENCE } from "../data/portfolio";

const FEATURED_IDS = ["aes-gcm", "protocol-converter", "digital-design"];
const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));

const HIGHLIGHTS = [
  { num: "4.0", label: "Master's GPA" },
  { num: "98%", label: "Coverage at WDC" },
  { num: "3", label: "Design Domains" },
  { num: "6+", label: "Certifications" },
];

const DOMAINS = [
  { title: "RTL Design", desc: "Synthesizable SystemVerilog — FIFOs, DMA controllers, cryptographic engines, and network switches", icon: "⚡" },
  { title: "UVM Verification", desc: "Constrained-random testbenches, functional coverage closure, and reusable verification IP", icon: "🔍" },
  { title: "Analog/Mixed-Signal", desc: "Op-amps, DACs, and analog front-ends designed and validated in Cadence Virtuoso across PVT corners", icon: "📊" },
];

const TYPING_STRINGS = [
  "Verification & Design Engineer",
  "RTL Design Specialist",
  "UVM Verification Engineer",
  "Mixed-Signal IC Designer",
];

function useTyping(strings, typeSpeed = 80, deleteSpeed = 40, pause = 1800) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % strings.length);
    } else {
      timer = setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, idx, deleting, strings, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const particles = [];

    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      const size = Math.random() * 4 + 3;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.left = Math.random() * 100 + "%";
      p.style.bottom = "-10px";
      p.style.animation = `float-up ${Math.random() * 8 + 8}s linear ${Math.random() * 10}s infinite`;
      p.style.opacity = "0";
      el.appendChild(p);
      particles.push(p);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}

export default function Home() {
  const typedText = useTyping(TYPING_STRINGS);

  return (
    <div className="-mx-6">
      {/* ─── Hero ─── */}
      <section className="animated-gradient relative px-6 pt-14 pb-16 border-b border-warm-200/60 overflow-hidden">
        <Particles />
        <div className="relative z-10 text-center max-w-[1100px] mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg ring-4 ring-teal-400/20"
          >
            {PROFILE.initials}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-warm-800 mb-3"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-8 mb-5"
          >
            <span className="text-lg md:text-xl text-teal-600 font-medium typing-cursor">
              {typedText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-[15px] text-warm-500 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Master's candidate at Sacramento State with hands-on ASIC verification
            experience at Western Digital. I design hardware that's fast, correct,
            and secure — from RTL to silicon-ready analog.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              to="/projects"
              className="bg-teal-600 text-white no-underline rounded-xl px-7 py-3 text-[15px] font-semibold shadow-md hover:bg-teal-700 hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-teal-600/30 text-teal-700 no-underline rounded-xl px-7 py-3 text-[15px] font-semibold hover:bg-teal-50 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Highlights ─── */}
      <section className="px-6 py-12 border-b border-warm-200/60">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white border border-warm-200/80 rounded-xl py-5 px-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-teal-600">{s.num}</div>
                <div className="text-xs text-warm-400 mt-1">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── What I Do ─── */}
      <section className="px-6 py-14 border-b border-warm-200/60">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-warm-800 mb-6">What I Do</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DOMAINS.map((d, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white border border-warm-200/80 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all h-full">
                  <span className="text-2xl mb-2 block">{d.icon}</span>
                  <h3 className="text-[15px] font-semibold text-teal-700 mb-1.5">
                    {d.title}
                  </h3>
                  <p className="text-sm text-warm-500 leading-relaxed">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="px-6 py-14 border-b border-warm-200/60">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
              <div>
                <h2 className="text-2xl font-bold text-warm-800">Featured Projects</h2>
                <p className="text-warm-400 text-sm mt-0.5">Design and verification work</p>
              </div>
              <Link to="/projects" className="text-teal-600 text-sm no-underline hover:underline font-medium">
                View all →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.12}>
                <Link
                  to={`/projects/${p.id}`}
                  className="no-underline bg-white border border-warm-200/80 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col h-full group"
                >
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div className="text-[10px] font-semibold text-teal-600 uppercase tracking-widest mb-1">
                    {p.domain}
                  </div>
                  <h3 className="text-[15px] font-semibold text-warm-800 mb-2 group-hover:text-teal-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-warm-400 leading-relaxed mb-3 flex-1">
                    {p.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] bg-teal-50 text-teal-600 rounded-md px-2 py-0.5 border border-teal-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section className="px-6 py-14 border-b border-warm-200/60">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-2xl font-bold text-warm-800">Experience</h2>
              <Link to="/about" className="text-teal-600 text-sm no-underline hover:underline font-medium">
                Full background →
              </Link>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-3">
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-warm-200/80 rounded-xl px-5 py-3.5 flex justify-between items-start flex-wrap gap-2 shadow-sm hover:shadow-md transition-shadow">
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
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="px-6 py-16 text-center">
        <FadeIn>
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-warm-800 mb-2">
              Let's Build Something Together
            </h2>
            <p className="text-warm-400 text-[15px] mb-6 max-w-lg mx-auto">
              Actively seeking full-time roles in ASIC design, verification,
              and mixed-signal IC engineering.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/resume"
                className="bg-teal-600 text-white no-underline rounded-xl px-7 py-3 text-[15px] font-semibold shadow-md hover:bg-teal-700 hover:-translate-y-0.5 transition-all"
              >
                View Resume
              </Link>
              <a
                href={`mailto:${PROFILE.email}`}
                className="border border-teal-600/30 text-teal-700 no-underline rounded-xl px-7 py-3 text-[15px] font-semibold hover:bg-teal-50 transition-all"
              >
                Email Me
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}