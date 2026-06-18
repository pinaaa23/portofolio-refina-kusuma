import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/ui/FadeUp";
import BaseSectionHeader from "../components/ui/SectionHeader";
import ProjectCursor from "../components/ui/ProjectCursor";

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
      accent: "sky"
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

const cubicBezier = [0.22, 1, 0.36, 1];

const SectionHeader = ({ label, title, color = "sky" }) => {
  const gradients = {
    sky: "from-sky-500 to-blue-500",
    blue: "from-blue-500 to-indigo-500",
    indigo: "from-indigo-500 to-sky-500"
  };
  const textColors = {
    sky: "text-sky-600",
    blue: "text-blue-600",
    indigo: "text-indigo-600"
  };
  return (
    <BaseSectionHeader 
      label={label} 
      title={title} 
      className="text-left" 
      labelClassName={textColors[color]} 
      gradientClassName={gradients[color]} 
    />
  );
};

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailMonitoring() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 overflow-hidden bg-gradient-shift font-sans" style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe, #eff6ff, #f0f9ff)' }}>

      <ProjectCursor outerClassName="border-sky-500/40 bg-sky-500/10" innerClassName="bg-blue-500" />

      {/* ── Floating Ambient Glow ── */}
      <motion.div
        animate={{ x: [-20, 30, -20], y: [-20, 40, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(14,165,233,0.15)] blur-[120px] z-0"
      />
      <motion.div
        animate={{ x: [20, -30, 20], y: [20, -40, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(99,102,241,0.15)] blur-[120px] z-0"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 z-10">

        {/* ── Back Button ── */}
        <FadeUp delay={0}>
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(14,165,233,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </button>
        </FadeUp>

        {/* ══════════════ HERO SECTION ══════════════ */}
        <FadeUp delay={100}>
          <div className="overflow-hidden rounded-3xl glass-card relative group shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-10" />
            
            {/* Cover Image */}
            <div className="relative z-20 overflow-hidden bg-sky-50">
              <motion.img
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: cubicBezier }}
                whileHover={{ scale: 1.03 }}
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-left-top sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full min-h-[320px] flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-500/50';
                  placeholder.innerHTML = '<span class="text-4xl">Image Placeholder</span>';
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10 relative z-20 bg-white/30 backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-sky-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 shadow-sm">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-blue-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl drop-shadow-sm">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-slate-700">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-sky-200/50 pt-6 sm:grid-cols-4">
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
                  <div key={stat.label} className="rounded-2xl border border-sky-200/50 bg-white/60 p-3 text-center shadow-sm">
                    <p className="text-2xl font-black text-sky-600 drop-shadow-sm">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Internal Project Pill Badge */}
              <div className="mt-7 relative inline-flex">
                <div 
                  tabIndex="0"
                  className="peer inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-50/60 px-4 py-2 shadow-sm backdrop-blur-sm cursor-pointer outline-none focus:ring-2 focus:ring-sky-200/50"
                >
                  <span className="text-sm">🔒</span>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-sky-700">Internal Company Project</span>
                </div>
                {/* Tooltip */}
                <div className="absolute z-50 left-0 top-full mt-2 sm:left-full sm:top-1/2 sm:mt-0 sm:ml-3 w-max rounded-lg border border-sky-100 bg-white px-3 py-1.5 shadow-md opacity-0 invisible transition-all duration-300 translate-y-1 sm:-translate-y-1/2 sm:-translate-x-1 peer-hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 sm:peer-hover:-translate-y-1/2 sm:peer-hover:translate-x-0 peer-focus:opacity-100 peer-focus:visible peer-focus:translate-y-0 sm:peer-focus:-translate-y-1/2 sm:peer-focus:translate-x-0 hover:opacity-100 hover:visible hover:translate-y-0 sm:hover:-translate-y-1/2 sm:hover:translate-x-0">
                  <span className="text-[10px] font-medium text-slate-600 whitespace-nowrap">
                    Developed during internship • Internal use only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT & PROBLEM STATEMENT ══════════════ */}
        <FadeUp delay={200} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)] shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Overview" title="About This Project" color="sky" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">System Purpose</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.about}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Problem Statement</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.problem}</p>
                  <div className="mt-4 rounded-2xl border border-blue-200/50 bg-blue-50 p-4 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                    <p className="text-xs font-semibold italic text-blue-700 text-justify pl-2">
                      "How might we digitize and connect the internship tracking process to ensure transparency, prevent data loss, and simplify evaluation for all stakeholders?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ROLES & FEATURES (ALTERNATING LAYOUT) ══════════════ */}
        <FadeUp delay={300} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Core Features" title="System by Role" color="blue" />

              <div className="space-y-8 sm:space-y-10 mt-8">
                {PROJECT.roles.map((roleInfo, idx) => {
                  // Role User & Admin (idx 0,1) -> Image on Right
                  // Role Mentor & Dosen (idx 2,3) -> Image on Left
                  const flexLayout = (idx === 0 || idx === 1) ? 'sm:flex-row-reverse' : 'sm:flex-row';
                  
                  // Color maps for dynamic styling based on role accent
                  const borderColors = {
                    sky: "group-hover:border-sky-300/50",
                    blue: "group-hover:border-blue-300/50",
                    indigo: "group-hover:border-indigo-300/50",
                  };
                  
                  const textColors = {
                    sky: "text-sky-600",
                    blue: "text-blue-600",
                    indigo: "text-indigo-600",
                  };

                  const bgGradients = {
                    sky: "from-sky-50 to-white",
                    blue: "from-blue-50 to-white",
                    indigo: "from-indigo-50 to-white",
                  };

                  return (
                    <FadeUp key={roleInfo.title} delay={idx * 100}>
                      <div className={`group relative flex flex-col gap-6 sm:gap-8 rounded-3xl border border-white/50 bg-white/60 p-4 sm:p-6 transition-all duration-500 hover:bg-white/80 hover:border-white/80 ${flexLayout} items-center shadow-sm hover:shadow-md`}>
                        
                        {/* Image Preview */}
                        <div className={`w-full sm:w-[55%] shrink-0 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br ${bgGradients[roleInfo.accent]} shadow-sm transition-all duration-500 group-hover:-translate-y-1 ${borderColors[roleInfo.accent]}`}>
                          <div className="relative w-full h-auto overflow-hidden bg-slate-100 flex items-center justify-center">
                            <img
                              src={roleInfo.image}
                              alt={roleInfo.title}
                              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                              loading="lazy"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                const placeholder = document.createElement('div');
                                placeholder.className = 'w-full h-full py-10 flex flex-col items-center justify-center text-slate-400';
                                placeholder.innerHTML = `<span class="text-3xl mb-2">💻</span><span class="text-xs font-medium">Image: ${roleInfo.title}</span>`;
                                e.target.parentElement.appendChild(placeholder);
                              }}
                            />
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full sm:w-[45%] flex flex-col justify-center sm:px-2">
                          <div className="inline-flex items-center gap-3 mb-4">
                            <span className={`h-px w-8 bg-${roleInfo.accent}-400`}></span>
                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${textColors[roleInfo.accent]}`}>
                              Feature Overview
                            </span>
                          </div>
                          <h3 className={`text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight transition-all duration-300 group-hover:${textColors[roleInfo.accent]}`}>
                            {roleInfo.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-700 text-justify font-medium">
                            {roleInfo.description}
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

        {/* ══════════════ TYPOGRAPHY & DESIGN SYSTEM (EXPLORATIVE LAYOUT) ══════════════ */}
        <FadeUp delay={400} className="mt-8">
           <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)] shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Visual Identity" title="Typography & Palette" color="cyan" />
              
              <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                {/* Typography Explorative Area */}
                <div className="rounded-2xl bg-white/60 border border-white/50 p-6 relative overflow-hidden group shadow-sm">
                   {/* Decorative background letter */}
                   <div className="absolute -right-10 -bottom-16 text-[15rem] font-black text-slate-900/[0.03] pointer-events-none select-none transition-transform duration-700 group-hover:scale-110">
                     Aa
                   </div>
                   
                   <div className="relative z-10">
                     <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Primary Typeface</p>
                     
                     <div className="flex border-b border-sky-200/50 pb-6 mb-6">
                       <div className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 mr-6 tracking-tighter">
                         Inter
                       </div>
                       <div className="flex flex-col justify-end">
                         <p className="text-sm font-medium text-slate-600">A highly legible typeface optimizing the dashboard experience.</p>
                       </div>
                     </div>

                     <div className="space-y-4">
                       {PROJECT.typography.map((t, idx) => (
                         <div key={idx} className="flex flex-wrap items-end justify-between gap-2">
                           <div className="min-w-[200px]">
                             <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-1">{t.role}</span>
                             <span className="text-slate-900 truncate" style={{ fontFamily: t.name, fontWeight: t.weight, fontSize: t.size === '32px' ? '24px' : t.size }}>
                               {t.text}
                             </span>
                           </div>
                           <div className="text-right">
                             <span className="text-[10px] font-bold font-mono text-slate-600 bg-white/80 px-2 py-1 rounded-md shadow-sm border border-white/60">{t.weight} / {t.size}</span>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>

                {/* Color Palette Grid */}
                <div className="flex flex-col gap-3">
                   <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Color System</p>
                   <div className="grid grid-cols-2 gap-3 h-full">
                      {PROJECT.palette.map((c) => (
                        <div key={c.hex} className="relative rounded-2xl border border-white/50 overflow-hidden group h-24 sm:h-auto min-h-[100px] transition-transform duration-300 hover:scale-[1.02] shadow-sm">
                          <div className="absolute inset-0 transition-opacity duration-300" style={{ backgroundColor: c.hex }}></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-3 w-full">
                             <p className="text-[10px] font-bold text-white tracking-wide">{c.name}</p>
                             <p className="text-[9px] font-mono font-medium text-white/90 uppercase">{c.hex} · {c.role}</p>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
           </div>
        </FadeUp>

        {/* ══════════════ MOCKUPS SHOWCASE ══════════════ */}
        <FadeUp delay={500} className="mt-8">
           <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Final Outcome" title="Design Mockups" color="blue" />
              
              <div className="space-y-6 mt-8">
                {PROJECT.mockups.map((mockup, idx) => (
                  <FadeUp key={mockup.title} delay={idx * 100}>
                    <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,165,233,0.2)]">
                      {/* Large mockup image */}
                      <div className="relative overflow-hidden bg-sky-50 flex items-center justify-center">
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
                            placeholder.innerHTML = `<div class="text-4xl mb-3">🖥️</div><p class="text-sm font-bold text-slate-500">${mockup.title}</p><p class="text-xs font-medium text-slate-400 mt-1">Image placeholder</p>`;
                            e.target.parentElement.appendChild(placeholder);
                          }}
                        />
                      </div>
                      {/* Caption */}
                      <div className="p-6 sm:p-8 lg:p-10 border-t border-white/50">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-blue-300/50 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600 shadow-sm">
                            Mockup {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl font-black text-slate-900">{mockup.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700 text-justify font-medium">{mockup.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
           </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={600} className="mt-10 flex items-center justify-start relative z-10">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(14,165,233,0.25)] active:scale-95"
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
