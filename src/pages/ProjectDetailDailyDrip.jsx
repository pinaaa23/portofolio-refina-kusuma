import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "DailyDrip",
  label: "Mobile Design",
  category: "UI/UX Design",
  subtitle: "Private & Pressure-Free Drink Sharing App",
  year: "2025",
  role: "UI/UX Designer",
  platform: "Mobile (iOS & Android)",
  tools: ["Figma","Figjam"],
  figmaUrl: "https://www.figma.com/proto/ZRL9sOiSTs0rl0eD9cWr0s/DESIGNVERSE_DAILYDRIP?node-id=256-1372&starting-point-node-id=256%3A1372&t=DrLliMhf3o2tSHta-1",
  cover: "/gallery/project/UIUX/DailyDrip/cover.png",
  about:
    "DailyDrip is a mobile social app that allows users to share beverage and cafe moments in a more personal and pressure-free environment. Designed based on user research, it offers a simple and visually appealing experience with features like drink photo sharing, aesthetic filters, and flexible privacy settings, creating a safe space for personal visual expression.",
  problem:
    "Users who enjoy beverages need a safe and relaxed space to share their daily drink moments and express themselves casually, as they often feel uncomfortable and pressured when sharing on mainstream social media platforms like Instagram.",
  process: [
    {
      phase: "01",
      label: "Empathize",
      icon: "🔍",
      description:
        "In the empathize stage, user insights were first prioritized through emoji voting, revealing a strong need for a private, casual, and pressure-free space to share drink moments. This was followed by a validation survey, which confirmed that users often hesitate to post on mainstream social media due to social pressure, reinforcing the need for a simple, visually-driven platform with flexible privacy control.",
      detail: "Output: User Insights, Key Pain Points, User Needs",
      color: "from-violet-500/10 to-indigo-500/5",
      border: "border-violet-500/20",
      accent: "text-violet-600",
      visual: "research",
    },
    {
      phase: "02",
      label: "Define",
      icon: "💡",
      description:
      "In the define stage, insights from the empathize phase were synthesized into key user needs and refined into a clear problem statement, highlighting the need for a safe and pressure-free space to share drink moments. Based on this, several How Might We questions were created to guide solutions focused on a more personal, low-pressure, and visually expressive experience, forming the foundation for DailyDrip’s design direction.",
      detail: "Output: Problem Statement, How Might We",
      color: "from-fuchsia-500/10 to-pink-500/5",
      border: "border-fuchsia-500/20",
      accent: "text-fuchsia-600",
      visual: "define",
    },
    {
      phase: "03",
      label: "Ideate",
      icon: "✏️",
      description:
        "In the ideate stage, the How Might We questions were used to generate various solution ideas focused on creating a more relaxed, personal, and pressure-free sharing experience. These ideas included features to limit social circles, enhance privacy, and support simple yet aesthetic visual expression. The ideas were then prioritized based on user needs and feasibility to determine the key features for further development.",
      detail: "Output: Feature Ideas, Prioritized Features,Solution Concepts",
      color: "from-cyan-500/10 to-teal-500/5",
      border: "border-cyan-500/20",
      accent: "text-cyan-600",
      visual: "ideate",
    },
    {
      phase: "04",
      label: "Prototype",
      icon: "🧪",
      description:
        "In the prototype stage, ideas from the ideate phase were translated into low-fidelity wireframes to define structure and user flow, then developed into high-fidelity designs to refine visual style and interface details. These designs were further built into interactive prototypes to simulate the user experience, enabling early validation of usability, flow, and overall design direction before implementation.",
      detail: "Output: Wireframe Low-fidelity, High-fidelity Design, Interactive Prototype",
      color: "from-emerald-500/10 to-green-500/5",
      border: "border-emerald-500/20",
      accent: "text-emerald-600",
      visual: "design",
    },
  ],
  typography: [
  { name: "Poppins", weight: "800", role: "Display / Heading", size: "32px", text: "Welcome Back" },
  { name: "Poppins", weight: "600", role: "Subheading", size: "18px", text: "Friends / Memories" },
  { name: "Inter", weight: "400", role: "Body Text", size: "14px", text: "Share your drips to your close friends!" },
  { name: "Inter", weight: "400", role: "Caption", size: "11px", text: "Don’t have an account? Register now!" },
  { name: "Inter", weight: "500", role: "Button", size: "14px", text: "Add Location" }
],
  palette: [
    { hex: "#f39999", name: "Salmon Pink", role: "Button" },
    { hex: "#f45b5b", name: "Coral Red", role: "Button Active" },
    { hex: "#fffdfe", name: "Near White", role: "BG Light" },
    { hex: "#d9d9d9", name: "Light Gray", role: "BG Normal" },
    { hex: "#fceaf2", name: "Blush Pink", role: "BG Gradation" },
    { hex: "#f39999", name: "Salmon Pink", role: "Accent" },
  ],
  stats: [
    { value: "14+", label: "Screens Designed" },
    { value: "20", label: "Usability Tests" },
    { value: "5+", label: "Design Iterations" },
    { value: "6mo", label: "Project Duration" },
  ],
};

