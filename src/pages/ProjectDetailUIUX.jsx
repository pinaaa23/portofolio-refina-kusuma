import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "DailyDrip",
  label: "Mobile Design",
  category: "UI/UX Design",
  subtitle: "Social Café & Daily Moments App",
  year: "2024",
  role: "UI/UX Designer",
  platform: "Mobile (iOS & Android)",
  tools: ["Figma", "Prototyping", "User Research", "Auto Layout"],
  figmaUrl: "https://www.figma.com",
  cover: "/gallery/project/UIUX/DailyDrip/cover.png",
  about:
    "DailyDrip adalah aplikasi mobile sosial yang memungkinkan pengguna berbagi momen harian seputar café culture, minuman favorit, dan lokasi terbaik bersama komunitas mereka. Proyek ini hadir untuk menjawab kebutuhan pengguna Gen-Z yang ingin platform yang lebih personal dan visual dibanding media sosial umum — menghadirkan galeri harian, story maps, dan rekomendasi berbasis selera.",
  problem:
    "Pengguna tidak memiliki platform khusus yang menggabungkan dokumentasi tempat café, berbagi momen minuman, dan koneksi sosial dalam satu pengalaman yang intuitif dan estetik. Aplikasi umum terlalu generik dan tidak memenuhi kebutuhan niche yang semakin berkembang.",
  process: [
    {
      phase: "01",
      label: "Empathize & Research",
      icon: "🔍",
      description:
        "Melakukan user interview dengan 12 partisipan usia 18–26 tahun, competitive analysis terhadap 4 aplikasi sejenis, dan pemetaan user journey untuk memahami pain points utama.",
      detail: "Output: Persona, Empathy Map, Competitor Matrix",
      color: "from-violet-600/20 to-indigo-600/10",
      border: "border-violet-500/25",
      accent: "text-violet-300",
      visual: "research",
    },
    {
      phase: "02",
      label: "Define & Ideate",
      icon: "💡",
      description:
        "Menetapkan How Might We statements, membuat information architecture, dan menentukan fitur inti melalui sesi brainstorming dan prioritization matrix.",
      detail: "Output: HMW Statements, Site Map, Feature List",
      color: "from-fuchsia-600/20 to-pink-600/10",
      border: "border-fuchsia-500/25",
      accent: "text-fuchsia-300",
      visual: "ideate",
    },
    {
      phase: "03",
      label: "Design & Prototype",
      icon: "✏️",
      description:
        "Membangun wireframe low-fidelity, dilanjutkan ke high-fidelity UI design di Figma dengan sistem komponen yang konsisten, lalu membuat interactive prototype.",
      detail: "Output: Wireframe, Hi-Fi UI, Interactive Prototype",
      color: "from-cyan-600/20 to-teal-600/10",
      border: "border-cyan-500/25",
      accent: "text-cyan-300",
      visual: "design",
    },
    {
      phase: "04",
      label: "Test & Iterate",
      icon: "🧪",
      description:
        "Usability testing dengan 8 partisipan menggunakan think-aloud protocol. Mengidentifikasi 14 usability issues dan melakukan 2 iterasi desain berdasarkan feedback.",
      detail: "Output: Usability Report, Revised UI, Final Prototype",
      color: "from-emerald-600/20 to-green-600/10",
      border: "border-emerald-500/25",
      accent: "text-emerald-300",
      visual: "test",
    },
  ],
  typography: [
    { name: "Poppins", weight: "800", role: "Display / Heading", size: "32px" },
    { name: "Poppins", weight: "600", role: "Subheading", size: "18px" },
    { name: "Inter", weight: "400", role: "Body Text", size: "14px" },
    { name: "Inter", weight: "400", role: "Caption", size: "11px" },
  ],
  palette: [
    { hex: "#C1717E", name: "Rose Mauve", role: "Primary" },
    { hex: "#FADADD", name: "Blush Pink", role: "Background" },
    { hex: "#F5A0A9", name: "Soft Coral", role: "Accent" },
    { hex: "#FFFFFF", name: "Pure White", role: "Surface" },
    { hex: "#4A2530", name: "Deep Rose", role: "Text" },
    { hex: "#E8C4C8", name: "Muted Pink", role: "Stroke" },
  ],
  uiElements: [
    { name: "Navigation Bar", desc: "Bottom tab dengan active indicator pill" },
    { name: "Card Component", desc: "Image card dengan overlay gradient dan caption" },
    { name: "Story Ring", desc: "Circular avatar dengan animasi progress ring" },
    { name: "CTA Button", desc: "Rounded-full dengan shadow coral-rose" },
    { name: "Input Field", desc: "Soft background dengan floating label" },
    { name: "Toast Notification", desc: "Micro-interaction feedback element" },
  ],
  stats: [
    { value: "14+", label: "Screens Designed" },
    { value: "8", label: "Usability Tests" },
    { value: "2", label: "Design Iterations" },
    { value: "4wk", label: "Project Duration" },
  ],
};

