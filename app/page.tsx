"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import {
  Palette,
  Zap,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const services = [
  {
    title: "UI/UX Implementation",
    description: "Pixel-perfect interfaces from Figma to production with attention to spacing, typography, and interaction states.",
    icon: Palette,
  },
  {
    title: "Performance Optimization",
    description: "Fast loads, smooth scrolls, and minimal layout shift. Core Web Vitals and bundle size in mind.",
    icon: Zap,
  },
  {
    title: "Custom Animations",
    description: "Scroll-driven motion, micro-interactions, and branded transitions that feel intentional and polished.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col justify-end px-6 pb-32 pt-24 lg:px-12"
      >
        <motion.div
          className="mx-auto w-full max-w-6xl"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50"
          >
            Freelance Front-End Engineer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            EZZATI
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg text-white/70 sm:text-xl md:text-2xl"
          >
            I transform bold ideas into high-performance digital reality.
          </motion.p>
        </motion.div>
      </section>

      {/* Service List */}
      <section className="border-t border-white/10 bg-[#0c0c0c] py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.header
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/50">
              What I do
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Services
            </h2>
          </motion.header>

          <div className="grid gap-12 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <service.icon className="h-6 w-6 text-white/80" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/60">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — Vertical Scroll Gallery */}
      <ProjectSection />

      {/* Footer CTA */}
      <footer id="contact" className="border-t border-white/10 bg-[#0a0a0a] py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <motion.a
            href="mailto:hello@ezzati.dev"
            className="group relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative z-10 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Work Together
            </span>
            <span
              className="absolute -inset-4 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)",
                boxShadow: "0 0 60px rgba(255,255,255,0.1)",
              }}
            />
          </motion.a>
          <motion.p
            className="mt-6 text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            hello@ezzati.dev
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
