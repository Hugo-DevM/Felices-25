"use client";

import { motion } from "framer-motion";

const PDF_URL = "/Perdon by Hugo Montaño.pdf";

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

      {/* Desktop: iframe viewer */}
      <div
        className="hidden md:block w-full rounded-xl overflow-hidden shadow-lg"
        style={{ maxWidth: "720px", border: "1px solid var(--color-border)" }}
      >
        <iframe
          src={PDF_URL}
          className="w-full"
          style={{ height: "80vh", minHeight: "480px" }}
          title="Perdón by Hugo Montaño"
        />
      </div>

      {/* Mobile: open button */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full" style={{ maxWidth: "320px" }}>
        <p
          className="text-sm text-center"
          style={{ color: "var(--color-muted)", fontStyle: "italic" }}
        >
          Toca el botón para leer el documento
        </p>
        <motion.a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl"
          style={{
            border: "1.5px solid var(--color-wine)",
            color: "var(--color-wine)",
            fontSize: "0.85rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ backgroundColor: "oklch(32% 0.115 10)", color: "oklch(97.2% 0.013 78)" }}
          transition={{ duration: 0.2 }}
        >
          <span>📄</span>
          <span>Abrir Perdón</span>
        </motion.a>
      </div>
    </motion.section>
  );
}
