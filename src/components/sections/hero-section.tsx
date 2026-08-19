"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CitySkyline } from "@/components/ui/city-skyline";
import { SwingingSpider } from "@/components/ui/swinging-spider";
import { MaskEyes } from "@/components/ui/mask-eyes";
import { SpeedLines } from "@/components/ui/speed-lines";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { personalInfo, contactInfo } from "@/data/portfolio";

const stats = [
  { to: 4, suffix: "+", label: "Years Experience" },
  { to: 50, suffix: "+", label: "Projects Completed" },
  { to: 100, suffix: "%", label: "Client Satisfaction" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-spiderman-blue/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,color-mix(in_oklch,var(--spiderman-red)_22%,transparent),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,color-mix(in_oklch,var(--spiderman-blue)_24%,transparent),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 text-primary/25">
        <SpeedLines />
      </div>

      <SwingingSpider />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-7"
          >
            <div className="relative space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 16, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display inline-block rounded-sm bg-primary px-3 py-1 text-lg tracking-wide text-primary-foreground comic-stamp"
              >
                Your friendly neighborhood
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 1.12, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.15 }}
                className="font-heading hero-name-glow text-5xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="space-y-3"
              >
                <p className="text-suit-gradient font-heading text-2xl font-semibold lg:text-3xl">
                  {personalInfo.title}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  className="h-1 max-w-md rounded-full bg-gradient-to-r from-spiderman-red via-spiderman-blue to-spiderman-red"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 rounded-md border border-primary/25 bg-background/50 px-4 py-2 backdrop-blur-sm">
                <Mail className="h-5 w-5 text-primary" />
                <Text variant="muted" className="font-medium">
                  {contactInfo.email}
                </Text>
              </div>
              <div className="flex items-center gap-3 rounded-md border border-spiderman-blue/25 bg-background/50 px-4 py-2 backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-spiderman-blue" />
                <Text variant="muted" className="font-medium">
                  {contactInfo.location}
                </Text>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="px-8">
                <a href="#contact">Send a Signal</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 px-8"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 px-8"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex flex-wrap gap-5 pt-4 max-sm:justify-center"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="comic-panel min-w-[140px] bg-background/70 px-5 py-4 text-center backdrop-blur-sm"
                >
                  <Text variant="stat" className="text-3xl lg:text-4xl">
                    <AnimatedCounter from={0} to={stat.to} suffix={stat.suffix} />
                  </Text>
                  <Text variant="muted" size="sm" className="mt-1 font-medium">
                    {stat.label}
                  </Text>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative">
              <MaskEyes className="absolute -left-10 top-1/2 hidden w-[130%] -translate-y-1/2 text-white/90 drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] lg:block" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative">
                  <svg
                    className="animate-spin-slow pointer-events-none absolute -inset-5 text-primary"
                    viewBox="0 0 100 100"
                    aria-hidden
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.7"
                      strokeDasharray="3 9"
                      opacity="0.7"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="43"
                      fill="none"
                      stroke="var(--spiderman-blue)"
                      strokeWidth="0.5"
                      strokeDasharray="1 7"
                      opacity="0.5"
                    />
                  </svg>

                  <div className="spider-sense-ring absolute -inset-1 rounded-full suit-gradient p-[3px]">
                    <div className="h-full w-full rounded-full bg-background" />
                  </div>

                  <Avatar className="relative z-10 h-80 w-80 border-4 border-background shadow-[0_0_40px_color-mix(in_oklch,var(--spiderman-red)_28%,transparent)] lg:h-96 lg:w-96">
                    <AvatarImage
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-muted text-6xl">
                      {personalInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="web-edge-mask pointer-events-none absolute inset-0 z-20 rounded-full mix-blend-overlay" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="font-display text-base tracking-wide">
              Swing down to explore
            </span>
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 text-[#070b18]">
        <CitySkyline />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
