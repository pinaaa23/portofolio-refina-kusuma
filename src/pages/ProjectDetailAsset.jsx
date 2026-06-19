import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/ui/FadeUp";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCursor from "../components/ui/ProjectCursor";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "Asset Management System",
  label: "Enterprise Software",
  category: "Web Application",
  subtitle: "Professional Internal Dashboard for Comprehensive Asset Tracking and Maintenance",
  year: "2026",
  role: "Front End Developer",
  platform: "Web Desktop",
  tools: ["React", "Tailwind CSS", "JavaScript"],
  cover: "/gallery/project/WebDev/asset/cover.png",
  about:
    "The Asset Management System is a specialized internal enterprise platform designed to track, manage, and maintain company assets efficiently. With its dark dashboard aesthetic, the system provides a professional and modern interface for monitoring asset inventory, tracking borrowing histories, and scheduling maintenance services. This centralized solution eliminates manual tracking, ensuring all company resources are properly accounted for and maintained in optimal condition.",
  problem:
    "Managing company assets manually often leads to lost items, unrecorded borrowing, and missed maintenance schedules. The lack of a centralized tracking system makes it difficult to verify asset locations, track accountability, and ensure timely servicing, resulting in operational inefficiencies and financial losses.",
  solution:
    "This system provides a centralized digital dashboard to monitor asset inventory, log borrowing activities, and track maintenance histories in real-time. By automating these processes, the company can ensure full accountability, reduce asset loss, and optimize the lifecycle of each equipment.",
  features: [
    {
      title: "Interactive Dashboard",
      description: "A comprehensive overview of total assets, active loans, and pending maintenance tasks in a sleek dark theme.",
      image: "/gallery/project/WebDev/asset/gambar1.png",
    },
    {
      title: "Asset Inventory",
      description: "Detailed catalog of all company assets, including specifications, condition status, and current assignment.",
      image: "/gallery/project/WebDev/asset/gambar2.png",
    },
    {
      title: "Data Entry & Management",
      description: "Streamlined interface for adding new assets, updating information, and categorizing equipment efficiently.",
      image: "/gallery/project/WebDev/asset/gambar3.png",
    },
    {
      title: "Borrowing History",
      description: "Complete logs of asset loans, tracking who borrowed what, when it was taken, and expected return dates.",
      image: "/gallery/project/WebDev/asset/gambar4.png",
    },
    {
      title: "Maintenance Tracking",
      description: "Monitor service histories, schedule upcoming repairs, and keep records of maintenance costs and status.",
      image: "/gallery/project/WebDev/asset/gambar5.png",
    },
  ],
  flow1: [
    { step: "01", label: "Browse Available Assets", description: "Users access the landing page and explore available assets that can be borrowed.", icon: "🔍" },
    { step: "02", label: "Select Asset", description: "Users choose the desired asset and proceed to the borrowing request form.", icon: "🖱️" },
    { step: "03", label: "Fill Borrow Form", description: "Users complete the borrowing information required for the request.", icon: "📝" },
    { step: "04", label: "Submit Request", description: "The borrowing request is submitted and sent to the administrator.", icon: "📤" },
    { step: "05", label: "Admin Review & Approval", description: "The administrator reviews the request and verifies asset availability.", icon: "✅" },
    { step: "06", label: "Asset Ready for Pickup", description: "After approval, the asset can be collected by the borrower.", icon: "📦" },
  ],
  flow2: [
    { step: "07", label: "Scan Asset QR Code", description: "Users scan the QR Code attached to a physical asset.", icon: "📱" },
    { step: "08", label: "Auto-Filled Borrow Form", description: "The system automatically opens the borrowing form with asset information already populated.", icon: "⚡" },
    { step: "09", label: "Submit Request", description: "The completed borrowing request is submitted to the administrator.", icon: "📤" },
    { step: "10", label: "Admin Review & Approval", description: "The administrator reviews the request and validates the borrowing process.", icon: "✅" },
    { step: "11", label: "Asset Ready for Pickup", description: "Once approved, the asset is available for collection.", icon: "📦" },
  ],
  mockups: [
    {
      title: "Dashboard",
      description: "Main dashboard providing a high-level overview of asset statistics, recent activities, and system alerts.",
      image: "/gallery/project/WebDev/asset/gambar1.png",
    },
    {
      title: "Inventaris Asset",
      description: "Comprehensive list of all company assets with filtering and sorting capabilities.",
      image: "/gallery/project/WebDev/asset/gambar2.png",
    },
    {
      title: "Tambah Data Asset",
      description: "Intuitive form interface for registering new assets into the system.",
      image: "/gallery/project/WebDev/asset/gambar3.png",
    },
    {
      title: "Riwayat Peminjaman",
      description: "Detailed records of all borrowing transactions, ensuring clear accountability.",
      image: "/gallery/project/WebDev/asset/gambar4.png",
    },
    {
      title: "Riwayat Servis",
      description: "Maintenance logs showing repair history, current condition, and servicing details.",
      image: "/gallery/project/WebDev/asset/gambar5.png",
    },
  ],
  gateways: [
    {
      title: "Landing Page",
      description: "Welcome screen introducing the system's capabilities to authorized personnel.",
      image: "/gallery/project/WebDev/asset/landingpage.png",
    },
    {
      title: "Secure Login",
      description: "Encrypted gateway for employees and administrators to access the platform securely.",
      image: "/gallery/project/WebDev/asset/login.png",
    },
  ],
  stats: [
    { value: "5", label: "Core Modules" },
    { value: "100%", label: "Data Tracking" },
    { value: "Secure", label: "Internal Access" },
    { value: "Dark", label: "Theme UI" },
  ],
};

