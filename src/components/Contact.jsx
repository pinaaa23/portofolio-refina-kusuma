import React from "react";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "refinakusuma@email.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:refinakusuma@email.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/refinakusuma",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5A2.48 2.48 0 1 1 4.98 8a2.48 2.48 0 0 1 0-4.5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.84-2.05 3.79-2.05C21.68 8.59 22 11 22 14.13V21h-4v-5.92c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.54-2.28 3.12V21h-4V9Z" />
      </svg>
    ),
    href: "https://linkedin.com"
  },
  {
    label: "GitHub",
    value: "github.com/refinakusuma",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.25.82-.57v-2.14c-3.34.72-4.05-1.41-4.05-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.46-2.39 1.23-3.23-.12-.31-.54-1.57.12-3.28 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.67 1.71.25 2.97.13 3.28.76.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.82.57A12 12 0 0 0 12 .7Z" />
      </svg>
    ),
    href: "https://github.com"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="snap-start scroll-mt-20 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050816]/40 p-8 backdrop-blur-2xl sm:p-12">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-600/20 blur-[80px]" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Let's Collaborated
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300/80">
              I'm always open to new opportunities, collaborations, or just a friendly chat about design and development.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition-colors group-hover:bg-violet-500/20 group-hover:text-violet-200">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white">{item.label}</h3>
                  <p className="mt-1 text-xs text-slate-400 group-hover:text-slate-200">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Refina Kusuma. Designed with passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
