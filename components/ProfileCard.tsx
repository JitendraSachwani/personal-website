"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  UserPlus,
  User,
  Briefcase,
  ArrowRight,
  RefreshCw,
  PhoneCall,
  ChevronLeft,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { shareVCard } from "@/lib/vcard";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { profile } from "@/data/profile";

// Typings for typewriter
function TypingEffect({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="font-mono text-primary font-semibold text-sm md:text-base">
      {texts[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} text-primary ml-0.5`}>|</span>
    </span>
  );
}

export function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [desktopTiltFront, setDesktopTiltFront] = useState({ rotateX: 0, rotateY: 0 });
  const [desktopTiltBack, setDesktopTiltBack] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: "front" | "back") => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Limit tilt to 7 degrees for subtle effect
    const tilt = {
      rotateX: (-y / (rect.height / 2)) * 7,
      rotateY: (x / (rect.width / 2)) * 7,
    };
    if (card === "front") setDesktopTiltFront(tilt);
    if (card === "back") setDesktopTiltBack(tilt);
  };

  const handleMouseLeave = (card: "front" | "back") => {
    if (card === "front") setDesktopTiltFront({ rotateX: 0, rotateY: 0 });
    if (card === "back") setDesktopTiltBack({ rotateX: 0, rotateY: 0 });
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Card Content Elements to reuse between mobile and desktop layout
  const renderFrontContent = (onViewWork?: () => void) => (
    <div className="flex flex-col items-center text-center h-full justify-between pt-16 pb-8 px-6 md:px-8 relative select-none">
      {/* Absolute profile image floating half above card top */}
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-card border border-border shadow-premium-light dark:shadow-premium-dark flex items-center justify-center transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-border">
            <Image
              src="/profile.jpg"
              alt={profile.fullName}
              fill
              sizes="(max-width: 768px) 112px, 128px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Info */}
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-foreground transition-all duration-300">
          Jitendra Sachwani
        </h1>
        <div className="flex flex-col items-center mt-2">
          <TypingEffect
            texts={[
              "Senior Software Engineer",
              "Full Stack Developer",
              "UI/UX Practitioner",
              "Clean Code Architect",
            ]}
          />
          <div className="w-12 h-[2px] bg-primary mt-2 mb-3 rounded-full" />
        </div>
        <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
          I build fast, scalable and user-friendly web applications with a focus on clean code and
          great user experience.
        </p>
      </div>

      {/* Instructions / Toggle Flip button */}
      <motion.button
        onClick={handleFlip}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/80 glassmorphism text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Swipe or Tap here to Know More</span>
      </motion.button>

      {/* Social Icons */}
      <div className="flex items-center gap-4 my-6">
        <a
          href="tel:+1234567890"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          aria-label="Call Jitendra"
        >
          <PhoneCall className="w-4 h-4 md:w-5 h-5" />
        </a>

        <a
          href="mailto:jitendra.sachwani@example.com"
          className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          aria-label="Email Jitendra"
        >
          <Mail className="w-4 h-4 md:w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/jitendra-sachwani"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          aria-label="Open LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4 md:w-5 h-5" />
        </a>
        <a
          href="https://github.com/JitendraSachwani"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          aria-label="Open GitHub Profile"
        >
          <GithubIcon className="w-4 h-4 md:w-5 h-5" />
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="grid grid-cols-2 gap-3 w-full mt-2">
        <Link
          href="/contact.vcf"
          download="contact.vcf"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary hover:bg-accent text-white font-semibold text-xs md:text-sm shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Contact2</span>
        </Link>
        <button
          onClick={shareVCard}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary hover:bg-accent text-white font-semibold text-xs md:text-sm shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Contact</span>
        </button>
        {onViewWork ? (
          <button
            onClick={onViewWork}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border bg-card hover:bg-foreground/5 text-foreground font-semibold text-xs md:text-sm shadow-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            href="/work"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border bg-card hover:bg-foreground/5 text-foreground font-semibold text-xs md:text-sm shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );

  const renderBackContent = () => (
    <div className="flex flex-col justify-between h-full py-8 px-6 md:px-8 relative select-none">
      <div className="space-y-6 overflow-y-auto pr-1">
        {/* About Me Section */}
        <section>
          <div className="flex items-center gap-2 text-primary font-bold font-heading mb-2">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card/80 glassmorphism text-foreground hover:text-primary hover:scale-105 transition-all duration-300 shadow-sm"
              aria-label="Flip to home"
              onClick={handleFlip}
            >
              <ChevronLeft className="w-5 h-5" />
            </div>
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-lg">About Me</h2>
          </div>
          <div className="w-8 h-[2px] bg-primary rounded-full mb-3" />
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Full stack developer with 5+ years of experience building modern, scalable and
            user-friendly web applications. Passionate about clean code, performance and great user
            experience.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 text-primary font-bold font-heading mb-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-lg">Skills</h2>
          </div>
          <div className="w-8 h-[2px] bg-primary rounded-full mb-3" />
          <div className="w-full">
            <SkillsCarousel compact />
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex items-center gap-2 text-primary font-bold font-heading mb-2">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-lg">Contact</h2>
          </div>
          <div className="w-8 h-[2px] bg-primary rounded-full mb-3" />
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
              <a
                href="mailto:jitendra.sachwani@example.com"
                className="text-muted-foreground hover:text-primary transition-colors truncate"
              >
                jitendra.sachwani@example.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
              <a
                href="tel:+911234567890"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 12345 67890
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
              <a
                href="https://jitendrasachwani.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                jitendrasachwani.dev
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Save Contact CTA */}
      <div className="mt-6">
        <button
          onClick={shareVCard}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full border border-border bg-card/85 hover:bg-primary hover:text-white dark:hover:bg-primary text-foreground font-semibold text-xs md:text-sm shadow-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-primary/20"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Contact</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative">
      {/* Mobile Card Layout (Swipe and Flip, hidden on LG) */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="relative w-full max-w-sm aspect-[3/4.6] min-h-[520px] md:min-h-[580px] xs:aspect-[3/4] perspective-1000">
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              // Flip on swipe left/right
              if (Math.abs(info.offset.x) > 60) {
                handleFlip();
              }
            }}
          >
            {/* Front Card */}
            <div className="absolute inset-0 w-full h-full rounded-premium bg-card/90 dark:bg-card/70 border border-border shadow-premium-light dark:shadow-premium-dark backface-hidden overflow-visible mt-14">
              {renderFrontContent()}
            </div>

            {/* Back Card */}
            <div
              className="absolute inset-0 w-full h-full rounded-premium bg-card/90 dark:bg-card/70 border border-border shadow-premium-light dark:shadow-premium-dark backface-hidden overflow-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              {renderBackContent()}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Card Layout (Side-by-side FRONT & BACK, hidden on Mobile/Tablet) */}
      <div className="hidden lg:flex flex-row justify-center gap-8 items-stretch mt-16">
        {/* Front Card */}
        <motion.div
          className="w-[360px] min-h-[530px] rounded-premium bg-card/85 dark:bg-card/65 border border-border shadow-premium-light dark:shadow-premium-dark relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-glow cursor-default flex flex-col justify-between"
          style={{
            perspective: 1000,
            transformStyle: "preserve-3d",
            rotateX: desktopTiltFront.rotateX,
            rotateY: desktopTiltFront.rotateY,
          }}
          onMouseMove={(e) => handleMouseMove(e, "front")}
          onMouseLeave={() => handleMouseLeave("front")}
        >
          {renderFrontContent()}
        </motion.div>

        {/* Back Card */}
        <motion.div
          className="w-[360px] min-h-[530px] rounded-premium bg-card/85 dark:bg-card/65 border border-border shadow-premium-light dark:shadow-premium-dark relative overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-glow cursor-default flex flex-col justify-between"
          style={{
            perspective: 1000,
            transformStyle: "preserve-3d",
            rotateX: desktopTiltBack.rotateX,
            rotateY: desktopTiltBack.rotateY,
          }}
          onMouseMove={(e) => handleMouseMove(e, "back")}
          onMouseLeave={() => handleMouseLeave("back")}
        >
          {renderBackContent()}
        </motion.div>
      </div>
    </div>
  );
}
