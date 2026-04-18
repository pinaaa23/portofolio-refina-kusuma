import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "Parakelana",
  label: "Mobile Design",
  category: "UI/UX Design",
  subtitle: "Outdoor Equipment Rental Platform for Adventurers",
  year: "2025",
  role: "UI/UX Designer",
  platform: "Mobile Design",
  tools: ["Figma", "Figjam"],
  figmaUrl: "https://www.figma.com/proto/Ud2A9emPvUE9mrRCisQ3rn/UI-UX-PARAKELANA?node-id=325-58&starting-point-node-id=325%3A58&t=oAwyFTOuf2iHTeQv-1",
  cover: "/gallery/project/UIUX/parakelana/cover1.jpg",
  about:
    "Parakelana is a comprehensive outdoor equipment rental platform designed to simplify the preparation process for hikers and outdoor enthusiasts. The platform provides a seamless bridge between rental stores and users, ensuring that reliable gear is accessible with just a few clicks. Focused on user confidence and operational efficiency, Parakelana eliminates the traditional hurdles of manual inventory checks and physical store scouting.",
  problem:
    "Traditional outdoor gear rental processes are often fragmented and inefficient. Beginners frequently struggle with lack of equipment knowledge, unclear rental terms, and the necessity to visit multiple physical locations to verify stock availability, leading to a frustrating pre-hiking experience.",
  process: [
    {
      phase: "01",
      label: "Empathize",
      icon: "🔍",
      description:
        "Secondary research was conducted to understand the common pain points in the rental industry. I analyzed user behaviors and expectations regarding outdoor gear accessibility, focusing on trust and availability factors that influence decision-making.",
      detail: "Output: User Pain Points, Market Analysis",
      color: "from-emerald-600/20 to-teal-600/10",
      border: "border-emerald-500/25",
      accent: "text-emerald-300",
      visual: "research",
    },
    {
      phase: "02",
      label: "Define",
      icon: "💡",
      description:
        "Synthesis of research data led to a clear problem statement. I identified that the core need is not just renting gear, but providing a 'one-stop-shop' experience that builds confidence for beginner hikers while streamlining the workflow for experts.",
      detail: "Output: Problem Statement, User Journey",
      color: "from-lime-600/20 to-green-600/10",
      border: "border-lime-500/25",
      accent: "text-lime-300",
      visual: "define",
    },
    {
      phase: "03",
      label: "Ideate",
      icon: "✏️",
      description:
        "Brainstorming solutions focused on real-time inventory tracking, store-based filtering, and a simplified booking flow. I prioritized features that reduce cognitive load, such as categorized gear sets and quick-add systems.",
      detail: "Output: Sitemap, Wireframes, Feature List",
      color: "from-yellow-600/20 to-amber-600/10",
      border: "border-yellow-500/25",
      accent: "text-yellow-300",
      visual: "ideate",
    },
    {
      phase: "04",
      label: "Design",
      icon: "🎨",
      description:
        "Iterative design process from lo-fi wireframes to high-fidelity mockups. The visual direction was chosen to evoke a sense of adventure and reliability, using a dark outdoor-inspired theme with vibrant emerald and yellow accents.",
      detail: "Output: High-fidelity UI, Style Guide",
      color: "from-emerald-600/20 to-lime-600/10",
      border: "border-emerald-400/30",
      accent: "text-emerald-300",
      visual: "design",
    },
  ],
  typography: [
    { name: "Outfit", weight: "800", role: "Display / Heading", size: "32px", text: "Ready for Nature?" },
    { name: "Outfit", weight: "600", role: "Subheading", size: "18px", text: "Your Gear, Your Adventure" },
    { name: "Inter", weight: "400", role: "Body Text", size: "14px", text: "Explore the wild with the best rental equipment." },
    { name: "Inter", weight: "500", role: "Button", size: "14px", text: "Rent Now" },
  ],
  palette: [
    { hex: "#10b981", name: "Emerald Green", role: "Primary" },
    { hex: "#a3e635", name: "Lime Accent", role: "Secondary" },
    { hex: "#facc15", name: "Yellow Aura", role: "Highlight" },
    { hex: "#050816", name: "Deep Night", role: "BG Dark" },
    { hex: "#1e293b", name: "Slate Gray", role: "Surface" },
    { hex: "#f1f5f9", name: "Off White", role: "Text" },
  ],
  swot: [
    { title: "Strengths", items: ["Clean UI/UX", "Trusted store verified", "Affordable & complete gear sets"], color: "emerald" },
    { title: "Weaknesses", items: ["Limited store coverage", "Potential stock synchronization lag", "Limited delivery options"], color: "yellow" },
    { title: "Opportunities", items: ["Growing hiking trend", "Urban city expansion", "Community & Guide partnerships"], color: "lime" },
    { title: "Threats", items: ["Direct competitors", "Seasonal demand fluctuation", "Physical equipment damage"], color: "rose" },
  ],
  stats: [
    { value: "12+", label: "Screens Designed" },
    { value: "5+", label: "Key Features" },
    { value: "3", label: "Iterations" },
    { value: "2mo", label: "Duration" },
  ],
};

