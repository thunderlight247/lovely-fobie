"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the Front Desk on WhatsApp"
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      className="fixed bottom-5 right-5 z-50 flex items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-xl"
    >
      <motion.span
        variants={{ rest: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1 } }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="overflow-hidden whitespace-nowrap pl-5 text-sm font-medium"
      >
        Chat with the Front Desk
      </motion.span>
      <span className="grid h-14 w-14 place-items-center">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" strokeLinejoin="round" />
          <path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-.8-.4-1.600-1.200-2-2l.8-1-1-2L9 9Z" fill="currentColor" stroke="none" />
        </svg>
      </span>
    </motion.a>
  );
}
