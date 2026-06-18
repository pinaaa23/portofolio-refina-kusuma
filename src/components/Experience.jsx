import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TECH_STACK_GROUPS = [
  {
    title: "Frontend\nDevelopment",
    summary: "Building modern, responsive, and maintainable web interfaces.",
    items: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    title: "Backend &\nData",
    summary: "Managing application logic, APIs, and data structures.",
    items: ["Node.js", "MySQL", "Firebase", "REST API", "JSON Handling"],
  },
  {
    title: "UI/UX\nDesign",
    summary: "Crafting clear user experiences with a design-to-development approach.",
    items: ["Figma", "Wireframing", "Prototyping", "User Flow", "Design Systems"],
  },
  {
    title: "Tools &\nWorkflow",
    summary: "Implementing collaborative workflows for quality and efficiency.",
    items: ["Git & GitHub", "VS Code", "NPM", "Vercel", "Team Collaboration"],
  },
];

const EXPERIENCE_ITEMS = [
  {
    period: "2024 - 2025",
    title: "Assistant Lecturer",
    organization: "Advanced Algorithm and Programming Practicum (2024)",
    color: "#ffffff", // Pure white for clean contrast
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
    period: "2024 - 2025",
    title: "Secretary",
    organization: "Informatics & Computer Student Activity Unit",
    color: "#f3e8ff", // Soft Lilac (Purple-100)
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
    period: "2026",
    title: "Web Developer Intern",
    organization: "Internship Team Project",
    color: "#e9d5ff", // Muted Purple (Purple-200)
    dark: false,
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

const IsometricIcon = ({ index }) => {
  return (
    <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700">
      {index === 0 && (
        <svg viewBox="0 0 100 100" fill="none" stroke="#2e1065" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full relative z-10">
          {/* < */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.6, ease: cubicBezier, delay: 0.2}} d="M40 30 L20 50 L40 70" />
          {/* / */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.6, ease: cubicBezier, delay: 0.6}} d="M60 25 L45 75" />
          {/* > */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.6, ease: cubicBezier, delay: 1.0}} d="M65 30 L85 50 L65 70" />
          {/* Cursor _ */}
          <motion.path 
             initial={{opacity: 0}} 
             whileInView={{opacity: 1}} 
             viewport={{ once: true }}
             transition={{duration: 0.8, delay: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}} 
             d="M85 75 L95 75" 
          />
        </svg>
      )}
      {index === 1 && (
        <svg viewBox="0 0 100 100" fill="none" stroke="#2e1065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full relative z-10">
          {/* Bottom Cylinder */}
          <motion.ellipse initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 0.2}} cx="50" cy="75" rx="25" ry="10" />
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 0.4}} d="M25 55 V75 A 25 10 0 0 0 75 75 V55" />
          
          {/* Middle Cylinder */}
          <motion.ellipse initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 0.8}} cx="50" cy="55" rx="25" ry="10" />
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 1.0}} d="M25 35 V55 A 25 10 0 0 0 75 55 V35" />

          {/* Top Cylinder */}
          <motion.ellipse initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 1.4}} cx="50" cy="35" rx="25" ry="10" />
          
          {/* Server / connection element */}
          <motion.path initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 2.0}} d="M50 25 V15" strokeDasharray="4 4" />
          <motion.circle initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.5, ease: cubicBezier, delay: 2.2}} cx="50" cy="15" r="3" fill="#7e22ce" />
        </svg>
      )}
      {index === 2 && (
        <svg viewBox="0 0 100 100" fill="none" stroke="#2e1065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full relative z-10">
          {/* Main Bezier Curve */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 1.2, ease: cubicBezier, delay: 0.2}} d="M20 75 C 20 25, 80 25, 80 75" />
          
          {/* Handles (draw after curve) */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 0.5}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 1.4}} d="M20 75 L20 25 L80 25 L80 75" strokeDasharray="4 4" strokeWidth="1" />
          
          {/* Anchor Points */}
          <motion.rect initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 2.0}} x="16" y="71" width="8" height="8" fill="#ffffff" stroke="#2e1065" strokeWidth="2" />
          <motion.rect initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 2.2}} x="76" y="71" width="8" height="8" fill="#ffffff" stroke="#2e1065" strokeWidth="2" />
          
          {/* Handle Dots */}
          <motion.circle initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 2.4}} cx="20" cy="25" r="3" fill="#7e22ce" />
          <motion.circle initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 2.4}} cx="80" cy="25" r="3" fill="#7e22ce" />
        </svg>
      )}
      {index === 3 && (
        <svg viewBox="0 0 100 100" fill="none" stroke="#2e1065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full relative z-10">
          {/* Gear */}
          <motion.g initial={{opacity: 0, rotate: -90, scale: 0.5}} whileInView={{opacity: 1, rotate: 0, scale: 1}} viewport={{ once: true }} transition={{duration: 1.2, ease: cubicBezier, delay: 0.2}} style={{ originX: "35px", originY: "35px" }}>
            <circle cx="35" cy="35" r="12" />
            <path d="M35 23 V19 M35 47 V51 M23 35 H19 M47 35 H51 M26.5 26.5 L23 23 M43.5 43.5 L47 47 M26.5 43.5 L23 47 M43.5 26.5 L47 23" strokeWidth="2" />
          </motion.g>

          {/* Git Workflow Graph */}
          {/* Main branch line */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 1.0, ease: cubicBezier, delay: 1.2}} d="M65 85 V25" strokeWidth="2" />
          
          {/* Branching line */}
          <motion.path initial={{pathLength: 0, opacity: 0}} whileInView={{pathLength: 1, opacity: 1}} viewport={{ once: true }} transition={{duration: 0.8, ease: cubicBezier, delay: 2.0}} d="M65 70 C 85 60, 85 50, 65 40" strokeWidth="2" />
          
          {/* Nodes */}
          <motion.circle initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 1.8}} cx="65" cy="70" r="5" fill="#ffffff" stroke="#2e1065" strokeWidth="2" />
          <motion.circle initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 2.6}} cx="81" cy="55" r="5" fill="#ffffff" stroke="#2e1065" strokeWidth="2" />
          <motion.circle initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ once: true }} transition={{duration: 0.4, delay: 2.8}} cx="65" cy="40" r="5" fill="#ffffff" stroke="#2e1065" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