const cubicBezier = [0.22, 1, 0.36, 1];

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailAsset() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 overflow-hidden bg-gradient-shift font-sans" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2, #fecaca, #fef2f2)' }}>

      <ProjectCursor />

      {/* ── Floating Ambient Glow ── */}
      <motion.div
        animate={{ x: [-20, 30, -20], y: [-20, 40, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(225,29,72,0.15)] blur-[120px] z-0"
      />
      <motion.div
        animate={{ x: [20, -30, 20], y: [20, -40, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(244,63,94,0.12)] blur-[120px] z-0"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 z-10">

        {/* ── Back Button ── */}
        <FadeUp delay={0}>
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(71,85,105,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </button>
        </FadeUp>

        {/* ══════════════ HERO SECTION ══════════════ */}
        <FadeUp delay={100}>
          <div className="overflow-hidden rounded-3xl glass-card relative group shadow-[0_10px_40px_-10px_rgba(71,85,105,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-10" />
            
            {/* Cover Image */}
            <div className="relative z-20 overflow-hidden bg-slate-50">
              <motion.img
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: cubicBezier }}
                whileHover={{ scale: 1.03 }}
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
              />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10 relative z-20 bg-white/30 backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-red-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 shadow-sm">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-rose-500/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-700 shadow-sm">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl drop-shadow-sm">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-slate-700">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200/50 pt-6 sm:grid-cols-4">
                {[
                  { label: "Year", value: PROJECT.year },
                  { label: "Role", value: PROJECT.role },
                  { label: "Platform", value: PROJECT.platform },
                  { label: "Tools", value: PROJECT.tools.join(" · ") },
                ].map((meta) => (
                  <div key={meta.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{meta.label}</p>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-slate-900">{meta.value}</p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {PROJECT.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200/50 bg-white/60 p-3 text-center shadow-sm">
                    <p className="text-2xl font-black text-red-600 drop-shadow-sm">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Internal Project Pill Badge (from Monitoring) */}
              <div className="mt-7 relative inline-flex">
                <div 
                  tabIndex="0"
                  className="peer inline-flex items-center gap-2 rounded-full border border-red-200/60 bg-red-50/60 px-4 py-2 shadow-sm backdrop-blur-sm cursor-pointer outline-none focus:ring-2 focus:ring-red-200/50"
                >
                  <span className="text-sm">🔒</span>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-red-700">Internal Company Project</span>
                </div>
                {/* Tooltip */}
                <div className="absolute z-50 left-0 top-full mt-2 sm:left-full sm:top-1/2 sm:mt-0 sm:ml-3 w-max rounded-lg border border-slate-100 bg-white px-3 py-1.5 shadow-md opacity-0 invisible transition-all duration-300 translate-y-1 sm:-translate-y-1/2 sm:-translate-x-1 peer-hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 sm:peer-hover:-translate-y-1/2 sm:peer-hover:translate-x-0 peer-focus:opacity-100 peer-focus:visible peer-focus:translate-y-0 sm:peer-focus:-translate-y-1/2 sm:peer-focus:translate-x-0 hover:opacity-100 hover:visible hover:translate-y-0 sm:hover:-translate-y-1/2 sm:hover:translate-x-0">
                  <span className="text-[10px] font-medium text-slate-600 whitespace-nowrap">
                    Developed for internal enterprise use
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <FadeUp delay={200} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,85,105,0.15)] shadow-[0_10px_40px_-10px_rgba(71,85,105,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Overview" title="About This Project" labelClassName="text-red-600" gradientClassName="from-red-500 to-rose-500" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">System Purpose</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.about}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-700">Problem Statement</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.problem}</p>
                  <div className="mt-4 rounded-2xl border border-red-100/50 border-l-4 border-l-red-500 bg-gradient-to-r from-red-50/80 to-transparent p-4 shadow-sm">
                    <p className="text-xs font-semibold text-red-900/80 text-justify italic leading-relaxed">
                      "{PROJECT.solution}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FEATURES SECTION ══════════════ */}
        <FadeUp delay={300} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,85,105,0.15)] shadow-[0_10px_40px_-10px_rgba(71,85,105,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Key Features" title="What It Offers" labelClassName="text-red-600" gradientClassName="from-red-500 to-rose-500" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECT.features.map((feature, idx) => (
                  <FadeUp key={feature.title} delay={idx * 60}>
                    <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-red-300/50 hover:shadow-[0_16px_40px_rgba(71,85,105,0.15)]">
                      {/* Feature Image */}
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/40 bg-slate-100">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {/* Feature Info */}
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-slate-900">{feature.title}</h3>
                        <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-slate-600 text-justify">{feature.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ SYSTEM FLOW ══════════════ */}
        <FadeUp delay={400} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,85,105,0.15)] shadow-[0_10px_40px_-10px_rgba(71,85,105,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="HOW IT WORKS" title="Dual Borrowing Workflow" labelClassName="text-red-600" gradientClassName="from-red-500 to-rose-500" />
              <p className="mt-2 text-sm text-slate-600 font-medium max-w-2xl text-justify">Users can borrow assets through two methods: manual asset selection or QR Code scanning.</p>

              {/* FLOW 01 */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-red-300"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">Flow 01 — Manual Asset Request</span>
                  <span className="h-px flex-1 bg-red-200"></span>
                </div>
                
                <div className="relative">
                  <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-red-300 via-red-300 to-red-200 sm:block" />
                  <div className="space-y-5 sm:pl-16">
                    {PROJECT.flow1.map((item, idx) => (
                      <FadeUp key={item.step} delay={idx * 50}>
                        <div className="relative flex items-start gap-4 rounded-2xl border border-white/60 bg-white/50 p-4 shadow-sm transition-all duration-300 hover:border-red-300/50 hover:bg-white/80 hover:shadow-md sm:p-5">
                          <span className="absolute -left-[3.55rem] top-6 hidden h-3 w-3 rounded-full border border-white bg-red-400 shadow-[0_0_0_4px_rgba(255,255,255,0.8)] sm:block" />
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-200/50 bg-red-50 text-xl shadow-inner text-red-600">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black text-red-400">{item.step}</span>
                              <h3 className="text-sm font-bold text-slate-800">{item.label}</h3>
                            </div>
                            <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500 text-justify">{item.description}</p>
                          </div>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOW 02 (More prominent) */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-rose-400"></span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-rose-700">Flow 02 — QR Code Borrowing</span>
                  <span className="h-px flex-1 bg-rose-300"></span>
                </div>
                
                <div className="relative">
                  <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-rose-400 via-rose-400 to-rose-300 sm:block" />
                  <div className="space-y-6 sm:pl-16">
                    {PROJECT.flow2.map((item, idx) => (
                      <FadeUp key={item.step} delay={idx * 50 + 200}>
                        <div className="relative flex items-start gap-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-md transition-all duration-300 hover:border-rose-400/50 hover:bg-white hover:shadow-lg sm:p-5 scale-[1.02]">
                          <span className="absolute -left-[3.55rem] top-6 hidden h-3 w-3 rounded-full border border-white bg-rose-500 shadow-[0_0_0_4px_rgba(255,255,255,0.8)] sm:block" />
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-rose-300/50 bg-rose-50 text-xl shadow-inner text-rose-600 ring-1 ring-slate-100">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black text-rose-500">{item.step}</span>
                              <h3 className="text-sm font-black text-slate-900">{item.label}</h3>
                            </div>
                            <p className="mt-1 text-xs font-medium leading-relaxed text-slate-700 text-justify">{item.description}</p>
                          </div>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeUp>

        {/* ══════════════ GATEWAY SECTION ══════════════ */}
        <FadeUp delay={450} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,85,105,0.15)] shadow-[0_10px_40px_-10px_rgba(71,85,105,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="System Entry" title="Platform Gateway" labelClassName="text-red-600" gradientClassName="from-red-500 to-rose-500" />
              
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                {PROJECT.gateways.map((gateway, idx) => (
                  <FadeUp key={gateway.title} delay={idx * 100}>
                    <div className="group overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(71,85,105,0.2)]">
                      <div className="relative aspect-video overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
                        <img
                          src={gateway.image}
                          alt={gateway.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 sm:p-6 text-center border-t border-white/50">
                        <h3 className="text-lg font-black text-slate-900">{gateway.title}</h3>
                        <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">{gateway.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ MOCKUP SECTION (ZIGZAG LAYOUT) ══════════════ */}
        <FadeUp delay={500} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,85,105,0.15)] shadow-[0_10px_40px_-10px_rgba(71,85,105,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Core Modules" title="System Interfaces" labelClassName="text-red-600" gradientClassName="from-red-500 to-rose-500" />

              <div className="space-y-12 mt-10">
                {PROJECT.mockups.map((mockup, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <FadeUp key={mockup.title} delay={idx * 80}>
                      <div className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                        {/* Image Side */}
                        <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(71,85,105,0.2)]">
                          <div className="relative overflow-hidden bg-slate-50">
                            <img
                              src={mockup.image}
                              alt={mockup.title}
                              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {/* Text Side */}
                        <div className="w-full lg:w-2/5 flex flex-col justify-center px-2">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-red-400"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-500">
                              Module {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
                            {mockup.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600 text-justify font-medium">
                            {mockup.description}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={600} className="mt-10 flex items-center justify-start relative z-10">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(71,85,105,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Projects
          </button>
        </FadeUp>

      </div>
    </main>
  );
}
