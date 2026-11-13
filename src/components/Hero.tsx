import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { useTypewriter } from "../hooks/useTypewriter";

// Social media and contact links displayed in the Hero section
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/mahenaj-tabassum",
    icon: <FaGithub size={17} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahenaj-tabassum/",
    icon: <FaLinkedinIn size={17} />,
  },
  {
    label: "Email",
    href: "mailto:mahenaj.dev@gmail.com",
    icon: <Mail size={17} />,
  },
];

// Defines the professional roles displayed in the typewrite animation;.
const ROLES = ["Full-Stack Developer", "MERN Stack Developer"];

// Two badges at opposite corners of the code card. They sit behind the card
// (inline z-index 0 vs 10) and float on their own.
type Badge = {
  name: string;
  icon: ReactNode;
  pos: string;
  drift: string;
  dur: string;
  delay: string;
};

const BADGES: Badge[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-4 h-4 text-white" />,
    pos: "-top-7 -right-3",
    drift: "animate-drift-a",
    dur: "6.5s",
    delay: "0s",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-4 h-4 text-slate-300" />,
    pos: "-bottom-7 -left-5",
    drift: "animate-drift-b",
    dur: "7.5s",
    delay: "-2.5s",
  },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  const rise = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden bg-[#07080d] pt-30 pb-24"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        {/* Left: intro */}
        <div className="@container min-w-0">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            style={rise(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for remote freelance work
          </p>

          {/* Both lines scale with the column width and never wrap */}
          <h1
            className="animate-rise mt-6 font-bold tracking-tight text-white"
            style={rise(100)}
          >
            <span className="block whitespace-nowrap text-[clamp(2rem,10.5cqw,3.5rem)] leading-[1.15]">
              Hi, I’m Mahenaj
            </span>
            {/* Typing animation is decorative; screen readers get the full title */}
            <span className="sr-only">Full-Stack Developer</span>
            <span
              aria-hidden="true"
              className="block min-h-[1.25em] whitespace-nowrap bg-linear-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text pb-1 text-[clamp(1.4rem,7.6cqw,2.75rem)] leading-[1.25] text-transparent"
            >
              {role}
              <span className="animate-caret ml-1 inline-block h-[0.85em] w-0.5 translate-y-[0.1em] bg-sky-400" />
            </span>
          </h1>

          <p
            className="animate-rise mt-5 max-w-lg text-base leading-relaxed text-slate-400"
            style={rise(220)}
          >
            I build full-stack web apps with Next.js, Express, and MongoDB:
            event platforms, booking apps, and news portals with secure
            JWT-protected APIs and clean, responsive interfaces.
          </p>

          <p
            className="animate-rise mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500"
            style={rise(280)}
          >
            <MapPin size={14} /> Chattogram, Bangladesh
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-3"
            style={rise(340)}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mahenaj_Tabassum_Powshi_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-violet-500/40 active:translate-y-0 active:scale-95"
            >
              <Download
                size={16}
                className="transition group-hover:translate-y-0.5"
              />
              Download resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/25 active:translate-y-0 active:scale-95"
            >
              View projects
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div
            className="animate-rise mt-8 flex items-center gap-3"
            style={rise(440)}
          >
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-200 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-white active:scale-90"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: medium code card with 2 floating badges */}
        <div
          className="animate-rise hidden md:block relative isolate mx-auto w-full max-w-md lg:ml-auto lg:mr-0"
          style={rise(250)}
        >
          {/* soft glow behind the card */}
          <div className="pointer-events-none absolute inset-x-6 -inset-y-6 rounded-full bg-blue-800/15 blur-3xl" />

          {BADGES.map((b) => (
            <div
              key={b.name}
              aria-hidden="true"
              className={`${b.drift} ${b.pos} glass pointer-events-none hidden items-center gap-2 rounded-full px-3 py-2 text-xs sm:flex`}
              style={{
                position: "absolute",
                zIndex: 0,
                color: "var(--text-muted)",
                animationDuration: b.dur,
                animationDelay: b.delay,
              }}
            >
              {b.icon}
              {b.name}
            </div>
          ))}

          {/* Code Window */}
          <div
            className="grad-border glass-strong rounded-[1.1rem] p-5 sm:p-6 shadow-2xl"
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className="flex items-center gap-1.5 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#f87171" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#fbbf24" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#4ade80" }}
              />
              <span
                className="ml-3 text-xs mono"
                style={{ color: "var(--text-muted)" }}
              >
                developer.jsx
              </span>
            </div>

            <pre className="mono text-[12.5px] sm:text-[13px] leading-7 overflow-x-auto">
              <code>
                <span style={{ color: "#8b93ac" }}>
                  // full-stack, by design
                </span>
                {"\n"}
                <span style={{ color: "#38bdf8" }}>const</span>{" "}
                <span style={{ color: "#8b5cf6" }}>developer</span> = {"{"}
                {"\n  "}name:{" "}
                <span style={{ color: "#4ade80" }}>
                  "Mahenaj Tabassum Powshi"
                </span>
                ,{"\n  "}role:{" "}
                <span style={{ color: "#4ade80" }}>"Full-Stack Developer"</span>
                ,{"\n  "}location:{" "}
                <span style={{ color: "#4ade80" }}>
                  "Chattogram, Bangladesh"
                </span>
                ,{"\n  "}stack: [
                <span style={{ color: "#4ade80" }}>"Next.js"</span>,{" "}
                <span style={{ color: "#4ade80" }}>"Node.js"</span>,{" "}
                <span style={{ color: "#4ade80" }}>"MongoDB"</span>],
                {"\n  "}projects: <span style={{ color: "#facc15" }}>3</span>,
                {"\n  "}openToWork:{" "}
                <span style={{ color: "#facc15" }}>true</span>,{"\n}"};
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition-colors hover:text-white sm:flex"
      >
        Scroll
        <span className="h-8 w-px animate-pulse bg-linear-to-b from-sky-400 to-transparent" />
      </a>
    </section>
  );
}
