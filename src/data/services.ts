import type { ComponentType, CSSProperties } from "react";
import {
  Briefcase,
  Layers,
  LayoutPanelTop,
  Server,
  Wrench,
} from "lucide-react";
import { FiFigma } from "react-icons/fi";

type ServiceIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

export type Service = {
  title: string;
  description: string;
  /** কার্ডের ভেতরের ৩টা ছোট পয়েন্ট */
  points: string[];
  icon: ServiceIcon;
  /** true হলে কার্ডে "Most requested" ব্যাজ ও আলাদা ব্যাকগ্রাউন্ড */
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Complete products, from the interface to the database, built to be used.",
    points: [
      "MERN and Next.js applications",
      "Secure login (Better Auth + JWT)",
      "Dashboards and protected pages",
    ],
    icon: Layers,
    featured: true,
  },
  {
    title: "REST API & Backend",
    description: "Clean, well-structured APIs your frontend can rely on.",
    points: [
      "Express API and MongoDB design",
      "Validation and error handling",
      "Protected, owner-only routes",
    ],
    icon: Server,
  },
  {
    title: "Figma to React / Next.js",
    description:
      "Pixel-accurate conversion from design file to production code.",
    points: [
      "Responsive on every screen",
      "Reusable components",
      "Matches the design closely",
    ],
    icon: FiFigma,
  },
  {
    title: "Landing Pages",
    description: "Modern, conversion-focused pages that load fast.",
    points: [
      "Clear message and call to action",
      "Fast loading and smooth motion",
      "SEO basics included",
    ],
    icon: LayoutPanelTop,
  },
  {
    title: "Portfolio & Business Sites",
    description: "Professional websites built around trust and clarity.",
    points: [
      "Design that fits your brand",
      "Dark and light themes",
      "Working contact form",
    ],
    icon: Briefcase,
  },
  {
    title: "Fixes & Improvements",
    description: "A quick way to get an existing site working better.",
    points: ["Bug fixes", "Responsive layout repairs", "Performance clean-up"],
    icon: Wrench,
  },
];
