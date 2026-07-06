'use client';

import React from 'react';
import { 
  Code2, Cpu, Database, Cloud, Terminal, Layers, Globe, Shield, 
  Workflow, CheckCircle, Atom, GitBranch
} from 'lucide-react';

const skills = [
  { name: 'React', icon: Atom, color: '#61dafb' },
  { name: 'Next.js', icon: Globe, color: '#000000' },
  { name: 'TypeScript', icon: Code2, color: '#3178c6' },
  { name: 'Node.js', icon: Cpu, color: '#339933' },
  { name: 'Express', icon: Terminal, color: '#a9a9a9' },
  { name: 'NestJS', icon: Layers, color: '#e0234e' },
  { name: 'MongoDB', icon: Database, color: '#47a248' },
  { name: 'Redis', icon: Cpu, color: '#dc382d' },
  { name: 'PostgreSQL', icon: Database, color: '#4169e1' },
  { name: 'Docker', icon: Shield, color: '#2496ed' },
  { name: 'Kubernetes', icon: Cloud, color: '#326ce5' },
  { name: 'AWS', icon: Cloud, color: '#ff9900' },
  { name: 'Terraform', icon: Workflow, color: '#7b42bc' },
  { name: 'Java', icon: Code2, color: '#f8981d' },
  { name: 'Spring Boot', icon: Layers, color: '#6db33f' },
  { name: 'Python', icon: Code2, color: '#3776ab' },
  { name: 'TailwindCSS', icon: Atom, color: '#38bdf8' },
  { name: 'Playwright', icon: CheckCircle, color: '#2ead33' },
  { name: 'Selenium', icon: CheckCircle, color: '#43b02a' },
  { name: 'GitHub Actions', icon: GitBranch, color: '#2088ff' }
];

interface SkillsCarouselProps {
  compact?: boolean;
}

export function SkillsCarousel({ compact = false }: SkillsCarouselProps) {
  // Duplicate the list of skills to create seamless loop
  const duplicatedSkillsRow1 = [...skills, ...skills];
  const duplicatedSkillsRow2 = [...skills.slice().reverse(), ...skills.slice().reverse()];

  if (compact) {
    return (
      <div className="relative w-full overflow-hidden py-1.5 select-none">
        {/* Gradients on the edge to make it look faded/seamless */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-light-bg via-light-bg/80 to-transparent dark:from-dark-bg dark:via-dark-bg/80 z-10 pointer-events-none transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-light-bg via-light-bg/80 to-transparent dark:from-dark-bg dark:via-dark-bg/80 z-10 pointer-events-none transition-colors duration-500" />

        {/* Compact Single Row Marquee */}
        <div className="flex w-max animate-marquee py-1 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedSkillsRow1.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-compact-${index}`}
                className="flex items-center gap-2 px-3 py-1.5 mx-1.5 rounded-full border border-border bg-card/60 dark:bg-card/30 glassmorphism hover:border-primary/50 hover:scale-105 hover:shadow-glow transition-all duration-300 group"
              >
                <Icon 
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <span className="text-[11px] font-semibold font-heading tracking-wide text-foreground">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Gradients on the edge to make it look faded/seamless */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-light-bg via-light-bg/80 to-transparent dark:from-dark-bg dark:via-dark-bg/80 z-10 pointer-events-none transition-colors duration-500" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-light-bg via-light-bg/80 to-transparent dark:from-dark-bg dark:via-dark-bg/80 z-10 pointer-events-none transition-colors duration-500" />

      {/* Row 1 (Forward marquee) */}
      <div className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {duplicatedSkillsRow1.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-row1-${index}`}
              className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full border border-border bg-card/60 dark:bg-card/30 glassmorphism hover:border-primary/50 hover:scale-105 hover:shadow-glow transition-all duration-300 group"
            >
              <Icon 
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <span className="text-sm font-semibold font-heading tracking-wide text-foreground">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Row 2 (Reverse marquee) */}
      <div className="flex w-max animate-marquee-reverse mt-4 py-2 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {duplicatedSkillsRow2.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-row2-${index}`}
              className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full border border-border bg-card/60 dark:bg-card/30 glassmorphism hover:border-accent/50 hover:scale-105 hover:shadow-glow transition-all duration-300 group"
            >
              <Icon 
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <span className="text-sm font-semibold font-heading tracking-wide text-foreground">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
