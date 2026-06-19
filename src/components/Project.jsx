import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

// ─── DATA (unchanged) ──────────────────────────────────────────────────────────
const PROJECT_ITEMS = [
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "DailyDrip",
    description:
      "A mobile social app that lets users share beverage and cafe moments in a pressure free environment built on deep user research.",
    tags: ["Mobile Design", "Figma", "UX Research"],
    cover: "/gallery/project/UIUX/DailyDrip/cover.png",
    link: "/project/uiux/dailydrip",
    accentFrom: "from-violet-600",
    accentTo: "to-indigo-500",
    accent: "#7e22ce",
    bgGradient: "linear-gradient(180deg, #e9d5ff 0%, #fdfaff 15%, #fdf2f8 40%, #fce7f3 85%, #F5EFE6 100%)",
  },
  {
    filterKey: "web",
    category: "Web Development",
    title: "SmartKasir POS",
    description:
      "A modern point of sale system featuring real time analytics, cashier cart POS, product inventory, and customer relationship management.",
    tags: ["Web App", "React", "POS System"],
    cover: "/gallery/project/WebDev/kasir/cover.png",
    link: "/project/webdev/cashier",
    accentFrom: "from-blue-600",
    accentTo: "to-indigo-500",
    accent: "#2563eb",
    bgGradient: "linear-gradient(180deg, #dbeafe 0%, #f4f9ff 15%, #eff6ff 40%, #dbeafe 85%, #F5EFE6 100%)",
  },
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "Parakelana",
    description:
      "A comprehensive outdoor equipment rental platform bridging stores and hikers reliable gear, just a few clicks away.",
    tags: ["Mobile Design", "Figma", "Outdoor Rental"],
    cover: "/gallery/project/UIUX/parakelana/cover1.jpg",
    link: "/project/uiux/parakelana",
    accentFrom: "from-emerald-500",
    accentTo: "to-green-400",
    accent: "#16a34a",
    bgGradient: "linear-gradient(180deg, #e9d5ff 0%, #fdfaff 15%, #f0fdf4 40%, #dcfce7 85%, #F5EFE6 100%)",
  },
  {
    filterKey: "web",
    category: "Web Development",
    title: "Monitoring Internship",
    description:
      "A unified platform where interns report daily activities, mentors approve tasks, and lecturers monitor performance in real-time.",
    tags: ["React", "Tailwind CSS", "Dashboard"],
    cover: "/gallery/project/WebDev/Monitoring/cover1.png",
    link: "/project/webdev/monitoring",
    accentFrom: "from-cyan-600",
    accentTo: "to-blue-500",
    accent: "#0284c7",
    objectPosition: "object-left-top",
    bgGradient: "linear-gradient(180deg, #e9d5ff 0%, #fdfaff 15%, #f0f9ff 40%, #e0f2fe 85%, #F5EFE6 100%)",
  },
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "KayuNusa",
    description:
      "An elegant e commerce platform for premium wooden furniture bringing warmth of traditional woodworking into modern digital shopping.",
    tags: ["Web Design", "UI/UX", "E-Commerce"],
    cover: "/gallery/project/UIUX/KayuNusa/cover.jpeg",
    link: "/project/uiux/kayunusa",
    accentFrom: "from-yellow-600",
    accentTo: "to-amber-500",
    accent: "#d97706",
    bgGradient: "linear-gradient(180deg, #e9d5ff 0%, #fdfaff 15%, #fffbeb 40%, #fef3c7 85%, #F5EFE6 100%)",
  },
  {
    filterKey: "web",
    category: "Web Development",
    title: "Asset Management",
    description:
      "A centralized enterprise platform to track asset inventory, monitor borrowing histories, and schedule maintenance.",
    tags: ["React", "Enterprise", "Dashboard"],
    cover: "/gallery/project/WebDev/asset/cover.png",
    link: "/project/webdev/asset",
    accentFrom: "from-red-600",
    accentTo: "to-rose-500",
    accent: "#e11d48",
    bgGradient: "linear-gradient(180deg, #fecaca 0%, #fff1f2 15%, #fee2e2 40%, #fecaca 85%, #F5EFE6 100%)",
  },
];

// ─── EASING ────────────────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1];

