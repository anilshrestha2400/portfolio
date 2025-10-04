"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassmorphismCard({ 
  children, 
  className = "", 
  hover = true 
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-md border border-white/20 dark:border-white/10
        shadow-xl shadow-black/5 dark:shadow-black/20
        ${hover ? 'hover:bg-white/20 dark:hover:bg-white/10' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { 
        y: -5, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(22,67,124,0.1), rgba(59,130,246,0.1))",
            "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1))",
            "linear-gradient(45deg, rgba(99,102,241,0.1), rgba(22,67,124,0.1))",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
    </motion.div>
  );
}
