import React from "react";
import { motion } from "framer-motion";

const cubicBezier = [0.22, 1, 0.36, 1];

export default function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: cubicBezier, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