/* ─────────────────── PROCESS VISUAL COMPONENTS ─────────────────── */
function ResearchVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-2">
        {["Market Research", "Competitor Audit", "User Needs"].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <div className="flex-1 rounded-full bg-white/5 px-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-slate-300">{item}</span>
                <span className="text-[9px] font-bold text-emerald-300">✓</span>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-1.5 text-center">
          <p className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">Discovery Phase Complete</p>
        </div>
      </div>
    </div>
  );
}

function DefineVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-1.5 text-center">
        <div className="inline-block rounded-full border border-lime-500/30 bg-lime-500/10 px-2 py-0.5 text-[8px] font-bold uppercase text-lime-400">HMW Question</div>
        <p className="text-[9px] font-semibold leading-relaxed text-slate-200 italic">"How might we simplify hiking preparation for first-timers?"</p>
        <div className="mt-1 h-px w-full bg-gradient-to-r from-transparent via-lime-500/30 to-transparent" />
        <p className="text-[8px] font-medium text-slate-400">Problem Synthesis → Defined ✓</p>
      </div>
    </div>
  );
}

function IdeateVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-1.5">
        <div className="grid grid-cols-2 gap-1.5">
          {["Inventory", "Checkout", "Profiles", "Reviews"].map((tag, i) => (
            <div key={i} className="rounded-md border border-yellow-500/20 bg-white/5 p-1 text-center">
              <span className="text-[8px] font-bold text-yellow-300 uppercase">{tag}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-1 text-center">
          <p className="text-[8px] font-bold text-slate-300">Sitemap Drafted ✓</p>
        </div>
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex w-full gap-1.5">
        <div className="flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-2 gap-0.5 p-1">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="aspect-[9/16] rounded-md border border-emerald-500/20 bg-emerald-500/10" />
            ))}
          </div>
          <div className="p-1 text-center text-[7px] font-bold text-emerald-300 uppercase">Hi-Fi UI</div>
        </div>
      </div>
    </div>
  );
}

