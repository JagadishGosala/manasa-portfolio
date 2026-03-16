import FadeIn from "../components/FadeIn";

export default function Resume() {
  const pdfUrl = "/SaiManasaA_resume.pdf";

  return (
    <div>
      <FadeIn>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
          <div>
            <h2 className="text-3xl font-bold text-warm-800">Resume</h2>
            <p className="text-warm-400 text-[15px] mt-1">
              Sai Manasa Alamuri — Verification & Design Engineer
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-50 text-teal-700 no-underline rounded-lg px-5 py-2 text-sm font-medium hover:bg-teal-100 transition-colors border border-teal-100"
            >
              Open in New Tab ↗
            </a>
            <a
              href={pdfUrl}
              download
              className="bg-teal-600 text-white no-underline rounded-lg px-5 py-2 text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="bg-white border border-warm-200/80 rounded-xl overflow-hidden shadow-sm">
          <iframe
            src={pdfUrl}
            title="Resume - Sai Manasa Alamuri"
            className="w-full border-none"
            style={{ height: "82vh" }}
          />
        </div>
      </FadeIn>

      <p className="text-center text-warm-400 text-xs mt-3">
        If the resume doesn't display above, you can{" "}
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          open it directly
        </a>{" "}
        or download it.
      </p>
    </div>
  );
}