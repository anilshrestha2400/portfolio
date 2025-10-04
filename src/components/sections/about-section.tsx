"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { personalInfo } from "@/data/portfolio";
import { Code, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description:
      "Creating beautiful, intuitive interfaces with attention to user experience and accessibility.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and excellent user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively in cross-functional teams using Agile methodologies.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="default" className="mb-4">
              About Me
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text variant="h2" className="mb-4" align="center">
              Passionate About Creating Digital Solutions
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text variant="muted" className="max-w-2xl mx-auto" align="center">
              With a Bachelor's degree in Computer Applications and over 3 years
              of professional experience in modern web technologies, I bring
              both technical expertise and creative problem-solving to every
              project I work on.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <Text variant="h3">My Journey</Text>
            <div className="space-y-4">
              <Text variant="muted">
                My journey in web development began with a curiosity about how
                digital experiences are created. What started as a fascination
                with code has evolved into a passion for building applications
                that make a real difference in people's lives.
              </Text>
              <br />
              <br />
              <Text variant="muted">
                Currently working as a Frontend Developer at A5 SYNC in a remote
                capacity, I specialize in React, Next.js, and TypeScript
                development. My career progression from Bisava Technology to
                Reflex IT Solution, and now to A5 SYNC, has given me the
                opportunity to work on diverse projects ranging from e-commerce
                platforms to management systems.
              </Text>
              <br />
              <br />
              <Text variant="muted">
                Throughout my 3+ years of professional experience, I've
                contributed to requirement engineering, collaborated with
                international teams, and consistently delivered high-quality,
                user-centric solutions. I believe in continuous learning and
                staying updated with the latest technologies and best practices.
              </Text>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Text variant="h6">{highlight.title}</Text>
                    </div>
                    <Text variant="muted">{highlight.description}</Text>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
