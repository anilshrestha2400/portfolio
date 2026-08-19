"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SpiderEmblem } from "@/components/ui/spider-emblem";

export function WebSlingIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute left-1/2 top-0 h-full w-0.5 origin-top -translate-x-1/2 bg-gradient-to-b from-primary via-primary/60 to-transparent"
          />
          <motion.div
            initial={{ y: -120, opacity: 0, rotate: -12 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 80, opacity: 0, scale: 1.4 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative flex flex-col items-center gap-4"
          >
            <SpiderEmblem className="h-16 w-16 text-primary drop-shadow-[0_0_24px_var(--spiderman-red)]" />
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="font-display text-3xl tracking-wider text-primary"
            >
              THWIP!
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
