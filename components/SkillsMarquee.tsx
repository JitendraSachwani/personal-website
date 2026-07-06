"use client";

import React, { useMemo } from "react";
import { skills } from "@/data/skills";

interface SkillChipProps {
  skill: (typeof skills)[number];
}

function SkillChip({ skill }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <div className="flex items-center gap-2 mx-1.5 rounded-full border border-border bg-card px-3 py-1.5 transition-all duration-300 group hover:border-primary/50 hover:scale-105 hover:shadow-glow">
      <Icon
        style={{ color: skill.brandColor }}
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
      />

      <span className="font-heading text-[11px] font-semibold tracking-wide text-foreground">
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsMarquee() {
  const marqueeSkills = useMemo(() => [...skills, ...skills], []);

  return (
    <div
      className="relative w-full overflow-hidden py-1.5 select-none"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max animate-marquee py-1 hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {marqueeSkills.map((skill, index) => (
          <SkillChip key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
