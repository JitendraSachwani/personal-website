"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Background() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; size: number; x: number; y: number; duration: number }>
  >([]);

  useEffect(() => {
    setMounted(true);
    // Generate particles client-side to prevent hydration mismatch
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: Math.random() * 12 + 10, // 10s to 22s
    }));
    setParticles(generated);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
      {/* Background base transition color */}
      <div className="absolute inset-0 bg-background transition-colors duration-700" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.035] transition-opacity duration-500">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
      </div>

      {/* Wave/Contour lines (highly premium topographic look) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.04] text-foreground transition-all duration-500"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 150 C 300 250, 600 50, 1000 200 C 1200 250, 1500 150, 1600 170"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M-100 180 C 320 270, 580 80, 1020 220 C 1220 270, 1480 170, 1600 190"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-100 210 C 340 290, 560 110, 1040 240 C 1240 290, 1460 190, 1600 210"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M-100 450 C 250 550, 650 350, 950 490 C 1150 550, 1450 450, 1600 470"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-100 480 C 270 570, 630 380, 970 510 C 1170 570, 1430 480, 1600 500"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="5 5"
        />
        <path
          d="M-100 700 C 400 800, 700 600, 1100 750 C 1300 800, 1500 700, 1600 720"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      {/* Floating dot grids (Apple/Linear signature aesthetic) */}
      <div className="absolute top-12 left-12 opacity-[0.15] dark:opacity-[0.08] text-foreground transition-opacity">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <circle cx="5" cy="5" r="1.5" />
          <circle cx="20" cy="5" r="1.5" />
          <circle cx="35" cy="5" r="1.5" />
          <circle cx="50" cy="5" r="1.5" />
          <circle cx="5" cy="20" r="1.5" />
          <circle cx="20" cy="20" r="1.5" />
          <circle cx="35" cy="20" r="1.5" />
          <circle cx="50" cy="20" r="1.5" />
          <circle cx="5" cy="35" r="1.5" />
          <circle cx="20" cy="35" r="1.5" />
          <circle cx="35" cy="35" r="1.5" />
          <circle cx="50" cy="35" r="1.5" />
          <circle cx="5" cy="50" r="1.5" />
          <circle cx="20" cy="50" r="1.5" />
          <circle cx="35" cy="50" r="1.5" />
          <circle cx="50" cy="50" r="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-12 opacity-[0.15] dark:opacity-[0.08] text-foreground transition-opacity">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <circle cx="5" cy="5" r="1.5" />
          <circle cx="20" cy="5" r="1.5" />
          <circle cx="35" cy="5" r="1.5" />
          <circle cx="50" cy="5" r="1.5" />
          <circle cx="5" cy="20" r="1.5" />
          <circle cx="20" cy="20" r="1.5" />
          <circle cx="35" cy="20" r="1.5" />
          <circle cx="50" cy="20" r="1.5" />
          <circle cx="5" cy="35" r="1.5" />
          <circle cx="20" cy="35" r="1.5" />
          <circle cx="35" cy="35" r="1.5" />
          <circle cx="50" cy="35" r="1.5" />
          <circle cx="5" cy="50" r="1.5" />
          <circle cx="20" cy="50" r="1.5" />
          <circle cx="35" cy="50" r="1.5" />
          <circle cx="50" cy="50" r="1.5" />
        </svg>
      </div>

      {/* Ambient soft glow blobs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-accent/8 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 20, -40, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[45%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-[100px]"
      />

      {/* Floating tiny particles/red dots (all subtle) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/25 dark:bg-primary/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.08, 0.45, 0.08],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
