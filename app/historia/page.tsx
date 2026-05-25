"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function Boy({
  x,
  y,
  size = 1,
  flipped = false,
}: {
  x: number;
  y: number;
  size?: number;
  flipped?: boolean;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`}>
      <g transform={flipped ? "scale(-1,1)" : ""}>
        <path d="M -10,-52 Q 0,-60 10,-52" fill="#92400e" />
        <circle
          cx={0}
          cy={-44}
          r={11}
          fill="#fbbf24"
          stroke="#78350f"
          strokeWidth={1.5}
        />
        <circle cx={-4} cy={-45} r={1.8} fill="#1c1917" />
        <circle cx={4} cy={-45} r={1.8} fill="#1c1917" />
        <path
          d="M -3,-40 Q 0,-37 3,-40"
          stroke="#1c1917"
          strokeWidth={1.2}
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={-33}
          x2={0}
          y2={-10}
          stroke="#1d4ed8"
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={-26}
          x2={-16}
          y2={-14}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={-26}
          x2={16}
          y2={-14}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={-3}
          y1={-10}
          x2={-9}
          y2={12}
          stroke="#1e40af"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <line
          x1={3}
          y1={-10}
          x2={9}
          y2={12}
          stroke="#1e40af"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}

function Girl({
  x,
  y,
  size = 1,
  flipped = false,
}: {
  x: number;
  y: number;
  size?: number;
  flipped?: boolean;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`}>
      <g transform={flipped ? "scale(-1,1)" : ""}>
        <ellipse cx={0} cy={-47} rx={14} ry={7} fill="#b45309" />
        <rect x={-14} y={-47} width={5} height={24} rx={3} fill="#b45309" />
        <rect x={9} y={-47} width={5} height={24} rx={3} fill="#b45309" />
        <circle
          cx={0}
          cy={-44}
          r={11}
          fill="#fbbf24"
          stroke="#78350f"
          strokeWidth={1.5}
        />
        <circle cx={-4} cy={-45} r={1.8} fill="#1c1917" />
        <circle cx={4} cy={-45} r={1.8} fill="#1c1917" />
        <line
          x1={-6}
          y1={-48}
          x2={-4}
          y2={-47}
          stroke="#1c1917"
          strokeWidth={1}
        />
        <line
          x1={4}
          y1={-47}
          x2={6}
          y2={-48}
          stroke="#1c1917"
          strokeWidth={1}
        />
        <path
          d="M -3,-40 Q 0,-37 3,-40"
          stroke="#1c1917"
          strokeWidth={1.2}
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={-33}
          x2={0}
          y2={-14}
          stroke="#e11d48"
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={-26}
          x2={-15}
          y2={-16}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={-26}
          x2={15}
          y2={-16}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <polygon points="-13,14 13,14 7,-14 -7,-14" fill="#fda4af" />
        <line
          x1={-4}
          y1={14}
          x2={-9}
          y2={30}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={4}
          y1={14}
          x2={9}
          y2={30}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}

