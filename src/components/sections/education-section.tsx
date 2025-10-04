"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = {
  degree: "Bachelor of Computer Application (BCA)",
  institution: "Samriddhi College",
  duration: "2018 - 2022",
  location: "Bhaktapur, Nepal",
  description:
    "Comprehensive program focusing on computer applications, software development, and information technology management.",
  highlights: [
    "Software Development & Programming",
    "Database Management Systems",
    "Web Technologies & Development",
    "Data Structures & Algorithms",
    "System Analysis & Design",
    "Computer Networks & Security",
  ],
};

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="default" className="mb-4">
              Education
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text variant="h2" className="mb-4" align="center">
              Academic Foundation
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text variant="muted" className="max-w-2xl mx-auto" align="center">
              Building a strong foundation in computer science and application
              development through comprehensive academic training and practical
              learning.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="px-8 py-4">
                <div className="flex items-start gap-4 max-sm:flex-col">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Text variant="h4" className="mb-2">
                      {educationData.degree}
                    </Text>
                    <Text variant="h5" className="text-primary mb-3">
                      {educationData.institution}
                    </Text>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <Text as="span" weight="medium">
                          {educationData.duration}
                        </Text>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <Text as="span" weight="medium">
                          {educationData.location}
                        </Text>
                      </div>
                    </div>
                    <Text variant="muted">{educationData.description}</Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
