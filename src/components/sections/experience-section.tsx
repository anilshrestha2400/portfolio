"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { ComicSectionHeader } from "@/components/ui/comic-section-header";
import { experiences } from "@/data/portfolio";
import { MapPin, Calendar, Building } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-spiderman-blue/5 via-muted/25 to-primary/5" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <ComicSectionHeader
          badge="Patrol Log"
          title="Work Experience"
          description="My professional journey in software development, working with diverse teams and technologies to deliver impactful solutions."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-spiderman-red via-spiderman-blue to-spiderman-red md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 hidden h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_12px_color-mix(in_oklch,var(--spiderman-red)_55%,transparent)] md:block" />

                <Card className="md:ml-16 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">
                          {experience.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Building className="h-4 w-4" />
                          <Text as="span" weight="medium">
                            {experience.company}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <Text variant="muted" size="sm">
                            {experience.duration}
                          </Text>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <Text variant="muted" size="sm">
                            {experience.location}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <Text
                            as="span"
                            className="text-primary mt-1.5"
                            size="xs"
                          >
                            ▸
                          </Text>
                          <Text variant="muted">{item}</Text>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
