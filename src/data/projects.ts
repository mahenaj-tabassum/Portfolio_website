export type ProjectCategory = "Full Stack" | "Frontend";

export const CATEGORIES: ProjectCategory[] = ["Full Stack", "Frontend"];

type Note = { title: string; detail: string };

export type Project = {
  /** Used in the URL: /projects/<slug> and as the default image: public/<slug>.png */
  slug: string;
  title: string;
  /** Short project type shown under the title */
  type: string;
  category: ProjectCategory;
  /** One or two lines, shown on the list row */
  summary: string;
  /** Longer text, shown on the detail page */
  description: string;
  techStack: string[];
  /** Overrides the default public/<slug>.png */
  image?: string;
  liveUrl?: string;
  /** Client repository only. The button is hidden when this is missing. */
  githubUrl?: string;
  challenges: Note[];
  improvements: Note[];
};

// NOTE: challenges / improvements below are DRAFTS written from each project's
// nature. Edit them so they describe what you really went through.
// Items marked TODO still need your real details.

export const PROJECTS: Project[] = [
  {
    slug: "wanderlust",
    title: "Wanderlust",
    type: "Travel destination platform",
    category: "Full Stack",
    summary:
      "A full-stack travel app where people can browse destinations and manage their own, backed by a custom REST API.",
    description:
      "Wanderlust is a full-stack travel destination app. The Next.js frontend handles browsing, authentication and destination management, and talks to a REST API built with Express and MongoDB. Sign-in is handled with Better Auth, and the API uses JWT to protect private routes.",
    techStack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Better Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    // TODO: add live link
    // liveUrl: "",
    // TODO: add GitHub (client) link
    // githubUrl: "",
    challenges: [
      {
        title: "Connecting two authentication layers",
        detail:
          "Making Better Auth on the client work with JWT checks on the Express API meant handling tokens, protected routes and CORS carefully.",
      },
      {
        title: "Keeping the frontend and API in sync",
        detail:
          "Destination data had to stay consistent between the forms, the API and the database, so validation lives on both sides.",
      },
    ],
    improvements: [
      {
        title: "Image uploads",
        detail:
          "Let users upload photos for a destination instead of pasting image links.",
      },
      {
        title: "Search, filters and pagination",
        detail:
          "Make it easy to find a place by name, country or type as the list grows.",
      },
      {
        title: "Favourites and reviews",
        detail:
          "Let signed-in users save destinations and leave short reviews.",
      },
    ],
  },
  {
    slug: "handstogether",
    title: "HandsTogether",
    type: "Community web application",
    category: "Full Stack",
    // TODO: replace with a real 1-2 line summary of HandsTogether
    summary:
      "A community-focused web application built with the MERN stack. (TODO: update this summary)",
    // TODO: replace with a real description of HandsTogether
    description:
      "TODO: describe what HandsTogether does, who it is for, and what you built.",
    // TODO: confirm the real tech stack
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    // TODO: add live link
    // liveUrl: "",
    // TODO: add GitHub (client) link
    // githubUrl: "",
    challenges: [
      // TODO: replace with your real challenges
      {
        title: "TODO: a real challenge",
        detail: "What went wrong or was hard, and how you solved it.",
      },
      {
        title: "TODO: another challenge",
        detail: "What went wrong or was hard, and how you solved it.",
      },
    ],
    improvements: [
      // TODO: replace with your real plans
      {
        title: "TODO: a future improvement",
        detail: "What you would add or fix next, and why.",
      },
      {
        title: "TODO: another improvement",
        detail: "What you would add or fix next, and why.",
      },
    ],
  },
  {
    slug: "the-daily-brief",
    title: "The Daily Brief",
    type: "News reader app",
    category: "Frontend",
    summary:
      "A news reading app that pulls live headlines from a third-party API into a clean, responsive layout.",
    // TODO: confirm this matches what The Daily Brief really does
    description:
      "The Daily Brief is a frontend app that fetches headlines from an external API and presents them in a clean, easy-to-scan layout. I built the whole interface and the API integration, including loading and error states.",
    // TODO: confirm the real tech stack
    techStack: ["React", "Tailwind CSS", "REST API"],
    // TODO: add live link
    // liveUrl: "",
    // TODO: add GitHub (client) link
    // githubUrl: "",
    challenges: [
      {
        title: "Handling unreliable API data",
        detail:
          "Some articles arrive without images or descriptions, so the layout needed sensible fallbacks.",
      },
      {
        title: "Loading, empty and error states",
        detail:
          "Every request can be slow or fail, so each screen shows clear feedback instead of a blank page.",
      },
    ],
    improvements: [
      {
        title: "Categories and search",
        detail: "Let readers filter headlines by topic or search by keyword.",
      },
      {
        title: "Saved articles",
        detail: "Allow readers to bookmark stories and read them later.",
      },
      {
        title: "Response caching",
        detail: "Cache API responses to load faster and respect rate limits.",
      },
    ],
  },
  {
    slug: "gym-website",
    title: "Gym Website",
    type: "Fitness website",
    category: "Frontend",
    summary:
      "A modern fitness website showcasing programs, trainers, membership plans and facilities.",
    description:
      "A modern, responsive fitness website designed to showcase gym programs, trainers, membership plans and facilities, with an engaging user experience from the first screen to the sign-up call to action.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ironforge-gym-website-eta.vercel.app/",
    githubUrl: "https://github.com/mahenaj-tabassum/Gym_website",
    challenges: [
      {
        title: "Responsive layouts for dense content",
        detail:
          "Plans, trainers and programs had to stay readable from large screens down to small phones.",
      },
      {
        title: "Animation without slowing the page",
        detail:
          "I kept interactions smooth by animating only what helps, and avoiding heavy effects.",
      },
    ],
    improvements: [
      {
        title: "Working membership sign-up",
        detail: "Connect the plans to a real form and backend.",
      },
      {
        title: "Class schedule",
        detail: "Add a timetable so visitors can see and book sessions.",
      },
    ],
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    type: "Restaurant website",
    category: "Frontend",
    summary:
      "A premium, responsive restaurant website with a curated menu, chef story, gallery, testimonials and table reservations.",
    description:
      "A premium responsive restaurant website featuring a curated menu, the chef's story, a photo gallery, testimonials and a table reservation section, designed to make a good first impression and drive bookings.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://resaurant-ivory.vercel.app/",
    // TODO: add GitHub (client) link
    // githubUrl: "",
    challenges: [
      {
        title: "Making a menu easy to scan",
        detail:
          "Dishes, prices and descriptions needed a clear hierarchy that still feels elegant on mobile.",
      },
      {
        title: "A gallery that stays fast",
        detail:
          "Many large photos meant careful sizing and loading so the page does not feel heavy.",
      },
    ],
    improvements: [
      {
        title: "Real reservations",
        detail:
          "Send bookings to a backend with email confirmation instead of a front-end-only form.",
      },
      {
        title: "Online menu management",
        detail: "Let the restaurant update dishes without touching code.",
      },
    ],
  },
  {
    slug: "travel-photographer",
    title: "Travel Photographer Portfolio",
    type: "Photography portfolio",
    category: "Frontend",
    summary:
      "A visually immersive portfolio showcasing destinations, curated photo collections and a personal creative journey.",
    description:
      "A visually immersive portfolio website showcasing breathtaking destinations, curated photography collections and a personal creative journey, built so the photos stay the focus on every screen size.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://photographer-portfolio-khaki.vercel.app/",
    // TODO: add GitHub (client) link
    // githubUrl: "",
    challenges: [
      {
        title: "Image-heavy pages",
        detail:
          "Large photos can make a page slow, so images are sized and loaded with performance in mind.",
      },
      {
        title: "A grid that handles any photo shape",
        detail:
          "Landscape and portrait shots had to sit together without awkward gaps or cropping.",
      },
    ],
    improvements: [
      {
        title: "Lightbox viewer",
        detail: "Open any photo full screen with keyboard and swipe support.",
      },
      {
        title: "Modern image formats",
        detail:
          "Serve WebP or AVIF versions to cut load time without losing quality.",
      },
    ],
  },
];

export const getProject = (slug?: string) =>
  PROJECTS.find((project) => project.slug === slug);

/** Image from the public folder: public/<slug>.png unless `image` is set. */
export const projectImage = (project: Project) =>
  project.image ?? `/${project.slug}.png`;