/* ─────────────────── PROCESS VISUAL COMPONENTS ─────────────────── */
function ResearchVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-2">
        {["User Interview", "Competitive Analysis", "Pain Point Mapping"].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
            <div className="flex-1 rounded-full bg-white/5 px-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-slate-300">{item}</span>
                <span className="text-[9px] font-bold text-violet-300">✓</span>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-1 rounded-xl border border-violet-500/20 bg-violet-500/10 p-2">
          <p className="text-[9px] font-bold text-violet-300">12 Participants Interviewed</p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-3 w-3 rounded-full bg-violet-400/60" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IdeateVisual() {
  const items = ["Feature A", "Feature B", "Feature C", "Feature D"];
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-1.5">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-fuchsia-300">Priority Matrix</p>
        <div className="grid grid-cols-2 gap-1">
          {[
            { label: "High Impact\nHigh Effort", bg: "bg-fuchsia-500/20", border: "border-fuchsia-500/30" },
            { label: "High Impact\nLow Effort", bg: "bg-pink-500/30", border: "border-pink-400/40" },
            { label: "Low Impact\nHigh Effort", bg: "bg-white/5", border: "border-white/10" },
            { label: "Low Impact\nLow Effort", bg: "bg-white/5", border: "border-white/10" },
          ].map((q, i) => (
            <div key={i} className={`rounded-lg border ${q.border} ${q.bg} p-1.5`}>
              <p className="whitespace-pre-line text-[8px] font-medium leading-tight text-slate-300">{q.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex w-full gap-1.5">
        {["Lo-Fi", "Hi-Fi"].map((stage, i) => (
          <div key={i} className="flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="border-b border-white/8 px-2 py-1">
              <p className="text-[9px] font-bold text-cyan-300">{stage}</p>
            </div>
            <div className="grid grid-cols-2 gap-0.5 p-1">
              {Array.from({ length: 4 }).map((_, j) => (
                <div
                  key={j}
                  className={`aspect-[9/16] rounded-md ${
                    i === 0
                      ? "bg-white/8 border border-white/10"
                      : "border border-[#C1717E]/30 bg-gradient-to-b from-[#C1717E]/20 to-[#FADADD]/10"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestVisual() {
  const issues = [14, 8, 6];
  const labels = ["Found", "Critical", "Fixed"];
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-2">
        <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-300">Usability Issues</p>
        {issues.map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-10 text-right text-[9px] font-bold text-slate-300">{labels[i]}</span>
            <div className="flex-1 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                style={{ width: `${(val / 14) * 100}%` }}
              />
            </div>
            <span className="w-5 text-[9px] font-bold text-emerald-300">{val}</span>
          </div>
        ))}
        <div className="mt-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-1.5 text-center">
          <p className="text-[9px] font-bold text-emerald-300">SUS Score: 82 / 100 ✓</p>
        </div>
      </div>
    </div>
  );
}

const PROCESS_VISUALS = { research: ResearchVisual, ideate: IdeateVisual, design: DesignVisual, test: TestVisual };

/* ─────────────────── INTERSECTION OBSERVER HOOK ─────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─────────────────── ANIMATED SECTION WRAPPER ─────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────── SECTION HEADER ─────────────────── */
function SectionHeader({ label, title }) {
  return (
    <div className="mb-6 sm:mb-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400">{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
    </div>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailUIUX() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white">
      {/* ── BG Layer ── */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.38),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#04060f_0%,#070b1d_45%,#020308_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">

        {/* ── Back Button ── */}
        <button
          type="button"
          onClick={() => navigate("/portfolio")}
          className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-violet-400/30 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </button>

        {/* ══════════════ HERO SECTION ══════════════ */}
        <FadeUp>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_32px_80px_rgba(2,6,23,0.6)] backdrop-blur-xl">
            {/* Cover Image */}
            <div className="relative overflow-hidden bg-black/30">
              <div className={`absolute inset-0 bg-gradient-to-br from-rose-900/50 to-violet-900/50 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />
              <img
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-top sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070b1d] via-[#070b1d]/40 to-transparent" />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-300">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-slate-400">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/8 pt-6 sm:grid-cols-4">
                {[
                  { label: "Year", value: PROJECT.year },
                  { label: "Role", value: PROJECT.role },
                  { label: "Platform", value: PROJECT.platform },
                  { label: "Tools", value: PROJECT.tools.join(" · ") },
                ].map((meta) => (
                  <div key={meta.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{meta.label}</p>
                    <p className="mt-1 text-xs font-semibold leading-relaxed text-white">{meta.value}</p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {PROJECT.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/5 p-3 text-center">
                    <p className="text-2xl font-black text-violet-300">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-7">
                <a
                  href={PROJECT.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(139,92,246,0.55)]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" />
                    <path d="M9.5 57A9.5 9.5 0 0 1 9.5 38h9.5v9.5A9.5 9.5 0 0 1 9.5 57z" />
                    <path d="M0 19a9.5 9.5 0 0 0 9.5 9.5H19V9.5H9.5A9.5 9.5 0 0 0 0 19z" />
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19z" />
                  </svg>
                  View in Figma
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Overview" title="About This Project" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">What is DailyDrip?</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90">{PROJECT.about}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400">Problem Statement</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90">{PROJECT.problem}</p>
                <div className="mt-4 rounded-2xl border border-rose-500/20 bg-rose-500/8 p-4">
                  <p className="text-xs font-semibold italic text-rose-200/80">
                    "Bagaimana kita bisa menciptakan ruang digital yang nyaman untuk berbagi momen café culture sehari-hari?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ PROCESS / METODE ══════════════ */}
        <FadeUp delay={120} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Methodology" title="Design Process" />

            <div className="space-y-5">
              {PROJECT.process.map((step, idx) => {
                const Visual = PROCESS_VISUALS[step.visual];
                return (
                  <FadeUp key={step.phase} delay={idx * 80}>
                    <div className={`overflow-hidden rounded-2xl border ${step.border} bg-gradient-to-br ${step.color} backdrop-blur-md`}>
                      <div className="grid gap-0 sm:grid-cols-[1fr_200px]">
                        {/* Text */}
                        <div className="p-5 sm:p-6">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-black text-white/10">{step.phase}</span>
                            <span className="text-lg">{step.icon}</span>
                            <h3 className={`text-sm font-extrabold uppercase tracking-wide ${step.accent}`}>
                              {step.label}
                            </h3>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{step.description}</p>
                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Output:</span>
                            <span className="text-[9px] font-semibold text-slate-300">{step.detail.replace("Output: ", "")}</span>
                          </div>
                        </div>

                        {/* Visual Panel */}
                        <div className="hidden sm:flex border-l border-white/8 min-h-[140px]">
                          <Visual />
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ DESIGN SYSTEM ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Design System" title="Visual Language" />

            <div className="space-y-8">
              {/* ── Typography ── */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Typography</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PROJECT.typography.map((t, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/4 p-4">
                      <div
                        className="shrink-0 text-white leading-none"
                        style={{ fontFamily: t.name, fontWeight: t.weight, fontSize: i === 0 ? "28px" : i === 1 ? "18px" : i === 2 ? "14px" : "11px" }}
                      >
                        Aa
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{t.name} {t.weight}</p>
                        <p className="text-[10px] text-slate-400">{t.role} · {t.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Color Palette ── */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Color Palette</p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {PROJECT.palette.map((c) => (
                    <div key={c.hex} className="group flex flex-col items-center gap-2">
                      <div
                        className="h-14 w-full rounded-xl border border-white/10 shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] sm:h-16"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-white">{c.name}</p>
                        <p className="text-[9px] font-mono text-slate-500">{c.hex}</p>
                        <p className="text-[9px] text-slate-500">{c.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── UI Elements ── */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">UI Elements</p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {PROJECT.uiElements.map((el, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 p-3 transition-all duration-200 hover:border-violet-400/20 hover:bg-white/6"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-[10px] font-black text-violet-300">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-white">{el.name}</p>
                        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">{el.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FINAL MOCKUPS ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Final Output" title="Design Mockups" />

            {/* Main cover full-width */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_28px_70px_rgba(193,113,126,0.2)]">
              <img
                src={PROJECT.cover}
                alt="DailyDrip full mockup showcase"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Two cropped panels */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Left — crop top portion */}
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#C1717E]/15 to-[#FADADD]/5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(193,113,126,0.25)]">
                <div className="overflow-hidden">
                  <img
                    src={PROJECT.cover}
                    alt="DailyDrip screens overview"
                    className="w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                    style={{ height: "220px", objectPosition: "right 20%" }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-white">Screen Overview</p>
                  <p className="mt-1 text-[11px] text-slate-400">Multi-screen UI showcase menampilkan keseluruhan alur aplikasi DailyDrip.</p>
                </div>
              </div>

              {/* Right — crop center/left portion */}
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-indigo-600/5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)]">
                <div className="overflow-hidden">
                  <img
                    src={PROJECT.cover}
                    alt="DailyDrip branding detail"
                    className="w-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
                    style={{ height: "220px", objectPosition: "left 40%" }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-white">Branding & Identity</p>
                  <p className="mt-1 text-[11px] text-slate-400">Label kategori, tipografi, dan identitas visual yang konsisten pada setiap layar.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={80} className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/portfolio")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-violet-400/30 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Projects
          </button>

          <a
            href={PROJECT.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-violet-400/25 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
          >
            Open Figma File
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </FadeUp>

      </div>
    </main>
  );
}
