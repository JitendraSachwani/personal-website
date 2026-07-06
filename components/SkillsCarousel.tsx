"use client";

import React, { useMemo } from "react";
import { skills } from "@/data/skills";

interface SkillsCarouselProps {
  compact?: boolean;
}

interface SkillChipProps {
  skill: (typeof skills)[number];
  compact?: boolean;
  accent?: "primary" | "accent";
}

function SkillChip({ skill, compact = false, accent = "primary" }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <div
      className={`
        flex items-center rounded-full border border-border
        bg-card/60 glassmorphism
        transition-all duration-300 group
        hover:scale-105 hover:shadow-glow
        ${accent === "primary" ? "hover:border-primary/50" : "hover:border-accent/50"}
        ${compact ? "gap-2 px-3 py-1.5 mx-1.5" : "gap-3 px-6 py-3 mx-3"}
      `}
    >
      <Icon
        style={{ color: skill.brandColor }}
        className={`
          transition-transform duration-300
          group-hover:rotate-12
          group-hover:scale-110
          ${compact ? "w-3.5 h-3.5" : "w-5 h-5"}
        `}
      />

      <span
        className={`
          font-heading font-semibold tracking-wide text-foreground
          ${compact ? "text-[11px]" : "text-sm"}
        `}
      >
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsCarousel({ compact = false }: SkillsCarouselProps) {
  const duplicatedSkillsRow1 = useMemo(() => [...skills, ...skills], []);

  const duplicatedSkillsRow2 = useMemo(
    () => [...skills].reverse().concat([...skills].reverse()),
    [],
  );

  const edgeWidth = compact ? "w-8" : "w-16 md:w-32";

  return (
    <div className={`relative w-full overflow-hidden select-none ${compact ? "py-1.5" : "py-4"}`}>
      {/* Edge fade */}
      <div
        className={`absolute left-0 top-0 bottom-0 ${edgeWidth} z-10 pointer-events-none`}
        style={{
          background: "linear-gradient(to right, var(--background), transparent)",
        }}
      />

      <div
        className={`absolute right-0 top-0 bottom-0 ${edgeWidth} z-10 pointer-events-none`}
        style={{
          background: "linear-gradient(to left, var(--background), transparent)",
        }}
      />

      {/* First Row */}
      <div
        className={`flex w-max animate-marquee hover:[animation-play-state:paused] ${
          compact ? "py-1" : "py-2"
        }`}
        aria-hidden="true"
      >
        {duplicatedSkillsRow1.map((skill, index) => (
          <SkillChip key={`${skill.name}-${index}`} skill={skill} compact={compact} />
        ))}
      </div>

      {!compact && (
        <div
          className="flex w-max animate-marquee-reverse mt-4 py-2 hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {duplicatedSkillsRow2.map((skill, index) => (
            <SkillChip key={`${skill.name}-reverse-${index}`} skill={skill} accent="accent" />
          ))}
        </div>
      )}
    </div>
  );
}
