import type { Metadata } from "next";
import { Pinyon_Script, EB_Garamond } from "next/font/google";
import "./globals.css";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feliz Cumpleaños Litzy 🎂",
  description: "Un regalo especial para tu día especial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${pinyonScript.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
