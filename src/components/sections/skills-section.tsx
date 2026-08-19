"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { ComicSectionHeader } from "@/components/ui/comic-section-header";
import { skills } from "@/data/portfolio";
import { Skill } from "@/types";
import { useMemo, useState } from "react";

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    gradient: "from-red-500/25 to-rose-600/20",
    borderColor: "border-red-500/40",
    iconColor: "text-red-400",
  },
  backend: {
    title: "Backend Development",
    gradient: "from-blue-600/25 to-indigo-700/20",
    borderColor: "border-blue-500/40",
    iconColor: "text-blue-400",
  },
  database: {
    title: "Database Management",
    gradient: "from-indigo-500/20 to-blue-800/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  tools: {
    title: "Tools & Technologies",
    gradient: "from-amber-400/25 to-yellow-600/20",
    borderColor: "border-amber-500/40",
    iconColor: "text-amber-400",
  },
  other: {
    title: "Other Skills",
    gradient: "from-slate-500/20 to-slate-700/20",
    borderColor: "border-slate-500/30",
    iconColor: "text-slate-400",
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

type CategoryKey = keyof typeof skillCategories;

function SkillRow({
  skill,
  categoryInfo,
  index,
}: {
  skill: Skill;
  categoryInfo: (typeof skillCategories)[CategoryKey];
  index: number;
}) {
  const proficiency = skillProficiency[skill.name] ?? 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.02 }}
      className="flex items-center gap-3"
    >
      <div className="relative h-10 w-10 flex-shrink-0">
        {skill.icon ? (
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            className="h-10 w-10 rounded-lg bg-background/60 border border-primary/10 p-2 object-contain"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const fallback = target.parentElement?.querySelector(
                'span[data-skill-fallback="true"]'
              ) as HTMLSpanElement | null;
              if (fallback) {
                fallback.classList.remove("hidden");
              }
            }}
          />
        ) : null}
        <span
          data-skill-fallback="true"
          className="hidden absolute inset-0 h-10 w-10 items-center justify-center rounded-lg bg-background/60 border border-primary/10 text-sm font-bold text-primary"
        >
          {skill.name.charAt(0).toUpperCase()}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <Text
          as="span"
          weight="medium"
          className="block text-sm truncate"
        >
          {skill.name}
        </Text>

        <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${categoryInfo.gradient} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          />
        </div>
      </div>

      <Text
        variant="muted"
        size="xs"
        className="w-[52px] text-right tabular-nums"
      >
        {proficiency}%
      </Text>
    </motion.div>
  );
}

export function SkillsSection() {
  const groupedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<CategoryKey, Skill[]>);
  }, []);

  const categoryOrder: CategoryKey[] = [
    "frontend",
    "backend",
    "database",
    "tools",
    "other",
  ];

  const categories = categoryOrder.filter(
    (key) => groupedSkills[key]?.length
  );

  const [activeCategory, setActiveCategory] = useState<CategoryKey>(
    () => categories[0] ?? "frontend"
  );

  const activeCategoryInfo = skillCategories[activeCategory];
  const activeSkills = groupedSkills[activeCategory] ?? [];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-muted/15 to-spiderman-blue/5" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-spiderman-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-spiderman-blue/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative mb-20 text-center">
          <ComicSectionHeader
            badge="Powers & Gadgets"
            title="Web-Slinging Arsenal"
            description="Browse skills by category and see my proficiency levels through clean, interactive progress bars."
          />
        </div>

        {/* Skills layout */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Card className="p-4 h-full">
              <CardContent className="p-0">
                <Text variant="h5" className="mb-4">
                  Skill Categories
                </Text>

                <div className="space-y-2">
                  {categoryOrder.map((categoryKey) => {
                    const categorySkills = groupedSkills[categoryKey];
                    if (!categorySkills?.length) return null;

                    const categoryInfo = skillCategories[categoryKey];
                    const isActive = activeCategory === categoryKey;

                    return (
                      <button
                        key={categoryKey}
                        type="button"
                        onClick={() => setActiveCategory(categoryKey)}
                        className={[
                          "w-full text-left rounded-md border px-4 py-3 transition-all",
                          isActive
                            ? `bg-gradient-to-r ${categoryInfo.gradient} border-primary/40 shadow-sm`
                            : "bg-background/60 border-primary/10 hover:bg-background/80 hover:border-primary/20",
                        ].join(" ")}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={[
                              "h-2.5 w-2.5 rounded-full",
                              categoryInfo.iconColor.replace("text-", "bg-"),
                            ].join(" ")}
                          />
                          <Text
                            as="span"
                            weight="medium"
                            className={isActive ? "text-primary" : "text-foreground"}
                          >
                            {categoryInfo.title}
                          </Text>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "h-2.5 w-2.5 rounded-full",
                        activeCategoryInfo.iconColor.replace("text-", "bg-"),
                      ].join(" ")}
                    />
                    <Text variant="h4">{activeCategoryInfo.title}</Text>
                  </div>

                  <Badge variant="secondary" className="text-xs">
                    {activeSkills.length} Skills
                  </Badge>
                </div>

                <div className="mt-5 space-y-3">
                  {activeSkills.map((skill, index) => (
                    <SkillRow
                      key={skill.name}
                      skill={skill}
                      categoryInfo={activeCategoryInfo}
                      index={index}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-muted-foreground transition-colors group-hover:bg-primary/20">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
