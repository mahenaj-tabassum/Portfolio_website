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

export const PROJECTS: Project[] = [
  {
    slug: "handstogether",
    title: "HandsTogether",
    type: "Social development events platform",
    category: "Full Stack",
    summary:
      "A community platform to discover local social-development events, create your own and join as a volunteer.",
    description:
      "HandsTogether is a community platform where people discover local social-development events such as tree plantations, winter clothes distributions, community cleanups, and food and blood donation drives. Users can browse upcoming events with filters and search, create events through a validated form with a live card preview, and join with one click. The server enforces seat limits and prevents double joins, even when two people take the last seat at the same time. Joined events are split into Upcoming and Past tabs, and only the creator can update or delete an event, which is enforced on the server, not just in the interface.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://hands-together-client.vercel.app",
    githubUrl: "https://github.com/mahenaj-tabassum/HandsTogether-Client",
    challenges: [
      {
        title: "Never going over capacity",
        detail:
          "When two people grab the last seat at the same time, the server must accept only one. The join logic is handled on the server so the seat count stays correct.",
      },
      {
        title: "Enforcing ownership on the server",
        detail:
          "Hiding the edit and delete buttons is not enough, so the API checks that the logged-in user is the event's creator before it allows a change.",
      },
      {
        title: "Showing only upcoming events",
        detail:
          "Past events must never appear in the public list, and past dates must be rejected on both the client and the server.",
      },
    ],
    improvements: [
      {
        title: "Image uploads",
        detail:
          "Let creators upload an event thumbnail instead of pasting a URL.",
      },
      {
        title: "Notifications and reminders",
        detail:
          "Send an email or in-app reminder before an event the user has joined.",
      },
      {
        title: "Leave an event",
        detail:
          "Allow volunteers to cancel their spot so seats open up for others.",
      },
    ],
  },

  {
    slug: "wanderlust",
    title: "Wanderlust",
    type: "Travel booking platform",
    category: "Full Stack",
    summary:
      "A full-stack travel booking app where people browse destinations, book trips and manage their bookings, backed by a custom REST API.",
    description:
      "Wanderlust is a full-stack travel booking platform. Travelers can browse and search destinations, filter them by category, view full details and book a trip in one click. A My Booking page splits bookings into upcoming and past, and lets users cancel an upcoming one. Signed-in users can also add, edit and delete destinations, with a live card preview while adding. Sign-in works with email and password, Google or GitHub through Better Auth, and the Express API protects private routes with JWT.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://wanderlust-client-xi-pi.vercel.app/",
    githubUrl: "https://github.com/mahenaj-tabassum/Wanderlust",
    challenges: [
      {
        title: "Connecting two authentication layers",
        detail:
          "Making Better Auth on the client work with JWT checks on the Express API meant handling tokens, protected routes and CORS carefully.",
      },
      {
        title: "Keeping the frontend and API in sync",
        detail:
          "Destination and booking data had to stay consistent between the forms, the API and the database, so validation lives on both sides.",
      },
      {
        title: "Splitting bookings into upcoming and past",
        detail:
          "Bookings are separated by date so users can cancel only the upcoming ones, while past trips stay as a read-only history.",
      },
    ],
    improvements: [
      {
        title: "Role-based access",
        detail:
          "Right now every signed-in user can edit or delete any destination. I would add admin and user roles so only the creator or an admin can manage a destination.",
      },
      {
        title: "Image uploads",
        detail:
          "Let users upload photos for a destination instead of pasting image links.",
      },
      {
        title: "Pagination and reviews",
        detail:
          "Add pagination as the list grows, and let travelers leave short reviews after a trip.",
      },
    ],
  },
  {
    slug: "the-daily-brief",
    title: "The Daily Brief",
    type: "News portal",
    category: "Full Stack",
    summary:
      "A news website that groups stories into Bangladesh, World, Health, Video and more, with a clean editorial design.",
    description:
      "The Daily Brief is a news website where readers get the latest stories in one clean place. It has a dynamic homepage with a lead story, featured stories, section-wise news and a ranked most-read list, plus category pages and detailed article pages with headline, byline, date, source, tags and full body. Readers can sign in with email and password, Google or GitHub through Better Auth. Stories are loaded from the BBC Bangla news data source, and the design uses serif headlines, plenty of space and a restrained colour palette.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "react-toastify",
      "Vercel",
    ],
    liveUrl: "https://news-portal-website-application.vercel.app",
    githubUrl:
      "https://github.com/mahenaj-tabassum/News-Portal-Website-Application",
    challenges: [
      {
        title: "Handling unreliable API data",
        detail:
          "Some articles arrive without images or descriptions, so the layout needed sensible fallbacks.",
      },
      {
        title: "Loading, empty and error states",
        detail:
          "Every request can be slow or fail, so each screen shows a loading state or a custom not-found page instead of a blank screen.",
      },
    ],
    improvements: [
      {
        title: "Search",
        detail: "Let readers search stories by keyword across all categories.",
      },
      {
        title: "Saved articles",
        detail:
          "Allow signed-in readers to bookmark stories and read them later.",
      },
      {
        title: "Response caching",
        detail: "Cache API responses to load faster and respect rate limits.",
      },
    ],
  },
  {
    slug: "gym-website",
    title: "IronForge Gym",
    type: "Fitness website",
    category: "Frontend",
    summary:
      "A bold, premium fitness website with programs, trainers, pricing, a BMI calculator and more.",
    description:
      "IronForge is a modern, responsive gym and fitness single page application with a dark UI and an electric-lime accent. It showcases training programs and trainers, and includes a monthly/yearly pricing toggle, a testimonial carousel, an interactive BMI calculator, an FAQ accordion and a contact form with frontend validation. Everything is animated with CSS and Tailwind, including scroll reveal effects, and the layout works across desktop, tablet and mobile.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite", "Vercel"],
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
          "I kept interactions smooth by using CSS-based animations and avoiding heavy effects.",
      },
      {
        title: "Building interactive widgets",
        detail:
          "The BMI calculator, pricing toggle and testimonial carousel needed clean state handling and input validation.",
      },
    ],
    improvements: [
      {
        title: "Working membership sign-up",
        detail: "Connect the plans and the contact form to a real backend.",
      },
      {
        title: "Class schedule",
        detail: "Add a timetable so visitors can see and book sessions.",
      },
    ],
  },
];

export const getProject = (slug?: string) =>
  PROJECTS.find((project) => project.slug === slug);

/** Image from the public folder: public/<slug>.png unless `image` is set. */
export const projectImage = (project: Project) =>
  project.image ?? `/${project.slug}.png`;
