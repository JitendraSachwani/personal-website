"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Briefcase, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

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
    id: "analytics",
    name: "Analytics Dashboard",
    category: "Full Stack",
    description:
      "A real-time analytics dashboard for monitoring user behavior, acquisition funnels, and performance metrics. Features high-performance visualizations.",
    additionalTags: ["Realtime", "Data Viz"],
    toolTags: ["Next.js", "Tailwind CSS", "MongoDB", "Recharts"],
    image: "/analytics.jpg",
    link: "https://github.com/JitendraSachwani/analytics-dashboard",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce platform with a headless architecture, seamless shopping experience, multi-tenant inventory, and secure Stripe checkout.",
    additionalTags: ["Payments", "Headless"],
    toolTags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/ecommerce.jpg",
    link: "https://github.com/JitendraSachwani/ecommerce-platform",
  },
  {
    id: "tasks",
    name: "Task Management App",
    category: "Frontend",
    description:
      "A productivity app to manage tasks, collaborate with teams, track sprint progress with drag-and-drop boards, and generate burndown charts.",
    additionalTags: ["Productivity", "SaaS"],
    toolTags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/tasks.jpg",
    link: "https://github.com/JitendraSachwani/task-manager",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    category: "Frontend",
    description:
      "A premium personal portfolio website showcasing work using fluid transitions, 3D card tilt gestures, and responsive layouts.",
    additionalTags: ["Creative", "Creative Dev"],
    toolTags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/portfolio.jpg",
    link: "https://github.com/JitendraSachwani/personal-website",
  },
  {
    id: "ai-chat",
    name: "AI Chat Application",
    category: "Full Stack",
    description:
      "An interactive chatbot leveraging vector embeddings, semantic search, and streaming responses to answer questions on documents.",
    additionalTags: ["AI", "Pinecone"],
    toolTags: ["React", "Node.js", "Tailwind CSS", "OpenAI"],
    image: "/analytics.jpg",
    link: "https://github.com/JitendraSachwani/ai-chat-app",
  },
  {
    id: "browser-auto",
    name: "Browser Automation Tool",
    category: "Backend",
    description:
      "A scalable task scheduling and execution server using Puppeteer and Playwright, optimized for scraper pipelines and visual testing.",
    additionalTags: ["Automation", "QA"],
    toolTags: ["Node.js", "Playwright", "Docker", "Redis"],
    image: "/tasks.jpg",
    link: "https://github.com/JitendraSachwani/browser-automation-tool",
  },
  {
    id: "infra-dashboard",
    name: "Infrastructure Dashboard",
    category: "Backend",
    description:
      "An AWS optimizer dashboard utilizing Terraform configurations to track cloud deployments, check server health, and automate shutdowns.",
    additionalTags: ["DevOps", "AWS"],
    toolTags: ["Terraform", "AWS", "Node.js", "Grafana"],
    image: "/analytics.jpg",
    link: "https://github.com/JitendraSachwani/infra-dashboard",
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
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <Briefcase className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground">
            My Work
          </h1>
        </div>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed font-body">
          Here are some of the projects I&apos;ve worked on. Each one crafted with care, performance
          and great user experience.
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

      {/* GitHub Call-to-action footer */}
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
