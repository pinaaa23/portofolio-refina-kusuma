import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/ui/FadeUp";
import BaseSectionHeader from "../components/ui/SectionHeader";
import ProjectCursor from "../components/ui/ProjectCursor";

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
      color: "from-amber-500/10 to-yellow-500/5",
      border: "border-amber-500/20",
      accent: "text-amber-600",
    },
    {
      title: "Product Comparison",
      icon: "⚖️",
      description: "Allows users to compare two products based on size, material, price, and warranty.",
      color: "from-yellow-500/10 to-orange-500/5",
      border: "border-yellow-500/20",
      accent: "text-yellow-600",
    },
    {
      title: "Product Details",
      icon: "🔍",
      description: "Provides detailed information such as dimensions, materials, weight, and color.",
      color: "from-orange-500/10 to-red-500/5",
      border: "border-orange-500/20",
      accent: "text-orange-600",
    },
    {
      title: "Shopping Cart",
      icon: "🛒",
      description: "Users can add products to the cart before purchasing.",
      color: "from-amber-500/10 to-lime-500/5",
      border: "border-amber-400/20",
      accent: "text-amber-600",
    },
    {
      title: "Warranty & Support",
      icon: "🛡️",
      description: "Shows warranty details and customer service contact.",
      color: "from-amber-500/10 to-yellow-500/5",
      border: "border-amber-500/20",
      accent: "text-amber-600",
    },
    {
      title: "Responsive Navigation",
      icon: "📱",
      description: "Simple and easy-to-use interface for different devices.",
      color: "from-yellow-500/10 to-orange-500/5",
      border: "border-yellow-500/20",
      accent: "text-yellow-600",
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

const SectionHeader = ({ label, title, color = "amber" }) => {
  const gradients = {
    amber: "from-amber-500 to-yellow-500",
    yellow: "from-yellow-400 to-orange-500",
  };
  const textColors = {
    amber: "text-amber-600",
    yellow: "text-yellow-600",
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
export default function ProjectDetailKayuNusa() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 overflow-hidden bg-gradient-shift font-sans" style={{ background: 'linear-gradient(135deg, #fffbeb, #fefce8, #fef3c7, #fffbeb)' }}>

      <ProjectCursor outerClassName="border-amber-500/40 bg-amber-500/10" innerClassName="bg-yellow-500" />

      {/* ── Floating Ambient Glow ── */}
      <motion.div
        animate={{ x: [-20, 30, -20], y: [-20, 40, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(245,158,11,0.15)] blur-[120px] z-0"
      />
      <motion.div
        animate={{ x: [20, -30, 20], y: [20, -40, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(252,211,77,0.15)] blur-[120px] z-0"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 z-10">

        {/* ── Back Button ── */}
        <FadeUp delay={0}>
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </button>
        </FadeUp>

        {/* ══════════════ HERO SECTION ══════════════ */}
        <FadeUp delay={100}>
          <div className="overflow-hidden rounded-3xl glass-card relative group shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-10" />
            
            {/* Cover Image */}
            <div className="relative z-20 overflow-hidden bg-amber-50">
              <motion.img
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: cubicBezier }}
                whileHover={{ scale: 1.03 }}
                src={PROJECT.cover}
                alt={`${PROJECT.title} cover`}
                className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full min-h-[320px] flex items-center justify-center bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-500/50';
                  placeholder.innerHTML = '<span class="text-4xl">Image Placeholder</span>';
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
            </div>

            {/* Hero Info */}
            <div className="p-6 sm:p-8 lg:p-10 relative z-20 bg-white/40 backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-amber-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 shadow-sm">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-yellow-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-600 shadow-sm">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl drop-shadow-sm">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-slate-700">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-amber-200/50 pt-6 sm:grid-cols-4">
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
                  <div key={stat.label} className="rounded-2xl border border-amber-200/50 bg-white/60 p-3 text-center shadow-sm">
                    <p className="text-2xl font-black text-amber-600 drop-shadow-sm">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT & OBJECTIVE SECTION ══════════════ */}
        <FadeUp delay={200} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Overview" title="About This Project" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">What is KayuNusa?</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.about}</p>
                  
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-600">Problem Statement</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.problem}</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Application Objectives</p>
                    <div className="mt-3 rounded-2xl border border-amber-200/50 bg-amber-50 p-5 shadow-sm">
                      <ul className="space-y-3">
                        {PROJECT.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            <span className="text-sm font-medium text-slate-700 leading-relaxed">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FEATURES ══════════════ */}
        <FadeUp delay={300} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Platform Highlights" title="Key Features" />

              <div className="grid gap-4 sm:grid-cols-2">
                {PROJECT.features.map((feature, idx) => (
                  <FadeUp key={feature.title} delay={idx * 100}>
                    <div className={`overflow-hidden rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.color} bg-white/40 shadow-sm p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/80 hover:bg-white/60`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl drop-shadow-sm">{feature.icon}</span>
                        <h3 className={`text-sm font-extrabold uppercase tracking-wide ${feature.accent}`}>
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 text-justify font-medium">{feature.description}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ SWOT ANALYSIS ══════════════ */}
        <FadeUp delay={400} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(252,211,77,0.15)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Strategic Analysis" title="SWOT Overview" color="yellow" />
              <div className="grid gap-4 sm:grid-cols-2">
                {PROJECT.swot.map((item) => (
                  <div key={item.title} className="group rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:border-white/80 hover:bg-white/90">
                    <h3 className={`text-sm font-black uppercase tracking-widest ${
                      item.color === 'emerald' ? 'text-emerald-600' : 
                      item.color === 'yellow' ? 'text-amber-600' :
                      item.color === 'orange' ? 'text-orange-600' : 'text-rose-500'
                    }`}>{item.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
        
        {/* ══════════════ WEBSITE KEY BENEFITS ══════════════ */}
        <FadeUp delay={500} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Value Proposition" title="Website Key Benefits" color="amber" />
              <div className="grid gap-4 sm:grid-cols-3">
                {PROJECT.benefits.map((benefit, i) => (
                  <div key={i} className="rounded-2xl border border-amber-200/50 bg-amber-50 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-100/50">
                    <h3 className="text-sm font-extrabold uppercase tracking-wide text-amber-600 mb-2">{benefit.title}</h3>
                    <p className="text-xs font-medium leading-relaxed text-slate-700">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ USER FLOW ══════════════ */}
        <FadeUp delay={600} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(252,211,77,0.15)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Process Mapping" title="User Flow" color="yellow" />
              <p className="mt-2 text-sm leading-7 font-medium text-slate-700 text-justify mb-6">
                {PROJECT.userflowText}
              </p>
              <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)]">
                <img 
                  src={PROJECT.userflow} 
                  alt="User Flow Diagram" 
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full aspect-[16/9] flex flex-col items-center justify-center text-slate-500 bg-amber-50';
                    placeholder.innerHTML = `<span class="text-4xl mb-3">🔄</span><span class="text-xs font-medium">User Flow Diagram Placeholder</span>`;
                    e.target.parentElement.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FINAL MOCKUP ══════════════ */}
        <FadeUp delay={700} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Final Output" title="Design Mockup" color="amber" />
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)]">
                <img 
                  src={PROJECT.mockup} 
                  alt="Final Design Mockup" 
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full aspect-[16/9] flex flex-col items-center justify-center text-slate-500 bg-amber-50';
                    placeholder.innerHTML = `<span class="text-4xl mb-3">🖥️</span><span class="text-xs font-medium">Final Mockup Placeholder</span>`;
                    e.target.parentElement.appendChild(placeholder);
                  }}
                />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ FOOTER NAV ══════════════ */}
        <FadeUp delay={800} className="mt-10 flex items-center justify-start relative z-10">
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.25)] active:scale-95"
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
