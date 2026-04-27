import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const SKILLS = ["React", "JavaScript", "HTML/CSS", "Tailwind", "Node.js", "Figma"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/pinaaa23",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.25.82-.57v-2.14c-3.34.72-4.05-1.41-4.05-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.46-2.39 1.23-3.23-.12-.31-.54-1.57.12-3.28 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.67 1.71.25 2.97.13 3.28.76.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.82.57A12 12 0 0 0 12 .7Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/refina-kusuma-172a50395/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4.98 3.5A2.48 2.48 0 1 1 4.98 8a2.48 2.48 0 0 1 0-4.5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.84-2.05 3.79-2.05C21.68 8.59 22 11 22 14.13V21h-4v-5.92c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.54-2.28 3.12V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Insta",
    href: "https://www.instagram.com/refinaka_",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <section id="home" className="relative snap-start scroll-mt-14 flex h-screen w-full items-center justify-center overflow-hidden bg-[#F5EFE6] text-[#2c2b28] selection:bg-[#E780A8]/30">
      
      {/* ─── NOISE OVERLAY (Editorial Texture) ─── */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-multiply z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* 
        Container 
        - Removed max-width and excessive py-20
        - Full width and height guarantees no overflow scroll
      */}
      <div className="relative w-full h-full px-4 flex flex-col items-center justify-center">

        {/* ─── STORYTELLING TEXT (Handwritten) ─── */}
        <motion.p 
          initial={{ opacity: 0, x: -40, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="absolute top-[8%] left-[6%] text-sm md:text-base text-black/80 font-['IndieFlower',cursive] z-20"
        >
          Hi, since you're here...
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: -40, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className="absolute top-[18%] left-[18%] sm:left-[20%] lg:left-[22%] text-xs md:text-sm text-black/80 font-['IndieFlower',cursive] z-20"
        >
          let me guide you through my work
        </motion.p>

        {/* ─── BACKGROUND TYPOGRAPHY (Creative) ─── */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0, rotate: -4 }}
            animate={{ scale: 1, opacity: 0.75, rotate: -4 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-['Habanero',cursive] text-[24vw] sm:text-[20vw] leading-[0.8] text-[#E780A8] whitespace-nowrap -translate-y-20 sm:-translate-y-32"
            style={{ WebkitTextStroke: '0.5px rgba(231,128,168,0.75)', textShadow: '4px 6px 15px rgba(0,0,0,0.15)' }}
          >
            Creative
          </motion.h1>
        </div>

        {/* ─── MAIN HERO IMAGE (Editorial Bottom-Right) ─── */}
        <motion.div 
           initial={{ y: 200, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
           className="absolute bottom-0 right-[2%] sm:right-[5%] lg:right-[10%] z-10 pointer-events-none"
           style={{ bottom: "-10px" }}
        >
          <div className="relative w-[240px] sm:w-[320px] lg:w-[380px]">
             {/* ─── FOTO UTAMA ─── */}
             <img 
                src="/gallery/fotoku_home.png" 
                alt="Refina Kusuma" 
                className="w-full h-auto object-contain grayscale brightness-105 contrast-110 pointer-events-none" 
             />
          </div>
        </motion.div>

        {/* ─── FOREGROUND TYPOGRAPHY (Work) ─── */}
        <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0, rotate: -4 }}
            animate={{ scale: 1, opacity: 0.75, rotate: -4 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-['Habanero',cursive] text-[22vw] sm:text-[18vw] leading-[0.8] text-[#E780A8] whitespace-nowrap ml-16 sm:ml-32 translate-y-24 sm:translate-y-40"
            style={{ WebkitTextStroke: '1.5px rgba(231,128,168,0.75)', textShadow: '4px 6px 15px rgba(0,0,0,0.15)' }}
          >
            Work
          </motion.h1>
        </div>

        {/* ─── SCATTERED FLOATING SOCIAL ICONS ─── */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {SOCIALS.map((social, i) => {
            const positions = [
              "top-[68%] left-[2%] sm:left-[4%] lg:left-[6%]", // GitHub (Lower Left)
              "top-[80%] left-[30%] sm:left-[25%] lg:left-[18%]", // LinkedIn (Adjusted slightly left)
              "top-[58%] left-[10%] sm:left-[14%] lg:left-[16%]", // Instagram (Lowered and staggered)
            ];
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`absolute ${positions[i % positions.length]} text-[#E780A8] opacity-80 hover:opacity-100 transition-all duration-300 pointer-events-auto`}
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{
                  duration: 4, // Even slower fall
                  delay: 2.8 + i * 0.6, // Starts after all text is in
                  ease: [0.22, 1, 0.36, 1], 
                }}
                whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 8 : -8 }}
              >
                {/* ─── CIRCULAR BACKGROUND ─── */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-[#E780A8]/30 rounded-full bg-[#E780A8]/5 hover:bg-[#E780A8]/10 hover:border-[#E780A8]/60 transition-all duration-300 shadow-sm backdrop-blur-[2px]">
                  {social.icon}
                </div>
              </motion.a>
            );
          })}
        </div>



      </div>
    </section>
  );
}