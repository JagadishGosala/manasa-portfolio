import FadeIn from "../components/FadeIn";
import { PROFILE } from "../data/portfolio";

const contacts = [
  { icon: "✉️", label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: "📞", label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/-/g, "")}` },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/saimanasa", href: PROFILE.linkedin },
  { icon: "📍", label: "Location", value: PROFILE.location, href: null },
];

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto pt-4">
      <FadeIn>
        <h2 className="text-3xl font-bold text-warm-800 mb-1">Get in Touch</h2>
        <p className="text-warm-400 mb-8 text-[15px]">
          I'm actively looking for hardware engineering opportunities. Let's connect!
        </p>
      </FadeIn>

      <div className="flex flex-col gap-3">
        {contacts.map((c, i) => {
          const inner = (
            <div
              className={`bg-white border border-warm-200/80 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm transition-all ${
                c.href ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : ""
              }`}
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-xs text-warm-400 font-medium">{c.label}</div>
                <div className="text-[15px] text-warm-800 font-medium">{c.value}</div>
              </div>
            </div>
          );

          return (
            <FadeIn key={i} delay={i * 0.1}>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.4}>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 mt-8 text-center">
          <p className="text-teal-700 text-sm font-medium">🏆 {PROFILE.award}</p>
        </div>
      </FadeIn>
    </div>
  );
}