"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Nota {
  id: number;
  texto: string;
  cancion: {
    titulo: string;
    url: string;
  };
  rotacion?: number;
}

const NOTAS: Nota[] = [
  {
    id: 1,
    texto:
      "Aun mi mente sigue esperando tu regreso aunque se que ya no va a pasar, no entiendo porque sigo esperando a que seas tu cuando yo jamas dejaria entrar a alguien que ya se fue.",
    cancion: {
      titulo: "Tristella",
      url: "https://open.spotify.com/track/68jzcOer781H6plrKH2ERE?si=e218479237244da7",
    },
    rotacion: -1.5,
  },
  {
    id: 2,
    texto:
      "Si hubiera sabido que aquel dia en la noche seria la ultima ves que te veria, me hubiera quedado mas tiempo de lo habitual.",
    cancion: {
      titulo: "Solare",
      url: "https://open.spotify.com/track/6TaJZRQRgvjOtRb31BlPLd?si=83adf7c26106477f",
    },
    rotacion: -1.5,
  },
  {
    id: 3,
    texto:
      "Me gustaria creer que algun dia volveremos a estar juntos, algo que suena bastante absurdo porque yo mismo se que no va a pasar.",
    cancion: {
      titulo: "Arcoloria",
      url: "https://open.spotify.com/track/0Z3l6V9yEstXhGrMcUxYlJ?si=441b4ddd663a4998",
    },
    rotacion: -1.5,
  },
];

function SpotifyButton({ song }: { song: Nota["cancion"] }) {
  return (
    <motion.a
      href={song.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 cursor-pointer"
      style={{
        backgroundColor: "#1DB954",
        borderRadius: "500px",
        color: "white",
        textDecoration: "none",
        padding: "8px 14px 8px 10px",
        width: "fit-content",
      }}
      whileHover={{ scale: 1.03, backgroundColor: "#1ed760" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.75.75 0 01-1.032.249c-2.826-1.727-6.386-2.117-10.577-1.161a.75.75 0 01-.333-1.463c4.587-1.047 8.52-.596 11.694 1.343a.75.75 0 01.248 1.032zm1.472-3.27a.937.937 0 01-1.288.308c-3.233-1.987-8.159-2.563-11.981-1.403a.937.937 0 01-.543-1.793c4.37-1.324 9.8-.682 13.504 1.6a.937.937 0 01.308 1.288zm.127-3.403C15.27 8.43 9.271 8.232 5.553 9.36a1.124 1.124 0 11-.652-2.151c4.27-1.297 11.37-1.046 15.854 1.62a1.125 1.125 0 01-1.64 1.816z" />
      </svg>

      <div className="flex flex-col" style={{ gap: "1px" }}>
        <span
          style={{
            fontSize: "0.62rem",
            opacity: 0.85,
            fontStyle: "normal",
            letterSpacing: "0.04em",
          }}
        >
          Escuchar en Spotify
        </span>
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            fontStyle: "normal",
            lineHeight: 1.2,
          }}
        >
          {song.titulo}
        </span>
      </div>
    </motion.a>
  );
}

function NotaCard({ nota, index }: { nota: Nota; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: nota.rotacion ?? 0 }}
      animate={{ opacity: 1, y: 0, rotate: nota.rotacion ?? 0 }}
      transition={{
        delay: 0.3 + index * 0.18,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.025, rotate: 0, zIndex: 10 }}
      className="relative w-full"
      style={{
        padding: "3.5rem 2rem 2rem",
        background: "oklch(98.5% 0.018 78)",
        border: "1px solid var(--color-border)",
        boxShadow:
          "0 4px 24px oklch(32% 0.115 10 / 0.09), 0 1px 3px oklch(32% 0.115 10 / 0.06)",
        transformOrigin: "center",
      }}
    >
      <div
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
        style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.7 }}
      />

      <p
        className="relative text-base leading-relaxed mb-8"
        style={{ color: "var(--color-wine)", fontStyle: "italic" }}
      >
        {nota.texto}
      </p>

      <div
        className="flex justify-center"
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.25rem",
        }}
      >
        <SpotifyButton song={nota.cancion} />
      </div>
    </motion.div>
  );
}

export default function NotasPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 pb-20"
      style={{
        background:
          "radial-gradient(ellipse 140% 90% at 50% 20%, oklch(97.2% 0.013 78) 0%, oklch(91% 0.055 18) 100%)",
      }}
    >
      <motion.div
        className="w-full max-w-xl pt-6 md:fixed md:top-6 md:left-6 md:w-auto md:pt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="text-sm"
          style={{ color: "var(--color-muted)", fontStyle: "italic" }}
        >
          ← Volver al inicio
        </Link>
      </motion.div>

      <motion.div
        className="flex flex-col items-center text-center mt-10 mb-32 gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1
          className="font-cursive leading-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 5rem)",
            color: "var(--color-wine)",
          }}
        >
          Cositas que pienso
        </h1>

        <div className="flex items-center gap-4 mt-1">
          <span
            className="block h-px w-12"
            style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.5 }}
          />
          <span
            style={{ color: "var(--color-terracotta)", fontSize: "0.85rem" }}
          >
            ✦
          </span>
          <span
            className="block h-px w-12"
            style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.5 }}
          />
        </div>

        <p
          className="max-w-xs leading-relaxed"
          style={{
            color: "var(--color-muted)",
            fontStyle: "italic",
            fontSize: "1rem",
          }}
        >
          Cosas que siento pero que ya no puedo decir, una forma de desahogarme
          con las cosas que se jamas podre decirte en persona.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl items-start">
        {NOTAS.map((nota, i) => (
          <NotaCard key={nota.id} nota={nota} index={i} />
        ))}
      </div>
    </div>
  );
}
