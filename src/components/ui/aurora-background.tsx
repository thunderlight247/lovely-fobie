"use client";

import { motion } from "framer-motion";

/** Lightweight stand-in for a React Bits background (swap in Aurora/Silk). */
export function AuroraBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-rose-gold/40 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-sage/40 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M-50 ${200 + i * 110} C 300 ${80 + i * 90}, 700 ${420 + i * 60}, 1250 ${180 + i * 110}`}
            stroke="#b98a78"
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 + i, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
