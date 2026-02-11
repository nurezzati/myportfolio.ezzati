"use client";

import { motion, useScroll } from "framer-motion";
import { projects } from "@/constants/projects";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.article
      className="group grid min-h-[50vh] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:min-h-[55vh]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image area — ~60% weight */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[55vh]"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{
            background: project.accent
              ? `linear-gradient(135deg, ${project.accent}18 0%, transparent 45%), linear-gradient(160deg, #1c1c1e 0%, #0f0f10 100%)`
              : "linear-gradient(160deg, #1c1c1e 0%, #0f0f10 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-bold tracking-tighter text-white/[0.06] lg:text-8xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-0 rounded-2xl border border-white/[0.06] transition-colors group-hover:border-white/[0.1]" />
      </motion.div>

      {/* Sticky text */}
      <div className="flex flex-col justify-center lg:sticky lg:top-[18vh] lg:max-h-[55vh]">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
          {project.tagline}
        </p>
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-lg border border-[var(--border)] bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
            >
              {f}
            </span>
          ))}
        </div>
        <motion.a
          href="#"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          whileHover={{ x: 4 }}
        >
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function ProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-t border-[var(--border)] bg-[var(--surface)]/60 py-24 backdrop-blur-sm lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.header
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
        </motion.header>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
