import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";

export default function PortfolioPage() {
  const [activeNav, setActiveNav] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const trackedIds = ["home", "about", "experience", "project", "contact"];
    const trackedElements = trackedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const focusSectionFromViewport = () => {
      if (window.scrollY < 80) {
        setActiveNav("home");
        return;
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (nearBottom) {
        setActiveNav("contact");
        return;
      }

      const focusLine = window.innerHeight * 0.42;
      const nearest = trackedElements
        .map((el) => ({ id: el.id, distance: Math.abs(el.getBoundingClientRect().top - focusLine) }))
        .sort((a, b) => a.distance - b.distance)[0];

      if (nearest) {
        setActiveNav(nearest.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveNav(visible[0].target.id);
        } else {
          focusSectionFromViewport();
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    trackedElements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", focusSectionFromViewport, { passive: true });
    window.addEventListener("resize", focusSectionFromViewport);
    focusSectionFromViewport();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", focusSectionFromViewport);
      window.removeEventListener("resize", focusSectionFromViewport);
    };
  }, []);

  return (
    <main
      data-theme="light"
      className="relative min-h-screen transition-colors duration-500 bg-[#F5EFE6] text-[#2c2b28]"
    >

      <Sidebar 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
      />

      <div className="w-full">
        <Home />
      </div>

      <div className="w-full">
        <About />
      </div>

      <div className="w-full">
        <Skills />
      </div>

      <div className="w-full">
        <Experience />
      </div>

      <div className="w-full">
        <Project />
      </div>

      <div className="w-full">
        <Contact />
      </div>

      <style>{`
        .motion-stage {
          animation: stage-sway 8s ease-in-out infinite;
        }

        .motion-robot {
          animation: robot-bob 6.4s ease-in-out infinite, robot-tilt 6.4s ease-in-out infinite;
        }

        .motion-panel {
          animation: panel-float 6.4s ease-in-out infinite;
        }

        .motion-hologram .ring {
          position: absolute;
          inset: 0;
          border: 1.5px solid rgba(45, 212, 191, 0.45);
          border-radius: 999px;
          animation: hologram-spin 6.4s linear infinite;
        }

        .motion-hologram .ring-2 {
          transform: rotateX(65deg);
          animation-duration: 6.4s;
        }

        .motion-hologram .ring-3 {
          transform: rotateY(70deg);
          animation-duration: 6.4s;
          animation-direction: reverse;
        }

        .motion-hologram .core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          background: #99f6e4;
          box-shadow: 0 0 14px rgba(45, 212, 191, 0.8);
        }

        .visor-sweep {
          animation: visor-sweep 6.4s ease-in-out infinite;
        }

        .about-title {
          animation: about-title-glow 6.4s ease-in-out infinite;
        }

        .about-subtitle {
          animation: about-sub-float 6.4s ease-in-out infinite;
        }

        .about-copy {
          animation: about-copy-float 9s ease-in-out infinite;
        }

        .about-job-card {
          animation: about-card-idle 7.4s ease-in-out infinite;
          animation-delay: var(--card-delay, 0s);
        }

        .about-avatar-shell {
          animation: about-avatar-breathe 7s ease-in-out infinite;
        }

        .about-avatar-ring {
          animation: about-ring-spin 22s linear infinite;
        }

        .about-stat-content {
          animation: about-stat-idle 6.8s ease-in-out infinite;
          animation-delay: var(--stat-delay, 0s);
        }

        @keyframes stage-sway {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-0.3deg);
          }
          50% {
            transform: translate3d(0, -6px, 0) rotate(0.35deg);
          }
        }

        @keyframes robot-bob {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes robot-tilt {
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1.4deg);
          }
        }

        @keyframes hologram-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes panel-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes visor-sweep {
          0%,
          100% {
            transform: translateX(-34px);
            opacity: 0;
          }
          12% {
            opacity: 0.75;
          }
          42% {
            transform: translateX(34px);
            opacity: 0;
          }
        }

        @keyframes about-title-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.22);
          }
          50% {
            text-shadow: 0 0 20px rgba(45, 212, 191, 0.2);
          }
        }

        @keyframes about-sub-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes about-copy-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes about-avatar-breathe {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.01);
          }
        }

        @keyframes about-ring-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes about-card-idle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes about-stat-idle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-stage,
          .motion-robot,
          .motion-panel,
          .motion-hologram .ring,
          .visor-sweep,
          .about-title,
          .about-subtitle,
          .about-copy,
          .about-job-card,
          .about-avatar-shell,
          .about-avatar-ring,
          .about-stat-content {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
