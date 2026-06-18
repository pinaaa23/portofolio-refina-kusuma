import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/ui/FadeUp";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCursor from "../components/ui/ProjectCursor";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECT = {
  title: "SmartKasir POS",
  label: "Web Application",
  category: "Web Development",
  subtitle: "Modern & Smart Point of Sale (POS) System with Integrated Analytics and CRM",
  year: "2026",
  role: "Front End Developer",
  platform: "Web (Desktop & Responsive Browser)",
  tools: ["React", "CSS", "JavaScript", "Framer Motion"],
  liveUrl: "http://smart-kasir-red.vercel.app",
  cover: "/gallery/project/WebDev/kasir/cover.png",
  about:
    "SmartKasir POS is a modern, responsive point of sale (POS) web application designed to streamline business operations for retail and service industries. It features a complete dashboard with real time sales analytics, a smart POS cashier page, robust product management, order tracking, transaction history logs, integrated customer relationship management (CRM), and exportable reports. With its clean blue themed visual identity and highly intuitive user interface, SmartKasir POS helps businesses reduce transaction errors, understand customer behavior, and scale operations with ease.",
  problem:
    "Traditional or outdated cash register systems are slow, difficult to operate, and lack integrated analytics. Business owners struggle to track real time sales data, manage inventory dynamically, record transaction histories, and analyze customer retention, leading to inefficient operations and lost opportunities.",
  solution:
    "SmartKasir POS provides an all in one digital POS platform with real time dashboard analytics, a simple and quick checkout process, automated inventory updates, transaction history logs, and customer CRM tools all styled in a professional, clean blue themed UI.",
  features: [
    {
      title: "Customer Management (CRM)",
      description: "Manage customer profiles, track membership levels (New, Loyal, Member), monitor total member transactions, and analyze purchase frequencies to improve retention.",
      image: "/gallery/project/WebDev/kasir/foto1.png",
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Provides beautiful graphical visualizations of sales performance, income analysis, top-selling product distributions, and transaction volume trends.",
      image: "/gallery/project/WebDev/kasir/foto2.png",
    },
    {
      title: "Transaction History",
      description: "A complete list of past transactions with filters for date, buyer name, payment methods, transaction ID, status, and printable invoice details.",
      image: "/gallery/project/WebDev/kasir/foto3.png",
    },
    {
      title: "Order Management",
      description: "Track current sales orders, review selected items, monitor payment status, and verify details before processing transactions to completion.",
      image: "/gallery/project/WebDev/kasir/foto4.png",
    },
    {
      title: "POS Cashier System",
      description: "Quick and responsive point-of-sale interface featuring product catalog sorting, search functionality, and real-time shopping cart additions.",
      image: "/gallery/project/WebDev/kasir/foto5.png",
    },
    {
      title: "Product & Inventory Management",
      description: "Dynamic product list showing item codes, barcode labels, categories, pricing, stock levels, and quick actions to update inventory items.",
      image: "/gallery/project/WebDev/kasir/foto6.png",
    },
    {
      title: "Financial Reports",
      description: "Generate and export reports including monthly sales summaries, transaction counts, active customer rates, and exportable financial PDFs.",
      image: "/gallery/project/WebDev/kasir/foto7.png",
    },
  ],
  systemFlow: [
    { step: "01", label: "Access Dashboard", description: "View overall business performance, key metrics, and sales metrics in real-time.", icon: "📊" },
    { step: "02", label: "Manage Inventory", description: "Input and organize product details, pricing, categories, and stock limits.", icon: "📦" },
    { step: "03", label: "Open POS Cashier", description: "Navigate to POS screen to browse products and quickly select customer order items.", icon: "🛒" },
    { step: "04", label: "Smart Cart Checkout", description: "Adjust quantities, review item pricing, and assign customer profiles (CRM).", icon: "👥" },
    { step: "05", label: "Select Payment Method", description: "Choose payment method (Cash, Bank Transfer, QRIS, or Credit Card) for checkout.", icon: "💳" },
    { step: "06", label: "Complete Transaction", description: "Confirm the transaction to instantly record the sale and update the stock level.", icon: "💸" },
    { step: "07", label: "Track & Export Reports", description: "Verify order history and export financial reports or sales analysis to PDF.", icon: "📄" },
  ],
  mockups: [
    {
      title: "Main Dashboard & Analytics",
      description: "Interactive dashboard with revenue tracking, active customer counts, and sales graphs.",
      image: "/gallery/project/WebDev/kasir/foto7.png",
    },
    {
      title: "POS Cashier Catalog",
      description: "User-friendly interface for cashiers to search, filter, and add items to checkout cart.",
      image: "/gallery/project/WebDev/kasir/foto5.png",
    },
    {
      title: "Customer CRM System",
      description: "Overview of customer loyalty levels, purchase counts, and total membership spending.",
      image: "/gallery/project/WebDev/kasir/foto1.png",
    },
    {
      title: "Transaction History Log",
      description: "Comprehensive ledger containing detailed purchase records and payment statuses.",
      image: "/gallery/project/WebDev/kasir/foto3.png",
    },
  ],
  stats: [
    { value: "7", label: "Core Modules" },
    { value: "100%", label: "Real-time Sync" },
    { value: "3+", label: "User Roles" },
    { value: "8+", label: "Pages Developed" },
  ],
};



