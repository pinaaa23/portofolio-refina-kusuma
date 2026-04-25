import React from "react";
import { motion } from "framer-motion";

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
    <section id="home" className="relative snap-start scroll-mt-14 flex min-h-screen items-center justify-center overflow-hidden bg-[#E8E4D9] text-[#2c2b28] selection:bg-[#E780A8]/30">
      
      {/* 
        Container 
        - Defines the max width and min height
      */}
      <div className="relative w-full h-full max-w-7xl px-4 py-20 flex flex-col items-center justify-center min-h-[650px] lg:min-h-[850px]">

        {/* ─── HANDWRITTEN ANNOTATIONS ─── */}
        <motion.div 
           initial={{ opacity: 0, x: -20, rotate: -6 }}
           animate={{ opacity: 1, x: 0, rotate: -6 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="absolute top-16 left-6 sm:top-24 sm:left-12 lg:left-32 font-['Caveat',cursive] text-3xl sm:text-4xl lg:text-5xl text-[#2c2b28] z-20 whitespace-nowrap drop-shadow-sm"
        >
          Hi. Since you're new here,
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 20, rotate: 4 }}
           animate={{ opacity: 1, x: 0, rotate: 4 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="absolute top-28 right-6 sm:top-20 sm:right-12 lg:right-32 font-['Caveat',cursive] text-3xl sm:text-4xl lg:text-5xl text-[#2c2b28] z-20 whitespace-nowrap drop-shadow-sm"
        >
          let me be ya tour guide
        </motion.div>

        {/* ─── MASSIVE CENTER TYPOGRAPHY ─── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none overflow-hidden mix-blend-multiply">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center -space-y-6 sm:-space-y-12 lg:-space-y-24"
          >
            <h1 className="font-['Lilita_One',cursive] text-[34vw] sm:text-[24vw] lg:text-[18vw] leading-[0.8] text-[#E780A8] -ml-8 sm:-ml-20 lg:-ml-32 tracking-[-0.04em] mix-blend-multiply">
              REFINA
            </h1>
            <h1 className="font-['Lilita_One',cursive] text-[34vw] sm:text-[24vw] lg:text-[18vw] leading-[0.8] text-[#E780A8] ml-8 sm:ml-20 lg:ml-32 tracking-[-0.04em] mix-blend-multiply">
              KUSUMA
            </h1>
          </motion.div>
        </div>

        {/* ─── PHOTO PLACEHOLDER ─── */}
        {/* Replace the content of this div with your photo once ready */}
        <motion.div 
           initial={{ y: 80, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
           className="relative z-10 mt-20 sm:mt-8 w-[60vw] max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] aspect-[4/5] sm:aspect-[3/4.5] rounded-t-full rounded-b-3xl overflow-hidden bg-[#D3CEc1]/60 shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center backdrop-blur-md group border-[6px] border-white/40"
        >
          <div className="text-[#64615a] font-bold mb-3 text-center px-4 mix-blend-multiply">
             <svg className="w-10 h-10 mx-auto mb-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z"></path>
             </svg>
             <span className="block text-xl">Insert Photo Here</span>
          </div>
          <span className="text-[#84817a] text-[11px] sm:text-xs text-center px-6 leading-relaxed mix-blend-multiply">
            Delete this placeholder content and use an {"<img>"} tag with a transparent background.
          </span>
        </motion.div>

        {/* ─── SKILLS BLOCK (Scrapbook Tape Style) ─── */}
        <motion.div 
          initial={{ opacity: 0, rotate: -3 }}
          animate={{ opacity: 1, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute z-20 top-[60%] sm:top-1/2 left-4 sm:left-12 lg:left-32 -translate-y-1/2 w-[110px] sm:w-[150px] bg-[#f9f8f4]/80 p-3 sm:p-5 rounded-md shadow-sm border border-black/5 backdrop-blur-md"
        >
           <p className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 border-b border-[#E780A8]/30 pb-1 text-center text-[#E780A8]">Skills</p>
           <div className="flex flex-col gap-1.5 sm:gap-2">
             {SKILLS.map((skill) => (
               <span key={skill} className="text-[10px] sm:text-[13px] font-semibold text-[#4a4944] bg-white/70 px-2 py-0.5 sm:py-1 rounded shadow-sm border border-black/5 text-center">
                 {skill}
               </span>
             ))}
           </div>
        </motion.div>

        {/* ─── SOCIALS (Polaroid / Note Style) ─── */}
        <motion.div 
          initial={{ opacity: 0, rotate: 4 }}
          animate={{ opacity: 1, rotate: 4 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute z-20 top-[60%] sm:top-1/2 right-4 sm:right-12 lg:right-32 -translate-y-1/2 w-[85px] sm:w-[110px]"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
             {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center p-2 sm:p-3 bg-white shadow-md rounded-lg sm:rounded-xl hover:-translate-y-1 hover:shadow-xl hover:rotate-2 transition-all duration-300 border border-transparent hover:border-[#E780A8]/40"
                >
                  <span className="text-[#2c2b28] group-hover:text-[#E780A8] transition-colors duration-300">
                     {social.icon}
                  </span>
                  <span className="mt-1 sm:mt-1.5 font-['Caveat',cursive] text-sm sm:text-lg font-bold text-[#4a4944] group-hover:text-[#E780A8] transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
             ))}
          </div>
        </motion.div>

        {/* ─── FOOTER INFO ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 lg:left-32 z-20"
        >
          <p className="text-[9px] sm:text-xs font-bold text-[#4a4944] tracking-[0.15em] sm:tracking-[0.25em] uppercase">
            Frontend Developer / UI.UX
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 lg:right-32 z-20"
        >
          <p className="font-['Caveat',cursive] text-lg sm:text-2xl font-bold text-[#4a4944]">
            By Refina Kusuma
          </p>
        </motion.div>

      </div>
    </section>
  );
}