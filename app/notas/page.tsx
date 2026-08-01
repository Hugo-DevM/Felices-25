"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { type Nota, NOTAS } from "./notas";

type NoteStatus = { leida: boolean; cancionEscuchada: boolean };
type StatusMap = Record<string, NoteStatus>;

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

function CheckButton({
  active,
  loading,
  label,
  activeLabel,
  onClick,
}: {
  active: boolean;
  loading: boolean;
  label: string;
  activeLabel: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={loading}
      whileHover={{ scale: loading ? 1 : 1.04 }}
      whileTap={{ scale: loading ? 1 : 0.96 }}
      transition={{ duration: 0.15 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 12px",
        borderRadius: "500px",
        border: active
          ? "1.5px solid var(--color-terracotta)"
          : "1.5px solid var(--color-border)",
        background: active ? "oklch(64% 0.17 36 / 0.10)" : "transparent",
        color: active ? "var(--color-terracotta)" : "var(--color-muted)",
        fontSize: "0.75rem",
        fontStyle: "normal",
        cursor: loading ? "wait" : "pointer",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: "0.9rem", lineHeight: 1 }}>
        {active ? "✓" : "○"}
      </span>
      {active ? activeLabel : label}
    </motion.button>
  );
}

function NotaCard({
  nota,
  index,
  status,
  onToggle,
}: {
  nota: Nota;
  index: number;
  status: NoteStatus;
  onToggle: (field: "leida" | "cancionEscuchada", value: boolean) => void;
}) {
  const [loadingField, setLoadingField] = useState<"leida" | "cancionEscuchada" | null>(null);

  async function handleToggle(field: "leida" | "cancionEscuchada") {
    setLoadingField(field);
    await onToggle(field, !status[field]);
    setLoadingField(null);
  }

  const fullyRead = status.leida && status.cancionEscuchada;

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
        background: fullyRead
          ? "oklch(97% 0.025 36)"
          : "oklch(98.5% 0.018 78)",
        border: fullyRead
          ? "1px solid oklch(64% 0.17 36 / 0.35)"
          : "1px solid var(--color-border)",
        boxShadow:
          "0 4px 24px oklch(32% 0.115 10 / 0.09), 0 1px 3px oklch(32% 0.115 10 / 0.06)",
        transformOrigin: "center",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      {/* Pin */}
      <div
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
        style={{
          backgroundColor: fullyRead
            ? "var(--color-terracotta)"
            : "var(--color-terracotta)",
          opacity: fullyRead ? 1 : 0.7,
        }}
      />

      {/* Día badge */}
      <div
        className="absolute top-4 left-4"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.06em",
          color: "var(--color-terracotta)",
          opacity: 0.85,
          fontStyle: "normal",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        Día {nota.id} sin ti
      </div>

      {/* Fully read badge */}
      {fullyRead && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.05em",
            color: "var(--color-terracotta)",
            fontStyle: "normal",
            fontWeight: 700,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          ✓ Completa
        </motion.div>
      )}

      {/* Texto */}
      <p
        className="relative text-base leading-relaxed mb-8"
        style={{ color: "var(--color-wine)", fontStyle: "italic" }}
      >
        {nota.texto}
      </p>

      {/* Bottom section */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
        }}
      >
        <div className="flex justify-center">
          <SpotifyButton song={nota.cancion} />
        </div>

        {/* Toggle buttons */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CheckButton
            active={status.leida}
            loading={loadingField === "leida"}
            label="Ya la leí"
            activeLabel="Ya la leí"
            onClick={() => handleToggle("leida")}
          />
          <CheckButton
            active={status.cancionEscuchada}
            loading={loadingField === "cancionEscuchada"}
            label="Ya escuché la canción"
            activeLabel="Ya escuché la canción"
            onClick={() => handleToggle("cancionEscuchada")}
          />
        </div>
      </div>
    </motion.div>
  );
}

function CancionDeFondo() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    // Si el navegador bloquea el autoplay (entrar por URL directa o
    // recargar), reintentamos en silencio con el primer gesto que haya.
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const onFirstGesture = () => {
      audio.play().catch(() => {});
      events.forEach((e) => window.removeEventListener(e, onFirstGesture));
    };

    audio.play().catch(() => {
      events.forEach((e) =>
        window.addEventListener(e, onFirstGesture, { passive: true })
      );
    });

    return () => {
      events.forEach((e) => window.removeEventListener(e, onFirstGesture));
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Eclipsis.mp3"
      loop
      autoPlay
      preload="auto"
      onEnded={(e) => {
        // Respaldo por si el loop nativo no dispara
        const el = e.currentTarget;
        el.currentTime = 0;
        el.play().catch(() => {});
      }}
    />
  );
}

const DEFAULT_STATUS: NoteStatus = { leida: false, cancionEscuchada: false };

export default function NotasPage() {
  const [statusMap, setStatusMap] = useState<StatusMap>({});
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    fetch("/api/notes")
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) setStatusMap(data);
      })
      .finally(() => setLoadingStatus(false));
  }, []);

  async function handleToggle(
    notaId: number,
    field: "leida" | "cancionEscuchada",
    value: boolean
  ) {
    const id = String(notaId);
    // Optimistic update
    setStatusMap((prev) => ({
      ...prev,
      [id]: { ...(prev[id] ?? DEFAULT_STATUS), [field]: value },
    }));

    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, field, value }),
    });

    if (!res.ok) {
      // Revert on error
      setStatusMap((prev) => ({
        ...prev,
        [id]: { ...(prev[id] ?? DEFAULT_STATUS), [field]: !value },
      }));
    }
  }

  const totalLeidas = NOTAS.filter((n) => statusMap[n.id]?.leida).length;
  const totalCanciones = NOTAS.filter((n) => statusMap[n.id]?.cancionEscuchada).length;

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 pb-20"
      style={{
        background:
          "radial-gradient(ellipse 140% 90% at 50% 20%, oklch(97.2% 0.013 78) 0%, oklch(91% 0.055 18) 100%)",
      }}
    >
      <CancionDeFondo />

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
        className="flex flex-col items-center text-center mt-10 mb-12 gap-3"
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

        {/* Progress counters */}
        {!loadingStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "0.5rem",
              fontSize: "0.8rem",
              color: "var(--color-muted)",
              fontStyle: "normal",
            }}
          >
            <span>
              <span style={{ color: "var(--color-terracotta)", fontWeight: 600 }}>
                {totalLeidas}
              </span>
              /{NOTAS.length} leídas
            </span>
            <span>
              <span style={{ color: "var(--color-terracotta)", fontWeight: 600 }}>
                {totalCanciones}
              </span>
              /{NOTAS.length} canciones escuchadas
            </span>
          </motion.div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl items-start mb-20">
        {NOTAS.map((nota, i) => (
          <NotaCard
            key={nota.id}
            nota={nota}
            index={i}
            status={statusMap[nota.id] ?? DEFAULT_STATUS}
            onToggle={(field, value) => handleToggle(nota.id, field, value)}
          />
        ))}
      </div>
    </div>
  );
}
