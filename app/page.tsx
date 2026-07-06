"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-x-hidden font-body">
      <div className="flex flex-1 flex-col items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            type: "spring",
            stiffness: 100,
          }}
          className="w-full"
        >
          <ProfileCard />
        </motion.div>
      </div>

      <footer className="w-full border-t border-border/40 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-center text-xs text-muted-foreground select-none">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Jitendra Sachwani. Built with Clean Architecture.
        </p>
      </footer>
    </main>
  );
}
