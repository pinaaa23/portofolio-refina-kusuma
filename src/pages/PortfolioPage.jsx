import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
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

      // Ambil section yang top-nya sudah melewati 30% viewport ke atas
      // (artinya user sudah masuk ke dalam section tersebut)
      const focusLine = window.innerHeight * 0.3;
      const passedSections = trackedElements
        .filter((el) => el.getBoundingClientRect().top <= focusLine)
        .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top);

      if (passedSections.length > 0) {
        setActiveNav(passedSections[0].id);
        return;
      }

      // Fallback: section yang paling dekat dari atas
      const nearest = trackedElements
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top }))
        .filter((el) => el.top >= 0)
        .sort((a, b) => a.top - b.top)[0];

      if (nearest) {
        setActiveNav(nearest.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Gunakan scroll-based logic yang lebih akurat daripada IntersectionObserver
        // karena IO bisa mis-trigger saat section besar (Experience) overlap dengan section berikutnya
        focusSectionFromViewport();
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.05, 0.1],
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
        <Experience />
      </div>

      <div className="w-full">
        <Project />
      </div>

      <div className="w-full">
        <Contact />
      </div>

    </main>
  );
}
