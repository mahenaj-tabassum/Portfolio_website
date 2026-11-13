import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { useTypewriter } from "../hooks/useTypewriter";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

// Pointer-driven effects only run for mouse users who haven't asked for
// reduced motion. Touch devices and reduced-motion users get the static UI.
const canAnimate = () =>
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Micro animation: the card tilts in 3D following the cursor.
// Listens on the parent so the tilt applies to the inner card only
// (the parent has its own entrance animation).
function useTilt<T extends HTMLElement>(max = 7) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host || !canAnimate()) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return ref;
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

// Social media and contact links displayed in the Hero section.
// `hover` fills the circle with the brand color on hover.
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/mahenaj-tabassum",
    icon: <FaGithub size={17} />,
    hover:
      "hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahenaj-tabassum/",
    icon: <FaLinkedinIn size={17} />,
    hover: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
  {
    label: "Email",
    href: "mailto:mahenaj.dev@gmail.com",
    icon: <Mail size={17} />,
    hover: "hover:border-sky-500 hover:bg-sky-500 hover:text-white",
  },
];

// Defines the professional roles displayed in the typewriter animation.
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
    icon: <SiNextdotjs className="h-4 w-4 text-[var(--text)]" />,
    pos: "-top-7 -right-3",
    drift: "animate-drift-a",
    dur: "6.5s",
    delay: "0s",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="h-4 w-4 text-[var(--text-muted)]" />,
    pos: "-bottom-7 -left-5",
    drift: "animate-drift-b",
    dur: "7.5s",
    delay: "-2.5s",
  },
];

/* Code card: syntax colors come from CSS variables so they stay readable
   in both themes (defined in index.css). */
const Cmt = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--text-muted)" }}>{children}</span>
);
const Kw = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent)" }}>{children}</span>
);
const Id = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--secondary)" }}>{children}</span>
);
const Str = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--code-green)" }}>{children}</span>
);
const Num = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--code-yellow)" }}>{children}</span>
);

const CODE_LINES: ReactNode[] = [
  <Cmt>// full-stack, by design</Cmt>,
  <>
    <Kw>const</Kw> <Id>developer</Id> = {"{"}
  </>,
  <>
    {"  "}name: <Str>"Mahenaj Tabassum Powshi"</Str>,
  </>,
  <>
    {"  "}role: <Str>"Full-Stack Developer"</Str>,
  </>,
  <>
    {"  "}location: <Str>"Chattogram, Bangladesh"</Str>,
  </>,
  <>
    {"  "}stack: [<Str>"Next.js"</Str>, <Str>"Node.js"</Str>,{" "}
    <Str>"MongoDB"</Str>],
  </>,
  <>
    {"  "}projects: <Num>3</Num>,
  </>,
  <>
    {"  "}openToWork: <Num>true</Num>,
  </>,
  <>{"};"}</>,
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const role = useTypewriter(ROLES);
  const cardRef = useTilt<HTMLDivElement>(7);

  const rise = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative z-10 flex min-h-dvh items-center overflow-hidden bg-transparent pt-30 pb-24"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        {/* Left: intro */}
        <div className="@container min-w-0">
          <p
            className="animate-rise shimmer inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)]"
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
            className="animate-rise mt-6 font-bold tracking-tight text-[var(--text)]"
            style={rise(100)}
          >
            <span className="block whitespace-nowrap text-[clamp(2rem,10.5cqw,3.5rem)] leading-[1.15]">
              Hi, I’m Mahenaj
            </span>

            {/* Typing animation is decorative; screen readers get the full title */}
            <span className="sr-only">Full-Stack Developer</span>
            <span
              aria-hidden="true"
              className="text-flow block min-h-[1.25em] whitespace-nowrap bg-linear-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text pb-1 text-[clamp(1.4rem,7.6cqw,2.75rem)] leading-[1.25] text-transparent"
            >
              {role}
              <span className="animate-caret ml-1 inline-block h-[0.85em] w-0.5 translate-y-[0.1em] bg-sky-400" />
            </span>
          </h1>

          <p
            className="animate-rise mt-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]"
            style={rise(220)}
          >
            I build thoughtful web applications with React, Next.js, Node.js,
            Express, and MongoDB. I enjoy turning practical problems into useful
            products through responsive interfaces, well-structured APIs, and
            continuous learning.
          </p>

          <p
            className="animate-rise group/loc mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]"
            style={rise(280)}
          >
            <MapPin
              size={14}
              className="transition duration-300 group-hover/loc:-translate-y-0.5 group-hover/loc:text-sky-400"
            />{" "}
            Chattogram, Bangladesh
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-3"
            style={rise(340)}
          >
            <a
              href="/my-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mahenaj_Tabassum_Powshi_Resume.pdf"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition duration-200 hover:shadow-violet-500/40 active:scale-95"
            >
              {/* Shine sweep on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <Download
                size={16}
                className="relative group-hover:animate-bounce"
              />
              <span className="relative">Download resume</span>
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition duration-200 hover:border-sky-400/60 hover:bg-sky-400/10 active:scale-95"
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
            {SOCIALS.map(({ label, href, icon, hover }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className={`grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition duration-200 hover:-translate-y-1 hover:-rotate-6 active:scale-90 ${hover}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: medium code card with 2 floating badges */}
        <div
          className="animate-rise relative isolate mx-auto hidden w-full max-w-md md:block lg:ml-auto lg:mr-0"
          style={rise(250)}
        >
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

          {/* Code Window (tilts with the cursor) */}
          <div
            ref={cardRef}
            className="grad-border glass-strong rounded-[1.1rem] p-5 shadow-2xl transition-transform duration-200 ease-out will-change-transform sm:p-6"
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className="mb-4 flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: "#f87171" }}
              />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: "#fbbf24" }}
              />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: "#4ade80" }}
              />
              <span
                className="mono ml-3 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                developer.jsx
              </span>
            </div>

            {/* Lines type in one after another */}
            <pre className="mono overflow-x-auto text-[12.5px] leading-7 sm:text-[13px]">
              <code>
                {CODE_LINES.map((line, i) => (
                  <span
                    key={i}
                    className="animate-line block whitespace-pre"
                    style={{ animationDelay: `${700 + i * 110}ms` }}
                  >
                    {line}
                    {i === CODE_LINES.length - 1 && (
                      <span className="animate-caret ml-1 inline-block h-[1em] w-0.5 translate-y-[0.15em] bg-sky-400" />
                    )}
                  </span>
                ))}
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
