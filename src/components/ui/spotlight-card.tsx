"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const glow = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgba(255,235,225,0.28), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      {children}
    </motion.div>
  );
}
