import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Sidebar from "../components/Sidebar";

import Contact from "../components/Contact";


export default function PortfolioPage() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  useEffect(() => {
    const trackedIds = ["home", "about", "experience", "project", "contact"];
    const trackedElements = trackedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleTopState = () => {
      if (window.scrollY < 100) {
        setActiveNav("home");
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
          handleTopState();
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -25% 0px",
        threshold: [0.1, 0.4, 0.7],
      }
    );

    trackedElements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleTopState, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopState);
    };
  }, []);

  return (
    <main
      data-theme={isLightMode ? "light" : "dark"}
      className={`relative min-h-screen snap-y snap-proximity scroll-smooth [scroll-padding-top:3.5rem] transition-colors duration-500 ${
        isLightMode ? "bg-slate-100 text-slate-900" : "bg-[#050816] text-white"
      }`}
    >
      <div
        className={`pointer-events-none fixed inset-0 transition-opacity duration-500 ${
          isLightMode
            ? "bg-[radial-gradient(circle_at_10%_20%,rgba(125,211,252,0.4),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(103,232,249,0.24),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(167,243,208,0.26),transparent_34%),linear-gradient(135deg,#f7fbff_0%,#ecf6ff_45%,#e3f2ff_100%)]"
            : "bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.38),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#04060f_0%,#070b1d_45%,#020308_100%)]"
        }`}
      />
      <div
        className={`pointer-events-none fixed inset-0 transition-opacity duration-500 ${
          isLightMode
            ? "opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
            : "opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]"
        }`}
      />

      <Sidebar 
        isLightMode={isLightMode} 
        setIsLightMode={setIsLightMode} 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-3 pt-12 sm:px-6 sm:pb-4 sm:pt-14 lg:px-10 lg:pb-5 lg:pt-14">

        <Home />
        <About />
        <Experience />
        <Project />
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
