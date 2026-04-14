"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};


export default function Home() {
  return (
    <div className="page-bg grain min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 text-center sm:px-8 lg:px-12"
      >
        <motion.div
          className="mx-auto flex w-full max-w-2xl flex-col items-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="font-hero bg-gradient-to-r from-white via-white to-indigo-200/90 bg-clip-text text-transparent">
              Nur Ezzati
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50 sm:text-base"
          >
            Front end developer
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-lg text-white/60 sm:text-xl"
          >
            I design and develop websites while you focus on your business.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0a0b] transition-shadow hover:shadow-lg hover:shadow-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-[var(--border-hover)] bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <ProjectSection />

      {/* Footer CTA */}
      <footer
        id="contact"
        className="relative border-t border-[var(--border)] bg-[var(--surface)]/50 py-24 backdrop-blur-sm lg:py-32"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.a
            href="mailto:hello@ezzati.dev"
            className="group relative inline-block"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative z-10 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s work together
            </span>
            <span
              className="absolute -inset-3 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 65%)",
              }}
            />
          </motion.a>
          <motion.p
            className="mt-5 text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <a
              href="mailto:hello@ezzati.dev"
              className="text-white/60 transition-colors hover:text-white"
            >
              hello@ezzati.dev
            </a>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
