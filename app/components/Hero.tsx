"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Gerbera from "./Gerbera";

const PHRASE = "Que este día sea tan especial como tú ✨";

const EMOJIS = ["🎈", "🎂", "🎉", "✨", "🌸", "💖", "🎀", "⭐"];

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
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        emoji: EMOJIS[i % EMOJIS.length],
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 6,
      })),
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-fuchsia-200 -z-10" />
      {floaters.map((f) => (
        <motion.div
          key={f.id}
          className="absolute text-2xl select-none pointer-events-none"
          style={{ left: `${f.left}%`, bottom: "-2rem" }}
          animate={{ y: [0, -1200] }}
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
            className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl"
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

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-4">
        <motion.div
          className="md:hidden flex gap-3 justify-center mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          {[HEART_PHOTOS[1], HEART_PHOTOS[4], HEART_PHOTOS[7]].map(
            (photo, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i * 0.5,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
              >
                <Image
                  src={photo.src}
                  alt={`Foto ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ),
          )}
        </motion.div>
        <motion.h1
          className="font-cursive text-7xl md:text-9xl text-rose-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Litzy
        </motion.h1>
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-semibold text-rose-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          ¡Feliz Cumpleaños! 🎂
        </motion.p>
        <motion.p
          className="mt-5 text-base md:text-lg text-rose-700/80 font-medium tracking-wide px-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.04, delayChildren: 1.6 },
            },
          }}
        >
          {PHRASE.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.25 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.4 }}
        >
          <Gerbera color="#f43f5e" innerColor="#fb7185" size={70} delay={3.3} />
          <Gerbera color="#fb923c" innerColor="#fbbf24" size={90} delay={3.5} />
          <Gerbera color="#e11d48" innerColor="#f43f5e" size={70} delay={3.7} />
        </motion.div>
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 5.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Link href="/historia">
            <motion.div
              className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold px-10 sm:px-16 py-4 sm:py-5 rounded-full text-lg sm:text-xl shadow-[0_8px_30px_rgba(244,63,94,0.45)] cursor-pointer overflow-hidden w-full sm:w-auto sm:min-w-[260px]"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 12px 40px rgba(244,63,94,0.55)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: 6,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              />
              <span className="text-2xl">🎁</span>
              <span className="tracking-wide text-lg">Último detalle</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
