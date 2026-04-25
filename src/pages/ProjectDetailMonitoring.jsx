import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "Monitoring Internship System",
  label: "Web Application",
  category: "Web Development",
  subtitle: "Comprehensive Platform for Managing and Tracking Internship Progress",
  year: "2026",
  role: "Front End Developer",
  platform: "Web Desktop",
  tools: ["React", "Tailwind CSS", "JavaScript"],
  cover: "/gallery/project/WebDev/Monitoring/cover1.png",
  about:
    "The Monitoring Internship System is a specialized web platform designed to streamline and improve the tracking of student internship progress. It serves as a unified digital space where interns can report their daily activities, mentors can approve tasks, and university lecturers can monitor overall performance. By digitalizing this workflow, the system removes the hassle of physical logbooks and disjointed communication channels.",
  problem:
    "Previously, the university relied on manual logbooks and fragmented communication via messaging apps for internship tracking. This led to lost records, delayed task approvals, and difficulty for lecturers to accurately evaluate student performance over the semester. There was a critical need for an integrated system that connects all stakeholders efficiently.",
  typography: [
    { name: "Inter", weight: "800", role: "Display / Heading", size: "32px", text: "Dashboard Overview" },
    { name: "Inter", weight: "600", role: "Subheading", size: "18px", text: "Weekly Progress Report" },
    { name: "Inter", weight: "400", role: "Body Text", size: "14px", text: "Track your activity and submit reports seamlessly." },
    { name: "Inter", weight: "500", role: "Caption", size: "12px", text: "Pending Approval" }
  ],
  palette: [
    { hex: "#0ea5e9", name: "Sky Blue", role: "Primary" },
    { hex: "#3b82f6", name: "Blue Accent", role: "Secondary" },
    { hex: "#6366f1", name: "Indigo", role: "Highlight" },
    { hex: "#050816", name: "Deep Night", role: "BG Dark" },
    { hex: "#1e293b", name: "Slate Gray", role: "Surface" },
    { hex: "#f8fafc", name: "Off White", role: "Text" },
  ],
  stats: [
    { value: "4", label: "User Roles" },
    { value: "10+", label: "Key Features" },
    { value: "3", label: "Iterations" },
    { value: "3mo", label: "Duration" },
  ],
  roles: [
    {
      title: "Role User",
      image: "/gallery/project/WebDev/Monitoring/foto1.png",
      description: "As a student, the user can easily submit daily activity logs, upload required documentation like PDFs or images, track their weekly progress, and view evaluations from both mentors and lecturers in real-time.",
      accent: "cyan"
    },
    {
      title: "Role Admin",
      image: "/gallery/project/WebDev/Monitoring/foto2.png",
      description: "The Administrator has full control over the system configuration. They manage user accounts, assign lecturers to students, oversee internship schedules, and ensure database integrity across the platform.",
      accent: "blue"
    },
    {
      title: "Role Mentor",
      image: "/gallery/project/WebDev/Monitoring/foto3.png",
      description: "Industry mentors can review submitted daily logs, approve or revise tasks, and provide direct feedback. They evaluate the practical performance of the assigned interns systematically.",
      accent: "indigo"
    },
    {
      title: "Role Dosen",
      image: "/gallery/project/WebDev/Monitoring/foto4.png",
      description: "Lecturers have a dedicated dashboard to monitor the progress of all their assigned students. They review weekly reports, assess final internship outcomes, and issue academic grades.",
      accent: "sky"
    }
  ],
  mockups: [
    {
      title: "Landing Page",
      description: "An interactive and welcoming landing page that introduces the monitoring system. It effectively showcases the platform's core features, explains the internship workflow, and serves as the primary gateway for users to access the application.",
      image: "/gallery/project/WebDev/Monitoring/mockup1.png"
    },
    {
      title: "Login Page",
      description: "A secure, centralized authentication page designed to verify user credentials efficiently. The system automatically routes students, admins, mentors, and lecturers to their specific role-based dashboards upon successful login.",
      image: "/gallery/project/WebDev/Monitoring/mockup2.png"
    }
  ]
};

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
function SectionHeader({ label, title, color = "cyan" }) {
  const gradients = {
    cyan: "from-cyan-500 to-blue-500",
    blue: "from-blue-500 to-indigo-500",
  };
  const textColors = {
    cyan: "text-cyan-400",
    blue: "text-blue-400",
  };
  
  return (
    <div className="mb-6 sm:mb-8 text-left">
      <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${textColors[color]}`}>{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      <div className={`mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r ${gradients[color]}`} />
    </div>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailMonitoring() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#030712] text-white">
      {/* ── BG Layer ── */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.2),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(2,132,199,0.2),transparent_30%),linear-gradient(135deg,#030712_0%,#0a192f_45%,#02040a_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">

        {/* ── Back Button ── */}
        <button
          type="button"
          onClick={() => navigate("/refinakusuma#project")}
          className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-cyan-400/30 hover:text-white"
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
              <div className={`absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />
              <img
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-left-top sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full min-h-[320px] flex items-center justify-center bg-gradient-to-br from-cyan-950 to-indigo-950 text-cyan-500/50';
                  placeholder.innerHTML = '<span class="text-4xl">Image Placeholder</span>';
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070b1d] via-[#070b1d]/40 to-transparent" />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
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
                    <p className="text-2xl font-black text-cyan-300">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT & PROBLEM STATEMENT ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Overview" title="About This Project" color="cyan" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">System Purpose</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.about}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Problem Statement</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.problem}</p>
                <div className="mt-4 rounded-2xl border border-blue-500/20 bg-blue-500/8 p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50"></div>
                  <p className="text-xs font-semibold italic text-blue-200/80 text-justify pl-2">
                    "How might we digitize and connect the internship tracking process to ensure transparency, prevent data loss, and simplify evaluation for all stakeholders?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ROLES & FEATURES (ALTERNATING LAYOUT) ══════════════ */}
        <FadeUp delay={120} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Core Features" title="System by Role" color="blue" />

            <div className="space-y-8 sm:space-y-10 mt-8">
              {PROJECT.roles.map((roleInfo, idx) => {
                // Role User & Admin (idx 0,1) -> Image on Right
                // Role Mentor & Dosen (idx 2,3) -> Image on Left
                const flexLayout = (idx === 0 || idx === 1) ? 'sm:flex-row-reverse' : 'sm:flex-row';
                
                // Color maps for dynamic styling based on role accent
                const borderColors = {
                  cyan: "group-hover:border-cyan-400/30",
                  blue: "group-hover:border-blue-400/30",
                  indigo: "group-hover:border-indigo-400/30",
                  sky: "group-hover:border-sky-400/30"
                };
                
                const textColors = {
                  cyan: "text-cyan-400",
                  blue: "text-blue-400",
                  indigo: "text-indigo-400",
                  sky: "text-sky-400"
                };

                const bgGradients = {
                  cyan: "from-cyan-500/10 to-transparent",
                  blue: "from-blue-500/10 to-transparent",
                  indigo: "from-indigo-500/10 to-transparent",
                  sky: "from-sky-500/10 to-transparent"
                };

                return (
                  <FadeUp key={roleInfo.title} delay={idx * 80}>
                    <div className={`group relative flex flex-col gap-6 sm:gap-8 rounded-3xl border border-white/5 bg-white/[0.02] p-4 sm:p-6 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 ${flexLayout} items-center`}>
                      
                      {/* Image Preview */}
                      <div className={`w-full sm:w-[55%] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${bgGradients[roleInfo.accent]} shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-1 ${borderColors[roleInfo.accent]}`}>
                        <div className="relative w-full h-auto overflow-hidden bg-black/40">
                          <img
                            src={roleInfo.image}
                            alt={roleInfo.title}
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const placeholder = document.createElement('div');
                              placeholder.className = 'w-full h-full flex flex-col items-center justify-center text-slate-500';
                              placeholder.innerHTML = `<span class="text-3xl mb-2">💻</span><span class="text-xs">Image: ${roleInfo.title}</span>`;
                              e.target.parentElement.appendChild(placeholder);
                            }}
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="w-full sm:w-[45%] flex flex-col justify-center sm:px-2">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <span className={`h-px w-8 bg-${roleInfo.accent}-500/50`}></span>
                          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${textColors[roleInfo.accent]}`}>
                            Feature Overview
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                          {roleInfo.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-300/90 text-justify">
                          {roleInfo.description}
                        </p>
                      </div>

                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ TYPOGRAPHY & DESIGN SYSTEM (EXPLORATIVE LAYOUT) ══════════════ */}
        <FadeUp delay={100} className="mt-8">
           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Visual Identity" title="Typography & Palette" color="cyan" />
            
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              {/* Typography Explorative Area */}
              <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 p-6 relative overflow-hidden group">
                 {/* Decorative background letter */}
                 <div className="absolute -right-10 -bottom-16 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none transition-transform duration-700 group-hover:scale-110">
                   Aa
                 </div>
                 
                 <div className="relative z-10">
                   <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Primary Typeface</p>
                   
                   <div className="flex border-b border-white/10 pb-6 mb-6">
                     <div className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mr-6 tracking-tighter">
                       Inter
                     </div>
                     <div className="flex flex-col justify-end">
                       <p className="text-sm text-slate-300">A highly legible typeface optimizing the dashboard experience.</p>
                     </div>
                   </div>

                   <div className="space-y-4">
                     {PROJECT.typography.map((t, idx) => (
                       <div key={idx} className="flex flex-wrap items-end justify-between gap-2">
                         <div className="min-w-[200px]">
                           <span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">{t.role}</span>
                           <span className="text-white truncate" style={{ fontFamily: t.name, fontWeight: t.weight, fontSize: t.size === '32px' ? '24px' : t.size }}>
                             {t.text}
                           </span>
                         </div>
                         <div className="text-right">
                           <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded-md">{t.weight} / {t.size}</span>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>

              {/* Color Palette Grid */}
              <div className="flex flex-col gap-3">
                 <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Color System</p>
                 <div className="grid grid-cols-2 gap-3 h-full">
                    {PROJECT.palette.map((c) => (
                      <div key={c.hex} className="relative rounded-2xl border border-white/10 overflow-hidden group h-24 sm:h-auto min-h-[100px] transition-transform duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 transition-opacity duration-300" style={{ backgroundColor: c.hex }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-3 w-full">
                           <p className="text-[10px] font-bold text-white tracking-wide">{c.name}</p>
                           <p className="text-[9px] font-mono text-white/70 uppercase">{c.hex} · {c.role}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
           </div>
        </FadeUp>

        {/* ══════════════ MOCKUPS SHOWCASE ══════════════ */}
        <FadeUp delay={100} className="mt-8">
           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Final Outcome" title="Design Mockups" color="blue" />
            
            <div className="space-y-6 mt-8">
              {PROJECT.mockups.map((mockup, idx) => (
                <FadeUp key={mockup.title} delay={idx * 80}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-900/10 to-blue-900/5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,165,233,0.2)]">
                    {/* Large mockup image */}
                    <div className="relative overflow-hidden bg-black/30">
                      <img
                        src={mockup.image}
                        alt={mockup.title}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-[280px]');
                          const placeholder = document.createElement('div');
                          placeholder.className = 'text-center p-8';
                          placeholder.innerHTML = `<div class="text-4xl mb-3">🖥️</div><p class="text-sm text-slate-500">${mockup.title}</p><p class="text-xs text-slate-600 mt-1">Image placeholder</p>`;
                          e.target.parentElement.appendChild(placeholder);
                        }}
                      />
                    </div>
                    {/* Caption */}
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-300">
                          Mockup {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black text-white">{mockup.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300/90 text-justify">{mockup.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
           </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={80} className="mt-10 flex items-center justify-start">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-cyan-400/30 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Projects
          </button>
        </FadeUp>

      </div>
    </main>
  );
}
