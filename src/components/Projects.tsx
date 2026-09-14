import { ArrowUpRight, Code2, ChevronDown } from "lucide-react";
import Reveal from "./stylesComponent/Reveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: "Personal business website",
    description:
      "A premium one-page business website designed for entrepreneurs, with a strong focus on trust-building and responsive design.",
    tags: ["Hero", "Testimonials", "Pricing", "Contact"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Developer portfolio",
    description:
      "A modern portfolio showcasing responsive UI, reusable React components, smooth animations, and accessibility-focused development.",
    tags: ["React", "Accessibility", "Animation"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Gym website",
    description:
      "A modern fitness website designed to showcase gym programs, trainers, membership plans, facilities, and an engaging user experience.",
    tags: ["Responsive", "Programs", "Pricing", "UI"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 border-t">
      <div className="container-px">
        {/* ================= HEADER ================= */}

        <Reveal>
          <div className="max-w-lg">
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Featured projects
            </h2>

            <p className="mt-4" style={{ color: "var(--text-muted)" }}>
              A few case studies instead of a long list — quality over quantity.
            </p>
          </div>
        </Reveal>

        {/* ================= PROJECTS ================= */}

        <div className="mt-14 space-y-6">
          {/* ================= FEATURED PROJECT ================= */}

          <Reveal>
            <div className="grad-border glass-strong rounded-[1.4rem] overflow-hidden">
              <div className="p-7 sm:p-9">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "var(--primary-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    Featured
                  </span>

                  <span
                    className="text-xs px-2.5 py-1 rounded-full glass"
                    style={{ color: "var(--text-muted)" }}
                  >
                    React
                  </span>

                  <span
                    className="text-xs px-2.5 py-1 rounded-full glass"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Tailwind
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-semibold text-2xl"
                  style={{ color: "var(--text)" }}
                >
                  SaaS landing page
                </h3>

                {/* Description */}
                <p
                  className="mt-3 max-w-2xl text-[15px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  A modern SaaS landing page focused on clean typography,
                  responsive layouts, reusable components, and conversion-driven
                  design.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="ripple text-sm px-5 py-2.5 rounded-full btn-primary text-white inline-flex items-center gap-2"
                  >
                    Live demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#"
                    className="ripple text-sm px-5 py-2.5 rounded-full glass lift inline-flex items-center gap-2"
                    style={{ color: "var(--text)" }}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    View code
                  </a>
                </div>

                {/* Case Study */}
                <details className="mt-6 group">
                  <summary
                    className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
                    style={{ color: "var(--accent)" }}
                  >
                    View case study
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                  </summary>

                  <div className="mt-5 grid sm:grid-cols-3 gap-6 pt-5 border-t">
                    {/* Problem */}
                    <div>
                      <h4
                        className="text-xs font-medium mb-2"
                        style={{ color: "var(--text)" }}
                      >
                        Problem
                      </h4>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Most SaaS templates look identical — the goal was a
                        layout with its own visual identity while staying fast
                        to scan.
                      </p>
                    </div>

                    {/* Design Decisions */}
                    <div>
                      <h4
                        className="text-xs font-medium mb-2"
                        style={{ color: "var(--text)" }}
                      >
                        Design decisions
                      </h4>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Component-driven sections, a restrained type scale, and
                        one accent color used deliberately rather than
                        everywhere.
                      </p>
                    </div>

                    {/* Responsive */}
                    <div>
                      <h4
                        className="text-xs font-medium mb-2"
                        style={{ color: "var(--text)" }}
                      >
                        Responsive approach
                      </h4>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Mobile-first breakpoints, fluid type with clamp(), and
                        layouts that reflow instead of just shrinking.
                      </p>
                    </div>

                    {/* Performance */}
                    <div className="sm:col-span-3">
                      <h4
                        className="text-xs font-medium mb-2"
                        style={{ color: "var(--text)" }}
                      >
                        Performance optimization
                      </h4>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Lazy-loaded images, minimal JavaScript, and system-first
                        font loading to keep the site fast on slower
                        connections.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </Reveal>

          {/* ================= OTHER PROJECTS ================= */}

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index === 1 ? "0.08s" : "0s"}>
                <div className="glass rounded-[1.4rem] p-7 lift h-full">
                  {/* Title */}
                  <h3
                    className="font-display font-semibold text-xl"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-3 text-[15px] leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full glass"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="text-sm font-medium inline-flex items-center gap-1"
                      style={{ color: "var(--accent)" }}
                    >
                      Live demo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.codeUrl}
                      className="text-sm font-medium inline-flex items-center gap-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
