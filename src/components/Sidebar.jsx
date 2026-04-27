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
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-24 py-6 sm:py-8 flex justify-between items-center pointer-events-auto transition-all duration-700 ease-in-out ${
      activeNav === 'home' ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      <h1 className={`font-[inter,sans-serif] font-bold text-lg tracking-widest ${isLightMode ? "text-slate-900" : "text-slate-200"}`}>
        RFNKSM
      </h1>

      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <div className="flex items-center gap-4 lg:gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = activeNav === item.href.slice(1);
            return (
              <a
                key={item.label}
                onClick={() => setActiveNav(item.href.slice(1))}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-[#E780A8]"
                    : isLightMode
                      ? "text-slate-800 hover:text-[#E780A8]"
                      : "text-slate-300 hover:text-[#E780A8]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsLightMode((prev) => !prev)}
          aria-label="Toggle theme"
          className={`p-2 transition-transform duration-300 hover:-translate-y-0.5 ${
            isLightMode ? "text-slate-800 hover:text-[#E780A8]" : "text-slate-300 hover:text-[#E780A8]"
          }`}
        >
          {isLightMode ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3c.1 0 .2 0 .3.01a7 7 0 0 0 9.49 9.49Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    </nav>
  );
}