function Heart({
  x,
  y,
  size = 1,
  color = "#f43f5e",
}: {
  x: number;
  y: number;
  size?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`}>
      <path
        d="M 0,-3 C -2,-8 -10,-7 -10,-1 C -10,5 0,12 0,14 C 0,12 10,5 10,-1 C 10,-7 2,-8 0,-3 Z"
        fill={color}
      />
    </g>
  );
}

function Scene1() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect width={400} height={260} fill="#fef9c3" />
      <rect
        x={0}
        y={225}
        width={400}
        height={35}
        fill="#fde68a"
        opacity={0.5}
      />
      <rect x={70} y={12} width={260} height={65} rx={5} fill="#14532d" />
      <text
        x={200}
        y={38}
        textAnchor="middle"
        fill="white"
        fontSize={12}
        fontFamily="sans-serif"
      >
        Conferencia
      </text>
      <line
        x1={90}
        y1={52}
        x2={200}
        y2={52}
        stroke="white"
        strokeWidth={1}
        opacity={0.4}
      />
      <line
        x1={90}
        y1={62}
        x2={160}
        y2={62}
        stroke="white"
        strokeWidth={1}
        opacity={0.4}
      />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={50 + col * 110}
            y={92 + row * 44}
            width={58}
            height={20}
            rx={4}
            fill="#a16207"
            opacity={0.45}
          />
        )),
      )}
      <Boy x={80} y={218} size={0.85} />
      <Girl x={298} y={128} size={0.85} flipped />
      <motion.path
        d="M 88 185 L 286 96"
        stroke="#f43f5e"
        strokeWidth={1.5}
        strokeDasharray="6,4"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.g
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-185, -210, -225, -245] }}
        transition={{ delay: 2.2, duration: 2.5 }}
        style={{ transformOrigin: "60px 185px" }}
      >
        <Heart x={60} y={185} size={1.4} color="#f43f5e" />
      </motion.g>
      <text
        x={80}
        y={240}
        textAnchor="middle"
        fontSize={9}
        fill="#92400e"
        fontWeight="bold"
      >
        Yo
      </text>
      <text
        x={298}
        y={148}
        textAnchor="middle"
        fontSize={9}
        fill="#92400e"
        fontWeight="bold"
      >
        Ella
      </text>
    </svg>
  );
}

function Scene2() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect width={400} height={260} fill="#fce7f3" />
      <rect
        x={0}
        y={225}
        width={400}
        height={35}
        fill="#fbcfe8"
        opacity={0.5}
      />
      <Boy x={105} y={218} size={0.95} />
      <rect x={116} y={170} width={28} height={48} rx={5} fill="#1c1917" />
      <rect x={119} y={173} width={22} height={36} rx={3} fill="#e0e7ff" />
      <rect
        x={124}
        y={178}
        width={12}
        height={12}
        rx={3}
        fill="none"
        stroke="#7c3aed"
        strokeWidth={1.5}
      />
      <circle
        cx={130}
        cy={184}
        r={3}
        fill="none"
        stroke="#7c3aed"
        strokeWidth={1.2}
      />
      <circle cx={135} cy={179} r={1} fill="#7c3aed" />
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
        style={{ transformOrigin: "155px 145px" }}
      >
        <rect x={155} y={118} width={180} height={55} rx={14} fill="white" />
        <polygon points="155,145 138,149 157,155" fill="white" />
        <text x={245} y={140} textAnchor="middle" fontSize={10} fill="#6b7280">
          Oye, ¿tú estudias ing.
        </text>
        <text x={245} y={154} textAnchor="middle" fontSize={10} fill="#6b7280">
          en sistemas? 😊
        </text>
        <text x={245} y={166} textAnchor="middle" fontSize={9} fill="#d1d5db">
          (ya sabía la respuesta 🤫)
        </text>
      </motion.g>
      <Girl x={300} y={218} size={0.95} flipped />
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <rect x={65} y={95} width={145} height={50} rx={14} fill="#fda4af" />
        <polygon points="210,120 228,115 210,132" fill="#fda4af" />
        <text x={138} y={118} textAnchor="middle" fontSize={10} fill="white">
          Sí! ¿Por qué preguntas? 😄
        </text>
        <text x={138} y={134} textAnchor="middle" fontSize={10} fill="white">
          (y así empezó todo ✨)
        </text>
      </motion.g>
      <motion.g
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.3 }}
      >
        <rect x={65} y={95} width={60} height={30} rx={14} fill="#e5e7eb" />
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={82 + i * 12}
            cy={110}
            r={3}
            fill="#9ca3af"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

function ScenePlan() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect width={400} height={260} fill="#fdf4ff" />
      <rect
        x={0}
        y={225}
        width={400}
        height={35}
        fill="#e9d5ff"
        opacity={0.4}
      />

      <Boy x={85} y={218} size={0.95} />

      <circle
        cx={102}
        cy={172}
        r={4}
        fill="white"
        stroke="#c084fc"
        strokeWidth={1.5}
      />
      <circle
        cx={116}
        cy={157}
        r={6}
        fill="white"
        stroke="#c084fc"
        strokeWidth={1.5}
      />
      <circle
        cx={134}
        cy={140}
        r={9}
        fill="white"
        stroke="#c084fc"
        strokeWidth={1.5}
      />

      <rect
        x={145}
        y={38}
        width={228}
        height={108}
        rx={18}
        fill="white"
        stroke="#c084fc"
        strokeWidth={2}
      />

      <rect x={162} y={58} width={46} height={34} rx={4} fill="#1c1917" />
      <rect x={162} y={58} width={46} height={10} rx={4} fill="#374151" />
      <line
        x1={171}
        y1={58}
        x2={167}
        y2={68}
        stroke="#fbbf24"
        strokeWidth={2}
      />
      <line
        x1={181}
        y1={58}
        x2={177}
        y2={68}
        stroke="#fbbf24"
        strokeWidth={2}
      />
      <line
        x1={191}
        y1={58}
        x2={187}
        y2={68}
        stroke="#fbbf24"
        strokeWidth={2}
      />
      <line
        x1={201}
        y1={58}
        x2={197}
        y2={68}
        stroke="#fbbf24"
        strokeWidth={2}
      />
      <text x={185} y={84} textAnchor="middle" fontSize={8} fill="white">
        Cine
      </text>

      <line
        x1={215}
        y1={77}
        x2={232}
        y2={77}
        stroke="#c084fc"
        strokeWidth={2}
      />
      <polygon points="232,72 242,77 232,82" fill="#c084fc" />

      <polygon points="252,62 285,62 285,92 252,92" fill="#fef08a" />
      <polygon points="247,65 268,46 289,65" fill="#ef4444" />
      <rect x={263} y={76} width={11} height={16} rx={2} fill="#a16207" />

      <line
        x1={292}
        y1={77}
        x2={309}
        y2={77}
        stroke="#c084fc"
        strokeWidth={2}
      />
      <polygon points="309,72 319,77 309,82" fill="#c084fc" />

      <Heart x={342} y={72} size={2.2} color="#f43f5e" />

      <motion.text
        x={259}
        y={132}
        textAnchor="middle"
        fontSize={11}
        fill="#7c3aed"
        fontStyle="italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        mi plan malévolo 😈
      </motion.text>

      <text
        x={80}
        y={240}
        textAnchor="middle"
        fontSize={9}
        fill="#92400e"
        fontWeight="bold"
      >
        Yo
      </text>
    </svg>
  );
}

function SceneRealization() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect width={400} height={260} fill="#fce7f3" />
      <rect
        x={0}
        y={225}
        width={400}
        height={35}
        fill="#fbcfe8"
        opacity={0.5}
      />

      <Boy x={88} y={218} size={0.92} />
      <Girl x={308} y={218} size={0.92} flipped />
      <rect x={284} y={170} width={26} height={44} rx={5} fill="#1c1917" />
      <rect x={287} y={173} width={20} height={33} rx={3} fill="#e0e7ff" />
      <rect
        x={290}
        y={177}
        width={11}
        height={11}
        rx={3}
        fill="none"
        stroke="#e11d48"
        strokeWidth={1.5}
      />
      <circle
        cx={295}
        cy={182}
        r={2.5}
        fill="none"
        stroke="#e11d48"
        strokeWidth={1.2}
      />
      <circle cx={300} cy={178} r={1} fill="#e11d48" />
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        style={{ transformOrigin: "178px 108px" }}
      >
        <rect x={18} y={48} width={252} height={96} rx={14} fill="#fda4af" />
        <polygon points="270,108 289,102 270,122" fill="#fda4af" />
        <text
          x={144}
          y={72}
          textAnchor="middle"
          fontSize={10.5}
          fill="white"
          fontWeight="bold"
        >
          Ahora todo tiene sentido
        </text>
        <text
          x={144}
          y={88}
          textAnchor="middle"
          fontSize={10.5}
          fill="white"
          fontWeight="bold"
        >
          jajajaja 😂
        </text>
        <text
          x={144}
          y={104}
          textAnchor="middle"
          fontSize={10.5}
          fill="white"
          fontWeight="bold"
        >
          tú no querias ser mi amiguillo
        </text>
      </motion.g>
      <motion.text
        x={108}
        y={165}
        fontSize={22}
        textAnchor="middle"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        style={{ transformOrigin: "108px 165px" }}
      >
        😅
      </motion.text>
    </svg>
  );
}

function Scene3() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <rect width={400} height={260} fill="url(#skyGrad)" />
      <circle cx={350} cy={38} r={22} fill="#fbbf24" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={350 + Math.cos(a) * 25}
            y1={38 + Math.sin(a) * 25}
            x2={350 + Math.cos(a) * 32}
            y2={38 + Math.sin(a) * 32}
            stroke="#fbbf24"
            strokeWidth={2}
          />
        );
      })}
      <ellipse cx={108} cy={288} rx={112} ry={152} fill="#86efac" />
      <ellipse cx={302} cy={292} rx={115} ry={168} fill="#4ade80" />
      <rect x={0} y={238} width={400} height={22} fill="#22c55e" />
      <motion.g
        initial={{ x: -30, y: 10 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 2.5, ease: "easeOut" }}
      >
        <Boy x={88} y={200} size={0.9} />
        <g transform="translate(104,155)">
          <line
            x1={0}
            y1={12}
            x2={0}
            y2={22}
            stroke="#15803d"
            strokeWidth={2}
          />
          <circle cx={0} cy={5} r={7} fill="#f43f5e" />
          <circle cx={-8} cy={0} r={6} fill="#fb923c" />
          <circle cx={8} cy={0} r={6} fill="#fbbf24" />
          <circle cx={0} cy={-7} r={5} fill="#c084fc" />
        </g>
      </motion.g>
      <Girl x={302} y={127} size={0.9} flipped />
      <text
        x={80}
        y={240}
        textAnchor="middle"
        fontSize={9}
        fill="#14532d"
        fontWeight="bold"
      >
        Yo
      </text>
      <text
        x={312}
        y={148}
        textAnchor="middle"
        fontSize={9}
        fill="#14532d"
        fontWeight="bold"
      >
        Ella
      </text>
    </svg>
  );
}

function Scene4() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect width={400} height={260} fill="#fdf4ff" />
      <rect
        x={0}
        y={225}
        width={400}
        height={35}
        fill="#e9d5ff"
        opacity={0.4}
      />
      <rect x={155} y={172} width={90} height={9} rx={4} fill="#a16207" />
      <line
        x1={185}
        y1={181}
        x2={185}
        y2={222}
        stroke="#a16207"
        strokeWidth={3}
      />
      <line
        x1={215}
        y1={181}
        x2={215}
        y2={222}
        stroke="#a16207"
        strokeWidth={3}
      />
      <Boy x={108} y={218} size={0.9} />
      <g transform="translate(124,158)">
        <polygon points="0,18 -7,0 7,0" fill="#c2410c" />
        <circle cx={0} cy={-4} r={11} fill="#fef08a" />
        <circle cx={-5} cy={-9} r={7} fill="#f9a8d4" />
      </g>
      <Girl x={292} y={218} size={0.9} flipped />
      <g transform="translate(274,158)">
        <polygon points="0,18 -7,0 7,0" fill="#c2410c" />
        <circle cx={0} cy={-4} r={11} fill="#a78bfa" />
        <circle cx={5} cy={-9} r={7} fill="#fda4af" />
      </g>
      <motion.g
        animate={{ opacity: [0, 1, 0.8, 1, 0] }}
        transition={{ delay: 0.5, duration: 4.5, times: [0, 0.2, 0.5, 0.8, 1] }}
      >
        {[0, 1, 2, 3, 4, 5].map((_, i) => {
          const left = i < 3;
          const xPos = left ? [145, 155, 168][i % 3] : [232, 245, 258][i % 3];
          const yPos = left ? [130, 118, 108][i % 3] : [108, 118, 130][i % 3];
          const r = [5, 7, 10][i % 3];
          const col = left ? "#c084fc" : "#f9a8d4";
          return (
            <circle
              key={i}
              cx={xPos}
              cy={yPos}
              r={r}
              fill={col}
              opacity={0.7}
            />
          );
        })}
      </motion.g>
      <motion.g
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1], y: [0, -30, -40] }}
        transition={{ delay: 2.5, duration: 2 }}
        style={{ transformOrigin: "200px 120px" }}
      >
        <Heart x={200} y={100} size={2.5} color="#f43f5e" />
      </motion.g>
    </svg>
  );
}

function Scene5() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect width={400} height={260} fill="#0f0a00" />
      <rect
        x={50}
        y={15}
        width={300}
        height={130}
        rx={6}
        fill="#fffbeb"
        opacity={0.92}
      />
      {[-20, 0, 20].map((offset, i) => (
        <line
          key={i}
          x1={200 + offset}
          y1={0}
          x2={200 + offset * 3}
          y2={15}
          stroke="#fbbf24"
          strokeWidth={1}
          opacity={0.2}
        />
      ))}
      <circle cx={170} cy={80} r={25} fill="#fbbf24" opacity={0.3} />
      <circle cx={240} cy={80} r={20} fill="#f87171" opacity={0.3} />
      <rect x={95} y={178} width={42} height={28} rx={6} fill="#7c2d12" />
      <rect x={263} y={178} width={42} height={28} rx={6} fill="#7c2d12" />
      <Boy x={116} y={222} size={0.85} />
      <Girl x={284} y={222} size={0.85} flipped />
      <motion.g
        initial={{ x: 0, y: 0, rotate: -8 }}
        animate={{ x: 100, y: -5, rotate: 8 }}
        transition={{ delay: 1.5, duration: 1.8, ease: "easeInOut" }}
        style={{ transformOrigin: "130px 175px" }}
      >
        <rect x={115} y={168} width={32} height={22} rx={7} fill="#1d4ed8" />
        <rect x={105} y={172} width={12} height={16} rx={4} fill="#1d4ed8" />
        <rect x={145} y={172} width={12} height={16} rx={4} fill="#1d4ed8" />
      </motion.g>
      {[90, 145, 200, 255, 310].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={65 + (i % 2) * 30}
          r={2}
          fill="#fbbf24"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.35 }}
        />
      ))}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <Heart x={200} y={158} size={1.6} color="#fda4af" />
      </motion.g>
    </svg>
  );
}

const STARS_6 = [
  { x: 22, y: 14, r: 1.5, d: 0.2 },
  { x: 52, y: 38, r: 2, d: 0.9 },
  { x: 88, y: 10, r: 1, d: 0.4 },
  { x: 118, y: 52, r: 1.5, d: 1.2 },
  { x: 154, y: 22, r: 2, d: 0.1 },
  { x: 176, y: 68, r: 1, d: 0.8 },
  { x: 210, y: 14, r: 2, d: 0.5 },
  { x: 242, y: 44, r: 1.5, d: 1.5 },
  { x: 268, y: 18, r: 1, d: 0.3 },
  { x: 302, y: 58, r: 2, d: 0.7 },
  { x: 322, y: 28, r: 1.5, d: 1.1 },
  { x: 352, y: 8, r: 1, d: 0.6 },
  { x: 378, y: 48, r: 2, d: 1.4 },
  { x: 30, y: 82, r: 1, d: 1.0 },
  { x: 72, y: 96, r: 1.5, d: 0.2 },
  { x: 112, y: 85, r: 1, d: 0.8 },
  { x: 192, y: 92, r: 2, d: 1.3 },
  { x: 262, y: 80, r: 1, d: 0.4 },
  { x: 312, y: 90, r: 1.5, d: 1.6 },
  { x: 392, y: 74, r: 1, d: 0.9 },
];

function Scene6() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <defs>
        <linearGradient id="night6" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="65%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      <rect width={400} height={260} fill="url(#night6)" />
      <rect x={0} y={220} width={400} height={40} fill="#14532d" />
      <ellipse cx={200} cy={235} rx={185} ry={12} fill="#166534" />
      <circle cx={345} cy={42} r={22} fill="#fef9c3" />
      <circle cx={354} cy={35} r={18} fill="#0f172a" />
      {STARS_6.map((s, i) => (
        <motion.circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="white"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, delay: s.d }}
        />
      ))}
      <motion.g
        initial={{ x: -90 }}
        animate={{ x: 30 }}
        transition={{ delay: 0.3, duration: 3.5, ease: "linear" }}
      >
        <motion.g
          animate={{ y: [0, -3, 0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 0.55, ease: "easeInOut" }}
        >
          <Boy x={158} y={218} size={0.9} />
          <Girl x={202} y={218} size={0.9} flipped />
          <line
            x1={170}
            y1={198}
            x2={190}
            y2={198}
            stroke="#fbbf24"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </motion.g>
      </motion.g>
      <motion.text
        x={200}
        y={115}
        textAnchor="middle"
        fontSize={11}
        fill="#fda4af"
        fontStyle="italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        ...pero no tanto como ella ✨
      </motion.text>
    </svg>
  );
}

const STARS_7 = [
  { x: 30, y: 28, r: 2.5, d: 0.2 },
  { x: 70, y: 55, r: 2, d: 0.8 },
  { x: 120, y: 20, r: 1.5, d: 0.4 },
  { x: 200, y: 35, r: 2, d: 1.1 },
  { x: 280, y: 18, r: 1.5, d: 0.6 },
  { x: 340, y: 48, r: 2, d: 0.3 },
  { x: 380, y: 22, r: 1, d: 1.3 },
  { x: 50, y: 85, r: 1.5, d: 0.9 },
  { x: 160, y: 70, r: 1, d: 1.5 },
  { x: 250, y: 80, r: 2, d: 0.2 },
  { x: 310, y: 65, r: 1, d: 0.7 },
  { x: 390, y: 80, r: 1.5, d: 1.0 },
];

function Scene7() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <defs>
        <linearGradient id="night7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0a1e" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width={400} height={260} fill="url(#night7)" />
      <rect x={0} y={222} width={400} height={38} fill="#14532d" />
      <rect x={128} y={207} width={144} height={9} rx={4} fill="#a16207" />
      <rect x={138} y={216} width={9} height={22} rx={3} fill="#92400e" />
      <rect x={253} y={216} width={9} height={22} rx={3} fill="#92400e" />
      <circle cx={48} cy={42} r={22} fill="#fef9c3" />
      <circle cx={57} cy={35} r={18} fill="#0c0a1e" />
      {STARS_7.map((s, i) => (
        <motion.circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#fef08a"
          animate={{ opacity: [0.4, 1, 0.4], r: [s.r, s.r * 1.3, s.r] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: s.d }}
        />
      ))}
      <Boy x={172} y={212} size={0.9} />
      <Girl x={232} y={212} size={0.9} flipped />
      {[0, 1, 2, 3].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, -40 - i * 18, -80 - i * 18] }}
          transition={{
            delay: 1.5 + i * 0.5,
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
          style={{ transformOrigin: `${185 + i * 10}px 180px` }}
        >
          <Heart
            x={185 + i * 10}
            y={180}
            size={1.2 + i * 0.2}
            color="#f43f5e"
          />
        </motion.g>
      ))}
      <motion.text
        x={246}
        y={174}
        textAnchor="middle"
        fontSize={18}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6, type: "spring" }}
        style={{ transformOrigin: "246px 174px" }}
      >
        ✨
      </motion.text>
    </svg>
  );
}

function Scene8() {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <defs>
        <linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="100%" stopColor="#fff7ed" />
        </linearGradient>
      </defs>
      <rect width={400} height={260} fill="url(#dawn)" />
      <rect x={0} y={222} width={400} height={38} fill="#86efac" />
      <rect x={248} y={145} width={115} height={82} rx={5} fill="#fde68a" />
      <polygon points="242,148 370,148 306,98" fill="#f87171" />
      <rect x={288} y={187} width={36} height={40} rx={4} fill="#92400e" />
      <circle cx={306} cy={207} r={3} fill="#fbbf24" />
      <rect x={256} y={160} width={22} height={22} rx={3} fill="#bfdbfe" />
      <rect x={340} y={160} width={22} height={22} rx={3} fill="#bfdbfe" />
      <motion.g
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 25, opacity: [1, 1, 0] }}
        transition={{
          delay: 1,
          duration: 1.8,
          ease: "easeIn",
          times: [0, 0.6, 1],
        }}
      >
        <Girl x={262} y={220} size={0.85} />
      </motion.g>
      <motion.g
        initial={{ x: 0 }}
        animate={{ x: -70 }}
        transition={{ delay: 1.5, duration: 2.8, ease: "easeOut" }}
      >
        <motion.g
          animate={{ y: [0, -3, 0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 0.55, ease: "easeInOut" }}
        >
          <Boy x={150} y={220} size={0.9} />
        </motion.g>
        {[0, 1, 2].map((i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -30, -55] }}
            transition={{
              delay: 2.2 + i * 0.5,
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            style={{ transformOrigin: `${138 + i * 12}px 185px` }}
          >
            <Heart x={138 + i * 12} y={185} size={1.1} color="#f43f5e" />
          </motion.g>
        ))}
      </motion.g>
      <motion.text
        x={140}
        y={65}
        textAnchor="middle"
        fontSize={13}
        fill="#be185d"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.2 }}
      >
        ...el hombre más feliz 💕
      </motion.text>
    </svg>
  );
}

const SCENES = [
  {
    id: 0,
    Component: Scene1,
    bg: "from-amber-50 to-yellow-100",
    text: "La vi sentada en una conferencia... y no pude dejar de mirarla.",
    dark: false,
    duration: 13000,
  },
  {
    id: 1,
    Component: Scene2,
    bg: "from-pink-50 to-fuchsia-100",
    text: "Me animé a escribirle en Instagram preguntándole si estudiaba ing. en sistemas... sabiendo perfectamente que sí. 🤫",
    dark: false,
    duration: 13000,
  },
  {
    id: 2,
    Component: ScenePlan,
    bg: "from-purple-50 to-fuchsia-100",
    text: "La invité al cine... pero tenía un plan malévolo: al llevarla a su casa después de la película, darle un besito. 😈",
    dark: false,
    duration: 13000,
  },
  {
    id: 3,
    Component: SceneRealization,
    bg: "from-pink-50 to-rose-100",
    text: 'Pero se dio cuenta de que me encantaba esa mujer y arruino mi plan malévolo: "Ahora todo tiene sentido jajajaja, tú no querias ser mi amiguillo." 💀 - Efectivamente tenia razón',
    dark: false,
    duration: 13000,
  },
  {
    id: 4,
    Component: Scene3,
    bg: "from-green-50 to-emerald-100",
    text: "Fui por ella con un ramo de flores. Para llegar a su casa había dos subidas bien empinadas — subías una y en seguida venía la otra.",
    dark: false,
    duration: 14000,
  },
  {
    id: 3,
    Component: Scene4,
    bg: "from-purple-50 to-pink-100",
    text: "Después fuimos por un helado, platicamos bastante... y de ahí me di cuenta que la quería.",
    dark: false,
    duration: 14000,
  },
  {
    id: 4,
    Component: Scene5,
    bg: "from-gray-950 to-stone-900",
    text: "Nos fuimos al cine y dentro de la película le di mi suéter, el cual llevé especialmente para ella.",
    dark: true,
    duration: 14000,
  },
  {
    id: 5,
    Component: Scene6,
    bg: "from-indigo-950 to-slate-900",
    text: "Saliendo nos fuimos a caminar en el negro de la noche con las hermosas estrellas... pero no tanto como ella.",
    dark: true,
    duration: 14000,
  },
  {
    id: 6,
    Component: Scene7,
    bg: "from-indigo-950 to-purple-950",
    text: "Llegamos a un punto donde nos sentamos, y fue ahí donde le afirmé lo bonita que se veía al sonreír... mientras nos besábamos. 💋",
    dark: true,
    duration: 15000,
  },
  {
    id: 7,
    Component: Scene8,
    bg: "from-rose-50 to-pink-100",
    text: "Por último la llevé a su casa y me fui de ahí siendo el hombre más feliz.",
    dark: false,
    duration: 13000,
  },
];

const TRIBUTE_LINES = [
  {
    text: "Que bonito fue...",
    delay: 0.5,
    size: "text-2xl md:text-3xl",
    color: "",
    style: { color: "var(--color-muted)" },
  },
  {
    text: "cada momento contigo.",
    delay: 1.5,
    size: "text-2xl md:text-3xl",
    color: "",
    style: { color: "var(--color-muted)" },
  },
  {
    text: "Feliz Cumpleaños",
    delay: 3,
    size: "text-5xl md:text-6xl font-cursive",
    color: "",
    style: { color: "var(--color-terracotta)" },
  },
  {
    text: "Litzy",
    delay: 4,
    size: "text-6xl md:text-7xl font-cursive",
    color: "",
    style: { color: "var(--color-wine)" },
  },
  {
    text: "Que este día sea tan especial como tú. 🌸",
    delay: 5.5,
    size: "text-base md:text-lg",
    color: "",
    style: { color: "var(--color-muted)", fontStyle: "italic" as const },
  },
];

const FLOATING_ITEMS = [
  { emoji: "🎈", x: 8, delay: 0.2, dur: 7 },
  { emoji: "💖", x: 18, delay: 1.1, dur: 8 },
  { emoji: "🌸", x: 32, delay: 0.5, dur: 6 },
  { emoji: "✨", x: 48, delay: 1.8, dur: 9 },
  { emoji: "🎉", x: 62, delay: 0.3, dur: 7 },
  { emoji: "💕", x: 75, delay: 1.4, dur: 8 },
  { emoji: "🎀", x: 88, delay: 0.8, dur: 6 },
  { emoji: "⭐", x: 95, delay: 2.0, dur: 9 },
];

function Tribute({ onConfetti }: { onConfetti: () => void }) {
  useEffect(() => {
    onConfetti();
  }, [onConfetti]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 140% 90% at 50% 45%, oklch(97.2% 0.013 78) 0%, oklch(91% 0.055 18) 100%)",
        }}
      />

      {FLOATING_ITEMS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl sm:text-3xl select-none pointer-events-none"
          style={{ left: `${f.x}%`, bottom: "-2rem" }}
          animate={{ y: [0, -900] }}
          transition={{
            duration: f.dur,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {f.emoji}
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 10,
          times: [0, 0.1, 0.75, 1],
          ease: "easeInOut",
        }}
      >
        {TRIBUTE_LINES.map((line, i) => (
          <motion.p
            key={i}
            className={`${line.size} leading-snug drop-shadow`}
            style={{
              ...line.style,
              fontStyle: line.style?.fontStyle ?? "italic",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: line.delay, duration: 0.9, ease: "easeOut" }}
          >
            {line.text}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ duration: 12, times: [0, 0.75, 1], ease: "easeOut" }}
      >
        <motion.p
          className="font-cursive drop-shadow-lg text-center px-4"
          style={{
            fontSize: "clamp(5rem, 22vw, 9rem)",
            color: "var(--color-wine)",
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 0.8, 1] }}
          transition={{ duration: 12, times: [0, 0.75, 1], ease: "easeOut" }}
        >
          Adiós.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 13, duration: 1 }}
      >
        <Link
          href="/"
          className="text-sm underline"
          style={{ fontStyle: "italic" }}
        >
          ← Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}

export default function HistoriaPage() {
  const [current, setCurrent] = useState(-1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const start = () => {
    setCurrent(0);
    if (audioRef.current) {
      audioRef.current.volume = 0.45;
      audioRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    if (current < 0 || current >= SCENES.length) return;
    const timer = setTimeout(
      () => setCurrent((c) => c + 1),
      SCENES[current].duration,
    );
    return () => clearTimeout(timer);
  }, [current]);

  const scene =
    current >= 0 && current < SCENES.length ? SCENES[current] : null;
  const bgClass = scene ? scene.bg : "from-rose-50 to-pink-100";
  const isDark = scene?.dark ?? false;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-1000 bg-gradient-to-br ${bgClass} relative`}
    >
      <audio ref={audioRef} src="/cancion.mp3" />

      {current >= 0 && current < SCENES.length && (
        <Link
          href="/"
          className="absolute top-4 left-4 text-sm px-3 py-1 backdrop-blur-sm transition-colors"
          style={{
            color: isDark ? "oklch(97% 0.012 75 / 0.6)" : "var(--color-muted)",
            letterSpacing: "0.06em",
            borderRadius: "2px",
          }}
        >
          ← Volver
        </Link>
      )}

      {current === -1 && (
        <motion.div
          className="flex flex-col items-center gap-7 px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-cursive"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 4.2rem)",
              color: "var(--color-wine)",
              lineHeight: 1.15,
              maxWidth: "16ch",
            }}
          >
            La historia que no me canso de contar
          </p>

          {/* Ornament */}
          <div className="flex items-center gap-4">
            <span
              className="block h-px w-12"
              style={{
                backgroundColor: "var(--color-terracotta)",
                opacity: 0.5,
              }}
            />
            <span
              style={{ color: "var(--color-terracotta)", fontSize: "0.8rem" }}
            >
              ✦
            </span>
            <span
              className="block h-px w-12"
              style={{
                backgroundColor: "var(--color-terracotta)",
                opacity: 0.5,
              }}
            />
          </div>

          <p
            className="max-w-xs leading-relaxed"
            style={{
              color: "var(--color-muted)",
              fontStyle: "italic",
              fontSize: "1.05rem",
            }}
          >
            Una historia contada con monitos y mucho cariño 💕
          </p>

          <motion.button
            onClick={start}
            className="flex items-center justify-center gap-3 px-12 sm:px-16 py-4 cursor-pointer w-full sm:w-auto sm:min-w-[260px]"
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
            transition={{ duration: 0.22 }}
          >
            <span className="text-base">▶</span>
            <span>Comenzar</span>
          </motion.button>

          <p
            className="text-sm"
            style={{ color: "var(--color-muted)", fontStyle: "italic" }}
          >
            🎵 Activa el sonido para la experiencia completa
          </p>
          <Link
            href="/"
            className="text-sm underline mt-1"
            style={{ color: "var(--color-muted)" }}
          >
            ← Volver al inicio
          </Link>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {scene && (
          <motion.div
            key={current}
            className="w-full max-w-lg px-4 flex flex-col items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className={`w-full overflow-hidden ${isDark ? "border border-white/10" : "border border-[var(--color-border)]"}`}
              style={{
                borderRadius: "1rem",
                boxShadow: isDark
                  ? "0 8px 48px oklch(0% 0 0 / 0.45)"
                  : "0 6px 40px oklch(32% 0.115 10 / 0.10)",
              }}
            >
              <scene.Component />
            </div>

            <motion.p
              className="text-center px-2 max-w-sm"
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                lineHeight: 1.7,
                color: isDark
                  ? "oklch(97% 0.012 75 / 0.92)"
                  : "var(--color-wine)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {scene.text}
            </motion.p>

            <div className="flex gap-2 items-center">
              {SCENES.map((_, i) => (
                <div
                  key={i}
                  className="transition-all duration-500"
                  style={{
                    height: "2px",
                    width: i === current ? "2rem" : "0.6rem",
                    borderRadius: "2px",
                    backgroundColor:
                      i === current
                        ? "var(--color-wine)"
                        : i < current
                          ? "var(--color-terracotta)"
                          : "var(--color-border)",
                    opacity: i > current ? 0.6 : 1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {current >= SCENES.length && (
        <Tribute
          onConfetti={() => {
            import("canvas-confetti").then(({ default: confetti }) => {
              const end = Date.now() + 4000;
              const frame = () => {
                confetti({
                  particleCount: 5,
                  angle: 60,
                  spread: 80,
                  origin: { x: 0 },
                  colors: [
                    "#f9a8d4",
                    "#f43f5e",
                    "#c084fc",
                    "#fb923c",
                    "#fbbf24",
                  ],
                });
                confetti({
                  particleCount: 5,
                  angle: 120,
                  spread: 80,
                  origin: { x: 1 },
                  colors: [
                    "#f9a8d4",
                    "#f43f5e",
                    "#c084fc",
                    "#fb923c",
                    "#fbbf24",
                  ],
                });
                if (Date.now() < end) requestAnimationFrame(frame);
              };
              frame();
            });
          }}
        />
      )}
    </div>
  );
}
