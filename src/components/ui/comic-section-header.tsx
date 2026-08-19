"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";

interface ComicSectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

export function ComicSectionHeader({
  badge,
  title,
  description,
}: ComicSectionHeaderProps) {
  return (
    <div className="relative mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="default" className="mb-4 font-display tracking-wide">
          {badge}
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Text variant="h2" className="mb-4" align="center">
          {title}
        </Text>
      </motion.div>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Text
            variant="lead"
            className="mx-auto max-w-2xl"
            align="center"
          >
            {description}
          </Text>
        </motion.div>
      )}

      <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
}
