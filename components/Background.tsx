"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
      {/* Base */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          backgroundColor: "var(--background)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top Left Glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,77,109,.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Right Glow */}
      <motion.div
        className="absolute -bottom-48 -right-48 w-[32rem] h-[32rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,107,129,.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Accent */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,77,109,.04) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
