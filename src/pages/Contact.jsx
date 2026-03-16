import { PROFILE } from "../data/portfolio";

const contacts = [
  { icon: "✉️", label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: "📞", label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/-/g, "")}` },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/saimanasa", href: PROFILE.linkedin },
  { icon: "📍", label: "Location", value: PROFILE.location, href: null },
];

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto pt-5">
      <h2 className="text-3xl font-bold text-slate-50 mb-2">Get in Touch</h2>
      <p className="text-slate-400 mb-9 text-[15px]">
        I'm actively looking for hardware engineering opportunities. Let's connect!
      </p>

      <div className="flex flex-col gap-3">
        {contacts.map((c, i) => {
          const inner = (
            <div
              className={`bg-sky-400/5 border border-sky-400/10 rounded-2xl px-6 py-5 flex items-center gap-4 transition-colors ${
                c.href ? "hover:border-sky-400/35 cursor-pointer" : ""
              }`}
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-xs text-slate-500 font-medium">{c.label}</div>
                <div className="text-[15px] text-slate-50 font-medium">{c.value}</div>
              </div>
            </div>
          );

          return c.href ? (
            <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="no-underline">
              {inner}
            </a>
          ) : (
            <div key={i}>{inner}</div>
          );
        })}
      </div>

      <div className="bg-sky-400/8 rounded-2xl p-7 mt-8 text-center border border-dashed border-sky-400/20">
        <p className="text-slate-400 text-sm">🏆 {PROFILE.award}</p>
      </div>
    </div>
  );
}