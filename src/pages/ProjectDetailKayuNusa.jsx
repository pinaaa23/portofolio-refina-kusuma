import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "KayuNusa",
  label: "Web Design",
  category: "UI/UX Design",
  subtitle: "Modern E-Commerce Platform for Premium Wooden Furniture",
  year: "2026",
  role: "UI/UX Designer",
  platform: "Web Desktop",
  tools: ["Figma", "Figjam"],
  cover: "/gallery/project/UIUX/KayuNusa/cover.jpeg",
  about:
    "KayuNusa is a furniture application and website that focuses on wooden furniture with a natural and modern concept. It provides products such as sofas, tables, and home furniture made from high-quality wood materials. This application is designed to help users browse products, compare furniture, and shop online easily with clear and useful information.",
  problem:
    "Online furniture shopping often forces customers to guess the quality and dimensions of a product without standard references. Customers struggle to evaluate wooden furniture due to lack of distinct comparisons, leading to purchase hesitation and high return rates.",
  objectives: [
    "To make it easier for users to buy furniture online.",
    "To provide clear and detailed product information.",
    "To build user trust through a professional and clean design.",
    "To support local wooden furniture products with strong branding."
  ],
  features: [
    {
      title: "Product Catalog",
      icon: "📖",
      description: "Displays various furniture products with images, prices, and descriptions.",
      color: "from-amber-600/20 to-yellow-600/10",
      border: "border-amber-500/25",
      accent: "text-amber-300",
    },
    {
      title: "Product Comparison",
      icon: "⚖️",
      description: "Allows users to compare two products based on size, material, price, and warranty.",
      color: "from-yellow-600/20 to-orange-600/10",
      border: "border-yellow-500/25",
      accent: "text-yellow-300",
    },
    {
      title: "Product Details",
      icon: "🔍",
      description: "Provides detailed information such as dimensions, materials, weight, and color.",
      color: "from-orange-600/20 to-red-600/10",
      border: "border-orange-500/25",
      accent: "text-orange-300",
    },
    {
      title: "Shopping Cart",
      icon: "🛒",
      description: "Users can add products to the cart before purchasing.",
      color: "from-amber-600/20 to-lime-600/10",
      border: "border-amber-400/30",
      accent: "text-amber-300",
    },
    {
      title: "Warranty & Support",
      icon: "🛡️",
      description: "Shows warranty details and customer service contact.",
      color: "from-amber-600/20 to-yellow-600/10",
      border: "border-amber-500/25",
      accent: "text-amber-300",
    },
    {
      title: "Responsive Navigation",
      icon: "📱",
      description: "Simple and easy-to-use interface for different devices.",
      color: "from-yellow-600/20 to-orange-600/10",
      border: "border-yellow-500/25",
      accent: "text-yellow-300",
    },
  ],
  benefits: [
    { title: "Easy to Use Interface", desc: "The website is simple and easy to navigate for all users." },
    { title: "Clear Product Information", desc: "Each product has clear details such as size, material, and warranty." },
    { title: "Product Comparison", desc: "Helps users compare products and choose the best one." }
  ],
  swot: [
    { title: "Strengths", items: ["Uses quality wooden materials with a natural look.", "Product comparison feature helps users make better decisions.", "Simple and informative user interface."], color: "emerald" },
    { title: "Weaknesses", items: ["Brand awareness is still limited.", "Product images strongly affect user interest.", "Limited interactive features."], color: "orange" },
    { title: "Opportunities", items: ["Growing interest in natural and minimalist home design.", "Increasing trend of online furniture shopping.", "Potential to add new features like product recommendations."], color: "yellow" },
    { title: "Threats", items: ["Strong competition from large online marketplaces.", "Fast-changing interior design trends.", "Some users still hesitate to buy furniture online."], color: "rose" },
  ],
  userflowText: "This user flow shows the customer journey on the KayuNusa website, starting from the Home page, then moving to the Product List to browse items, and continuing to the Product Detail page to view complete information. At this stage, users can choose to compare products using the Product Compare feature or directly add the product to the cart. After reviewing items in the Cart, users proceed to Checkout and finish the process with an Order Success confirmation. The flow is designed to be simple and flexible to ensure a smooth shopping experience.",
  userflow: "/gallery/project/UIUX/KayuNusa/userflow.png",
  mockup: "/gallery/project/UIUX/KayuNusa/mockup.jpg",
  stats: [
    { value: "10+", label: "Screens Designed" },
    { value: "6", label: "Core Features" },
    { value: "3", label: "Iterations" },
    { value: "1mo", label: "Duration" },
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
function SectionHeader({ label, title, color = "amber" }) {
  const gradients = {
    amber: "from-amber-500 to-yellow-500",
    yellow: "from-yellow-400 to-orange-500",
  };
  const textColors = {
    amber: "text-amber-400",
    yellow: "text-yellow-400",
  };
  
  return (
    <div className="mb-6 sm:mb-8">
      <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${textColors[color]}`}>{label}</span>
      <h2 className="mt-1.5 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      <div className={`mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r ${gradients[color]}`} />
    </div>
  );
}

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailKayuNusa() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0805] text-white">
      {/* ── BG Layer ── */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(245,158,11,0.15),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(252,211,77,0.1),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(217,119,6,0.15),transparent_30%),linear-gradient(135deg,#0a0805_0%,#140f09_45%,#050402_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">

        {/* ── Back Button ── */}
        <button
          type="button"
          onClick={() => navigate("/refinakusuma#project")}
          className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-amber-400/30 hover:text-white"
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
              <div className={`absolute inset-0 bg-gradient-to-br from-amber-900/50 to-yellow-900/50 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />
              <img
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full min-h-[320px] flex items-center justify-center bg-gradient-to-br from-amber-950 to-yellow-950 text-amber-500/50';
                  placeholder.innerHTML = '<span class="text-4xl">Image Placeholder</span>';
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0805] via-[#0a0805]/40 to-transparent" />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
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
                    <p className="text-2xl font-black text-amber-400">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT & OBJECTIVE SECTION ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Overview" title="About This Project" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">What is KayuNusa?</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.about}</p>
                
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">Problem Statement</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/90 text-justify">{PROJECT.problem}</p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Application Objectives</p>
                  <div className="mt-3 rounded-2xl border border-amber-500/20 bg-amber-500/8 p-5">
                    <ul className="space-y-3">
                      {PROJECT.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          <span className="text-sm font-medium text-amber-100/90 leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FEATURES ══════════════ */}
        <FadeUp delay={120} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Platform Highlights" title="Key Features" />

            <div className="grid gap-4 sm:grid-cols-2">
              {PROJECT.features.map((feature, idx) => (
                <FadeUp key={feature.title} delay={idx * 80}>
                  <div className={`overflow-hidden rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.color} backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <h3 className={`text-sm font-extrabold uppercase tracking-wide ${feature.accent}`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300/90 text-justify">{feature.description}</p>
                  </div>
                </FadeUp>
              ))}
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
                    item.color === 'yellow' ? 'text-amber-400' :
                    item.color === 'orange' ? 'text-orange-400' : 'text-rose-400'
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
        
        {/* ══════════════ WEBSITE KEY BENEFITS ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Value Proposition" title="Website Key Benefits" color="amber" />
            <div className="grid gap-4 sm:grid-cols-3">
              {PROJECT.benefits.map((benefit, i) => (
                <div key={i} className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30">
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-amber-300 mb-2">{benefit.title}</h3>
                  <p className="text-xs leading-relaxed text-amber-100/80">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ USER FLOW ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Process Mapping" title="User Flow" color="yellow" />
            <p className="mt-2 text-sm leading-7 text-slate-300/90 text-justify mb-6">
              {PROJECT.userflowText}
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-amber-500/10">
              <img 
                src={PROJECT.userflow} 
                alt="User Flow Diagram" 
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full aspect-[16/9] flex flex-col items-center justify-center text-slate-500 bg-white/5';
                  placeholder.innerHTML = `<span class="text-4xl mb-3">🔄</span><span class="text-xs">User Flow Diagram Placeholder</span><span class="text-[9px] font-mono mt-1">${PROJECT.userflow}</span>`;
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FINAL MOCKUP ══════════════ */}
        <FadeUp delay={100} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <SectionHeader label="Final Output" title="Design Mockup" color="amber" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-yellow-500/10">
              <img 
                src={PROJECT.mockup} 
                alt="Final Design Mockup" 
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full aspect-[16/9] flex flex-col items-center justify-center text-slate-500 bg-white/5';
                  placeholder.innerHTML = `<span class="text-4xl mb-3">🖥️</span><span class="text-xs">Final Mockup Placeholder</span><span class="text-[9px] font-mono mt-1">${PROJECT.mockup}</span>`;
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={80} className="mt-10 flex items-center justify-start">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-amber-400/30 hover:text-white"
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
