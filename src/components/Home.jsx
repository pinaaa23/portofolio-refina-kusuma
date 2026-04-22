import React from 'react';
import Spline from '@splinetool/react-spline';

const SKILLS = ["React", "JavaScript", "Node.js", "Tailwind"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/pinaaa23",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.25.82-.57v-2.14c-3.34.72-4.05-1.41-4.05-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.46-2.39 1.23-3.23-.12-.31-.54-1.57.12-3.28 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.67 1.71.25 2.97.13 3.28.76.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.82.57A12 12 0 0 0 12 .7Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/refina-kusuma-172a50395/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.48 2.48 0 1 1 4.98 8a2.48 2.48 0 0 1 0-4.5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.84-2.05 3.79-2.05C21.68 8.59 22 11 22 14.13V21h-4v-5.92c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.54-2.28 3.12V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/refinaka_",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
];

const SPLINE_SCENE_URL = "https://prod.spline.design/JIYBLPAE8cBGGEJ7/scene.splinecode";

export default function Home() {
  return (
    <section id="home" className="snap-start scroll-mt-14 flex min-h-[calc(100svh-5.5rem)] items-center pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-10">
          <div className="mx-auto grid w-full max-w-5xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[11px] font-medium text-violet-100 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-violet-300" />
                Ready to Innovate
              </div>

              <h1 className="mt-8 text-3xl font-black leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
                <span className="block text-white">&amp; UI/UX Designer</span>
              </h1>

              <p className="mt-3 text-sm text-slate-200/75 sm:text-base">Crafting modern, user-friendly web experiences</p>
              <p className="mt-4 max-w-xl text-justify text-xs leading-relaxed text-slate-300/85 sm:text-sm">
                I design and develop modern, responsive web interfaces by combining frontend development and UI/UX design. I focus on creating clean, intuitive layouts that are easy to use and visually appealing. With attention to performance and detail, I aim to deliver seamless user experiences that are both functional and engaging.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-200/90 backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-violet-300/30 hover:text-white sm:h-11 sm:w-11"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-[360px]">
              <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-transparent sm:h-[320px] lg:h-[380px]">
                <Spline scene={SPLINE_SCENE_URL} className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

          );
}