export default function Resume() {
  const pdfUrl = "/SaiManasaA_resume.pdf";

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-50">Resume</h2>
          <p className="text-slate-400 text-[15px] mt-1">
            Sai Manasa Alamuri — Verification & Design Engineer
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400/10 text-sky-400 no-underline rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-sky-400/20 transition-colors"
          >
            Open in New Tab ↗
          </a>
          <a
            href={pdfUrl}
            download
            className="bg-gradient-to-r from-sky-500 to-sky-700 text-white no-underline rounded-lg px-5 py-2.5 text-sm font-medium hover:-translate-y-0.5 transition-transform"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Embedded PDF viewer */}
      <div className="bg-sky-400/5 border border-sky-400/10 rounded-2xl overflow-hidden">
        <iframe
          src={pdfUrl}
          title="Resume - Sai Manasa Alamuri"
          className="w-full border-none"
          style={{ height: "85vh" }}
        />
      </div>

      {/* Fallback for mobile / unsupported browsers */}
      <p className="text-center text-slate-500 text-xs mt-4">
        If the resume doesn't display above, you can{" "}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline"
        >
          open it directly
        </a>{" "}
        or download it.
      </p>
    </div>
  );
}