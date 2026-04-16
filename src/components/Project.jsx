import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PROJECT_MENU = [
  { key: "all", label: "All" },
  { key: "ui-ux", label: "UI/UX Design" },
  { key: "web", label: "Web Development" },
];

const PROJECT_ITEMS = [
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "DailyDrip",
    description:
      "Aplikasi mobile untuk tracking kebiasaan minum air harian dengan antarmuka yang intuitif, gamifikasi, dan notifikasi pengingat hidrasi.",
    tags: ["Mobile Design", "Figma", "UX Research"],
    cover: "/gallery/project/UIUX/DailyDrip/cover.png",
    link: "/project/uiux/dailydrip",
    accentFrom: "from-violet-600",
    accentTo: "to-indigo-500",
  },
  {
    filterKey: "web",
    category: "Web Development",
    title: "Final Project Digital System",
    description:
      "Platform web berbasis proyek akademik dengan pendekatan profesional, modern UI/UX, dan sistem terstruktur yang siap diimplementasikan di dunia nyata.",
    tags: ["Web System", "UI/UX", "React"],
    cover: null,
    link: null,
    accentFrom: "from-indigo-600",
    accentTo: "to-violet-700",
    previewGradient: "from-slate-900 via-indigo-900 to-violet-700",
  },
  {
    filterKey: "ui-ux",
    category: "UI/UX Design",
    title: "Smart Content Strategy",
    description:
      "Manajemen media sosial, perencanaan konten strategis, produksi visual & video digital, serta optimalisasi engagement berbasis data dan tren.",
    tags: ["Content Planning", "Social Media", "Figma"],
    cover: null,
    link: null,
    accentFrom: "from-fuchsia-600",
    accentTo: "to-pink-500",
    previewGradient: "from-stone-300 via-zinc-400 to-slate-700",
  },
];

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    if (project.link) navigate(project.link);
  };

  return (
    <article
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(2,6,23,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(139,92,246,0.22)] hover:border-violet-400/20 animate-fade-in-up ${
        project.link ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* Subtle top glow on hover */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accentFrom} ${project.accentTo} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Image / Gradient Preview */}
      <div className="relative overflow-hidden">
        {project.cover && !imgError ? (
          <div className="relative h-52 sm:h-56 overflow-hidden bg-black/30">
            <img
              src={project.cover}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
            {/* Overlay gradient bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050816]/80 to-transparent" />
          </div>
        ) : (
          <div className={`h-52 sm:h-56 bg-gradient-to-br ${project.previewGradient || 'from-violet-900 to-indigo-900'} p-4`}>
            <div className="flex h-full items-end rounded-2xl border border-white/15 bg-black/10 p-4 backdrop-blur-sm">
              <div className="w-full space-y-2">
                <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  {project.category}
                </span>
                <div className="h-1.5 w-20 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6">
        {/* Category label */}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} bg-clip-text px-0 text-[10px] font-bold uppercase tracking-[0.22em] text-transparent`}
          style={{
            backgroundImage: undefined,
          }}
        >
          <span
            className={`inline-block rounded-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80`}
            style={{ background: 'transparent', border: '1px solid rgba(139,92,246,0.3)' }}
          >
            {project.category}
          </span>
        </span>

        {/* Title */}
        <h3 className="mt-3 text-xl font-extrabold text-white sm:text-2xl leading-tight group-hover:text-violet-200 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-slate-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300/80 transition-colors duration-200 group-hover:border-violet-400/20 group-hover:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA arrow for clickable cards */}
        {project.link && (
          <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-violet-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </article>
  );
}

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

        {/* Filter Tabs */}
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

        {/* Project Grid */}
        <div key={activeTab} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}