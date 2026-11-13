import type { ComponentType, CSSProperties } from "react";
import {
  BadgeCheck,
  Component,
  Database,
  Globe,
  KeyRound,
  Layers,
  LockKeyhole,
  Network,
  Plug,
  ShieldCheck,
  TriangleAlert,
  Workflow,
} from "lucide-react";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

export type Skill = {
  name: string;
  icon: SkillIcon;
  /** Brand color. Defaults to the accent color. */
  color?: string;
  /**
   * With a note -> large card (tools / technologies).
   * Without a note -> compact chip (concepts / practices).
   */
  note?: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

// Icons that are white/black by brand use the theme text color,
// so they stay visible in both dark and light themes.
const TEXT = "var(--text)";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
        note: "Semantic, accessible markup.",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
        note: "Layouts with Flexbox and Grid.",
      },
      {
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
        color: "#F7DF1E",
        note: "Clean, modern ES6+ logic.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        note: "Static typing to catch bugs earlier.",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "#61DAFB",
        note: "Reusable component-based interfaces.",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: TEXT,
        note: "Full-stack React apps and routing.",
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        color: "#06B6D4",
        note: "Fast, consistent utility-first styling.",
      },
      {
        name: "Shadcn UI",
        icon: Component,
        color: TEXT,
        note: "Accessible, customizable UI components.",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
        note: "Running JavaScript on the server.",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: TEXT,
        note: "Building structured REST APIs.",
      },
      { name: "REST API Development", icon: Network },
      { name: "API Integration", icon: Plug },
      { name: "Middleware", icon: Layers },
      { name: "Error Handling", icon: TriangleAlert },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        note: "Storing and querying app data.",
      },

      { name: "CRUD Operations", icon: Database },
      { name: "Aggregation Pipeline", icon: Workflow },
      { name: "Data Validation", icon: BadgeCheck },
    ],
  },
  {
    title: "Authentication & Security",
    items: [
      {
        name: "BetterAuth",
        icon: LockKeyhole,
        note: "Modern authentication for full-stack apps.",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "#D63AFF",
        note: "Stateless, token-based sessions.",
      },
      { name: "Authentication", icon: KeyRound },
      { name: "Authorization", icon: ShieldCheck },
      { name: "CORS", icon: Globe },
    ],
  },
  {
    title: "Tools & Development",
    items: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        note: "Tracking changes with confidence.",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: TEXT,
        note: "Hosting and shipping projects.",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
        note: "My daily editor of choice.",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        note: "Testing and documenting APIs.",
      },
      {
        name: "npm",
        icon: SiNpm,
        color: "#CB3837",
        note: "Managing project dependencies.",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: TEXT,
        note: "Deploying fast, previewable builds.",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
        note: "Reading and translating design files.",
      },
    ],
  },
];
