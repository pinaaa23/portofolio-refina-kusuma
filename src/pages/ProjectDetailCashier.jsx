import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "Cashier Web App",
  label: "Web Application",
  category: "Web Development",
  subtitle: "Digital Cashier System for More Efficient Transactions",
  year: "2025",
  role: "Front End Developer",
  platform: "Web (Desktop & Mobile Browser)",
  tools: ["React", "CSS", "JavaScript"],
  githubUrl: "#",
  cover: "/gallery/project/WebDev/kasir/cover.png",
  about:
    "Cashier Web App is a lightweight point of sale (POS) system designed for small businesses and academic projects. It provides a streamlined interface for managing products, processing transactions, and tracking sales history within a clean, modern web based environment. The system focuses on simplicity and efficiency, allowing users to handle daily operations with minimal effort while reducing manual errors. With role based access and an intuitive workflow, it ensures a smooth and structured transaction process without the need for complex setup or installation.",
  problem:
    "Small businesses often rely on manual calculations for transactions, leading to human errors in pricing, change calculation, and record-keeping. The lack of a simple, affordable digital system results in inefficient operations, lost revenue from miscalculations, and difficulty tracking daily sales and inventory.",
  solution:
    "A simple POS system that streamlines transactions with automated calculations, real-time cart, and transaction tracking.",
  features: [
    {
      title: "Role-Based Access",
      description: "Separate login for Admin and Cashier with different access levels and permissions.",
      image: "/gallery/project/WebDev/kasir/foto1.png",
    },
    {
      title: "Product Management",
      description: "Add, edit, and delete products with name, price, category, and stock information.",
      image: "/gallery/project/WebDev/kasir/foto2.png",
    },
    {
      title: "Smart Cart System",
      description: "Add products to cart, adjust quantities, and see real-time price calculations.",
      image: "/gallery/project/WebDev/kasir/foto3.png",
    },
    {
      title: "WhatsApp Invoice Integration",
      description: "Automatically sends transaction receipts to customers via WhatsApp for easy access and record-keeping.",
      image: "/gallery/project/WebDev/kasir/foto4.png",
    },
    {
      title: "Transaction History",
      description: "View and search past transactions with key details like date, items, and total amount for easy tracking.",
      image: "/gallery/project/WebDev/kasir/foto5.png",
    },
    {
      title: "Sales & Financial Overview",
      description: "Provides a clear overview of sales performance and financial data to support better decision-making.",
      image: "/gallery/project/WebDev/kasir/foto6.png",
    },
  ],
  systemFlow: [
    { step: "01", label: "Select Role", description: "Choose Admin or Customer role to access the system", icon: "👤" },
    { step: "02", label: "Browse Products", description: "View available products and choose items to purchase", icon: "🔎" },
    { step: "03", label: "Add to Cart", description: "Add selected products to the shopping cart", icon: "🛒" },
    { step: "04", label: "Checkout", description: "Review selected items before proceeding", icon: "📋" },
    { step: "05", label: "Fill Customer Details", description: "Enter customer information for the transaction", icon: "✍️" },
    { step: "06", label: "Choose Payment Method", description: "Select the preferred payment method", icon: "💳" },
    { step: "07", label: "Make Payment", description: "Complete the payment process", icon: "💸" },
    { step: "08", label: "Payment Verification", description: "Admin verifies the payment before confirming the order", icon: "🛂" },
    { step: "09", label: "Send Invoice", description: "Invoice is sent to the customer via WhatsApp", icon: "📱" },
  ],
  mockups: [
    {
      title: "Cashier Page",
      description: "Combines product catalog and cart in one interface for fast and efficient transactions.",
      image: "/gallery/project/WebDev/kasir/foto3.png",
    },
    {
      title: "Product Management",
      description: "Admin panel for managing product inventory, categories, pricing, and stock levels.",
      image: "/gallery/project/WebDev/kasir/foto2.png",
    },
    {
      title: "Transaction History",
      description: "Complete log of all transactions with search, filter, and detailed receipt view.",
      image: "/gallery/project/WebDev/kasir/foto5.png",
    },
  ],
  stats: [
    { value: "6", label: "Key Features" },
    { value: "3", label: "Main Modules" },
    { value: "2", label: "User Roles" },
    { value: "5+", label: "Pages Developed" },
  ],
};

