import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TECH_STACK_GROUPS = [
  {
    title: "Frontend Development",
    summary: "Building modern, responsive, and maintainable web interfaces.",
    items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    title: "Backend & Data",
    summary: "Managing application logic, APIs, and data structures.",
    items: ["Node.js", "REST API Integration", "JSON Data Handling", "MySQL (Basic)", "Firebase (Basic)"],
  },
  {
    title: "UI/UX & Design",
    summary: "Crafting clear user experiences with a design-to-development approach.",
    items: ["Figma", "Wireframing", "Design System Thinking", "User Flow", "Prototyping"],
  },
  {
    title: "Tools & Workflow",
    summary: "Implementing collaborative workflows for quality and efficiency.",
    items: ["Git & GitHub", "VS Code", "NPM", "Deployment Basics", "Team Collaboration"],
  },
];

const EXPERIENCE_ITEMS = [
  {
    period: "2023 - 2024",
    title: "Assistant Lecturer",
    organization: "Advanced Algorithm and Programming Practicum (2024)",
    color: "#f3e8ff", // Soft purple paper
    certificate: {
      label: "Practicum Assistant Certificate",
      detail: "Klik untuk melihat sertifikat yang diperoleh pada kegiatan Advanced Algorithm and Programming Practicum (2024).",
      image: "/gallery/experience/SKA ASDOS.jpg",
      alt: "Practicum Assistant Certificate",
    },
    points: [
      "Responsible for assisting students in understanding advanced algorithm concepts and guiding them in implementing problem-solving logic using the Java programming language. Demonstrated the use of data structures, algorithm optimization, OOP concepts, and coding practices through hands-on labs and real-case exercises.",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Secretary",
    organization: "Informatics & Computer Student Activity Unit",
    color: "#d8b4fe", // Medium lilac paper
    certificate: {
      label: "Secretary Certificate",
      detail: "Klik untuk melihat sertifikat yang terkait dengan administrasi organisasi dan kegiatan internal.",
      image: "/gallery/experience/SKA IK.jpg",
      alt: "Secretary Certificate",
    },
    points: [
      "Responsible for managing organizational administration, including drafting official documents, recording meeting minutes, managing correspondence, and organizing schedules for internal activities. Actively maintained internal communication through structured information distribution, coordinated event documentation, and ensured all data and records were neatly archived.",
    ],
  },
  {
    period: "2024 - Until Now",
    title: "Web Developer Intern",
    organization: "Internship Team Project",
    color: "#a855f7", // Deep purple paper
    dark: true,
    points: [
      "Developed an internship monitoring system to track student activities and progress in real-time, while building responsive interfaces with React.js, optimizing performance through reusable components, and designing user-friendly dashboards for efficient monitoring and reporting.",
    ],
  },
];

const CERTIFICATE_GALLERY = [
  {
    title: "Certificate of Participation",
    subtitle: "Software Development Webinar (Frontend & Backend for Beginners)",
    image: "/gallery/certificate/certificate-1.jpg",
  },
  {
    title: "Cloud Camp Class 2025 Certificate",
    subtitle: "Unlocking the Power of Cloud - AWS x Metrodatas",
    image: "/gallery/certificate/certificate-2.jpg",
  },
  {
    title: "National Webinar Certificate",
    subtitle: "Participation Award - Technology & Digital Innovation",
    image: "/gallery/certificate/certificate-3.jpg",
  },
  {
    title: "Cyber Security Webinar Certificate",
    subtitle: "Preventing Cyber Attacks with Penetration Testing",
    image: "/gallery/certificate/certificate-4.jpg",
  },
  {
    title: "Sertifikat Workshop UI/UX",
    subtitle: "Unlock Your Digital Skill: Fundamental UI/UX",
    image: "/gallery/certificate/certificate-5.jpg",
  },
];

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "tech-stack", label: "Tech Stack" },
];

