import React from 'react';

const ABOUT_SERVICES = [
  {
    title: "Web Development",
    description: "Building responsive and interactive websites with modern technologies.",
    icon: "</>",
  },
  {
    title: "UI/UX Design",
    description: "Designing modern and user-friendly interfaces.",
    icon: "[ ]",
  },
];


export default function About() {
  return (
    <section id="about" className="scroll-mt-14 flex min-h-[calc(100svh-5.5rem)] items-center py-8 sm:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-5xl space-y-4 sm:space-y-5 lg:space-y-4">

            <div className="grid items-center gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div className="max-w-xl about-copy">
                <h3 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                  <span className="text-violet-300">Hello, I'm</span>
                  <span className="mt-1 block text-white">Refina Kusuma Friambudi</span>
                </h3>
                <p className="mt-3 text-justify text-sm leading-relaxed text-slate-300/90 sm:text-base">
                  I am an Informatics student focused on frontend development and UI/UX design. I enjoy creating modern and responsive web interfaces that are visually appealing and easy to use. By combining design and development skills, I aim to build clean, intuitive, and user-friendly digital experiences while continuously improving my abilities.
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href="#"
                    className="rounded-lg border border-violet-300/25 bg-violet-500/80 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-400/90 sm:text-sm"
                  >
                    Download CV
                  </a>
                  <a
                    href="#project"
                    className="rounded-lg border border-violet-300/30 bg-transparent px-4 py-2 text-xs font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200/45 hover:bg-violet-500/10 hover:text-white sm:text-sm"
                  >
                    View Projects
                  </a>
                </div>

              </div>

              <div className="flex justify-center lg:justify-center lg:pl-0">
                <div className="about-avatar-shell relative h-44 w-44 rounded-full border border-violet-200/25 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-black/90 sm:h-52 sm:w-52 lg:h-64 lg:w-64">
                  <div className="about-avatar-ring absolute inset-0 rounded-full ring-2 ring-violet-400/25" />
                  <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-[65%] rounded-full bg-black/80 sm:h-20 sm:w-20" />
                  <div className="absolute left-1/2 top-[58%] h-20 w-28 -translate-x-1/2 rounded-[999px_999px_22px_22px] bg-black/80 sm:h-24 sm:w-32" />
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {ABOUT_SERVICES.map((item, index) => (
                <article
                  key={item.title}
                  style={{ "--service-delay": `${index * 0.55}s` }}
                  className="about-service-card rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-violet-300 sm:text-lg">{item.icon}</span>
                    <h4 className="text-base font-bold text-white sm:text-lg">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-slate-300/85">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

          );
}