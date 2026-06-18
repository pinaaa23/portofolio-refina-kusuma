import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ProjectCursor({ 
  outerClassName = "border-blue-500/40 bg-blue-500/10",
  innerClassName = "bg-blue-600" 
}) {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, { damping: 28, stiffness: 200, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 28, stiffness: 200, mass: 0.5 });
  const tx = useSpring(mouseX, { damping: 40, stiffness: 140, mass: 0.8 });
  const ty = useSpring(mouseY, { damping: 40, stiffness: 140, mass: 0.8 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border backdrop-blur-[2px] ${outerClassName}`}
        style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full ${innerClassName}`}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