// ─── CUSTOM CURSOR ─────────────────────────────────────────────────────────────
function ProjectCursor({ active }) {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  const x = useSpring(mx, { damping: 28, stiffness: 220, mass: 0.45 });
  const y = useSpring(my, { damping: 28, stiffness: 220, mass: 0.45 });
  const tx = useSpring(mx, { damping: 40, stiffness: 140, mass: 0.8 });
  const ty = useSpring(my, { damping: 40, stiffness: 140, mass: 0.8 });

  useEffect(() => {
    const fn = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [mx, my]);

  return (
    <>
      {/* Halo */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-16 h-16 rounded-full bg-[#7e22ce]"
        style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: active ? 3.2 : 0, opacity: active ? 0.12 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center overflow-hidden"
          animate={{
            width: active ? 64 : 10,
            height: active ? 64 : 10,
            backgroundColor: active ? "#7e22ce" : "#2e1065",
          }}
          transition={{ duration: 0.28, ease: EASE }}
        >
          <AnimatePresence>
            {active && (
              <motion.span
                key="label"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.16 }}
                className="text-white text-[6.5px] font-black tracking-widest uppercase text-center leading-tight"
              >
                View<br />Project
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}

// ─── DEPTH STACK ───────────────────────────────────────────────────────────────
// Renders 2 ghost cards behind the active frame — pure CSS transform, no JS math
const GHOST_CONFIG = [
  { scale: 0.88, opacity: 0.3, x: 60, y: -18, z: 1 },
  { scale: 0.94, opacity: 0.52, x: 30, y: -9,  z: 2 },
];

function DepthStack({ current }) {
  return (
    <>
      {GHOST_CONFIG.map((cfg, layer) => {
        const idx = (current + layer + 1) % PROJECT_ITEMS.length;
        const p   = PROJECT_ITEMS[idx];
        return (
          <motion.div
            key={`ghost-${layer}`}
            aria-hidden="true"
            animate={{
              scale:   cfg.scale,
              opacity: cfg.opacity,
              x:       cfg.x,
              y:       cfg.y,
            }}
            transition={{ duration: 0.65, ease: EASE }}
            className="hidden md:block absolute inset-y-0 left-0 md:right-16 rounded-3xl overflow-hidden border border-white/20"
            style={{
              zIndex: cfg.z,
              boxShadow: "0 12px 40px rgba(46,16,101,0.10)",
              willChange: "transform, opacity",
            }}
          >
            <img
              src={p.cover}
              alt=""
              loading="lazy"
              className={`w-full h-full object-cover ${p.objectPosition ?? "object-top"}`}
            />
            <div className="absolute inset-0 bg-[#2e1065]/35" />
          </motion.div>
        );
      })}
    </>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function Project() {
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [hovering,  setHovering]  = useState(false);
  const navigate = useNavigate();

  const total   = PROJECT_ITEMS.length;
  const project = PROJECT_ITEMS[current];

  // Navigation
  const goTo = useCallback(
    (idx) => {
      if (idx === current) return;
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  // Keyboard
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight") goTo((current + 1) % total);
      if (e.key === "ArrowLeft")  goTo((current - 1 + total) % total);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [current, total, goTo]);

  // Slide variants — GPU-accelerated translateX with subtle blur
  const slideVariants = {
    enter: (d) => ({
      x: d > 0 ? "40%" : "-40%",
      opacity: 0,
      scale: 0.85,
      filter: "blur(16px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: EASE },
    },
    exit: (d) => ({
      x: d > 0 ? "-40%" : "40%",
      opacity: 0,
      scale: 0.85,
      filter: "blur(16px)",
      transition: { duration: 0.8, ease: EASE },
    }),
  };

  // Text info variants (vertical wipe)
  const infoVariants = {
    enter: (d) => ({ y: d > 0 ? 80 : -80, opacity: 0, filter: "blur(10px)" }),
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE, delay: 0.1 },
    },
    exit: (d) => ({
      y: d > 0 ? -80 : 80,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.6, ease: EASE },
    }),
  };

  return (
    <section
      id="project"
      className="relative min-h-screen overflow-hidden py-20 px-6 md:px-16 bg-[#F5EFE6]"
    >
      {/* ── Background Color Stack ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {PROJECT_ITEMS.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: current === idx ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ background: p.bgGradient }}
          />
        ))}
      </div>

      {/* Custom cursor */}
      <ProjectCursor active={hovering} />

      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.022] grain-texture z-0" />

      {/* Ambient orbs (Color updates dynamically based on project.accent) */}
      <motion.div
        aria-hidden="true"
        animate={{ 
          y: [0, -14, 0], x: [0, 9, 0],
          background: `radial-gradient(circle, ${project.accent}, transparent 70%)`
        }}
        transition={{ 
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          background: { duration: 0.8 }
        }}
        className="pointer-events-none absolute top-24 left-6 w-80 h-80 rounded-full blur-3xl opacity-[0.12] z-0"
      />
      <motion.div
        aria-hidden="true"
        animate={{ 
          y: [0, 16, 0], x: [0, -11, 0],
          background: `radial-gradient(circle, ${project.accent}, transparent 70%)`
        }}
        transition={{ 
          y: { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 },
          x: { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 },
          background: { duration: 0.8 }
        }}
        className="pointer-events-none absolute bottom-24 right-12 w-96 h-96 rounded-full blur-3xl opacity-[0.08] z-0"
      />

      {/* ── Page content ── */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">

        {/* ── Section header ── */}
        <header>
          <motion.span
            className="font-handwriting text-[#7e22ce] text-xl block mb-2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Selected Works
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-black text-[#2e1065]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          >
            Projects
          </motion.h2>
        </header>

        {/* ── Two-column slider ── */}
        <motion.div 
          initial={{ opacity: 0, y: 150, filter: "blur(24px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-stretch"
        >

          {/* ── LEFT — Hero image ── */}
          <div
            className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[clamp(360px,58vh,520px)]"
          >
            {/* Ghost depth layers */}
            <DepthStack current={current} />

            {/* Active slide */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`slide-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-y-0 left-0 right-0 md:right-16 rounded-3xl overflow-hidden"
                style={{
                  zIndex: 10,
                  willChange: "transform, opacity",
                  boxShadow: "0 20px 60px rgba(46,16,101,0.14)",
                }}
                onHoverStart={() => setHovering(true)}
                onHoverEnd={() => setHovering(false)}
                onClick={() => project.link && navigate(project.link)}
              >
                {/* Cover image */}
                <motion.img
                  src={project.cover}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover ${project.objectPosition ?? "object-top"}`}
                  animate={{ scale: hovering ? 1.04 : 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ willChange: "transform" }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/80 via-[#2e1065]/18 to-transparent" />

                {/* Inner glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={{ opacity: hovering ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ boxShadow: `inset 0 0 56px 10px ${project.accent}44` }}
                />

                {/* Category badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-${current}`}
                    className="hidden md:block absolute top-5 left-5"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: EASE, delay: 0.15 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 backdrop-blur-sm px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white/90">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      {project.category}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom title overlay */}
                <div className="hidden md:block absolute bottom-0 inset-x-0 p-7 pointer-events-none">
                  <p className="text-white/45 text-[10px] font-semibold tracking-widest uppercase mb-1.5">
                    {project.tags.join(" · ")}
                  </p>
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.h3
                      key={`img-h3-${current}`}
                      custom={direction}
                      variants={infoVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="text-2xl md:text-3xl font-serif font-black text-white leading-tight"
                    >
                      {project.title}
                    </motion.h3>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT — Info panel ── */}
          <div className="flex flex-col justify-between gap-6 py-1">

            {/* Project info — animated on change */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`info-${current}`}
                custom={direction}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-4"
              >
                {/* Category */}
                <span
                  className="text-[10px] font-black tracking-[0.28em] uppercase"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif font-black text-[#2e1065] leading-[1.1]">
                  {project.title}
                </h3>

                {/* Accent divider */}
                <motion.div
                  key={`divider-${current}`}
                  className="h-[2px] rounded-full"
                  style={{ backgroundColor: project.accent }}
                  initial={{ width: 0 }}
                  animate={{ width: 36 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                />

                {/* Description */}
                <p className="text-sm md:text-[15px] leading-relaxed font-light text-[#2e1065]/55">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-[#2e1065]/10 text-[#2e1065]/40 bg-white/50 hover:border-[#7e22ce]/30 hover:text-[#7e22ce] transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link && (
                  <motion.button
                    onClick={() => navigate(project.link)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.16 }}
                    className="mt-1 self-start inline-flex items-center gap-2 text-sm font-black tracking-[0.14em] uppercase text-[#7e22ce]"
                  >
                    <span>View Project</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>

            {/* ── NAVIGATION ── */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => goTo((current - 1 + total) % total)}
                className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#2e1065]/10 bg-white/50 hover:bg-white text-[#2e1065] hover:text-[#7e22ce] hover:border-[#7e22ce]/30 transition-all duration-300 shadow-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-x-1">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="text-xs font-black tracking-[0.15em] uppercase">Back</span>
              </button>
              
              <button
                onClick={() => goTo((current + 1) % total)}
                className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#2e1065]/10 bg-white/50 hover:bg-white text-[#2e1065] hover:text-[#7e22ce] hover:border-[#7e22ce]/30 transition-all duration-300 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.15em] uppercase">Next</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}