import React, { useState } from 'react';

const SKILLS = ["React", "JavaScript", "Node.js", "Tailwind"];

const EXPERIENCE_ITEMS = [
  {
    period: "2023 - 2024",
    title: "Assistant Lecturer",
    organization: "Advanced Algorithm and Programming Practicum (2024)",
    certificate: {
      label: "Practicum Assistant Certificate",
      detail: "Klik untuk melihat sertifikat yang diperoleh pada kegiatan Advanced Algorithm and Programming Practicum (2024).",
      image: "/certificates/gallery/experience/SKA ASDOS.jpg",
      alt: "Practicum Assistant Certificate",
    },
    points: [
      "Responsible for assisting students in understanding advanced algorithm concepts and guiding them in implementing problem-solving logic using the Java programming language. Demonstrated the use of data structures, algorithm optimization, OOP concepts, and coding practices through hands-on labs and real-case exercises.",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Secretary ",
    organization: "Informatics & Computer Student Activity Unit",
    certificate: {
      label: "Secretary Certificate",
      detail: "Klik untuk melihat sertifikat yang terkait dengan administrasi organisasi dan kegiatan internal.",
      image: "/certificates/gallery/experience/SKA IK.jpg",
      alt: "Secretary Certificate",
    },
    points: [
      "Responsible for managing organizational administration, including drafting official documents, recording meeting minutes, managing correspondence, and organizing schedules for internal activities. Actively maintained internal communication through structured information distribution, coordinated event documentation, and ensured all data and records were neatly archived.",
    ],
  },
  {
    period: "2026 - until now",
    title: "Magang Web Developer",
    organization: "Internship Team Project",
    points: [
      "Developed an internship monitoring system to track student activities and progress in real-time, while building responsive interfaces with React.js, optimizing performance through reusable components, and designing user-friendly dashboards for efficient monitoring and reporting.",
    ],
  },
];

const CERTIFICATE_GALLERY = [
  {
    title: "Certificate of Participation",
    subtitle: "Software Development Webinar (Frontend & Backend for Beginners)",
    image: "/certificates/gallery/certificate/certificate-1.jpg",
  },
  {
    title: "Cloud Camp Class 2025 Certificate",
    subtitle: "Unlocking the Power of Cloud - AWS x Metrodatas",
    image: "/certificates/gallery/certificate/certificate-2.jpg",
  },
  {
    title: "National Webinar Certificate",
    subtitle: "Participation Award - Technology & Digital Innovation",
    image: "/certificates/gallery/certificate/certificate-3.jpg",
  },
  {
    title: "Cyber Security Webinar Certificate",
    subtitle: "Preventing Cyber Attacks with Penetration Testing",
    image: "/certificates/gallery/certificate/certificate-4.jpg",
  },
  {
    title: "Sertifikat Workshop UI/UX",
    subtitle: "Unlock Your Digital Skill: Fundamental UI/UX",
    image: "/certificates/gallery/certificate/certificate-5.jpg",
  },
];

const EXPERIENCE_MENU = [
  { key: "experience", label: "Experience" },
  { key: "certificates", label: "Certificates" },
  { key: "tech-stack", label: "Tech Stack" },
];

export default function Experience() {
  const [openCertificate, setOpenCertificate] = useState(null);
  const [activeExperienceMenu, setActiveExperienceMenu] = useState("experience");

  const handleExperienceMenuClick = (menuKey) => {
    setActiveExperienceMenu(menuKey);
  };

  return (
    <>
      <section id="experience" className="snap-start scroll-mt-14 min-h-screen pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-8">
          <div className="mx-auto w-full max-w-5xl space-y-6 sm:space-y-7">
            <div className="flex justify-center">
            <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {EXPERIENCE_MENU.map((menu) => (
                <button
                  key={menu.key}
                  type="button"
                  onClick={() => handleExperienceMenuClick(menu.key, menu.targetId)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                    activeExperienceMenu === menu.key
                      ? "bg-violet-500 text-white shadow-[0_6px_18px_rgba(139,92,246,0.45)]"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {menu.label}
                </button>
              ))}
            </div>
            </div>

                  <div className="transition-all duration-500 ease-in-out">
          {activeExperienceMenu === "experience" && (
            <div className="rounded-3xl animate-fade-in-up border border-white/10 bg-[#050816]/35 p-4 backdrop-blur-xl sm:p-6">

            <div className="mb-5 sm:mb-6">
              <h2 className="text-2xl font-black text-white sm:text-3xl">Experience &amp; Contributions</h2>
              <div className="mt-2 h-1 w-10 rounded-full bg-violet-500" />
            </div>

            <div id="experience-overview" className="scroll-mt-36 relative pl-9 sm:pl-12">
              <div className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-500 via-indigo-500 to-cyan-400 sm:left-3" />

              <div className="space-y-4 sm:space-y-5">
                {EXPERIENCE_ITEMS.map((item) => (
                  <article
                    key={item.title}
                    className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/85 via-slate-900/78 to-violet-900/30 p-4 shadow-[0_12px_28px_rgba(2,6,23,0.34)] backdrop-blur-xl sm:p-5"
                  >
                    <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border border-white/20 bg-fuchsia-400 shadow-[0_0_0_4px_rgba(8,47,73,0.8)] sm:-left-[2.65rem]" />
                    <p className="text-xs font-semibold text-cyan-300">{item.period}</p>
                    <h3 className="mt-1 text-base font-extrabold uppercase text-white sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-200/85">{item.organization}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-300/90">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {item.certificate ? (
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => setOpenCertificate((current) => (current?.label === item.certificate.label ? null : item.certificate))}
                          className="w-full rounded-2xl border border-violet-300/15 bg-white/6 px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
                                Sertifikat
                              </p>
                              <p className="mt-1 text-sm font-semibold text-white">{item.certificate.label}</p>
                            </div>
                            <span className="text-xs font-medium text-cyan-200">
                              {openCertificate?.label === item.certificate.label ? "Close" : "View Certificate"}
                            </span>
                          </div>
                        </button>

                        {openCertificate?.label === item.certificate.label ? (
                          <div className="mt-2 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 px-3 py-2 text-xs leading-relaxed text-slate-200/90 backdrop-blur-md">
                            {item.certificate.detail}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

          </div>
          )}

          {activeExperienceMenu === "certificates" && (
            <div className="rounded-3xl animate-fade-in-up border border-white/10 bg-[#050816]/35 p-4 backdrop-blur-xl sm:p-6">
            <div className="mb-5 sm:mb-6">
              <h2 className="text-2xl font-black text-white sm:text-3xl">Certificates</h2>
              <div className="mt-2 h-1 w-10 rounded-full bg-violet-500" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATE_GALLERY.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/25"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b border-white/10 bg-black/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-300/80">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          )}

          {activeExperienceMenu === "tech-stack" && (
            <div className="rounded-3xl animate-fade-in-up border border-white/10 bg-[#050816]/35 p-4 backdrop-blur-xl sm:p-6">
            <div className="mb-5 sm:mb-6">
              <h2 className="text-2xl font-black text-white sm:text-3xl">Tech Stack</h2>
              <div className="mt-2 h-1 w-10 rounded-full bg-violet-500" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium text-slate-200/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
{openCertificate ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#070b1d] shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
              <button
                type="button"
                onClick={() => setOpenCertificate(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/15"
              >
                Close
              </button>

              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="flex items-center justify-center bg-black/25 p-4 sm:p-6">
                  <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {openCertificate.image ? (
                      <img
                        src={openCertificate.image}
                        alt={openCertificate.alt}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center px-4 text-center text-sm text-slate-300">
                        Tambahkan path gambar sertifikat di data experience untuk menampilkan preview di sini.
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Certificate</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{openCertificate.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{openCertificate.detail}</p>
                  <p className="mt-5 text-xs leading-relaxed text-slate-400">
                    File gambar yang dipakai mengikuti path yang kamu isi di data experience. Simpan file sertifikat ke folder
                    public/certificates/ lalu isi properti image dengan nama file-nya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
          </>
  );
}