const PROCESS_VISUALS = { research: ResearchVisual, define: DefineVisual, ideate: IdeateVisual, design: DesignVisual };

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
function SectionHeader({ label, title, color = "emerald" }) {
  const gradient = color === "emerald" ? "from-emerald-500 to-lime-500" : "from-yellow-500 to-amber-500";
  const labelColor = color === "emerald" ? "text-emerald-400" : "text-yellow-400";
  
  return (
    <div className="mb-6 sm:mb-8 text-left">
      <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${labelColor}`}>{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      <div className={`mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r ${gradient}`} />
    </div>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailParakelana() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white">
      {/* ── BG Layer ── */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.3),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(163,230,53,0.15),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(250,204,21,0.18),transparent_30%),linear-gradient(135deg,#04060f_0%,#070b1d_45%,#020308_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">

        {/* ── Back Button ── */}
        <button
          type="button"
          onClick={() => navigate("/portfolio")}
          className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-emerald-400/30 hover:text-white"
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
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-lime-900/50 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />
              <img
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070b1d] via-[#070b1d]/40 to-transparent" />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300">
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
                    <p className="text-2xl font-black text-emerald-300">{stat.value}</p>
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
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-600 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(16,185,129,0.55)]"
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
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">What is Parakelana?</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.about}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">Problem Statement</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.problem}</p>
                <div className="mt-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/8 p-4">
                  <p className="text-xs font-semibold italic text-yellow-200/80 text-justify">
                    "How might we simplify hiking preparation for first-timers while ensuring a trusted rental and equipment management workflow?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ PROCESS / METODE ══════════════ */}
        <FadeUp delay={120} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Methodology" title="Design Thinking" />

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
                          <p className="mt-3 text-sm leading-relaxed text-slate-300/90 text-justify">{step.description}</p>
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

        {/* ══════════════ SWOT ANALYSIS ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Strategic Analysis" title="SWOT Overview" color="yellow" />
            <div className="grid gap-4 sm:grid-cols-2">
              {PROJECT.swot.map((item) => (
                <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/8">
                  <h3 className={`text-sm font-black uppercase tracking-widest ${
                    item.color === 'emerald' ? 'text-emerald-400' : 
                    item.color === 'yellow' ? 'text-yellow-400' :
                    item.color === 'lime' ? 'text-lime-400' : 'text-rose-400'
                  }`}>{item.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ DESIGN SYSTEM ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Visual Identity" title="Design System" />

            <div className="space-y-8">
              {/* Typography */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Typography</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PROJECT.typography.map((t, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-4">
                      <div className="shrink-0 text-white" style={{ fontFamily: t.name, fontWeight: t.weight, fontSize: i === 0 ? "24px" : "18px" }}>Aa</div>
                      <div>
                        <p className="text-sm font-bold text-white">{t.name} {t.weight}</p>
                        <p className="text-[10px] text-slate-500">{t.role} · {t.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Palette */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Color Palette</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
                  {PROJECT.palette.map((c) => (
                    <div key={c.hex} className="flex flex-col items-center gap-2">
                      <div className="h-12 w-full rounded-xl border border-white/10 shadow-lg" style={{ backgroundColor: c.hex }} />
                      <div className="text-center">
                        <p className="text-[9px] font-bold text-slate-200">{c.name}</p>
                        <p className="text-[8px] font-mono text-slate-500">{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Elements UI (simplified representation) */}
              <div>
                 <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">UI Elements</p>
                 <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/3 p-4 flex flex-col gap-3">
                        <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 py-2.5 text-xs font-bold text-black uppercase tracking-widest shadow-lg shadow-emerald-500/10">Rent Gear Now</button>
                        <button className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-bold text-white uppercase tracking-widest">Store Locator</button>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
                        <div className="flex gap-2 flex-wrap justify-center">
                             {['🔍','🗺️','🏔️','🧗','🎒','🛒','✅','👤'].map((icon, i) => (
                               <div key={i} className="h-8 w-8 rounded-lg bg-black/40 flex items-center justify-center text-sm border border-emerald-500/10 transition-colors hover:border-emerald-500/30">{icon}</div>
                             ))}
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FINAL MOCKUPS ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Design Outcome" title="Final Web Mockups" color="emerald" />

            <div className="space-y-5">
               <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-900/10 to-yellow-900/5 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-emerald-500/10">
                  <div className="relative overflow-hidden bg-black/40 min-h-[300px] flex items-center justify-center">
                    <img
                      src="/gallery/project/UIUX/parakelana/mockup1.jpg"
                      alt="Parakelana Main Mockup"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      onError={(e) => {
                          e.target.style.display = 'none';
                          const placeholder = document.createElement('div');
                          placeholder.className = 'text-center p-8';
                          placeholder.innerHTML = `<div class="text-5xl mb-3">🏔️</div><p class="text-sm text-slate-400">Main Platform Interface</p><p class="text-[10px] text-slate-500 mt-1">Image: mockup1.jpg</p>`;
                          e.target.parentElement.appendChild(placeholder);
                      }}
                    />
                  </div>
                  <div className="p-5 border-t border-white/8">
                    <h3 className="text-lg font-bold text-white">Full Landing Page Showcase</h3>
                    <p className="mt-1.5 text-sm text-slate-400 text-justify">The primary interface focuses on clear content hierarchy and striking photography to inspire users while maintaining a robust rental functional flow.</p>
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
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-emerald-400/30 hover:text-white"
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
            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:text-white"
          >
            Check Design File
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