function CertificateItem({ cert, index, setSelectedCert }) {
  const isEven = index % 2 === 0;
  const handleOpen = () => {
    setSelectedCert({
      title: cert.title,
      period: "2024", // Defaulting year
      organization: cert.subtitle,
      certificate: {
        label: cert.title,
        image: cert.image
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: cubicBezier }}
      className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Image container */}
      <div className="w-full md:w-[55%] relative group cursor-pointer" onClick={handleOpen}>
        <motion.div 
          className="relative rounded-[2rem] overflow-hidden bg-white/50 border border-white/40"
          style={{ 
            rotate: index % 2 === 0 ? -1.5 : 1.5,
            boxShadow: "0 20px 60px -15px rgba(46,16,101,0.15)"
          }}
          whileHover={{ scale: 1.03, rotate: 0 }}
          transition={{ duration: 0.6, ease: cubicBezier }}
        >
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-auto object-cover filter transition-all duration-700 group-hover:brightness-[1.03]"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2e1065]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      </div>

      {/* Metadata */}
      <div className={`w-full md:w-[45%] flex flex-col items-start text-left`}>
        <motion.span 
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: cubicBezier }}
          className="text-[10px] font-black tracking-[0.25em] uppercase text-[#a855f7]/80 mb-6"
        >
          CERTIFICATE 0{index + 1}
        </motion.span>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: cubicBezier }}
          className="text-4xl lg:text-5xl font-serif font-black text-[#2e1065] leading-[1.1] mb-6"
        >
          {cert.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: cubicBezier }}
          className="text-sm md:text-base text-[#2e1065]/60 mb-8 max-w-sm leading-relaxed font-light"
        >
          {cert.subtitle}
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: cubicBezier }}
          onClick={handleOpen}
          className="group flex items-center gap-3 text-[11px] font-black tracking-[0.15em] uppercase text-[#7e22ce] hover:text-[#2e1065] transition-colors duration-300"
        >
          <span>View Full Credential</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier } }
  };


  return (
    <section 
      id="experience" 
      className="min-h-screen pt-20 pb-32 md:pt-24 px-6 md:px-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F5EFE6 0%, #fdfaff 25%, #f3e8ff 60%, #e9d5ff 100%)",
      }}
    >

      {/* ─── DECORATIVE GRAIN ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-texture" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ─── HEADER SECTION ─── */}
        <div className="text-center mb-10">
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
        <div className="flex justify-center mb-10">
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
                          onClick={() => setSelectedCert(item)}
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
                          className={`text-sm md:text-lg leading-relaxed font-light max-w-md text-justify ${item.dark ? "text-white/80" : "text-[#2e1065]/60"}`}
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
                className="flex flex-col gap-32 py-10"
              >
                {CERTIFICATE_GALLERY.map((cert, index) => (
                  <CertificateItem key={index} cert={cert} index={index} setSelectedCert={setSelectedCert} />
                ))}
              </motion.div>
            )}

            {activeTab === "tech-stack" && (
              <motion.div
                key="tech-stack"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:gap-y-16 lg:divide-x divide-[#2e1065]/10 mt-12"
              >
                {TECH_STACK_GROUPS.map((group, index) => (
                  <motion.div 
                    key={index} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: 1, 
                        transition: { 
                          duration: 0.8, 
                          ease: cubicBezier, 
                          delay: index * 0.15,
                          staggerChildren: 0.15,
                          delayChildren: index * 0.15 + 0.2
                        } 
                      }
                    }}
                    className="group flex flex-col items-start text-left px-0 py-12 md:py-8 lg:px-12 first:lg:pl-0 last:lg:pr-0"
                  >
                    {/* STEP 03: Section Number */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: cubicBezier } }
                      }}
                      className="text-[#a855f7] font-serif font-black text-lg mb-6"
                    >
                      0{index + 1}
                    </motion.div>

                    {/* STEP 02: Isometric Illustration */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier } }
                      }}
                      className="mb-5"
                    >
                      <IsometricIcon index={index} />
                    </motion.div>

                    {/* STEP 04: Title */}
                    <div className="mb-4 w-full">
                      <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier } }
                        }}
                        className="font-serif font-black text-2xl lg:text-3xl text-[#2e1065] leading-[1.1] pr-4"
                      >
                        {group.title.split('\n').map((line, i) => (
                           <span key={i} className="block">{line}</span>
                        ))}
                      </motion.h3>
                    </div>

                    {/* STEP 05: Description */}
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-20px" }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier } }
                      }}
                      className="text-sm text-[#2e1065]/60 mb-8 leading-relaxed font-light pr-4"
                    >
                      {group.summary}
                    </motion.p>

                    {/* STEP 06: Skills as Plain Text */}
                    <motion.ul 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                          opacity: 1,
                          transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                        }
                      }}
                      className="flex flex-col gap-5 w-full mt-auto border-t border-[#2e1065]/10 pt-8"
                    >
                      {group.items.map((tech, tIndex) => (
                        <motion.li
                          key={tIndex}
                          variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier } }
                          }}
                          className="text-[13px] md:text-sm font-medium text-[#2e1065]/90 flex items-center group/item cursor-default hover:text-[#a855f7] transition-colors duration-300"
                        >
                          <span className="w-0 overflow-hidden group-hover/item:w-4 transition-all duration-300 text-[#a855f7]/50">- </span>
                          {tech}
                        </motion.li>
                      ))}
                    </motion.ul>
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
            {/* Blurred Background Overlay */}
            <div 
              className="absolute inset-0 bg-[#fdfaff]/80 md:bg-[#fdfaff]/60 backdrop-blur-xl" 
              onClick={() => setSelectedCert(null)} 
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: cubicBezier }}
              className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 p-4 md:p-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-[#2e1065] z-50 transition-all duration-300 backdrop-blur-md shadow-sm border border-white/30"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Main Certificate Image (Left: 60%) */}
              <div className="relative w-full md:w-[60%] h-[40vh] md:h-full flex items-center justify-center lg:justify-end">
                <motion.img 
                  src={selectedCert.certificate.image} 
                  alt={selectedCert.certificate.label} 
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain shadow-[0_30px_80px_rgba(46,16,101,0.35)] rounded-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: cubicBezier }}
                />
              </div>

              {/* Metadata Panel (Right: 40%) */}
              <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start max-w-md">
                <div className="w-full bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[32px] border border-white/40 shadow-[0_10px_30px_rgba(111,76,255,0.08)] flex flex-col gap-8">
                  {/* ROLE */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#a855f7]/80">Role</p>
                    <p className="text-xl md:text-2xl font-serif font-bold text-[#2e1065] leading-snug">{selectedCert.title}</p>
                  </div>
                  
                  {/* YEAR */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#a855f7]/80">Year</p>
                    <p className="text-xl md:text-2xl font-serif font-bold text-[#2e1065] leading-snug">{selectedCert.period}</p>
                  </div>

                  {/* INSTITUTION */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#a855f7]/80">Institution</p>
                    <p className="text-[15px] md:text-base font-medium text-[#2e1065]/90 leading-snug">{selectedCert.organization}</p>
                  </div>

                  {/* CREDENTIAL */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#a855f7]/80">Credential</p>
                    <p className="text-[15px] md:text-base font-medium text-[#2e1065]/90 leading-snug">{selectedCert.certificate.label}</p>
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