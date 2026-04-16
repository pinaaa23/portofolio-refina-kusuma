import React from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar({ isLightMode, setIsLightMode, activeNav, setActiveNav }) {
  return (
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
  );
}
