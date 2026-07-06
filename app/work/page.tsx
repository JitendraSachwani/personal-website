"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Briefcase, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

interface Project {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Full Stack";
  description: string;
  additionalTags: string[];
  toolTags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "personal-portfolio",
    additionalTags: ["UI/UX", "Performance"],
    image: "/personal-portfolio.png",
    category: "Frontend",
    name: "Personal Portfolio",
    description:
      "A premium personal portfolio built with focus on design, performance, and user experience. Features vCard Download, dark mode, fluid transitions, 3D card tilt gestures and a responsive layout.",
    toolTags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: `${profile.website}`,
  },
  {
    id: "lhoopa",
    additionalTags: ["Real Estate", "AI", "CMS"],
    image: "/lhoopa.png",
    name: "PropTech Platform (Lhoopa)",
    category: "Full Stack",
    description:
      "A proptech platform that tackles the affordable housing backlog in emerging markets by decentralizing real estate. Features AI-powered chatbot, decentralized renovation using their own CMS, and localized selling via GCash & Stripe integration.",
    toolTags: ["AI Chatbot", "React", "Node.js", "MongoDB", "AWS", "GCash", "Stripe"],
    link: "https://www.lhoopa.com",
  },
  {
    id: "investment-tracker",
    additionalTags: ["Realtime", "Data Viz"],
    image: "/analytics.jpg",
    name: "Investment Tracker",
    category: "Full Stack",
    description:
      "A real-time investment tracking dashboard that visualizes all asset classes and provides insights into performance and trends.",
    toolTags: ["React", "Python", "MongoDB", "WebSockets", "Kafka", "Kite API"],
    link: "https://github.com/JitendraSachwani/investment-tracker/tree/master/frontend",
  },
  {
    id: "architecture-portfolio",
    additionalTags: ["UI/UX"],
    image: "/arch-portfolio.png",
    category: "Frontend",
    name: "Architectural Portfolio (Visionary Architects)",
    description:
      "A modern portfolio website for an architectural firm, showcasing their projects with a focus on visual storytelling and responsive design.",
    toolTags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://visionary-architects.vercel.app/",
  },
  {
    id: "homelab-infra",
    additionalTags: ["DevOps", "AWS"],
    image: "/homelab-infra.png",
    name: "Homelab Infrastructure",
    category: "Backend",
    description:
      "A fully automated homelab infrastructure setup using Terraform and AWS, with monitoring and alerting via Grafana and Prometheus.",
    toolTags: ["Terraform", "Ansible", "Proxmox", "OCI / AWS", "Node.js", "Grafana"],
    link: "https://github.com/JitendraSachwani/homelab-infra",
  },
  {
    id: "browser-automation-tool",
    additionalTags: ["Automation", "QA"],
    image: "/browser-automation-tool.png",
    name: "Browser Automation Tool",
    category: "Backend",
    description:
      "A scalable task scheduling and execution server using Puppeteer and Playwright, optimized for scraper pipelines and visual testing.",
    toolTags: ["Ruby", "Rails", "Browserstack", "Playwright", "Docker", "Redis"],
    link: "https://github.com/JitendraSachwani/browser-automation-tool",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<"All" | "Frontend" | "Backend" | "Full Stack">("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <main className="relative min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Work Page Header */}
      <section className="my-8">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card/80 glassmorphism text-foreground hover:text-primary hover:scale-105 transition-all duration-300 shadow-sm"
            aria-label="Back to home"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground">
            Curated Projects
          </h1>
        </div>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed font-body">
          A curated collection of websites, applications and platforms I've designed and built, from
          polished marketing sites to scalable full-stack systems.
        </p>
      </section>

      {/* Interactive Category Filters */}
      <section className="mb-10 flex flex-wrap gap-2.5 items-center">
        {(["All", "Frontend", "Backend", "Full Stack"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4.5 py-1.5 text-sm font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
              filter === cat
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105"
                : "bg-card/70 border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="group rounded-premium border border-border bg-card/65 dark:bg-card/35 glassmorphism shadow-premium-light dark:shadow-premium-dark hover:border-primary/30 dark:hover:border-primary/20 hover:shadow-glow overflow-hidden transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Floating additional tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 pointer-events-none">
                  {project.additionalTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-foreground/90 text-background backdrop-blur-sm shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-transparent bg-transparent hover:bg-foreground/5 hover:border-border text-muted-foreground hover:text-foreground transition-all duration-300"
                      aria-label={`View code for ${project.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-foreground mt-2 leading-snug group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-body">
                    {project.description}
                  </p>
                </div>

                {/* Badges/Tools Tag footer */}
                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border/60">
                  {project.toolTags.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-muted-foreground border border-border/80 font-medium font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <a
          href="https://github.com/JitendraSachwani"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-border bg-card hover:bg-foreground/5 text-foreground hover:text-primary hover:border-primary/30 hover:shadow-glow text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
        >
          <GithubIcon className="w-5 h-5" />
          <span>View More on GitHub</span>
        </a>
      </motion.div>
    </main>
  );
}
