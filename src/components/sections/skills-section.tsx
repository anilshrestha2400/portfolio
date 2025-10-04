"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { skills } from "@/data/portfolio";
import { Skill } from "@/types";
import { useState, useRef, MouseEvent } from "react";

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  backend: {
    title: "Backend Development",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  database: {
    title: "Database Management",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  tools: {
    title: "Tools & Technologies",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  other: {
    title: "Other Skills",
    gradient: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-gray-500/30",
    iconColor: "text-gray-400",
  },
};

// Enhanced skill data with proficiency levels
const skillProficiency: Record<string, number> = {
  "React.js": 90,
  JavaScript: 85,
  TypeScript: 80,
  "Next.js": 85,
  HTML5: 95,
  CSS3: 90,
  "Tailwind CSS": 85,
  "Node.js": 75,
  "Express.js": 70,
  MySQL: 70,
  Git: 80,
  GitHub: 85,
  "VS Code": 90,
  Bootstrap: 80,
  Sass: 75,
  Redux: 70,
};

function SkillOrb({
  skill,
  index,
  categoryInfo,
}: {
  skill: Skill;
  index: number;
  categoryInfo: (typeof skillCategories)[keyof typeof skillCategories];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const proficiency = skillProficiency[skill.name] || 60;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!orbRef.current) return;
    const rect = orbRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={orbRef}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group perspective-1000"
    >
      <div className="relative">
        {/* Floating animation container */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        >
          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryInfo.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          />

          {/* Main orb */}
          <motion.div
            className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${categoryInfo.gradient} backdrop-blur-sm border ${categoryInfo.borderColor} flex flex-col items-center justify-center cursor-pointer overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Skill icon */}
            <div className="relative z-10 mb-2">
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove("hidden");
                    fallback.classList.add("flex");
                  }
                }}
              />
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${categoryInfo.iconColor} rounded-lg items-center justify-center text-xl md:text-2xl font-bold hidden`}
              >
                {skill.name.charAt(0).toUpperCase()}
              </div>
            </div>

            {/* Skill name */}
            <h4 className="font-semibold text-xs md:text-sm text-center px-2 relative z-10">
              {skill.name}
            </h4>

            {/* Proficiency indicator */}
            <div className="absolute bottom-2 left-2 right-2">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${categoryInfo.gradient.replace(
                    "/20",
                    ""
                  )}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${proficiency}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -10 : 10 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap pointer-events-none"
        >
          {proficiency}% Proficiency
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCategory({
  category,
  categorySkills,
  index,
}: {
  category: keyof typeof skillCategories;
  categorySkills: Skill[];
  index: number;
}) {
  const categoryInfo = skillCategories[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-16"
    >
      {/* Category header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${categoryInfo.gradient} backdrop-blur-sm border ${categoryInfo.borderColor} mb-4`}
        >
          <div
            className={`w-2 h-2 rounded-full ${categoryInfo.iconColor.replace(
              "text-",
              "bg-"
            )}`}
          />
          <h3 className="text-xl md:text-2xl font-bold">
            {categoryInfo.title}
          </h3>
        </motion.div>
      </div>

      {/* Skills grid with hexagonal-inspired layout */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {categorySkills.map((skill, skillIndex) => (
          <SkillOrb
            key={skill.name}
            skill={skill}
            index={skillIndex}
            categoryInfo={categoryInfo}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
              ⚡ Skills & Technologies
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text
              variant="gradient"
              size="4xl"
              className="md:text-6xl mb-6"
              align="center"
            >
              Technical Arsenal
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text
              variant="lead"
              size="lg"
              className="md:text-xl max-w-3xl mx-auto"
              align="center"
            >
              Explore my technical expertise through interactive skill orbs.
              Each represents mastery level and passion for creating exceptional
              digital experiences.
            </Text>
          </motion.div>
        </div>

        {/* Skills categories */}
        <div className="space-y-20">
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], index) => (
              <SkillCategory
                key={category}
                category={category as keyof typeof skillCategories}
                categorySkills={categorySkills}
                index={index}
              />
            )
          )}
        </div>

        {/* Enhanced Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <Text
              variant="gradient-muted"
              size="2xl"
              className="md:text-3xl mb-4"
              align="center"
            >
              Beyond Technical Skills
            </Text>
            <Text variant="muted" className="max-w-2xl mx-auto">
              The human skills that make technology meaningful
            </Text>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Problem Solving",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
              },
              {
                name: "Team Collaboration",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                name: "Agile Methodologies",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                name: "Communication",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
              },
              {
                name: "Attention to Detail",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
              },
              {
                name: "Time Management",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                name: "Continuous Learning",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                name: "Code Review",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="p-4 text-center bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-gray-600 dark:text-gray-300 mb-2 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300 flex justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-sm">{skill.name}</h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
