"use client";

import { motion } from "framer-motion";

interface GerberaProps {
  color?: string;
  innerColor?: string;
  size?: number;
  delay?: number;
}

export default function Gerbera({
  color = "#f43f5e",
  innerColor = "#fb923c",
  size = 80,
  delay = 0,
}: GerberaProps) {
  const cx = size / 2;
  const cy = size / 2;
  const outerPetals = 18;
  const innerPetals = 18;
  const petalW = size * 0.1;
  const petalH = size * 0.4;
  const outerR = size * 0.27;
  const innerPetalH = size * 0.19;
  const innerR = size * 0.155;
  const centerR = size * 0.13;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: 1 }}
      transition={{
        scale: { delay, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] },
        opacity: { delay, duration: 0.4 },
      }}
    >
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ rotate: 360 }}
        transition={{
          delay: delay + 1,
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: outerPetals }).map((_, i) => {
          const angle = (360 / outerPetals) * i;
          const rad = (angle * Math.PI) / 180;
          const px = +(cx + Math.sin(rad) * outerR).toFixed(3);
          const py = +(cy - Math.cos(rad) * outerR).toFixed(3);
          return (
            <motion.ellipse
              key={`op-${i}`}
              cx={px}
              cy={py}
              rx={petalW / 2}
              ry={petalH / 2}
              fill={color}
              transform={`rotate(${angle}, ${px}, ${py})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{
                delay: delay + 0.1 + i * 0.045,
                duration: 0.5,
                times: [0, 0.5, 0.75, 1],
              }}
            />
          );
        })}

        {Array.from({ length: innerPetals }).map((_, i) => {
          const angle = (360 / innerPetals) * i + 10;
          const rad = (angle * Math.PI) / 180;
          const px = +(cx + Math.sin(rad) * innerR).toFixed(3);
          const py = +(cy - Math.cos(rad) * innerR).toFixed(3);
          return (
            <motion.ellipse
              key={`ip-${i}`}
              cx={px}
              cy={py}
              rx={petalW * 0.4}
              ry={innerPetalH / 2}
              fill={innerColor}
              opacity={0.9}
              transform={`rotate(${angle}, ${px}, ${py})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{
                delay: delay + 0.95 + i * 0.03,
                duration: 0.3,
              }}
            />
          );
        })}
      </motion.g>

      <motion.circle
        cx={cx}
        cy={cy}
        r={centerR}
        fill="#3d0c02"
        animate={{ r: [centerR * 0.9, centerR * 1.08, centerR * 0.9] }}
        transition={{
          delay: delay + 1.2,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <circle cx={cx} cy={cy} r={centerR * 0.55} fill="#7c2d12" opacity={0.8} />
      <motion.circle
        cx={cx - centerR * 0.28}
        cy={cy - centerR * 0.28}
        r={centerR * 0.22}
        fill="#a16207"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          delay: delay + 1.2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
