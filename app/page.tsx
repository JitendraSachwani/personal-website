"use client";

import React from "react";
import { motion } from "framer-motion";
import { Background } from "@/components/Background";
import { ProfileCard } from "@/components/ProfileCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col justify-between overflow-x-hidden font-body">
      {/* Hero Section Container */}
      <div className="flex flex-col items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 100 }}
          className="w-full"
        >
          <ProfileCard />
        </motion.div>
      </div>

      <footer className="py-2 border-t border-border/40 text-center text-xs text-muted-foreground w-full select-none">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Jitendra Sachwani. Built with Clean Architecture.
        </p>
      </footer>
    </main>
  );
}
