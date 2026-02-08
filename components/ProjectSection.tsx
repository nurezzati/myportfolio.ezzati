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
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className="grid min-h-[60vh] grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
      {/* Image column — ~60% visual weight */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[60vh]"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"
          style={{
            backgroundImage: project.accent
              ? `linear-gradient(135deg, ${project.accent}22 0%, transparent 50%), linear-gradient(to bottom right, #27272a, #18181b)`
              : undefined,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold tracking-tighter text-white/10 lg:text-8xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      {/* Sticky text column */}
      <div className="flex flex-col justify-center lg:sticky lg:top-[20vh] lg:max-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/50">
            {project.tagline}
          </p>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="mb-6 max-w-md text-white/70">{project.description}</p>
          <ul className="mb-6 flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((f) => (
              <li
                key={f}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {f}
              </li>
            ))}
          </ul>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
            whileHover={{ x: 4 }}
          >
            View case study <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
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
      className="relative border-t border-white/10 bg-[#0c0c0c] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.header
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/50">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects
          </h2>
        </motion.header>

        <div className="space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
