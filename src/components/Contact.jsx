import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "refinakusuma.id17@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CONTACT_INFO = [
  {
    label: "Email",
    value: "refinakusuma.id17@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:refinakusuma.id17@gmail.com"
  },
  {
    label: "WhatsApp",
    value: "+6285745887888",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    href: "https://wa.me/+6285745887888"
  },
  {
    label: "Address",
    value: "Yogyakarta, East Java, Indonesia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "#"
  }
];

const SOCIAL_LINKS = [
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/refina-kusuma-172a50395/", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  { 
    label: "GitHub", 
    href: "https://github.com/pinaaa23", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/refinaka_", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.216.957.475 1.378.896.421.421.68.82.896 1.378.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.558-.475.957-.896 1.378-.421.421-.82.68-1.378.896-.422.163-1.057.358-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.054-1.805-.249-2.227-.412-.558-.216-.957-.475-1.378-.896-.421-.421-.68-.82-.896-1.378-.163-.422-.358-1.057-.412-2.227-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.054-1.17.249-1.805.412-2.227.216-.558.475-.957.896-1.378.421-.421.82-.68 1.378-.896.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.79.306-1.46.717-2.128 1.385-.668.667-1.078 1.337-1.385 2.128-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.79.717 1.46 1.385 2.128.667.668 1.337 1.078 2.128 1.385.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.79-.306 1.46-.717 2.128-1.385.667-.668 1.337-1.078 2.128-1.385.763-.296 1.634-.497 2.911-.554 1.28-.058 1.688-.072 4.947-.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.79-.306 1.46-.717 2.128-1.385.667-.668 1.337-1.078 2.128-1.385.763-.296 1.634-.497 2.911-.554 1.28-.058 1.688-.072 4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
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
      setIsSubmitting(false);
      setSubmitError("Email service belum disiapkan. Tambahkan variabel env EmailJS terlebih dulu.");
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

  return (
    <section id="contact" className="snap-start scroll-mt-14 bg-transparent">
      {/* Card Wrapper: Focused Centering on One Screen */}
      <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center px-3 sm:px-5 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* Main Contact Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050816]/40 p-0.5 backdrop-blur-3xl shadow-2xl">
            {/* Glare Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-[1.4rem] bg-white/[0.02]">
              
              {/* Left Column: Contact Info */}
              <div className="p-6 sm:p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
                
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Get in <span className="text-violet-400">Touch</span>
                </h2>
                <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-md">
                  I'm here to discuss your project and bring your ideas to life with premium design & development.
                </p>

                <div className="mt-8 space-y-4">
                  {CONTACT_INFO.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-5 group transition-all"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500/20 group-hover:border-violet-500/30">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                        <p className="text-sm text-white font-medium group-hover:text-violet-200 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="p-6 sm:p-8 lg:p-10 bg-white/[0.01]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-all focus:border-violet-500/50 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email Address*"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-all focus:border-violet-500/50 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Website (Optional)"
                      value={formState.website}
                      onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-all focus:border-violet-500/50 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                  <div className="relative group">
                    <textarea
                      placeholder="Write your message..."
                      required
                      rows="3"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-all focus:border-violet-500/50 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/20 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-px transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#050816]/80 px-6 py-3 transition-all duration-300 group-hover:bg-transparent text-sm text-white font-bold">
                      {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                      {!isSubmitting && !submitted && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {submitted && (
                    <p className="text-center text-emerald-400 text-xs font-medium animate-fade-in-up">
                      Thank you! Your message has been received.
                    </p>
                  )}

                  {submitError && (
                    <p className="text-center text-rose-400 text-xs font-medium animate-fade-in-up">
                      {submitError}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer is now OUTSIDE the centering div but INSIDE the section */}
      <div className="px-3 sm:px-5 lg:px-8 pb-10">
        <div className="mx-auto w-full max-w-5xl">
          <footer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            {/* Column 1: Branding */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white">RFNKSM</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Crafting immersive digital experiences through thoughtful design and robust development. Let's build something exceptional together.
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Tautan Cepat */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Tautan Cepat</h4>
              <ul className="space-y-3">
                {["Home", "About Me", "Experience", "Project", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-slate-400 text-xs hover:text-violet-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Proyek Teratas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Proyek Teratas</h4>
              <ul className="space-y-3">
                {["DailyDrip", "Cashier Web App", "Parakelana"].map((item) => (
                  <li key={item}>
                    <a href="#project" className="text-slate-400 text-xs hover:text-violet-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Kontak Info */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Hubungi Saya</h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li>
                  <p className="text-white font-medium mb-1">Email:</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-violet-400 transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <p className="text-white font-medium mb-1">WhatsApp:</p>
                  <a href="https://wa.me/6285745887888" className="hover:text-violet-400 transition-colors">
                    +6285745887888
                  </a>
                </li>
              </ul>
            </div>
          </footer>

          <div className="mt-12 border-t border-white/5 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Refina Kusuma. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-500">
              Made with <span className="text-rose-500">❤️</span> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
