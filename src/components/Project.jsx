import React, { useState } from 'react';

const PROJECT_MENU = [
  { key: "all", label: "All" },
  { key: "ui-ux", label: "UI/UX Design" },
  { key: "web", label: "Web Development" },
];

const PROJECT_ITEMS = [
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "AI Creative Campaign System",
    description:
      "Produksi konten visual dan video berbasis AI untuk branding digital, promosi, dan storytelling kreatif dengan pendekatan generatif.",
    tags: ["AI Video", "AI Image", "Digital Branding"],
    preview: "from-orange-200 via-amber-300 to-stone-500",
  },
  {
    filterKey: "web",
    category: "Web Development",
    title: "Final Project Digital System",
    description:
      "Platform web berbasis proyek akademik dengan pendekatan profesional, modern UI/UX, dan sistem terstruktur yang siap diimplementasikan di dunia nyata.",
    tags: ["Web System", "UI/UX", "React"],
    preview: "from-slate-900 via-indigo-900 to-violet-700",
  },
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "Smart Content Strategy",
    description:
      "Manajemen media sosial, perencanaan konten strategis, produksi visual & video digital, serta optimalisasi engagement berbasis data dan tren.",
    tags: ["Content Planning", "Social Media", "Video"],
    preview: "from-stone-300 via-zinc-400 to-slate-700",
  },
];

export default function Project() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = PROJECT_ITEMS.filter(
    (project) => activeTab === "all" || project.filterKey === activeTab
  );

  return (
    <section id="project" className="snap-start scroll-mt-14 min-h-screen pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-8">
      <div className="mx-auto w-full max-w-5xl space-y-6 sm:space-y-7">
        <div className="px-1">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Proyek Yang Dikerjakan</h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-violet-500" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {PROJECT_MENU.map((menu) => (
              <button
                key={menu.key}
                type="button"
                onClick={() => setActiveTab(menu.key)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                  activeTab === menu.key
                    ? "bg-violet-500 text-white shadow-[0_6px_18px_rgba(139,92,246,0.45)]"
                    : "text-slate-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                {menu.label}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(2,6,23,0.28)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 animate-fade-in-up"
            >
              <div className={`h-48 bg-gradient-to-br ${project.preview} p-4 sm:h-52`}>
                <div className="flex h-full items-end rounded-2xl border border-white/15 bg-black/10 p-4 backdrop-blur-sm">
                  <div className="w-full space-y-2">
                    <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                      {project.category}
                    </span>
                    <div className="h-1.5 w-20 rounded-full bg-white/70 opacity-80" />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-medium text-slate-200/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}