import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    label: "Frontend Development",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16" />
      </svg>
    ),
  },
  {
    label: "UI/UX Design",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    label: "Responsive Design",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Aesthetic Enthusiast",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="py-10 px-6 md:px-16 flex justify-center items-center">
      <div className="max-w-5xl w-full relative">
        <div className="absolute left-[5%] lg:left-[-30px] top-1/2 -translate-y-1/2 w-8 h-20 bg-[#E780A8]/60 rotate-[-12deg] z-20 shadow-sm" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="torn-paper w-full bg-white/95 py-5 md:py-7 px-10 md:px-20 flex flex-wrap justify-center items-center gap-8 md:gap-20 shadow-2xl"
        >
          {SKILLS.map((skill, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default min-w-[80px]">
              <div className="text-[#2c2b28] mb-2.5 group-hover:scale-110 transition-transform">
                {React.cloneElement(skill.icon, { className: "h-7 w-7 md:h-9 md:w-9 stroke-[1.1]" })}
              </div>
              <span className="text-[11px] md:text-[13px] font-bold text-black/60 uppercase tracking-tighter text-center leading-tight">
                {skill.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
