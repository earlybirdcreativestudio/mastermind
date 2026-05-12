"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  desc: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { title, subtitle, desc } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="aspect-square cursor-pointer"
      style={{ perspective: "1000px" }}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setIsFlipped(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setIsFlipped(false); }}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front — cover image */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-3xl">
          <Image
            src={`/${index + 1}.webp`}
            fill
            className="object-cover"
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Back — text content */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#F5F1EA]/90 backdrop-blur-md border border-black/10 p-8 rounded-3xl flex flex-col justify-center">
          <div className="text-mm-orange text-sm font-bold tracking-widest uppercase mb-4">
            {subtitle}
          </div>
          <h3 className="text-2xl font-bold text-mm-dark mb-4">{title}</h3>
          <p className="text-mm-dark/70 leading-relaxed text-sm">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