const cubicBezier = [0.22, 1, 0.36, 1];

/* ─────────────────── PROCESS VISUAL COMPONENTS ─────────────────── */
function ResearchVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-2">
        {["Team Discussion", "Emoji Voting", "User Survey"].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
            <div className="flex-1 rounded-full bg-white/50 px-2 py-1 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-slate-700">{item}</span>
                <span className="text-[9px] font-bold text-violet-600">✓</span>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-1 rounded-xl border border-violet-500/20 bg-violet-500/10 p-2 shadow-sm">
          <a
            href="https://docs.google.com/spreadsheets/d/1iYUPiMEf5UHEYxQFQ4bAwhpIGkHYLUW4JaPeqAg3Nok/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-[9px] font-bold text-violet-700 transition-colors duration-200 hover:text-violet-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <span className="relative">
              Click here to view survey results
              <span className="absolute left-0 -bottom-[1px] w-full h-[1px] bg-violet-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function DefineVisual() {
  const hmws = [
    "How might we create a pressure-free sharing space?",
    "How might we protect user privacy by default?",
    "How might we simplify the sharing experience?",
  ];
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-1.5">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-fuchsia-600">How Might We</p>
        {hmws.map((q, i) => (
          <div key={i} className="rounded-lg border border-fuchsia-500/20 bg-white/50 px-2 py-1.5 shadow-sm">
            <p className="text-[8px] font-medium leading-snug text-slate-700">{q}</p>
          </div>
        ))}
        <div className="mt-1 rounded-lg border border-pink-500/20 bg-pink-500/10 px-2 py-1 text-center shadow-sm">
          <p className="text-[8px] font-bold text-pink-600">Problem Statement Defined ✓</p>
        </div>
      </div>
    </div>
  );
}

function IdeateVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <div className="w-full space-y-1.5">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-cyan-600">Priority Matrix</p>
        <div className="grid grid-cols-2 gap-1">
          {[
            { label: "High Impact\nHigh Effort", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
            { label: "High Impact\nLow Effort", bg: "bg-teal-500/10", border: "border-teal-400/20" },
            { label: "Low Impact\nHigh Effort", bg: "bg-white/50", border: "border-white/40" },
            { label: "Low Impact\nLow Effort", bg: "bg-white/50", border: "border-white/40" },
          ].map((q, i) => (
            <div key={i} className={`rounded-lg border ${q.border} ${q.bg} p-1.5 shadow-sm`}>
              <p className="whitespace-pre-line text-[8px] font-medium leading-tight text-slate-700">{q.label}</p>
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
          <div key={i} className="flex-1 overflow-hidden rounded-xl border border-white/40 bg-white/50 shadow-sm">
            <div className="border-b border-white/40 px-2 py-1">
              <p className="text-[9px] font-bold text-cyan-600">{stage}</p>
            </div>
            <div className="grid grid-cols-2 gap-0.5 p-1">
              {Array.from({ length: 4 }).map((_, j) => (
                <div
                  key={j}
                  className={`aspect-[9/16] rounded-md ${
                    i === 0
                      ? "bg-black/5 border border-black/10"
                      : "border border-[#f39999]/30 bg-gradient-to-b from-[#f39999]/20 to-[#fceaf2]/40"
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
        <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">Usability Issues</p>
        {issues.map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-10 text-right text-[9px] font-bold text-slate-600">{labels[i]}</span>
            <div className="flex-1 overflow-hidden rounded-full bg-white/60 shadow-inner">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                style={{ width: `${(val / 14) * 100}%` }}
              />
            </div>
            <span className="w-5 text-[9px] font-bold text-emerald-600">{val}</span>
          </div>
        ))}
        <div className="mt-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-1.5 text-center shadow-sm">
          <p className="text-[9px] font-bold text-emerald-600">SUS Score: 82 / 100 ✓</p>
        </div>
      </div>
    </div>
  );
}

const PROCESS_VISUALS = { research: ResearchVisual, define: DefineVisual, ideate: IdeateVisual, design: DesignVisual, test: TestVisual };

/* ─────────────────── ANIMATED SECTION WRAPPER ─────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: cubicBezier, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────── SECTION HEADER ─────────────────── */
function SectionHeader({ label, title }) {
  return (
    <div className="mb-6 sm:mb-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f39999]">{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-[#2e1065] sm:text-3xl">{title}</h2>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#f39999] to-[#f45b5b]" />
    </div>
  );
}

/* ─────────────────── CUSTOM CURSOR ─────────────────── */
function CustomCursor() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, { damping: 28, stiffness: 200, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 28, stiffness: 200, mass: 0.5 });
  const tx = useSpring(mouseX, { damping: 40, stiffness: 140, mass: 0.8 });
  const ty = useSpring(mouseY, { damping: 40, stiffness: 140, mass: 0.8 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border border-[#f39999]/40 bg-[#f39999]/10 backdrop-blur-[2px]"
        style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-[#f45b5b]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailDailyDrip() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen text-[#2e1065] overflow-hidden bg-gradient-shift font-sans">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-gradient-shift {
          background: linear-gradient(135deg, #fff7f9, #fceaf2, #f39999, #fff7f9);
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }
        .btn-gradient-shift {
          background-size: 200% auto;
          transition: background-position 0.5s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-gradient-shift:hover {
          background-position: right center;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 10px 40px -10px rgba(243, 153, 153, 0.15);
        }
        .glass-card-inner {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
        }
      `}</style>

      <CustomCursor />

      {/* ── Floating Ambient Glow ── */}
      <motion.div
        animate={{ x: [-20, 30, -20], y: [-20, 40, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(243,153,153,0.25)] blur-[120px] z-0"
      />
      <motion.div
        animate={{ x: [20, -30, 20], y: [20, -40, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(252,234,242,0.4)] blur-[120px] z-0"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 z-10">

        {/* ── Back Button ── */}
        <FadeUp delay={0}>
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-4 py-2.5 text-sm font-semibold text-[#2e1065] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(243,153,153,0.25)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </button>
        </FadeUp>

        {/* ══════════════ HERO SECTION ══════════════ */}
        <FadeUp delay={100}>
          <div className="overflow-hidden rounded-3xl glass-card relative group">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-10" />
            
            {/* Cover Image */}
            <div className="relative z-20 overflow-hidden bg-[#fceaf2]">
              <motion.img
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: cubicBezier }}
                whileHover={{ scale: 1.03 }}
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
              />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10 relative z-20 bg-white/30 backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#f39999]/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f45b5b] shadow-sm">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-violet-300/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 shadow-sm">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-[#2e1065] sm:text-6xl drop-shadow-sm">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-[#2e1065]/70">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#f39999]/20 pt-6 sm:grid-cols-4">
                {[
                  { label: "Year", value: PROJECT.year },
                  { label: "Role", value: PROJECT.role },
                  { label: "Platform", value: PROJECT.platform },
                  { label: "Tools", value: PROJECT.tools.join(" · ") },
                ].map((meta) => (
                  <div key={meta.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2e1065]/50">{meta.label}</p>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-[#2e1065]">{meta.value}</p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {PROJECT.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#f39999]/20 bg-white/60 p-3 text-center shadow-sm">
                    <p className="text-2xl font-black text-[#f45b5b] drop-shadow-sm">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-[#2e1065]/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-7">
                <a
                  href={PROJECT.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#f45b5b] via-[#f39999] to-[#f45b5b] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(244,91,91,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(244,91,91,0.4)] active:scale-95 btn-gradient-shift"
                >
                  <svg className="h-4 w-4" viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" />
                    <path d="M9.5 57A9.5 9.5 0 0 1 9.5 38h9.5v9.5A9.5 9.5 0 0 1 9.5 57z" />
                    <path d="M0 19a9.5 9.5 0 0 0 9.5 9.5H19V9.5H9.5A9.5 9.5 0 0 0 0 19z" />
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19z" />
                  </svg>
                  View in Figma
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <FadeUp delay={200} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(243,153,153,0.2)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Overview" title="About This Project" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f45b5b]">What is DailyDrip?</p>
                  <p className="mt-3 text-sm leading-7 text-[#2e1065]/70 text-justify font-medium">{PROJECT.about}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-500">Problem Statement</p>
                  <p className="mt-3 text-sm leading-7 text-[#2e1065]/70 text-justify font-medium">{PROJECT.problem}</p>
                  <div className="mt-4 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 shadow-sm">
                    <p className="text-xs font-semibold italic text-[#2e1065]/80 text-justify">
                      "How might we create a safe and pressure-free space for users to share their daily beverage moments without feeling judged on mainstream social media?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ PROCESS / METODE ══════════════ */}
        <FadeUp delay={300} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(243,153,153,0.2)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Methodology" title="Design Thinking" />

              <div className="space-y-5">
                {PROJECT.process.map((step, idx) => {
                  const Visual = PROCESS_VISUALS[step.visual];
                  return (
                    <FadeUp key={step.phase} delay={idx * 100}>
                      <div className={`overflow-hidden rounded-2xl border ${step.border} bg-gradient-to-br ${step.color} shadow-sm backdrop-blur-md`}>
                        <div className="grid gap-0 sm:grid-cols-[1fr_200px]">
                          {/* Text */}
                          <div className="p-5 sm:p-6 bg-white/40">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-black text-[#2e1065]/10">{step.phase}</span>
                              <span className="text-lg drop-shadow-sm">{step.icon}</span>
                              <h3 className={`text-sm font-extrabold uppercase tracking-wide ${step.accent}`}>
                                {step.label}
                              </h3>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-[#2e1065]/70 text-justify font-medium">{step.description}</p>
                            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-3 py-1 shadow-sm">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Output:</span>
                              <span className="text-[9px] font-bold text-[#2e1065]/80">{step.detail.replace("Output: ", "")}</span>
                            </div>
                          </div>

                          {/* Visual Panel */}
                          <div className="hidden sm:flex border-l border-white/40 min-h-[140px] bg-white/20">
                            <Visual />
                          </div>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ DESIGN SYSTEM ══════════════ */}
        <FadeUp delay={400} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(243,153,153,0.2)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Design System" title="Visual Language" />

              <div className="space-y-8">
                {/* ── Typography ── */}
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Typography</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {PROJECT.typography.map((t, i) => (
                      <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                        <div
                          className="shrink-0 text-[#2e1065] leading-none"
                          style={{ fontFamily: t.name, fontWeight: t.weight, fontSize: i === 0 ? "28px" : i === 1 ? "18px" : i === 2 ? "14px" : "11px" }}
                        >
                          Aa
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#2e1065]">{t.name} {t.weight}</p>
                          <p className="text-[10px] font-medium text-slate-500">{t.role} · {t.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Color Palette ── */}
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Color Palette</p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {PROJECT.palette.map((c) => (
                      <div key={c.hex} className="group flex flex-col items-center gap-2">
                        <div
                          className="h-14 w-full rounded-xl border border-white/40 shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(243,153,153,0.3)] sm:h-16"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="text-center">
                          <p className="text-[10px] font-bold text-[#2e1065]">{c.name}</p>
                          <p className="text-[9px] font-mono font-medium text-slate-500">{c.hex}</p>
                          <p className="text-[9px] font-medium text-slate-500">{c.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── UI Elements ── */}
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">UI Elements</p>
                  <div className="grid gap-4 sm:grid-cols-2">

                    {/* Button Variants */}
                    <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-slate-500">❖ button</p>
                      <div className="space-y-2">
                        {/* Gradient */}
                        <button className="w-full rounded-2xl py-2.5 text-xs font-bold text-white shadow-md hover:-translate-y-0.5 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #f45b5b, #f39999)" }}>Button</button>
                        {/* Outline white filled */}
                        <button className="w-full rounded-2xl border border-[#f39999]/40 bg-white py-2.5 text-xs font-bold shadow-sm hover:-translate-y-0.5 transition-transform duration-300" style={{ color: "#f45b5b" }}>Button</button>
                        {/* Outline transparent */}
                        <button className="w-full rounded-2xl border border-[#f39999]/60 bg-transparent py-2.5 text-xs font-bold hover:-translate-y-0.5 transition-transform duration-300" style={{ color: "#f39999" }}>Button</button>
                        {/* Solid red */}
                        <button className="w-full rounded-2xl py-2.5 text-xs font-bold text-white shadow-md hover:-translate-y-0.5 transition-transform duration-300" style={{ background: "#f45b5b" }}>Button</button>
                      </div>
                    </div>

                    {/* Icon Library */}
                    <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-slate-500">❖ Icon</p>
                      <div className="rounded-xl border border-white/60 bg-white p-3 shadow-inner">
                        <div className="grid grid-cols-10 gap-1.5">
                          {[
                            /* Row 1 */
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.09 4.87A10 10 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.39 0 2.71.28 3.91.79"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                            /* Row 2 */
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0c2.157 0 3.978.704 5.316 1.922"/></svg>,
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 8 19 8"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
                            /* Row 3 */
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
                          ].map((icon, i) => (
                            <div key={i} className="flex h-6 w-6 items-center justify-center text-[#2e1065]/70">
                              {React.cloneElement(icon, { className: "h-4 w-4" })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FINAL MOCKUPS ══════════════ */}
        <FadeUp delay={500} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(243,153,153,0.2)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Final Output" title="Design Mockups" />

              {/* Two mockup panels */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Mockup 1 */}
                <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(243,153,153,0.25)]">
                  <div className="overflow-hidden bg-[#fceaf2]">
                    <motion.img
                      initial={{ scale: 1.05, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: cubicBezier }}
                      src="/gallery/project/UIUX/DailyDrip/mockup1.png"
                      alt="DailyDrip UI screens showcase"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold text-[#2e1065]">UI Screen Overview</p>
                    <p className="mt-1 text-[11px] font-medium text-[#2e1065]/70 text-justify">Full-screen UI design showcasing the core screens and visual style of DailyDrip.</p>
                  </div>
                </div>

                {/* Mockup 2 */}
                <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(244,91,91,0.2)]">
                  <div className="overflow-hidden bg-[#fceaf2]">
                    <motion.img
                      initial={{ scale: 1.05, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: cubicBezier }}
                      src="/gallery/project/UIUX/DailyDrip/mockup2.jpg"
                      alt="DailyDrip mobile mockup detail"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold text-[#2e1065]">Mobile Mockup Detail</p>
                    <p className="mt-1 text-[11px] font-medium text-[#2e1065]/70 text-justify">Close-up view of the app interface displayed on a real device mockup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={600} className="mt-10 flex items-center justify-between relative z-10">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-bold text-[#2e1065] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(243,153,153,0.25)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Projects
          </button>

          <a
            href={PROJECT.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-[#f39999]/30 bg-white/70 px-5 py-2.5 text-sm font-bold text-[#f45b5b] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,91,91,0.25)] active:scale-95"
          >
            Open Figma File
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </FadeUp>

      </div>
    </main>
  );
}
