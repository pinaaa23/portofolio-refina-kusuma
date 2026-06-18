import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const MY_APPROACH = [
  "Design should feel effortless",
  "Simplicity is powerful",
  "Users always come first",
  "Small details create big impact",
];

const DESIGN_MINDSET = [
  { text: "I focus on clarity and usability  ", icon: "📌" },
  { text: "I think in systems, not just screens", icon: "📌" },
  { text: "I value consistency across experiences ", icon: "📌" },
  { text: "I keep learning and improving every day", icon: "📌" },
];

const bioText = "Hi, I'm Refina I love creating interfaces that feel simple, clean, and a little bit delightful. With a passion for UI/UX and frontend development, I enjoy crafting digital experiences that are both beautiful and functional. I believe good design should not only be seen, but also felt.";

const cubicBezier = [0.25, 1, 0.5, 1];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: cubicBezier },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier, delay: 0.3 },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="about" className="scrapbook-bg min-h-screen lg:h-screen py-10 lg:py-0 px-6 md:px-16 flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* ─── GRAIN OVERLAY ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] grain-texture z-50" />

      {/* ─── GRID DECORATIONS (z-10) ─── */}
      <div className="absolute top-0 left-0 w-32 h-64 grid-paper opacity-30 z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 grid-paper opacity-30 z-10 pointer-events-none" />

      {/* ─── MAIN SCRAPBOOK CONTAINER ─── */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl w-full h-full flex flex-col lg:block"
      >
        
        {/* ─── LEFT ZONE: TEXT CONTENT (z-30) ─── */}
        <div className="lg:absolute lg:top-20 lg:left-0 z-30 max-w-[450px]">
          {/* Label: About Me */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="bg-[#E780A8] text-white px-3 py-1 rounded-md text-[11px] font-handwriting inline-block shadow-sm">
              About me
            </div>
          </motion.div>

          {/* Name Section */}
          <div className="relative mb-8 overflow-hidden">
            <motion.h2 
              variants={nameVariants}
              className="text-4xl md:text-6xl font-serif font-black text-[#2c2b28] leading-none"
            >
              Refina Kusuma
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: cubicBezier, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-handwriting text-[#E780A8] mt-[-5px] md:mt-0 ml-8 md:ml-16"
            >
              Friambudi
            </motion.h2>
            <motion.svg 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              width="180" height="12" className="mt-1 text-[#E780A8]/40"
            >
              <path d="M10 6 Q 90 12 170 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </motion.svg>
          </div>

          {/* Bio Text (Typewriter Effect) */}
          <div className="text-[#2c2b28] text-sm md:text-base leading-snug font-medium mb-12 text-justify">
            <div>
              {bioText.split(" ").map((word, wordIndex) => {
                // Hitung index awal kata ini untuk delay animasi yang tepat
                const wordsBefore = bioText.split(" ").slice(0, wordIndex);
                const charOffset = wordsBefore.join(" ").length + (wordIndex > 0 ? 1 : 0);
                
                return (
                  <React.Fragment key={wordIndex}>
                    <span className="inline-block">
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={characterVariants}
                          transition={{ 
                            duration: 0.1, 
                            delay: 1.2 + ((charOffset + charIndex) * 0.02) 
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    {wordIndex < bioText.split(" ").length - 1 ? " " : ""}
                  </React.Fragment>
                );
              })}
            </div>
            
            {/* Let's Create Pop Effect */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.2 + (bioText.length * 0.02) + 0.3 
              }}
              viewport={{ once: true }}
              className="relative pt-6"
            >
              <div className="absolute top-2 left-[-15px]">
                <svg width="25" height="25" viewBox="0 0 40 40" fill="none" stroke="#E780A8" strokeWidth="2">
                  <path d="M10 10 Q 15 30 30 35 M 25 25 L 30 35 L 20 38" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-handwriting text-2xl text-[#E780A8]">Let's create something amazing! ❤️</p>
            </motion.div>
          </div>
        </div>

        {/* ─── RIGHT ZONE: MIXED MOBILE GRID & DESKTOP ABSOLUTE ─── */}
        <div className="grid grid-cols-12 items-center gap-x-2 gap-y-12 w-full mt-12 lg:mt-0 lg:block lg:absolute lg:inset-0 pointer-events-none">
          
          {/* Note: my approach */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-7 flex justify-center lg:block lg:absolute lg:top-25 lg:right-4 z-30 pointer-events-auto"
          >
            <div className="torn-paper w-full max-w-[240px] md:w-60 bg-[#fdfdfd] shadow-lg p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-[-8px] left-[30%] w-12 h-12 bg-[#e7d9c1] opacity-50 rotate-45 z-0" />
              <h3 className="font-handwriting text-xl sm:text-2xl text-black border-b border-black/10 pb-1 mb-4 relative z-10">My Approach</h3>
              <ul className="space-y-2.5 relative z-10">
                {MY_APPROACH.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs md:text-sm text-black/80">
                    <span className="text-[#E780A8]">♥</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Polaroid 1 (Flowers) */}
          <motion.div 
            initial={{ opacity: 0, y: 60, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 1, ease: cubicBezier, delay: 1.2 + (bioText.length * 0.02) + 0.5 }}
            whileHover={{ scale: 1.05, rotate: -1, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            style={{ y: "calc(var(--scroll-y) * 0.2px)" }}
            className="col-span-5 flex justify-center lg:block lg:absolute lg:top-[200px] lg:left-[42%] z-20 cursor-pointer pointer-events-auto"
          >
            <div className="polaroid w-full max-w-[140px] md:w-48 shadow-xl bg-white p-2 pb-8 sm:p-3 sm:pb-10 border border-gray-100">
              <div className="tape-effect" />
              <img src="/gallery/aesthetic_desk.png" alt="Creative Space" className="w-full" />
              <div className="absolute bottom-2 left-2 right-2 text-left font-handwriting text-black/40 text-[8px] sm:text-[10px]">
                 Creative space
              </div>
            </div>
          </motion.div>

          {/* Polaroid 2 (Coffee) */}
          <motion.div 
            initial={{ opacity: 0, y: 80, rotate: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1, ease: cubicBezier, delay: 1.2 + (bioText.length * 0.02) + 0.7 }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            className="col-span-5 flex justify-center lg:block lg:absolute lg:top-[350px] lg:left-[52%] z-20 cursor-pointer pointer-events-auto"
          >
            <div className="polaroid w-full max-w-[120px] md:w-44 shadow-2xl bg-white p-2 pb-8 sm:p-3 sm:pb-10 border border-gray-100">
              <img src="/gallery/aesthetic_cafe.png" alt="Coffee and Code" className="w-full" />
              <div className="absolute bottom-2 left-2 right-2 text-center font-handwriting text-black/40 text-[8px] sm:text-[10px]">
                Coffee & code
              </div>
            </div>
          </motion.div>

          {/* Note: Design Mindset */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-7 flex justify-center lg:block lg:absolute lg:top-[420px] lg:right-12 z-30 pointer-events-auto"
          >
            <div className="bg-white/90 p-4 sm:p-6 shadow-2xl border border-black/5 w-full max-w-[260px] md:w-64 relative backdrop-blur-sm">
              <div className="absolute top-[-15px] left-4 w-7 h-14 border-2 border-slate-300 rounded-full opacity-60" />
              <h3 className="font-handwriting text-xl sm:text-2xl text-[#E780A8] mb-3 underline decoration-[#E780A8]/20 underline-offset-4 font-bold">Design Mindset</h3>
              <ul className="space-y-2.5">
                {DESIGN_MINDSET.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[10px] sm:text-xs md:text-sm text-black/80 border-b border-dashed border-black/10 pb-2">
                    <span className="mt-0.5">{fact.icon}</span> 
                    <span>{fact.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* ─── DECORATIONS (z-10) ─── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="hidden lg:block absolute top-[35%] left-[60%] text-3xl animate-pulse z-10"
      >
        ✨
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="hidden lg:block absolute bottom-[10%] left-[50%] text-4xl z-10"
      >
        🌸
      </motion.div>

    </section>
  );
}