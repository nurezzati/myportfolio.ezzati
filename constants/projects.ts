export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "EVERLOOM",
    tagline: "E-commerce platform",
    description:
      "A premium minimalist e-commerce platform for curated fashion collections. It streamlines the shopping experience by replacing cluttered interfaces with high-contrast, brutalist design and effortless navigation.",
    image: "/screenshots/project-1.png",
    accent: "#c9a962",
    link: "https://everloom-web.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-2",
    title: "STRYDE",
    tagline: "fitness brand for runners",
    description:
      "A high-performance landing page for a technical running apparel brand. It solves the challenge of effectively showcasing garment technology by using body-mapped visuals and data-driven performance highlights.",
    image: "/screenshots/project-2.png",
    accent: "#6ee7b7",
    link: "https://stryde-web.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-3",
    title: "FORGED",
    tagline: "CrossFit website",
    description:
      "A raw, high-intensity landing page for a CrossFit gym. It addresses the need for community accountability by integrating daily workout updates (WOD) and real member transformations into a bold, unbreakable aesthetic.",
    image: "/screenshots/project-3.png",
    accent: "#a78bfa",
    link: "https://forged-io.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-4",
    title: "CAKEKL",
    tagline: "Dessert website for a patisserie in KL",
    description:
      "An artisanal patisserie showcase that highlights bespoke cakes in Kuala Lumpur. It bridges the gap between traditional French technique and local flavors through an immersive, edible gallery and visual experience",
    image: "/screenshots/project-4.png",
    accent: "#f472b6",
    link: "https://cakekl.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-5",
    title: "AXIOM",
    tagline: "Robotic website",
    description:
      "A futuristic industrial landing page for Malaysia's first humanoid robot. It solves the complexity of technical marketing by breaking down sub-millimetre precision and safety certifications into clear, high-impact engineering pillars.",
    image: "/screenshots/project-5.png",
    accent: "#38bdf8",
    link: "https://axiomio.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-6",
    title: "DEGLAMPING",
    tagline: "Glamping websitE",
    description:
      "A conscious luxury forest retreat website featuring a seamless booking and exploration flow. It offers a digital sanctuary that reflects the off-grid experience, focusing on stillness and the restorative power of forest bathing.",
    image: "/screenshots/project-6.png",
    accent: "#fb923c",
    link: "https://deglamping.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-7",
    title: "THREADKEEP",
    tagline: "PWA to organize and sort Thread post",
    description:
      "A minimalist mini-SaaS PWA designed for heavy-duty text collection from social media. It solves the problem of content hoarding by providing a smart clipboard and Share Target API for instant, organized post saving",
    image: "/screenshots/project-7.png",
    accent: "#34d399",
    link: "https://threadkeep.vercel.app/", // TODO: replace with real URL
  },
  {
    id: "project-8",
    title: "INNAI",
    tagline: "E-commerce platform clone",
    description:
      "Website clone for https://www.innaiandco.com/. Images and videos credit to innaiandco.com. A sophisticated fashion e-commerce clone celebrating modern modest wear.",
    image: "/screenshots/project-8.png",
    accent: "#e879f9",
    link: "https://innai.vercel.app/", // TODO: replace with real URL
  },
];
