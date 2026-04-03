"use client";

import { motion } from "framer-motion";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] bg-mm-dark">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/output.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
