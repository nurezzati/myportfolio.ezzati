import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const syne = Syne({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nur Ezzati — Freelance Front-End Engineer",
  description:
    "I transform bold ideas into high-performance digital reality. UI/UX implementation, performance optimization, custom animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jakarta.variable} ${outfit.variable} ${syne.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
