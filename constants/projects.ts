export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  accent?: string;
}

export const projects: Project[] = [
  {
    id: "luxe-commerce",
    title: "Luxe Commerce",
    tagline: "High-end e-commerce for boutique brands",
    description:
      "A premium storefront built for a luxury fashion brand. Every scroll and interaction was crafted to feel tactile and editorial—parallax hero imagery, smooth product reveals, and a custom Add to Cart interaction that feels like handling real product.",
    features: [
      "Parallax image scrolling",
      "Custom Add to Cart interaction",
      "Editorial product layouts",
      "High-fidelity checkout flow",
    ],
    tech: ["Next.js", "Tailwind", "Framer Motion", "Stripe"],
    image: "/projects/luxe-commerce.jpg",
    accent: "#c9a962",
  },
  {
    id: "studio-flow",
    title: "Studio Flow",
    tagline: "Project management for creative agencies",
    description:
      "A dark-mode-first project management tool designed for studios that live in Figma and Slack. Drag-and-drop boards, real-time status, and a UI that stays out of the way so creatives can focus on the work.",
    features: [
      "Drag-and-drop interface mockups",
      "Sleek dark-mode UI",
      "Real-time collaboration",
      "Customizable boards & views",
    ],
    tech: ["React", "Node", "PostgreSQL", "WebSockets"],
    image: "/projects/studio-flow.jpg",
    accent: "#6ee7b7",
  },
  {
    id: "nova-landing",
    title: "Nova Landing",
    tagline: "High-conversion SaaS landing",
    description:
      "A conversion-optimized landing page for a B2B SaaS product. Scroll-triggered animations guide the eye, social proof builds trust, and a prominent Pricing Toggle lets visitors compare plans without leaving the fold.",
    features: [
      "Interactive scroll-triggered animations",
      "Pricing Toggle component",
      "Social proof & testimonials",
      "Sticky CTA & lead capture",
    ],
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    image: "/projects/nova-landing.jpg",
    accent: "#a78bfa",
  },
];
