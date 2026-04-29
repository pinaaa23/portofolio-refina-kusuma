import React from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar({ activeNav, setActiveNav }) {
  // Accent color adapts to current section theme
  const accentColor = activeNav === "experience" ? "#7e22ce" : "#E780A8";

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.1,
        ease: [0.25, 1, 0.5, 1] 
      }}
      className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-24 py-6 sm:py-8 flex justify-end items-center pointer-events-auto transition-all duration-700 ease-in-out bg-transparent"
    >

      <div className="flex items-center gap-6 lg:gap-10">
        <div className="flex items-center gap-4 lg:gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = activeNav === item.href.slice(1);
            return (
              <div key={item.label} className="relative flex flex-col items-center group">
                <a
                  onClick={() => setActiveNav(item.href.slice(1))}
                  href={item.href}
                  style={{ color: isActive ? accentColor : undefined }}
                  className={`text-[13px] md:text-sm font-semibold tracking-wide transition-all duration-500 ${
                    isActive
                      ? ""
                      : "text-slate-800 hover:text-[#E780A8]"
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    style={{ backgroundColor: accentColor }}
                    className="absolute -bottom-3 w-1.5 h-1.5 rounded-full"
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