/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
export default function ProjectDetailCashier() {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 overflow-hidden bg-gradient-shift font-sans" style={{ background: 'linear-gradient(135deg, #f0f7ff, #eff6ff, #dbeafe, #f3f4f6)' }}>

      <ProjectCursor />

      {/* ── Floating Ambient Glow ── */}
      <motion.div
        animate={{ x: [-20, 30, -20], y: [-20, 40, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(59,130,246,0.15)] blur-[120px] z-0"
      />
      <motion.div
        animate={{ x: [20, -30, 20], y: [20, -40, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(99,102,241,0.12)] blur-[120px] z-0"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 z-10">

        {/* ── Back Button ── */}
        <FadeUp delay={0}>
          <button
            type="button"
            onClick={() => navigate("/refinakusuma#project")}
            className="group mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </button>
        </FadeUp>

        {/* ══════════════ HERO SECTION ══════════════ */}
        <FadeUp delay={100}>
          <div className="overflow-hidden rounded-3xl glass-card relative group shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-10" />
            
            {/* Cover Image */}
            <div className="relative z-20 overflow-hidden bg-blue-50">
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
                <span className="rounded-full border border-blue-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
                  {PROJECT.category}
                </span>
                <span className="rounded-full border border-indigo-400/30 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 shadow-sm">
                  {PROJECT.label}
                </span>
              </div>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl drop-shadow-sm">
                {PROJECT.title}
              </h1>
              <p className="mt-2 text-base font-medium text-slate-700">{PROJECT.subtitle}</p>

              {/* Meta row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-blue-200/50 pt-6 sm:grid-cols-4">
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
                  <div key={stat.label} className="rounded-2xl border border-blue-200/50 bg-white/60 p-3 text-center shadow-sm">
                    <p className="text-2xl font-black text-blue-600 drop-shadow-sm">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-7">
                <a
                  href={PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] active:scale-95 btn-gradient-shift"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Live Site
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <FadeUp delay={200} className="mt-8">
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Overview" title="About This Project" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">What is SmartKasir POS?</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.about}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">Problem Statement</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 text-justify font-medium">{PROJECT.problem}</p>
                  <div className="mt-4 rounded-2xl border border-blue-200/50 bg-blue-50 p-4 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Solution</p>
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
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Key Features" title="What It Offers" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECT.features.map((feature, idx) => (
                  <FadeUp key={feature.title} delay={idx * 60}>
                    <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300/50 hover:shadow-[0_16px_40px_rgba(59,130,246,0.15)]">
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
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="How It Works" title="System Flow" />

              <div className="relative mt-6">
                {/* Connection line */}
                <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-300 via-indigo-300 to-blue-200 sm:block" />

                <div className="space-y-6 sm:pl-16">
                  {PROJECT.systemFlow.map((item, idx) => (
                    <FadeUp key={item.step} delay={idx * 60}>
                      <div className="relative flex items-start gap-4 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:border-blue-300/50 hover:bg-white/90 hover:shadow-md sm:p-5">
                        {/* Dot on timeline */}
                        <span className="absolute -left-[3.55rem] top-6 hidden h-3 w-3 rounded-full border border-white bg-blue-400 shadow-[0_0_0_4px_rgba(255,255,255,0.8)] sm:block" />

                        {/* Step Number & Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200/50 bg-blue-50 text-xl shadow-inner">
                          {item.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-blue-600/60">{item.step}</span>
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
          <div className="rounded-3xl glass-card relative p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 pointer-events-none glass-card-inner rounded-3xl z-0" />
            <div className="relative z-10">
              <SectionHeader label="Final Output" title="Design Mockups" />

              <div className="space-y-5">
                {PROJECT.mockups.map((mockup, idx) => (
                  <FadeUp key={mockup.title} delay={idx * 80}>
                    <div className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]">
                      {/* Large mockup image */}
                      <div className="relative overflow-hidden bg-blue-50">
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
                          <span className="rounded-full border border-blue-300/50 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600 shadow-sm">
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
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Projects
          </button>

          <a
            href={PROJECT.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-blue-300/50 bg-white/70 px-5 py-2.5 text-sm font-bold text-blue-600 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] active:scale-95"
          >
            Visit Live Site
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </FadeUp>

      </div>
    </main>
  );
}
