import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ScrambleText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      if (frame >= 6) { setDisplay(text); clearInterval(interval); return; }
      setDisplay(text.split("").map(c => Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : c).join(""));
      frame++;
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{display}</span>;
};

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("entering"); // entering -> loading -> closing -> exiting
  const navigate = useNavigate();

  const motionProgress = useMotionValue(0);
  const springProgress = useSpring(motionProgress, { stiffness: 80, damping: 20 });
  const [displayNum, setDisplayNum] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", handleMouseMove);
    // Buka jendela pertama kali (Reveal Loader)
    const timer = setTimeout(() => setPhase("loading"), 1000); 
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const unsub = springProgress.on("change", (v) => setDisplayNum(Math.round(v)));
    return unsub;
  }, [springProgress]);

  useEffect(() => {
    // JANGAN JALAN kalau belum selesai animasi masuk (entering)
    // Ini kuncinya agar loading mulai dari 0 pas jendela sudah terbuka
    if (phase !== "loading") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          motionProgress.set(100);
          setTimeout(() => setPhase("closing"), 600);
          setTimeout(() => setPhase("exiting"), 1800);
          setTimeout(() => navigate("/refinakusuma"), 3000);
          return 100;
        }
        
        let inc;
        if (prev < 55)      inc = Math.random() * 2.2 + 0.8; // Pelan di awal agar 0% terlihat
        else if (prev < 70) inc = Math.random() * 0.12 + 0.05;
        else if (prev < 92) inc = Math.random() * 0.15 + 0.05;
        else                inc = Math.random() * 3.0 + 1.5;

        const clamped = Math.min(prev + inc, 100);
        motionProgress.set(clamped);
        return clamped;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [navigate, motionProgress, phase]);

  const catOpacity  = progress < 70 ? 1 : progress > 92 ? 0 : 1 - (progress - 70) / 22;
  const logoOpacity = progress < 70 ? 0 : progress > 92 ? 1 : (progress - 70) / 22;
  const catIsActive = progress < 85;
  const catInitialFade = progress < 20 ? progress / 20 : 1;
  const initialBlur = progress < 20 ? 20 - (progress / 20) * 20 : 0;
  const globalScale = 0.75 + (progress / 100) * 0.4;
  
  const curtainsClosed = phase === "entering" || phase === "closing";

  const status = useMemo(() => {
    if (progress >= 100) return "Welcome";
    if (progress < 35)   return "Initializing System";
    if (progress < 65)   return "Syncing Assets";
    if (progress < 88)   return "Finalizing Experience";
    return "Ready to Launch";
  }, [progress]);

  return (
    <>
      {/* ── Double Window Curtains ── */}
      <div className="ld-curtain-wrap">
        <motion.div 
          className="ld-curtain-top"
          animate={curtainsClosed ? { y: 0 } : { y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div 
          className="ld-curtain-bottom"
          animate={curtainsClosed ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>

      <motion.div
        className="ld-root"
        animate={{ opacity: curtainsClosed ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="ld-grid">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} className="ld-grid-line" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.8 + i * 0.1 }} />
          ))}
        </div>

        <motion.div className="ld-grain" initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ delay: 1 }} />
        <motion.div className="ld-glow" style={{ x: springX, y: springY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />

        <div className="ld-top">
          <div className="ld-brand-wrap">
            {"RFNKSM".split("").map((l, i) => (
              <motion.span key={i} className="ld-brand" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.08 }}>{l}</motion.span>
            ))}
          </div>
          <motion.span className="ld-year" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1 }}>© 2025</motion.span>
        </div>

        <div className="ld-center">
          <motion.div className="ld-logo-wrap" animate={{ scale: globalScale }} transition={{ duration: 0.2, ease: "linear" }}>
            <motion.div className="ld-logo-ring" animate={{ opacity: logoOpacity * 0.5, scale: [0.95, 1.05, 0.95] }} transition={{ repeat: Infinity, duration: 4 }} />
            
            <motion.img
              src="/gallery/loader/cat.png"
              className="ld-img"
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={
                catIsActive
                  ? { 
                      opacity: catOpacity * catInitialFade, 
                      filter: `blur(${initialBlur}px)`, 
                      scale: [1, 1.03, 1], 
                      y: [0, -5, 0],
                      brightness: 1
                    }
                  : { 
                      opacity: catOpacity, 
                      filter: progress > 70 ? `blur(${(progress - 70) * 2}px)` : "blur(0px)",
                      brightness: progress > 75 ? 1 + (progress - 75) * 0.5 : 1,
                      scale: 1 - (progress - 70) / 50,
                    }
              }
              transition={{ duration: 0.2 }}
            />

            <motion.img
              src="/gallery/loader/logo.png"
              className="ld-img"
              initial={{ opacity: 0, filter: "blur(50px)", brightness: 5 }}
              animate={{
                opacity: progress < 82 ? 0 : (progress - 82) / 10,
                filter: progress < 92 ? `blur(${(92 - progress) * 2}px)` : "blur(0px)",
                brightness: progress < 92 ? 2 + (92 - progress) * 0.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        <div className="ld-bottom">
          <div className="ld-counter-wrap">
            <span className="ld-counter">{String(displayNum).padStart(3, "0")}</span>
            <span className="ld-pct">%</span>
          </div>
          <div className="ld-track-wrap">
            <div className="ld-track">
              <div className="ld-fill" style={{ width: `${progress}%` }} />
              <div className="ld-tip" style={{ left: `${progress}%` }} />
            </div>
          </div>
          <div className="ld-status-wrap">
            <div className="ld-status"><ScrambleText text={status} /></div>
            <div className="ld-divider" />
            <div className="ld-progress-label">CORE_V2.0</div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .ld-root {
          position: fixed; inset: 0; z-index: 9998; 
          background: #1a1518; 
          display: flex; flex-direction: column; align-items: center; justify-content: space-between; 
          padding: 3.5rem; overflow: hidden; pointer-events: none;
        }
        .ld-curtain-wrap { position: fixed; inset: 0; z-index: 9999; display: flex; flex-direction: column; pointer-events: none; }
        .ld-curtain-top, .ld-curtain-bottom { flex: 1; width: 100%; background: #1a1518; will-change: transform; }
        .ld-grid { position: absolute; inset: 0; display: flex; justify-content: space-between; padding: 0 12%; pointer-events: none; }
        .ld-grid-line { width: 1px; height: 100%; background: rgba(181, 131, 141, 0.05); transform-origin: top; }
        .ld-grain { position: absolute; inset: -50%; width: 200%; height: 200%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); opacity: 0.04; pointer-events: none; z-index: 1; animation: noise 0.5s steps(2) infinite; }
        @keyframes noise { 0% { transform: translate(0,0); } 50% { transform: translate(-5%, -5%); } }
        .ld-glow { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(229, 152, 155, 0.35) 0%, rgba(181, 131, 141, 0.15) 40%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); filter: blur(30px); z-index: 0; mix-blend-mode: plus-lighter; }
        .ld-top { width: 100%; display: flex; justify-content: space-between; position: relative; z-index: 2; }
        .ld-brand-wrap { display: flex; gap: 4px; }
        .ld-brand { font-family: 'Outfit', sans-serif; font-size: 0.75rem; font-weight: 500; color: #b5838d; letter-spacing: 0.4em; }
        .ld-year { font-family: 'Outfit', sans-serif; font-size: 0.7rem; color: #e5989b; letter-spacing: 0.1em; }
        .ld-center { flex: 1; display: flex; align-items: center; justify-content: center; position: relative; z-index: 2; }
        .ld-logo-wrap { position: relative; width: 180px; height: 180px; }
        .ld-logo-ring { position: absolute; inset: -25px; border: 1px solid rgba(181, 131, 141, 0.12); border-radius: 50%; }
        .ld-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
        .ld-bottom { width: 100%; display: flex; flex-direction: column; gap: 1.2rem; position: relative; z-index: 2; }
        .ld-counter-wrap { display: flex; align-items: flex-end; line-height: 0.7; }
        .ld-counter { font-family: 'Outfit', sans-serif; font-size: clamp(4rem, 12vw, 8.5rem); font-weight: 200; color: #e5989b; letter-spacing: -0.05em; font-variant-numeric: tabular-nums; }
        .ld-pct { font-family: 'Outfit', sans-serif; font-size: 1.5rem; color: rgba(229, 152, 155, 0.3); margin-bottom: 1.2rem; }
        .ld-track-wrap { width: 100%; }
        .ld-track { position: relative; width: 100%; height: 1px; background: rgba(181, 131, 141, 0.1); }
        .ld-fill { position: absolute; height: 100%; background: #e5989b; transition: width 0.1s linear; }
        .ld-tip { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 5px; height: 5px; background: #e5989b; border-radius: 50%; box-shadow: 0 0 15px #e5989b; transition: left 0.1s linear; }
        .ld-status-wrap { display: flex; align-items: center; gap: 1rem; }
        .ld-status { font-family: 'Outfit', sans-serif; font-size: 0.62rem; color: #b5838d; text-transform: uppercase; letter-spacing: 0.35em; min-width: 190px; }
        .ld-divider { flex: 1; height: 1px; background: rgba(181, 131, 141, 0.08); }
        .ld-progress-label { font-family: 'Outfit', sans-serif; font-size: 0.6rem; color: rgba(181, 131, 141, 0.3); letter-spacing: 0.2em; }
      `}</style>
    </>
  );
}
