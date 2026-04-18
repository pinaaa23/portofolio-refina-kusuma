import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "Cashier Web App",
  label: "Web Application",
  category: "Web Development",
  subtitle: "Simple & Efficient Point-of-Sale System",
  year: "2025",
  role: "Full-Stack Developer",
  platform: "Web (Desktop & Mobile Browser)",
  tools: ["HTML", "CSS", "JavaScript"],
  githubUrl: "#",
  cover: "/gallery/project/WebDev/kasir/cover.png",
  about:
    "Cashier Web App is a lightweight point-of-sale (POS) system designed for small businesses and academic projects. It provides a streamlined interface for managing products, processing transactions, and tracking sales history — all within a clean, modern web-based experience that requires no installation.",
  problem:
    "Small businesses often rely on manual calculations for transactions, leading to human errors in pricing, change calculation, and record-keeping. The lack of a simple, affordable digital system results in inefficient operations, lost revenue from miscalculations, and difficulty tracking daily sales and inventory.",
  solution:
    "Cashier Web App provides a simple yet powerful POS solution that automates product selection, price calculation, and change computation. With role-based access, real-time cart management, and transaction history, it eliminates manual errors while keeping the workflow fast and intuitive for any user.",
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
    { step: "01", label: "Select Role", description: "Choose Admin or Cashier role to access the system", icon: "👤" },
    { step: "02", label: "Browse Products", description: "View available products by category with search", icon: "🛍️" },
    { step: "03", label: "Add to Cart", description: "Select products and add them to the transaction cart", icon: "🛒" },
    { step: "04", label: "Calculate Total", description: "System auto-calculates subtotal and total price", icon: "🧮" },
    { step: "05", label: "Process Payment", description: "Enter payment amount from the customer", icon: "💳" },
    { step: "06", label: "Get Change", description: "System calculates and displays the change amount", icon: "💰" },
    { step: "07", label: "Save Transaction", description: "Transaction saved to history for future reference", icon: "✅" },
  ],
  mockups: [
    {
      title: "Cashier Dashboard",
      description: "Main cashier interface with product selection, cart management, and payment processing in one view.",
      image: "/gallery/project/WebDev/kasir/mockup1.png",
    },
    {
      title: "Product Management",
      description: "Admin panel for managing product inventory, categories, pricing, and stock levels.",
      image: "/gallery/project/WebDev/kasir/mockup2.png",
    },
    {
      title: "Transaction History",
      description: "Complete log of all transactions with search, filter, and detailed receipt view.",
      image: "/gallery/project/WebDev/kasir/mockup3.png",
    },
  ],
  stats: [
    { value: "7+", label: "Core Features" },
    { value: "2", label: "User Roles" },
    { value: "100%", label: "Responsive" },
    { value: "Fast", label: "Performance" },
  ],
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
function SectionHeader({ label, title }) {
  return (
    <div className="mb-6 sm:mb-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
    </div>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailWebDev() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white">
      {/* ── BG Layer ── */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.32),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(37,99,235,0.25),transparent_30%),linear-gradient(135deg,#04060f_0%,#070b1d_45%,#020308_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />

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
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />
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
                <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
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
              {PROJECT.githubUrl && PROJECT.githubUrl !== "#" && (
                <div className="mt-7">
                  <a
                    href={PROJECT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(16,185,129,0.55)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Overview" title="About This Project" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">What is Cashier Web App?</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.about}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400">Problem Statement</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.problem}</p>
                <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/8 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">Solution</p>
                  <p className="text-xs font-medium text-emerald-200/80 text-justify">
                    {PROJECT.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FEATURES SECTION ══════════════ */}
        <FadeUp delay={120} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Key Features" title="What It Offers" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECT.features.map((feature, idx) => (
                <FadeUp key={feature.title} delay={idx * 60}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-emerald-900/20 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_16px_40px_rgba(16,185,129,0.15)]">
                    {/* Feature Image */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-black/30">
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
                      <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400 text-justify">{feature.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ SYSTEM FLOW ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="How It Works" title="System Flow" />

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-400 sm:block" />

              <div className="space-y-4 sm:pl-16">
                {PROJECT.systemFlow.map((item, idx) => (
                  <FadeUp key={item.step} delay={idx * 60}>
                    <div className="relative flex items-start gap-4 rounded-2xl border border-white/8 bg-gradient-to-r from-slate-900/80 to-emerald-900/10 p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-gradient-to-r hover:from-slate-900/90 hover:to-emerald-900/20 sm:p-5">
                      {/* Dot on timeline */}
                      <span className="absolute -left-[3.55rem] top-6 hidden h-3 w-3 rounded-full border border-white/20 bg-emerald-400 shadow-[0_0_0_4px_rgba(8,47,73,0.8)] sm:block" />

                      {/* Step Number & Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-xl">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-emerald-500/50">{item.step}</span>
                          <h3 className="text-sm font-bold text-white">{item.label}</h3>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400 text-justify">{item.description}</p>
                      </div>

                      {/* Arrow to next */}
                      {idx < PROJECT.systemFlow.length - 1 && (
                        <div className="absolute -bottom-3 left-1/2 z-10 hidden -translate-x-1/2 text-emerald-500/40 sm:block">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ MOCKUP SECTION ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Final Output" title="Design Mockups" />

            <div className="space-y-5">
              {PROJECT.mockups.map((mockup, idx) => (
                <FadeUp key={mockup.title} delay={idx * 80}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-900/10 to-teal-900/5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
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
                          placeholder.innerHTML = `<div class="text-4xl mb-3">🖥️</div><p class="text-sm text-slate-500">${mockup.title}</p><p class="text-xs text-slate-600 mt-1">Image placeholder — Add your screenshot here</p>`;
                          e.target.parentElement.appendChild(placeholder);
                        }}
                      />
                    </div>
                    {/* Caption */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                          Mockup {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-white">{mockup.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-400 text-justify">{mockup.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
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

          {PROJECT.githubUrl && PROJECT.githubUrl !== "#" && (
            <a
              href={PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:text-white"
            >
              Open GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
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