const cubicBezier = [0.22, 1, 0.36, 1];

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
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600">{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
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
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-[2px]"
        style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-teal-500"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailCashier() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 overflow-hidden bg-gradient-shift font-sans">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-gradient-shift {
          background: linear-gradient(135deg, #f0fdf4, #ecfdf5, #d1fae5, #f5f3ff);
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
          box-shadow: 0 10px 40px -10px rgba(16, 185, 129, 0.15);
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
        className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(16,185,129,0.15)] blur-[120px] z-0"
      />
      <motion.div
        animate={{ x: [20, -30, 20], y: [20, -40, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(139,92,246,0.15)] blur-[120px] z-0"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 z-10">

        {/* ── Back Button ── */}
        <FadeUp delay={0}>
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95"
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
            <div className="relative z-20 overflow-hidden bg-emerald-50">
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
                <span className="rounded-full border border-emerald-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 shadow-sm">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-teal-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 shadow-sm">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl drop-shadow-sm">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-slate-700">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-emerald-200/50 pt-6 sm:grid-cols-4">
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
                  <div key={stat.label} className="rounded-2xl border border-emerald-200/50 bg-white/60 p-3 text-center shadow-sm">
                    <p className="text-2xl font-black text-emerald-600 drop-shadow-sm">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {PROJECT.githubUrl && PROJECT.githubUrl !== "#" && (
                <div className="mt-7">
                  <a
                    href={PROJECT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)] active:scale-95 btn-gradient-shift"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <FadeUp delay={200} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Overview" title="About This Project" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">What is Cashier Web App?</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.about}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600">Problem Statement</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.problem}</p>
                  <div className="mt-4 rounded-2xl border border-emerald-200/50 bg-emerald-50 p-4 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Solution</p>
                    <p className="text-xs font-semibold text-slate-700 text-justify">
                      {PROJECT.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FEATURES SECTION ══════════════ */}
        <FadeUp delay={300} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Key Features" title="What It Offers" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECT.features.map((feature, idx) => (
                  <FadeUp key={feature.title} delay={idx * 60}>
                    <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-[0_16px_40px_rgba(16,185,129,0.15)]">
                      {/* Feature Image */}
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/40 bg-slate-100">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                            const placeholder = document.createElement('div');
                            placeholder.className = 'text-center p-4';
                            placeholder.innerHTML = `<div class="text-2xl mb-2">📷</div><p class="text-[10px] text-slate-500">Image placeholder</p>`;
                            e.target.parentElement.appendChild(placeholder);
                          }}
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
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="How It Works" title="System Flow" />

              <div className="relative mt-6">
                {/* Connection line */}
                <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-300 via-teal-300 to-emerald-200 sm:block" />

                <div className="space-y-6 sm:pl-16">
                  {PROJECT.systemFlow.map((item, idx) => (
                    <FadeUp key={item.step} delay={idx * 60}>
                      <div className="relative flex items-start gap-4 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:border-emerald-300/50 hover:bg-white/90 hover:shadow-md sm:p-5">
                        {/* Dot on timeline */}
                        <span className="absolute -left-[3.55rem] top-6 hidden h-3 w-3 rounded-full border border-white bg-emerald-400 shadow-[0_0_0_4px_rgba(255,255,255,0.8)] sm:block" />

                        {/* Step Number & Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-200/50 bg-emerald-50 text-xl shadow-inner">
                          {item.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-emerald-600/60">{item.step}</span>
                            <h3 className="text-sm font-bold text-slate-900">{item.label}</h3>
                          </div>
                          <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600 text-justify">{item.description}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ MOCKUP SECTION ══════════════ */}
        <FadeUp delay={500} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Final Output" title="Design Mockups" />

              <div className="space-y-5">
                {PROJECT.mockups.map((mockup, idx) => (
                  <FadeUp key={mockup.title} delay={idx * 80}>
                    <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
                      {/* Large mockup image */}
                      <div className="relative overflow-hidden bg-emerald-50">
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
                            placeholder.innerHTML = `<div class="text-4xl mb-3">🖥️</div><p class="text-sm text-slate-500">${mockup.title}</p><p class="text-xs text-slate-400 mt-1">Image placeholder — Add your screenshot here</p>`;
                            e.target.parentElement.appendChild(placeholder);
                          }}
                        />
                      </div>
                      {/* Caption */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-emerald-300/50 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 shadow-sm">
                            Mockup {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-slate-900">{mockup.title}</h3>
                        <p className="mt-1.5 text-sm font-medium text-slate-600 text-justify">{mockup.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={600} className="mt-10 flex items-center justify-between relative z-10">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Projects
          </button>

          {PROJECT.githubUrl && PROJECT.githubUrl !== "#" && (
            <a
              href={PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl border border-emerald-300/50 bg-white/70 px-5 py-2.5 text-sm font-bold text-emerald-600 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95"
            >
              Open GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          )}
        </FadeUp>

      </div>
    </main>
  );
}
