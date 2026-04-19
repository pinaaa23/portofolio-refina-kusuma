import React from "react";
import { Link } from "react-router-dom";

const ICONS = [
  {
    id: "code",
    label: "Coding",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M14.5 4l-5 16" />
      </svg>
    ),
  },
  {
    id: "user",
    label: "Profile",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="8" r="4" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.25.82-.57v-2.14c-3.34.72-4.05-1.41-4.05-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.46-2.39 1.23-3.23-.12-.31-.54-1.57.12-3.28 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.67 1.71.25 2.97.13 3.28.76.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.82.57A12 12 0 0 0 12 .7Z" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <section className="relative isolate flex h-screen items-center justify-center overflow-hidden bg-black px-4 py-4 text-white sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(168,85,247,0.45),transparent_32%),radial-gradient(circle_at_84%_30%,rgba(56,189,248,0.35),transparent_35%),linear-gradient(120deg,#0f0122_0%,#091330_45%,#03030b_100%)]" />
      <div className="pointer-events-none absolute -left-16 top-16 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-[110px] animate-float-slow sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-6 h-60 w-60 rounded-full bg-cyan-400/25 blur-[120px] animate-float-fast sm:h-80 sm:w-80 sm:blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[130px] sm:h-72 sm:w-72 sm:blur-[150px]" />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-white/5 px-4 py-6 shadow-[0_0_55px_rgba(56,189,248,0.16)] backdrop-blur-xl animate-fade-in-up sm:px-6 sm:py-7 md:px-8 md:py-8">
        <div className="mb-5 flex items-center justify-center gap-3 md:mb-6 md:gap-4">
          {ICONS.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              className="relative grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:border-fuchsia-300/80 hover:text-fuchsia-200 hover:shadow-[0_0_28px_rgba(236,72,153,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/80 sm:h-12 sm:w-12 md:h-14 md:w-14"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400/0 via-cyan-300/0 to-fuchsia-400/0 opacity-0 transition-opacity duration-300" />
              <span className="relative z-10">{item.svg}</span>
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200/85 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:text-cyan-100 hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.8)] sm:text-xs md:mb-4 md:text-sm">
            Futuristic Developer Landing
          </p>
          <h1 className="text-balance text-2xl font-black leading-tight text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[0.985] hover:text-white hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.85)] sm:text-3xl md:text-5xl lg:text-6xl">
            Welcome To My Portfolio Website
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-200/85 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:text-slate-100 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.55)] sm:text-sm md:mt-4 md:text-base">
            I build modern, performant, and meaningful digital experiences with a clean code mindset and a creative visual touch.
          </p>

          <div className="mt-5 flex justify-center md:mt-6">
            <Link
              to="/refinakusuma"
              className="relative inline-flex items-center justify-center rounded-full border border-cyan-300/45 bg-gradient-to-r from-fuchsia-500/55 via-violet-500/55 to-cyan-500/55 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_0_28px_rgba(56,189,248,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.45)] sm:px-6 sm:py-3 sm:text-sm md:text-base"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-cyan-300/30 blur-xl opacity-80" />
              Explore My Work
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(16px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 5.5s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.85s ease-out both;
        }
      `}</style>
    </section>
  );
}