const cubicBezier = [0.22, 1, 0.36, 1];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.05 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.35, ease: cubicBezier },
    },
  };

  return (
    <section id="experience" className="bg-[#e9d5ff] min-h-screen py-32 px-6 md:px-16 relative overflow-hidden">
      {/* ─── SMOOTH SECTION TRANSITION: About Me → Experience ─── */}
      {/* Fades from About Me cream (#F5EFE6) into the lilac background */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none z-0"
        style={{
          height: "280px",
          background: "linear-gradient(to bottom, #F5EFE6 0%, #efe1ff 40%, transparent 100%)"
        }}
      />

      {/* ─── DECORATIVE GRAIN ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-texture" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ─── HEADER SECTION ─── */}
        <div className="text-center mb-16">
          <motion.span
            className="font-handwriting text-[#7e22ce] text-xl block mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: cubicBezier }}
          >
            My Journey
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-black text-[#2e1065]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: cubicBezier, delay: 0.15 }}
          >
            Skills & Experiences
          </motion.h2>
        </div>

        {/* ─── TAB NAVIGATION ─── */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-8 md:gap-16 border-b border-[#2e1065]/10 pb-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-2 text-sm md:text-base font-semibold tracking-wider transition-colors duration-300 ${
                  activeTab === tab.id ? "text-[#2e1065]" : "text-[#2e1065]/40 hover:text-[#2e1065]/70"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#7e22ce]"
                    transition={{ duration: 0.4, ease: cubicBezier }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ─── TAB CONTENT ─── */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col pb-20"
              >
                {EXPERIENCE_ITEMS.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.9, ease: cubicBezier, delay: index * 0.12 }}
                    style={{ 
                      backgroundColor: item.color,
                      zIndex: 10 + index,
                      marginTop: index === 0 ? 0 : "-120px",
                      rotate: index % 2 === 0 ? "-1.5deg" : "1.5deg"
                    }}
                    className="paper-card p-10 md:p-16 min-h-[300px] md:min-h-[400px] flex flex-col justify-center"
                  >
                    {/* Top Right Corner: View Button */}
                    <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
                      {item.certificate ? (
                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: item.dark ? "#ffffff" : "#2e1065", color: item.dark ? "#2e1065" : "#fdfaff" }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCert(item.certificate)}
                          className={`px-6 py-2 rounded-full border text-[9px] md:text-[10px] font-black tracking-[0.2em] transition-all duration-300 uppercase bg-transparent ${item.dark ? "border-white/60 text-white" : "border-[#2e1065]/40 text-[#2e1065]"}`}
                        >
                          View
                        </motion.button>
                      ) : (
                        <div className={`px-6 py-2 rounded-full border text-[9px] md:text-[10px] font-black tracking-[0.2em] transition-all duration-300 uppercase cursor-default ${item.dark ? "border-white/20 text-white/30" : "border-[#2e1065]/10 text-[#2e1065]/20"}`}>
                          View
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-10">
                      
                      {/* LEFT: Year & Large Title */}
                      <div className="md:w-[50%]">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: cubicBezier, delay: 0.2 + index * 0.1 }}
                          className={`text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-6 block ${item.dark ? "text-white/50" : "text-[#2e1065]/30"}`}
                        >
                          {item.period}
                        </motion.span>

                        <h3 className={`text-4xl md:text-7xl font-serif font-black leading-[0.95] tracking-tight ${item.dark ? "text-white" : "text-[#2e1065]"}`}>
                          {item.title.split(" ").map((word, wi) => (
                            <span key={wi} className="overflow-hidden inline-block mr-[0.2em] align-top">
                              <motion.span
                                className="inline-block"
                                initial={{ y: "105%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.85, ease: cubicBezier, delay: 0.25 + wi * 0.07 + index * 0.1 }}
                              >
                                {word}
                              </motion.span>
                            </span>
                          ))}
                        </h3>
                      </div>

                      {/* RIGHT: Description */}
                      <div className="md:w-[40%] md:pt-20">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: cubicBezier, delay: 0.4 + index * 0.1 }}
                          className={`text-sm md:text-lg leading-relaxed font-light max-w-md ${item.dark ? "text-white/80" : "text-[#2e1065]/60"}`}
                        >
                          {item.points.map((point, pIndex) => (
                            <p key={pIndex}>{point}</p>
                          ))}
                          <p className={`text-[10px] md:text-xs font-bold mt-6 uppercase tracking-[0.2em] ${item.dark ? "text-white/60" : "text-[#7e22ce]"}`}>
                            {item.organization}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "certificates" && (
              <motion.div
                key="certificates"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.1
                    }
                  },
                  exit: { opacity: 0, transition: { duration: 0.3 } }
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
              >
                {CERTIFICATE_GALLERY.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier } }
                    }}
                    whileHover={{ y: -12 }}
                    className="group relative bg-white p-3 rounded-[2rem] shadow-[0_10px_40px_rgba(44,43,40,0.04)] hover:shadow-[0_30px_60px_rgba(44,43,40,0.1)] transition-all duration-700 border border-[#2e1065]/5 cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#2e1065]/3 relative">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#2e1065]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                        <motion.span 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="bg-white px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] text-[#2e1065] shadow-2xl"
                        >
                          VIEW FULL
                        </motion.span>
                      </div>
                    </div>
                    <div className="px-4 py-8">
                      <h4 className="font-serif font-black text-lg text-[#2e1065] mb-2 leading-tight group-hover:text-[#7e22ce] transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#2e1065]/30 font-black">
                        {cert.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "tech-stack" && (
              <motion.div
                key="tech-stack"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                {TECH_STACK_GROUPS.map((group, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants} 
                    whileHover={{ y: -5 }}
                    className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(44,43,40,0.03)] hover:shadow-[0_15px_30px_rgba(44,43,40,0.05)] transition-all duration-500 border border-[#2e1065]/5"
                  >
                    <h3 className="font-serif font-black text-2xl text-[#2e1065] mb-3">{group.title}</h3>
                    <p className="text-sm md:text-base text-[#2e1065]/50 mb-8 leading-relaxed font-light">{group.summary}</p>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((tech, tIndex) => (
                        <span 
                          key={tIndex}
                          className="px-4 py-2 bg-[#fdfaff]/50 text-[#2e1065] text-[10px] font-black uppercase tracking-widest rounded-lg border border-[#2e1065]/5 hover:bg-[#7e22ce] hover:text-white hover:border-[#7e22ce] transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ─── CERTIFICATE MODAL ─── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-[#2e1065]/80 backdrop-blur-md" onClick={() => setSelectedCert(null)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#fdfaff] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-[#2e1065] z-20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Image Side */}
              <div className="bg-[#2e1065]/5 p-6 md:p-10 flex items-center justify-center">
                <div className="bg-white p-2 md:p-4 shadow-xl rotate-[-1deg]">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.label} 
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-widest text-[#7e22ce] uppercase mb-2">CERTIFICATE DETAILS</span>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-[#2e1065] mb-6 leading-tight">
                  {selectedCert.label}
                </h3>
                <div className="space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-[#2e1065]/80">
                    {selectedCert.detail}
                  </p>
                </div>
                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[#7e22ce]/40" />
                    <span className="font-handwriting text-xl text-[#7e22ce]">Refina Kusuma</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}