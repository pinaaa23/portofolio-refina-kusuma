import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const SKILLS = ["React", "JavaScript", "Node.js", "Tailwind"];

const EXPERIENCE_ITEMS = [
  {
    period: "2023 - 2024",
    title: "Assistant Lecturer",
    organization: "Advanced Algorithm and Programming Practicum (2024)",
    certificate: {
      label: "Practicum Assistant Certificate",
      detail: "Klik untuk melihat sertifikat yang diperoleh pada kegiatan Advanced Algorithm and Programming Practicum (2024).",
      image: "/certificates/SKA%20ASDOS.jpg",
      alt: "Practicum Assistant Certificate",
    },
    points: [
      "Responsible for assisting students in understanding advanced algorithm concepts and guiding them in implementing problem-solving logic using the Java programming language. Demonstrated the use of data structures, algorithm optimization, OOP concepts, and coding practices through hands-on labs and real-case exercises.",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Secretary ",
    organization: "Informatics & Computer Student Activity Unit",
    certificate: {
      label: "Secretary Certificate",
      detail: "Klik untuk melihat sertifikat yang terkait dengan administrasi organisasi dan kegiatan internal.",
      image: "/certificates/SKA%20IK.jpg",
      alt: "Secretary Certificate",
    },
    points: [
      "Responsible for managing organizational administration, including drafting official documents, recording meeting minutes, managing correspondence, and organizing schedules for internal activities. Actively maintained internal communication through structured information distribution, coordinated event documentation, and ensured all data and records were neatly archived.",
    ],
  },
  {
    period: "2026 - until now",
    title: "Magang Web Developer",
    organization: "Internship Team Project",
    points: [
      "Developed an internship monitoring system to track student activities and progress in real-time, while building responsive interfaces with React.js, optimizing performance through reusable components, and designing user-friendly dashboards for efficient monitoring and reporting.",
    ],
  },
];

const PROJECT_ITEMS = [
  {
    category: "AI Content",
    title: "AI Creative Campaign System",
    description:
      "Produksi konten visual dan video berbasis AI untuk branding digital, promosi, dan storytelling kreatif dengan pendekatan generatif.",
    tags: ["AI Video", "AI Image", "Digital Branding"],
    preview: "from-orange-200 via-amber-300 to-stone-500",
  },
  {
    category: "Academic Web Projects",
    title: "Final Project Digital System",
    description:
      "Platform web berbasis proyek akademik dengan pendekatan profesional, modern UI/UX, dan sistem terstruktur yang siap diimplementasikan di dunia nyata.",
    tags: ["Web System", "UI/UX", "React"],
    preview: "from-slate-900 via-indigo-900 to-violet-700",
  },
  {
    category: "Digital Growth System",
    title: "Smart Content Strategy",
    description:
      "Manajemen media sosial, perencanaan konten strategis, produksi visual & video digital, serta optimalisasi engagement berbasis data dan tren.",
    tags: ["Content Planning", "Social Media", "Video"],
    preview: "from-stone-300 via-zinc-400 to-slate-700",
  },
];

const ABOUT_SERVICES = [
  {
    title: "Web Development",
    description: "Building responsive and interactive websites with modern technologies.",
    icon: "</>",
  },
  {
    title: "UI/UX Design",
    description: "Designing modern and user-friendly interfaces.",
    icon: "[ ]",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.25.82-.57v-2.14c-3.34.72-4.05-1.41-4.05-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.46-2.39 1.23-3.23-.12-.31-.54-1.57.12-3.28 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.67 1.71.25 2.97.13 3.28.76.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.82.57A12 12 0 0 0 12 .7Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.48 2.48 0 1 1 4.98 8a2.48 2.48 0 0 1 0-4.5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.84-2.05 3.79-2.05C21.68 8.59 22 11 22 14.13V21h-4v-5.92c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.54-2.28 3.12V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certification", href: "#certification" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE_MENU = [
  { key: "experience", label: "Experience", targetId: "experience-overview" },
  { key: "certificates", label: "Certificates", targetId: "experience-certificates" },
  { key: "tech-stack", label: "Tech Stack", targetId: "experience-techstack" },
];

const SPLINE_SCENE_URL = "https://prod.spline.design/JIYBLPAE8cBGGEJ7/scene.splinecode";

export default function PortfolioPage() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [openCertificate, setOpenCertificate] = useState(null);
  const [activeExperienceMenu, setActiveExperienceMenu] = useState("experience");

  const handleExperienceMenuClick = (menuKey, targetId) => {
    setActiveExperienceMenu(menuKey);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const trackedIds = ["project", "about", "experience", "certification", "contact"];
    const trackedElements = trackedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleTopState = () => {
      if (window.scrollY < 120) {
        setActiveNav("home");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveNav(visible[0].target.id);
        } else {
          handleTopState();
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    trackedElements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleTopState, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopState);
    };
  }, []);

  return (
    <main
      data-theme={isLightMode ? "light" : "dark"}
      className={`relative min-h-screen snap-y snap-proximity scroll-smooth [scroll-padding-top:7rem] transition-colors duration-500 ${
        isLightMode ? "bg-slate-100 text-slate-900" : "bg-[#050816] text-white"
      }`}
    >
      <div
        className={`pointer-events-none fixed inset-0 transition-opacity duration-500 ${
          isLightMode
            ? "bg-[radial-gradient(circle_at_10%_20%,rgba(125,211,252,0.4),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(103,232,249,0.24),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(167,243,208,0.26),transparent_34%),linear-gradient(135deg,#f7fbff_0%,#ecf6ff_45%,#e3f2ff_100%)]"
            : "bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.38),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#04060f_0%,#070b1d_45%,#020308_100%)]"
        }`}
      />
      <div
        className={`pointer-events-none fixed inset-0 transition-opacity duration-500 ${
          isLightMode
            ? "opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
            : "opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]"
        }`}
      />

      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5 lg:px-8">
        <div
          className={`mx-auto flex w-full max-w-5xl items-center rounded-full border px-4 py-2 text-xs shadow-[0_10px_30px_rgba(2,6,23,0.22)] backdrop-blur-2xl sm:px-6 sm:py-2.5 sm:text-sm lg:px-10 ${
            isLightMode ? "border-slate-400/30 bg-white/60" : "border-white/15 bg-[#050816]/45"
          }`}
        >
          <span className={`font-semibold tracking-wide ${isLightMode ? "text-slate-700" : "text-violet-200"}`}>RFNKSM</span>

          <div className="ml-auto hidden items-center gap-3 md:flex lg:gap-4">
            <nav className="flex items-center gap-5 lg:gap-7">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  onClick={() => setActiveNav(item.href.slice(1))}
                  className={`transition-colors ${
                    activeNav === item.href.slice(1)
                      ? isLightMode
                        ? "text-slate-900"
                        : "text-white"
                      : isLightMode
                        ? "text-slate-700 hover:text-slate-900"
                        : "text-slate-200/85 hover:text-white"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setIsLightMode((prev) => !prev)}
              aria-label="Toggle theme"
              className={`rounded-full border p-2 transition-all duration-300 hover:-translate-y-0.5 ${
                isLightMode
                  ? "border-amber-400/50 bg-amber-100/80 text-amber-600 hover:bg-amber-200/80"
                  : "border-white/15 bg-white/5 text-amber-300 hover:bg-white/10"
              }`}
            >
              {isLightMode ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3c.1 0 .2 0 .3.01a7 7 0 0 0 9.49 9.49Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </header>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-3 pt-14 sm:px-6 sm:pb-4 sm:pt-16 lg:px-10 lg:pb-5 lg:pt-16">

        <section id="home" className="snap-start scroll-mt-28 flex min-h-[100svh] items-start pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-4">
          <div className="mx-auto grid w-full max-w-5xl items-start gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[11px] font-medium text-violet-100 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-violet-300" />
                Ready to Innovate
              </div>

              <h1 className="mt-8 text-3xl font-black leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
                <span className="block text-white">&amp; UI/UX Designer</span>
              </h1>

              <p className="mt-3 text-sm text-slate-200/75 sm:text-base">Crafting modern, user-friendly web experiences</p>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-300/85 sm:text-sm">
                I design and develop modern, responsive web interfaces by combining frontend development and UI/UX design. I focus on creating clean, intuitive layouts that are easy to use and visually appealing. With attention to performance and detail, I aim to deliver seamless user experiences that are both functional and engaging.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-200/90 backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3" id="contact">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-violet-300/30 hover:text-white sm:h-11 sm:w-11"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-[360px]">
              <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-transparent sm:h-[320px] lg:h-[380px]">
                <Spline scene={SPLINE_SCENE_URL} className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="snap-start scroll-mt-28 flex items-start pt-4 sm:pt-5 lg:h-[calc(100vh-6rem)] lg:min-h-0 lg:pt-4">
          <div className="mx-auto w-full max-w-5xl space-y-4 sm:space-y-5 lg:space-y-4">

            <div className="grid items-center gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div className="max-w-xl about-copy">
                <h3 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                  <span className="text-violet-300">Hello, I'm</span>
                  <span className="mt-1 block text-white">Refina Kusuma Friambudi</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-base">
                  I am an Informatics student focused on frontend development and UI/UX design. I enjoy creating modern and responsive web interfaces that are visually appealing and easy to use. By combining design and development skills, I aim to build clean, intuitive, and user-friendly digital experiences while continuously improving my abilities.
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href="#"
                    className="rounded-lg border border-violet-300/25 bg-violet-500/80 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-400/90 sm:text-sm"
                  >
                    Download CV
                  </a>
                  <a
                    href="#project"
                    className="rounded-lg border border-violet-300/30 bg-transparent px-4 py-2 text-xs font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200/45 hover:bg-violet-500/10 hover:text-white sm:text-sm"
                  >
                    View Projects
                  </a>
                </div>

              </div>

              <div className="flex justify-center lg:justify-center lg:pl-0">
                <div className="about-avatar-shell relative h-44 w-44 rounded-full border border-violet-200/25 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-black/90 sm:h-52 sm:w-52 lg:h-64 lg:w-64">
                  <div className="about-avatar-ring absolute inset-0 rounded-full ring-2 ring-violet-400/25" />
                  <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-[65%] rounded-full bg-black/80 sm:h-20 sm:w-20" />
                  <div className="absolute left-1/2 top-[58%] h-20 w-28 -translate-x-1/2 rounded-[999px_999px_22px_22px] bg-black/80 sm:h-24 sm:w-32" />
                </div>
              </div>
            </div>

            <div id="certification" className="grid gap-3 sm:grid-cols-2">
              {ABOUT_SERVICES.map((item, index) => (
                <article
                  key={item.title}
                  style={{ "--service-delay": `${index * 0.55}s` }}
                  className="about-service-card rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-violet-300 sm:text-lg">{item.icon}</span>
                    <h4 className="text-base font-bold text-white sm:text-lg">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-slate-300/85">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="snap-start scroll-mt-28 min-h-screen pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-4">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-[#050816]/35 p-4 backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex justify-center sm:mb-6">
              <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
                {EXPERIENCE_MENU.map((menu) => (
                  <button
                    key={menu.key}
                    type="button"
                    onClick={() => handleExperienceMenuClick(menu.key, menu.targetId)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                      activeExperienceMenu === menu.key
                        ? "bg-violet-500 text-white shadow-[0_6px_18px_rgba(139,92,246,0.45)]"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {menu.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5 sm:mb-6">
              <h2 className="text-2xl font-black text-white sm:text-3xl">Experience &amp; Contributions</h2>
              <div className="mt-2 h-1 w-10 rounded-full bg-violet-500" />
            </div>

            <div id="experience-overview" className="scroll-mt-36 relative pl-9 sm:pl-12">
              <div className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-500 via-indigo-500 to-cyan-400 sm:left-3" />

              <div className="space-y-4 sm:space-y-5">
                {EXPERIENCE_ITEMS.map((item) => (
                  <article
                    key={item.title}
                    className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/85 via-slate-900/78 to-violet-900/30 p-4 shadow-[0_12px_28px_rgba(2,6,23,0.34)] backdrop-blur-xl sm:p-5"
                  >
                    <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border border-white/20 bg-fuchsia-400 shadow-[0_0_0_4px_rgba(8,47,73,0.8)] sm:-left-[2.65rem]" />
                    <p className="text-xs font-semibold text-cyan-300">{item.period}</p>
                    <h3 className="mt-1 text-base font-extrabold uppercase text-white sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-200/85">{item.organization}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-300/90">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {item.certificate ? (
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => setOpenCertificate((current) => (current?.label === item.certificate.label ? null : item.certificate))}
                          className="w-full rounded-2xl border border-violet-300/15 bg-white/6 px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
                                Sertifikat
                              </p>
                              <p className="mt-1 text-sm font-semibold text-white">{item.certificate.label}</p>
                            </div>
                            <span className="text-xs font-medium text-cyan-200">
                              {openCertificate?.label === item.certificate.label ? "Close" : "View Certificate"}
                            </span>
                          </div>
                        </button>

                        {openCertificate?.label === item.certificate.label ? (
                          <div className="mt-2 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 px-3 py-2 text-xs leading-relaxed text-slate-200/90 backdrop-blur-md">
                            {item.certificate.detail}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div id="experience-certificates" className="scroll-mt-36 mt-8 sm:mt-10">
              <h3 className="text-lg font-bold text-white sm:text-xl">Certificates</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {EXPERIENCE_ITEMS.filter((item) => item.certificate).map((item) => (
                  <button
                    key={item.certificate.label}
                    type="button"
                    onClick={() => setOpenCertificate(item.certificate)}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-white/10"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">Certificate</p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.certificate.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div id="experience-techstack" className="scroll-mt-36 mt-8 sm:mt-10">
              <h3 className="text-lg font-bold text-white sm:text-xl">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium text-slate-200/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="snap-start scroll-mt-28 min-h-screen pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-4">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-5 px-1 sm:mb-6">
              <h2 className="text-3xl font-black text-white sm:text-4xl">Proyek Yang Dikerjakan</h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-violet-500" />
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {PROJECT_ITEMS.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(2,6,23,0.28)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.preview} p-4 sm:h-52`}>
                    <div className="flex h-full items-end rounded-2xl border border-white/15 bg-black/10 p-4 backdrop-blur-sm">
                      <div className="w-full space-y-2">
                        <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                          {project.category}
                        </span>
                        <div className="h-1.5 w-20 rounded-full bg-white/70 opacity-80" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-medium text-slate-200/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {openCertificate ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#070b1d] shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
              <button
                type="button"
                onClick={() => setOpenCertificate(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/15"
              >
                Close
              </button>

              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="flex items-center justify-center bg-black/25 p-4 sm:p-6">
                  <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {openCertificate.image ? (
                      <img
                        src={openCertificate.image}
                        alt={openCertificate.alt}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center px-4 text-center text-sm text-slate-300">
                        Tambahkan path gambar sertifikat di data experience untuk menampilkan preview di sini.
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Certificate</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{openCertificate.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{openCertificate.detail}</p>
                  <p className="mt-5 text-xs leading-relaxed text-slate-400">
                    File gambar yang dipakai mengikuti path yang kamu isi di data experience. Simpan file sertifikat ke folder
                    public/certificates/ lalu isi properti image dengan nama file-nya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <style>{`
        .motion-stage {
          animation: stage-sway 8s ease-in-out infinite;
        }

        .motion-robot {
          animation: robot-bob 6.4s ease-in-out infinite, robot-tilt 6.4s ease-in-out infinite;
        }

        .motion-panel {
          animation: panel-float 6.4s ease-in-out infinite;
        }

        .motion-hologram .ring {
          position: absolute;
          inset: 0;
          border: 1.5px solid rgba(45, 212, 191, 0.45);
          border-radius: 999px;
          animation: hologram-spin 6.4s linear infinite;
        }

        .motion-hologram .ring-2 {
          transform: rotateX(65deg);
          animation-duration: 6.4s;
        }

        .motion-hologram .ring-3 {
          transform: rotateY(70deg);
          animation-duration: 6.4s;
          animation-direction: reverse;
        }

        .motion-hologram .core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          background: #99f6e4;
          box-shadow: 0 0 14px rgba(45, 212, 191, 0.8);
        }

        .visor-sweep {
          animation: visor-sweep 6.4s ease-in-out infinite;
        }

        .about-title {
          animation: about-title-glow 6.4s ease-in-out infinite;
        }

        .about-subtitle {
          animation: about-sub-float 6.4s ease-in-out infinite;
        }

        .about-copy {
          animation: about-copy-float 9s ease-in-out infinite;
        }

        .about-job-card {
          animation: about-card-idle 7.4s ease-in-out infinite;
          animation-delay: var(--card-delay, 0s);
        }

        .about-avatar-shell {
          animation: about-avatar-breathe 7s ease-in-out infinite;
        }

        .about-avatar-ring {
          animation: about-ring-spin 22s linear infinite;
        }

        .about-stat-content {
          animation: about-stat-idle 6.8s ease-in-out infinite;
          animation-delay: var(--stat-delay, 0s);
        }

        @keyframes stage-sway {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-0.3deg);
          }
          50% {
            transform: translate3d(0, -6px, 0) rotate(0.35deg);
          }
        }

        @keyframes robot-bob {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes robot-tilt {
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1.4deg);
          }
        }

        @keyframes hologram-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes panel-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes visor-sweep {
          0%,
          100% {
            transform: translateX(-34px);
            opacity: 0;
          }
          12% {
            opacity: 0.75;
          }
          42% {
            transform: translateX(34px);
            opacity: 0;
          }
        }

        @keyframes about-title-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.22);
          }
          50% {
            text-shadow: 0 0 20px rgba(45, 212, 191, 0.2);
          }
        }

        @keyframes about-sub-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes about-copy-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes about-avatar-breathe {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.01);
          }
        }

        @keyframes about-ring-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes about-card-idle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes about-stat-idle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-stage,
          .motion-robot,
          .motion-panel,
          .motion-hologram .ring,
          .visor-sweep,
          .about-title,
          .about-subtitle,
          .about-copy,
          .about-job-card,
          .about-avatar-shell,
          .about-avatar-ring,
          .about-stat-content {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
