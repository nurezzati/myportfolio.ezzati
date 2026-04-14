"use client";

import { motion, useScroll } from "framer-motion";
import { projects } from "@/constants/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      className="group grid min-h-[50vh] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:min-h-[55vh]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image area — ~60% weight */}
      <a
        href={project.link ?? "#"}
        target={project.link && project.link !== "#" ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
        className="block"
      >
        <div
          className="relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-black/30 lg:aspect-video"
        >
          {imgError ? (
            /* ── Placeholder shown until screenshot is added ── */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20"
              style={{
                background: project.accent
                  ? `linear-gradient(135deg, ${project.accent}18 0%, rgba(10,10,11,0.9) 100%)`
                  : "rgba(18,18,20,0.9)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs font-medium text-white/30">
                Add screenshot → public/screenshots/project-{index + 1}.png
              </span>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority={index === 0}
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 rounded-2xl border border-white/[0.06] transition-colors group-hover:border-white/[0.1]" />
        </div>
      </a>
      {/* Sticky text */}
      <div className="flex flex-col justify-start pt-12 lg:sticky lg:top-[18vh] lg:max-h-[55vh]">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
          {project.tagline}
        </p>
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
        <motion.a
          href={project.link ?? "#"}
          target={project.link && project.link !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          whileHover={{ x: 4 }}
        >
          View website
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
