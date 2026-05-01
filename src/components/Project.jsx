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
      "A mobile social app that lets users share beverage and café moments in a pressure-free environment—built on deep user research.",
    tags: ["Mobile Design", "Figma", "UX Research"],
    cover: "/gallery/project/UIUX/DailyDrip/cover.png",
    link: "/project/uiux/dailydrip",
    accentFrom: "from-violet-600",
    accentTo: "to-indigo-500",
    accent: "#7e22ce",
  },
  {
    filterKey: "web",
    category: "Web Development",
    title: "Cashier Web App",
    description:
      "A lightweight point-of-sale system designed for small businesses—streamlined transactions, role-based access, clean interface.",
    tags: ["Web App", "CSS/JavaScript", "POS System"],
    cover: "/gallery/project/WebDev/kasir/cover.png",
    link: "/project/webdev/cashier",
    accentFrom: "from-emerald-600",
    accentTo: "to-teal-500",
    accent: "#059669",
  },
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "Parakelana",
    description:
      "A comprehensive outdoor equipment rental platform bridging stores and hikers—reliable gear, just a few clicks away.",
    tags: ["Mobile Design", "Figma", "Outdoor Rental"],
    cover: "/gallery/project/UIUX/parakelana/cover1.jpg",
    link: "/project/uiux/parakelana",
    accentFrom: "from-emerald-500",
    accentTo: "to-green-400",
    accent: "#16a34a",
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
  },
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "KayuNusa",
    description:
      "An elegant e-commerce platform for premium wooden furniture—bringing warmth of traditional woodworking into modern digital shopping.",
    tags: ["Web Design", "UI/UX", "E-Commerce"],
    cover: "/gallery/project/UIUX/KayuNusa/cover.jpeg",
    link: "/project/uiux/kayunusa",
    accentFrom: "from-yellow-600",
    accentTo: "to-amber-500",
    accent: "#d97706",
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
  { scale: 0.88, opacity: 0.3, x: 52, y: -18, z: 1 },
  { scale: 0.93, opacity: 0.52, x: 26, y: -9,  z: 2 },
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
            className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20"
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

  // Slide variants — GPU-accelerated translateX
  const slideVariants = {
    enter: (d) => ({
      x: d > 0 ? "5%" : "-5%",
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: EASE },
    },
    exit: (d) => ({
      x: d > 0 ? "-5%" : "5%",
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.55, ease: EASE },
    }),
  };

  // Text info variants (vertical wipe)
  const infoVariants = {
    enter: (d) => ({ y: d > 0 ? 20 : -20, opacity: 0 }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: EASE },
    },
    exit: (d) => ({
      y: d > 0 ? -20 : 20,
      opacity: 0,
      transition: { duration: 0.4, ease: EASE },
    }),
  };

  return (
    <section
      id="project"
      className="relative min-h-screen overflow-hidden py-20 px-6 md:px-16"
      style={{
        background:
          "linear-gradient(160deg, #e9d5ff 0%, #f3e8ff 30%, #fdfaff 70%)",
      }}
    >
      {/* Custom cursor */}
      <ProjectCursor active={hovering} />

      {/* Top fade — blends into Experience section above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-44 z-0"
        style={{
          background: "linear-gradient(to bottom, #e9d5ff 0%, transparent 100%)",
        }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.022] grain-texture z-0" />

      {/* Ambient orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0], x: [0, 9, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-24 left-6 w-80 h-80 rounded-full blur-3xl opacity-[0.18] z-0"
        style={{ background: "radial-gradient(circle, #c084fc, transparent 70%)" }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0], x: [0, -11, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute bottom-24 right-12 w-96 h-96 rounded-full blur-3xl opacity-[0.10] z-0"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
      />

      {/* ── Page content ── */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-stretch">

          {/* ── LEFT — Hero image ── */}
          <div
            className="relative"
            style={{ height: "clamp(360px, 58vh, 520px)" }}
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
                className="absolute inset-0 rounded-3xl overflow-hidden"
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
                    className="absolute top-5 left-5"
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
                <div className="absolute bottom-0 inset-x-0 p-7 pointer-events-none">
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

            {/* ── NUMBER NAVIGATION ── */}
            <div className="flex flex-col gap-3">
              {/* Number circles */}
              <div className="flex items-center gap-2">
                {PROJECT_ITEMS.map((p, i) => {
                  const isActive = i === current;
                  return (
                    <motion.button
                      key={p.title}
                      onClick={() => goTo(i)}
                      aria-label={`Project ${i + 1}: ${p.title}`}
                      whileHover={{ scale: isActive ? 1 : 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ duration: 0.14 }}
                      className="flex flex-col items-center gap-1 focus:outline-none"
                    >
                      {/* Circle */}
                      <motion.div
                        animate={{
                          backgroundColor: isActive ? "#7e22ce" : "transparent",
                          borderColor: isActive ? "#7e22ce" : "rgba(46,16,101,0.18)",
                          scale: isActive ? 1.15 : 1,
                          boxShadow: isActive
                            ? "0 0 14px rgba(126,34,206,0.35)"
                            : "none",
                        }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="w-9 h-9 rounded-full border-2 flex items-center justify-center"
                        style={{ willChange: "transform" }}
                      >
                        <motion.span
                          animate={{ color: isActive ? "#ffffff" : "rgba(46,16,101,0.35)" }}
                          transition={{ duration: 0.22 }}
                          className="text-[10px] font-black tracking-wide"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </motion.span>
                      </motion.div>

                      {/* Underline */}
                      <AnimatePresence>
                        {isActive ? (
                          <motion.div
                            layoutId="nav-bar"
                            className="h-[2px] rounded-full bg-[#7e22ce]"
                            style={{ width: 18 }}
                            transition={{ duration: 0.3, ease: EASE }}
                          />
                        ) : (
                          <div
                            className="h-[2px] rounded-full bg-transparent"
                            style={{ width: 18 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}

                {/* Progress line — fills right of last number */}
                <div className="flex-1 ml-1">
                  <div className="relative h-[2px] bg-[#2e1065]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-[#7e22ce] rounded-full"
                      animate={{ width: `${((current + 1) / total) * 100}%` }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  </div>
                </div>

                {/* Indicator: 01 / 05 — right-aligned with last number */}
                <span className="text-[10px] font-black tracking-[0.28em] text-[#7e22ce]/50 whitespace-nowrap ml-1">
                  {String(current + 1).padStart(2, "0")}
                  <span className="text-[#2e1065]/18 mx-1">/</span>
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}