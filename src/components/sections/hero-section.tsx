"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ChevronDown,
} from "lucide-react";
import { personalInfo, contactInfo } from "@/data/portfolio";
import { useEffect, useState } from "react";

// Typewriter animation component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-primary ml-1"
      />
    </span>
  );
}

// Download resume function
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = personalInfo.resume;
  link.download = `${personalInfo.name}_Resume.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Greeting and Name */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <Text
                  variant="muted"
                  className="text-lg font-medium tracking-wide"
                >
                  Hello, I'm
                </Text>
                <Text variant="h1" className="text-5xl lg:text-6xl font-bold">
                  <TypewriterText text={personalInfo.name} delay={0} />
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-2"
              >
                <Text
                  variant="subtitle"
                  className="text-2xl lg:text-3xl text-primary font-semibold"
                >
                  <TypewriterText text={personalInfo.title} delay={0} />
                </Text>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 2 }}
                  className="h-1 bg-gradient-to-r from-primary to-primary/20 rounded-full max-w-md"
                />
              </motion.div>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="max-w-2xl"
            >
              <Text
                variant="lead"
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {personalInfo.bio}
              </Text>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex flex-wrap gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <Text variant="muted" className="font-medium">
                  {contactInfo.email}
                </Text>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <Text variant="muted" className="font-medium">
                  {contactInfo.location}
                </Text>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="flex flex-wrap gap-4"
            >
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={downloadResume}
                  size="lg"
                  className="gap-2 px-8"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div> */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
            </motion.div>

            {/* Stats with Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="flex gap-12 pt-8 flex-wrap max-sm:justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center space-y-2"
              >
                <Text
                  variant="stat"
                  className="text-3xl lg:text-4xl max-sm:text-center"
                >
                  <AnimatedCounter from={0} to={3} suffix="+" />
                </Text>
                <Text
                  variant="muted"
                  size="sm"
                  className="font-medium max-sm:text-center"
                >
                  Years Experience
                </Text>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center space-y-2"
              >
                <Text
                  variant="stat"
                  className="text-3xl lg:text-4xl max-sm:text-center"
                >
                  <AnimatedCounter from={0} to={20} suffix="+" />
                </Text>
                <Text
                  variant="muted"
                  size="sm"
                  className="font-medium max-sm:text-center"
                >
                  Projects Completed
                </Text>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center space-y-2"
              >
                <Text
                  variant="stat"
                  className="text-3xl lg:text-4xl max-sm:text-center"
                >
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </Text>
                <Text
                  variant="muted"
                  size="sm"
                  className="font-medium max-sm:text-center"
                >
                  Client Satisfaction
                </Text>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Avatar className="w-80 h-80 lg:w-96 lg:h-96 border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300">
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

                  {/* Glowing ring effect */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-sm"
                  />
                </motion.div>
              </motion.div>

              {/* Background decorative elements */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-full -z-10" />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-16 bg-gradient-to-br from-primary/5 to-transparent rounded-full -z-20"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <Text size="sm" className="font-medium">
              Scroll to explore
            </Text>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
