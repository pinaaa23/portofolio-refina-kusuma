import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Inner dot — fast & precise
  const dotX = useSpring(mouseX, { damping: 28, stiffness: 500, mass: 0.5 });
  const dotY = useSpring(mouseY, { damping: 28, stiffness: 500, mass: 0.5 });

  // Outer ring — slow/trailing for the elegant lag effect
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 180, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 180, mass: 0.8 });

  useEffect(() => {
    const onMouseMove = (e) => {
      // Offset so the center of each element tracks the cursor
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // ── Hover detection ──
    // Use MutationObserver so dynamically-rendered elements (modals, etc.) are caught too
    const HOVERABLE = "a, button, img, [data-cursor-hover], .paper-card, input, textarea, select, label";

    const attachHoverListeners = () => {
      document.querySelectorAll(HOVERABLE).forEach((el) => {
        if (el.__cursorListenerAttached) return;
        el.__cursorListenerAttached = true;
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* ── Outer ring (trailing) ── */}
      <motion.div
        aria-hidden="true"
        animate={{
          width: isHovering ? 52 : 34,
          height: isHovering ? 52 : 34,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.25, ease: "easeOut" },
          height: { duration: 0.25, ease: "easeOut" },
          opacity: { duration: 0.2 },
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: ringX,
          translateY: ringY,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(231,128,168,0.18) 0%, rgba(231,128,168,0.08) 70%, transparent 100%)",
          border: "1.5px solid rgba(231,128,168,0.55)",
          backdropFilter: "blur(2px)",
          willChange: "transform",
        }}
      />

      {/* ── Inner dot (precise) ── */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2, ease: "easeOut" }, opacity: { duration: 0.2 } }}
        style={{
          translateX: dotX,
          translateY: dotY,
          x: "-50%",
          y: "-50%",
          willChange: "transform",
        }}
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full bg-[#E780A8] pointer-events-none z-[9999] shadow-[0_0_8px_rgba(231,128,168,0.8)]"
      />
    </>
  );
}
