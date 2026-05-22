import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
