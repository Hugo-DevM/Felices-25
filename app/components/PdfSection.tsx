"use client";

import { motion } from "framer-motion";

export default function PdfSection() {
  return (
    <motion.section
      className="flex flex-col items-center px-4 py-16"
      style={{ background: "var(--color-blush)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ornament */}
      <div className="flex items-center gap-4 mb-4">
        <span className="block h-px w-12" style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.5 }} />
        <span style={{ color: "var(--color-terracotta)", fontSize: "0.85rem" }}>✦</span>
        <span className="block h-px w-12" style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.5 }} />
      </div>

      <h2
        className="font-cursive text-center mb-2"
        style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", color: "var(--color-wine)" }}
      >
        Perdón
      </h2>
      <p
        className="text-sm mb-8 text-center"
        style={{ color: "var(--color-muted)", fontStyle: "italic" }}
      >
        by Hugo Montaño
      </p>

      <div
        className="w-full rounded-xl overflow-hidden shadow-lg"
        style={{
          maxWidth: "720px",
          border: "1px solid var(--color-border)",
        }}
      >
        <iframe
          src="/Perdon by Hugo Montaño.pdf"
          className="w-full"
          style={{ height: "80vh", minHeight: "480px" }}
          title="Perdón by Hugo Montaño"
        />
      </div>
    </motion.section>
  );
}
