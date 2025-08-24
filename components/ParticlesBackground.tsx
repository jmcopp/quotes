"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParticlesBackgroundProps {
  className?: string;
}

export default function ParticlesBackground({
  className,
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const particleCount = 100;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none particles-container ${className}`}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: "var(--particle-color)",
          }}
          animate={{
            x: [-40, 40, -40],
            y: [-40, 40, -40],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
