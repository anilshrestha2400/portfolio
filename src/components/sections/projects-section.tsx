"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ComicSectionHeader } from "@/components/ui/comic-section-header";
import { projects, contactInfo } from "@/data/portfolio";
import { Github, Eye } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section id="projects" className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-spiderman-blue/5" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <ComicSectionHeader
          badge="Missions"
          title="Featured Missions"
          description="A showcase of my recent work — web applications built with modern technologies and best practices."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex justify-center gap-4"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Missions ({projects.length})
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            onClick={() => setFilter("featured")}
          >
            Priority ({projects.filter((p) => p.featured).length})
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
              className="group"
            >
              <Card className="mission-card h-full overflow-hidden p-0">
                <div className="relative z-[2] h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  {project.featured && (
                    <Badge className="absolute left-3 top-3 z-20 bg-primary font-display tracking-wide">
                      PRIORITY
                    </Badge>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-1"
                        >
                          <Eye className="h-4 w-4" />
                          Deploy Site
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardHeader className="relative z-[2] p-0">
                  <CardTitle className="px-4 py-2 font-heading text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-[2] px-4 pb-4 pt-0">
                  <Text variant="muted" className="mb-4 line-clamp-3">
                    {project.longDescription}
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex w-full flex-wrap items-center justify-center gap-4"
        >
          <Text variant="muted">More missions in the archives?</Text>
          <Button variant="outline" size="lg" asChild>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              View GitHub Archives
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
