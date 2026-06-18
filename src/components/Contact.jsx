import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "refinakusuma.id17@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CONTACT_DETAILS = [
  { label: "EMAIL", value: "refinakusuma.id17@gmail.com", href: "mailto:refinakusuma.id17@gmail.com" },
  { label: "WHATSAPP", value: "+6285745887888", href: "https://wa.me/6285745887888" },
  { label: "LOCATION", value: "Yogyakarta, Indonesia", href: "#" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", website: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const subject = encodeURIComponent(`Contact Form - ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nWebsite: ${formState.website || "-"}\n\nMessage:\n${formState.message}`
      );
      window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", website: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: CONTACT_EMAIL,
          name: formState.name,
          email: formState.email,
          website: formState.website || "-",
          message: formState.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitted(true);
      setFormState({ name: "", email: "", website: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setSubmitError("Pesan gagal dikirim. Cek konfigurasi EmailJS dan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } },
  };

  const formCardVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0, 
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col overflow-hidden bg-[#F5EFE6] snap-start scroll-mt-14">
      {/* Background Decor - Subtle Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Very slow floating gradient movement */}
      <motion.div 
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E780A8] opacity-[0.04] rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E780A8] opacity-[0.03] rounded-full blur-[100px] pointer-events-none z-0" 
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-16 pt-8 pb-8 lg:pt-12 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-5 flex flex-col"
          >
            <motion.h2 variants={itemVariants} className="text-[3.5rem] lg:text-[4.2rem] font-black text-[#2c2b28] leading-[1.05] tracking-[-0.02em]">
              Let's Talk.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="mt-4 text-[#6b7280] text-[15px] leading-[1.7] max-w-sm">
              Available for freelance projects, internships, collaborations, and creative discussions. Let's make your ideas come to life.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 space-y-4">
              {CONTACT_DETAILS.map((detail, idx) => (
                <div key={idx}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b7280] mb-1.5">{detail.label}</p>
                  <a href={detail.href} className="text-[#2c2b28] text-[16px] font-medium hover:text-[#E780A8] transition-colors duration-500">
                    {detail.value}
                  </a>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-black/[0.08] max-w-sm">
              <p className="text-[15px] leading-[1.7] text-[#6b7280] italic">
                "Design is intelligence made visible."
              </p>
              
              <div className="flex gap-5 mt-6">
                <a href="https://github.com/pinaaa23" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#6b7280] hover:text-[#E780A8] hover:-translate-y-1 transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/refina-kusuma-172a50395/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#6b7280] hover:text-[#E780A8] hover:-translate-y-1 transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://www.instagram.com/refinaka_" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#6b7280] hover:text-[#E780A8] hover:-translate-y-1 transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formCardVariants}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[32px] bg-white/60 backdrop-blur-md border border-black/[0.08] p-8 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#6b7280] mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-black/[0.08] px-0 py-2 text-[#2c2b28] text-[15px] focus:outline-none transition-colors duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E780A8] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left"></div>
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#6b7280] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-black/[0.08] px-0 py-2 text-[#2c2b28] text-[15px] focus:outline-none transition-colors duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E780A8] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left"></div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#6b7280] mb-2">Website <span className="opacity-50 lowercase tracking-normal font-normal">(optional)</span></label>
                  <input
                    type="text"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                    className="w-full bg-transparent border-b border-black/[0.08] px-0 py-2 text-[#2c2b28] text-[15px] focus:outline-none transition-colors duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E780A8] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left"></div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#6b7280] mb-2">Message</label>
                  <textarea
                    required
                    rows="2"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-black/[0.08] px-0 py-2 text-[#2c2b28] text-[15px] focus:outline-none transition-colors duration-500 resize-none"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E780A8] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left"></div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative flex items-center justify-center gap-3 rounded-full bg-[#E780A8] px-10 py-3.5 text-[12px] uppercase tracking-[0.1em] font-medium text-white shadow-[0_8px_20px_rgba(231,128,168,0.2)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(231,128,168,0.3)] ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>{isSubmitting ? "Sending..." : submitted ? "Message Sent" : "Send Message"}</span>
                  </button>
                </div>

                {submitted && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[#E780A8] text-[13px] font-medium mt-4">
                    Thank you! Your message has been received.
                  </motion.p>
                )}

                {submitError && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-[13px] font-medium mt-4">
                    {submitError}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
          
        </div>

        {/* Minimal Footer Inside Container */}
        <div className="mt-auto pt-6 pb-10  w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#6b7280] uppercase tracking-[0.2em]">
            © 2026 Refina Kusuma
          </p>
          <p className="text-[10px] text-[#6b7280] uppercase tracking-[0.2em]">
            Designed & Developed by Refina
          </p>
        </div>
      </div>
    </section>
  );
}
