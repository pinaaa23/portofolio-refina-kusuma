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
  return (
    <motion.nav 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: 5, // Animate LAST (after typewriter and elements)
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
                  className={`text-[13px] md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#E780A8]"
                      : "text-slate-800 hover:text-[#E780A8]"
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-3 w-1.5 h-1.5 bg-[#E780A8] rounded-full" 
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
