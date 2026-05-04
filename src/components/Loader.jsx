import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");
  const navigate = useNavigate();

  const motionProgress = useMotionValue(0);
  const springProgress = useSpring(motionProgress, { stiffness: 80, damping: 20 });
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    const unsub = springProgress.on("change", (v) => setDisplayNum(Math.round(v)));
    return unsub;
  }, [springProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          motionProgress.set(100);
          setTimeout(() => setPhase("exit"), 600);
          setTimeout(() => navigate("/refinakusuma"), 1400);
          return 100;
        }
        // 4-zona:
        // 0-55%  → very fast  (~0.4s)
        // 55-70% → slow, kucing tampil penuh + breathing (~2.5s)
        // 70-92% → slow, crossfade kucing→logo (~3s)
        // 92-100%→ fast finish
        let inc;
        if (prev < 55)      inc = Math.random() * 4.0 + 2.2;
        else if (prev < 70) inc = Math.random() * 0.14 + 0.05;
        else if (prev < 92) inc = Math.random() * 0.17 + 0.06;
        else                inc = Math.random() * 3.0 + 1.5;

        const clamped = Math.min(prev + inc, 100);
        motionProgress.set(clamped);
        return clamped;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [navigate, motionProgress]);

  // Kucing muncul dari blur (0-20%)
  const catInitialFade = progress < 20 ? progress / 20 : 1;
  const initialBlur = progress < 20 ? 20 - (progress / 20) * 20 : 0;

  // Transisi kucing ke logo di angka 70% (window 70-92%)
  const catOpacity  = progress < 70 ? 1 : progress > 92 ? 0 : 1 - (progress - 70) / 22;
  const logoOpacity = progress < 70 ? 0 : progress > 92 ? 1 : (progress - 70) / 22;
  
  // Kucing tetap bernapas sampai dia hampir hilang
  const catIsActive = progress < 85;

  // Skala yang terus membesar secara halus dari 0 sampai 100
  const globalScale = 0.7 + (progress / 100) * 0.45;
  
  const isComplete = phase === "complete" || phase === "exit";
  const isExit = phase === "exit";

  const status =
    isComplete      ? "Welcome"         :
    progress < 35   ? "Initializing"    :
    progress < 65   ? "Loading assets"  :
    progress < 88   ? "Almost ready"    :
                      "Finalizing";

  return (
    <motion.div
      className="ld-root"
      animate={isExit ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Grain */}
      <div className="ld-grain" />

      {/* Ambient glow */}
      <div className="ld-glow" />

      {/* ── Top bar ── */}
      <div className="ld-top">
        <motion.span
          className="ld-brand"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          RFNKSM
        </motion.span>
        <motion.span
          className="ld-year"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          2025
        </motion.span>
      </div>

      {/* ── Center logo ── */}
      <div className="ld-center">
        <motion.div
          className="ld-logo-wrap"
          animate={{ scale: globalScale }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          {/* Glow ring - muncul bareng logo */}
          <motion.div
            className="ld-logo-ring"
            animate={{ opacity: logoOpacity * 0.65 }}
            transition={{ duration: 0.8 }}
          />

          {/* Cat - Meleleh dan meledak jadi cahaya */}
          <motion.img
            src="/gallery/loader/cat.png"
            className="ld-img"
            initial={{ opacity: 0, filter: "blur(20px)", brightness: 1 }}
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
                    // Blur jauh lebih ekstrem agar bentuk hancur total
                    filter: progress > 70 ? `blur(${(progress - 70) * 2}px)` : "blur(0px)",
                    // Flash cahaya putih saat transisi
                    brightness: progress > 75 ? 1 + (progress - 75) * 0.5 : 1,
                    scale: 1 - (progress - 70) / 50,
                    y: 0 
                  }
            }
            transition={{ duration: 0.2, ease: "linear" }}
          />

          {/* Logo - Muncul dari dalam ledakan cahaya, tunda agar tidak mengintip */}
          <motion.img
            src="/gallery/loader/logo.png"
            className="ld-img"
            initial={{ opacity: 0, filter: "blur(50px)", brightness: 5 }}
            animate={{
              // LOGO DITUNDA: Baru mulai muncul saat kucing sudah sangat blur (>82%)
              opacity: progress < 82 ? 0 : (progress - 82) / 10,
              filter: progress < 92 ? `blur(${(92 - progress) * 2}px)` : "blur(0px)",
              brightness: progress < 92 ? 2 + (92 - progress) * 0.2 : 1,
              scale: 1,
            }}
            transition={{ 
              duration: 0.3, 
              ease: "linear"
            }}
          />
        </motion.div>
      </div>

      {/* ── Bottom ── */}
      <div className="ld-bottom">
        {/* Counter */}
        <motion.div
          className="ld-counter-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="ld-counter">{String(displayNum).padStart(3, "0")}</span>
          <span className="ld-pct">%</span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="ld-track-outer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="ld-track">
            <div className="ld-fill" style={{ width: `${progress}%` }} />
            <div className="ld-tip"  style={{ left: `${progress}%` }} />
          </div>
        </motion.div>

        {/* Status */}
        <motion.p
          className="ld-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {status}
        </motion.p>
      </div>

      <style>{`
        .ld-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #1a1518;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 2.5rem 3rem 3rem;
          overflow: hidden;
        }

        /* Grain */
        .ld-grain {
          position: absolute;
          inset: -50%;
          width: 200%; height: 200%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          animation: ldGrain 0.45s steps(1) infinite;
        }
        @keyframes ldGrain {
          0%   { transform: translate(0,0); }
          25%  { transform: translate(-5px, 3px); }
          50%  { transform: translate(3px,-5px); }
          75%  { transform: translate(-3px, 5px); }
          100% { transform: translate(5px,-3px); }
        }

        /* Ambient glow */
        .ld-glow {
          position: absolute;
          width: 520px; height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,131,141,0.13) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          z-index: 0;
          animation: ldGlow 3.2s ease-in-out infinite;
        }
        @keyframes ldGlow {
          0%,100% { opacity: 0.7; transform: translate(-50%,-50%) scale(1); }
          50%     { opacity: 1;   transform: translate(-50%,-50%) scale(1.09); }
        }

        /* Top */
        .ld-top {
          position: relative; z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ld-brand {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.45em;
          color: #b5838d;
          text-transform: uppercase;
        }
        .ld-year {
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          color: rgba(229,152,155,0.38);
        }

        /* Center */
        .ld-center {
          position: relative; z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ld-logo-wrap {
          position: relative;
          width: 190px; height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ld-logo-ring {
          position: absolute;
          inset: -28px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,131,141,0.28) 0%, transparent 65%);
          pointer-events: none;
        }
        .ld-img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: contain;
        }

        /* Bottom */
        .ld-bottom {
          position: relative; z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .ld-counter-row {
          display: flex;
          align-items: flex-end;
          gap: 0.05rem;
          line-height: 1;
        }
        .ld-counter {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.8rem, 9vw, 6.5rem);
          font-weight: 200;
          color: #e5989b;
          letter-spacing: -0.03em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .ld-pct {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 200;
          color: rgba(229,152,155,0.45);
          padding-bottom: 0.65rem;
        }
        .ld-track-outer { width: 100%; }
        .ld-track {
          position: relative;
          width: 100%; height: 1px;
          background: rgba(181,131,141,0.15);
          overflow: visible;
        }
        .ld-fill {
          position: absolute;
          top: 0; left: 0; height: 100%;
          background: linear-gradient(90deg, rgba(181,131,141,0.35), #e5989b);
          transition: width 0.06s linear;
        }
        .ld-tip {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #e5989b;
          box-shadow: 0 0 12px 5px rgba(229,152,155,0.65);
          transition: left 0.06s linear;
        }
        .ld-status {
          font-family: 'Outfit', sans-serif;
          font-size: 0.62rem;
          font-weight: 400;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(181,131,141,0.48);
        }
      `}</style>
    </motion.div>
  );
}
