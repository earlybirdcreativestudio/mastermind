"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBlockProps {
  id?: string;
  className?: string;
  children: ReactNode;
  align?: "left" | "right";
  color?: "lavender" | "sage" | "orange" | "offwhite" | "dark";
}

export default function SectionBlock({ id, className = "", children, align = "left", color = "dark" }: SectionBlockProps) {
  
  const bgColors = {
    lavender: "bg-[var(--color-mm-lavender)] text-mm-dark",
    sage: "bg-[var(--color-mm-sage)] text-mm-dark",
    orange: "bg-[var(--color-mm-orange)] text-white",
    offwhite: "bg-[var(--color-mm-offwhite)] text-mm-dark",
    dark: "bg-transparent text-white",
  };

  const alignClass = align === "left" ? "mr-auto" : "ml-auto";

  return (
    <section id={id} className={`w-full min-h-[60vh] flex items-center py-12 px-6 md:px-12 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-4xl p-12 md:p-20 rounded-3xl ${bgColors[color]} ${alignClass} shadow-2xl relative overflow-hidden`}
      >
        {children}
      </motion.div>
    </section>
  );
}
