"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Gerbera from "./Gerbera";

const PHRASE = "Que este día sea tan especial como tú ✨";

const PETALS = ["🌸", "✨", "🌹", "💗", "🌺", "🎀", "💕", "✿"];

const HEART_PHOTOS = [
  { src: "/photos/1.jpeg", left: "14%", top: "12%" },
  { src: "/photos/2.jpeg", left: "33%", top: "4%" },
  { src: "/photos/3.jpeg", left: "55%", top: "4%" },
  { src: "/photos/4.jpeg", left: "74%", top: "12%" },
  { src: "/photos/5.jpeg", left: "3%", top: "42%" },
  { src: "/photos/6.jpeg", left: "85%", top: "42%" },
  { src: "/photos/7.jpeg", left: "12%", top: "68%" },
  { src: "/photos/8.jpeg", left: "48%", top: "78%" },
  { src: "/photos/9.jpeg", left: "74%", top: "68%" },
];

export default function Hero() {
  const [floaters, setFloaters] = useState<
    {
      id: number;
      emoji: string;
      left: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    setFloaters(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        emoji: PETALS[i % PETALS.length],
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 7,
      })),
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Warm editorial background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 140% 90% at 50% 45%, oklch(97.2% 0.013 78) 0%, oklch(91% 0.055 18) 100%)",
        }}
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, oklch(87% 0.045 18 / 0.25) 100%)",
        }}
      />

      {/* Floating petals */}
      {floaters.map((f) => (
        <motion.div
          key={f.id}
          className="absolute text-xl select-none pointer-events-none opacity-60"
          style={{ left: `${f.left}%`, bottom: "-2rem" }}
          animate={{ y: [0, -1100] }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {f.emoji}
        </motion.div>
      ))}

      {/* Desktop scattered photos */}
      {HEART_PHOTOS.map((photo, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ left: photo.left, top: photo.top }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4 + i * 0.15,
            duration: 0.6,
            type: "spring",
            stiffness: 120,
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.4,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 shadow-xl"
            style={{
              borderColor: "var(--color-cream)",
              boxShadow: "0 8px 32px oklch(32% 0.115 10 / 0.18)",
            }}
          >
            <Image
              src={photo.src}
              alt={`Foto ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-4">
        {/* Mobile photos — 3×3 grid */}
        <div className="md:hidden grid grid-cols-3 gap-2.5 mb-6 w-full">
          {HEART_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.5,
                type: "spring",
                stiffness: 130,
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.2 + i * 0.35,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
                className="relative w-full aspect-square rounded-full overflow-hidden border-4 shadow-lg"
                style={{
                  borderColor: "var(--color-cream)",
                  boxShadow: "0 4px 18px oklch(32% 0.115 10 / 0.14)",
                }}
              >
                <Image
                  src={photo.src}
                  alt={`Foto ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Name — the hero moment */}
        <motion.h1
          className="font-cursive leading-none"
          style={{
            fontSize: "clamp(5.2rem, 22vw, 9.5rem)",
            color: "var(--color-wine)",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Litzy
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          className="flex items-center gap-4 mt-1 mb-3"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="block h-px w-14"
            style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.55 }}
          />
          <span style={{ color: "var(--color-terracotta)", fontSize: "0.85rem" }}>
            ✦
          </span>
          <span
            className="block h-px w-14"
            style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.55 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl tracking-widest uppercase"
          style={{
            color: "var(--color-terracotta)",
            fontStyle: "italic",
            letterSpacing: "0.16em",
            fontSize: "clamp(0.85rem, 2.5vw, 1.2rem)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          Feliz Cumpleaños
        </motion.p>

        {/* Animated phrase */}
        <motion.p
          className="mt-5 text-base md:text-lg leading-relaxed px-2"
          style={{ color: "var(--color-muted)", fontStyle: "italic" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.04, delayChildren: 1.8 },
            },
          }}
        >
          {PHRASE.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Gerberas */}
        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.4 }}
        >
          <Gerbera color="#7b1d3d" innerColor="#c44863" size={68} delay={3.5} />
          <Gerbera color="#c44863" innerColor="#c99a2e" size={88} delay={3.7} />
          <Gerbera color="#7b1d3d" innerColor="#c44863" size={68} delay={3.9} />
        </motion.div>

        {/* CTA button — editorial outlined style */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 5.5,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link href="/historia">
            <motion.div
              className="relative flex items-center justify-center gap-3 px-12 sm:px-16 py-4 cursor-pointer w-full sm:w-auto sm:min-w-[280px] overflow-hidden"
              style={{
                border: "1.5px solid var(--color-wine)",
                color: "var(--color-wine)",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
              whileHover={{
                backgroundColor: "oklch(32% 0.115 10)",
                color: "oklch(97.2% 0.013 78)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <span className="text-lg">🎁</span>
              <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>
                Un último detalle
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
