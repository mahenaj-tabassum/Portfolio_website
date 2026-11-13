import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Reveal from "./stylesComponent/Reveal";
import ProjectRow from "./projects/ProjectRow";
import { CATEGORIES, PROJECTS } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

const FILTERS: Filter[] = ["All", ...CATEGORIES];

const countFor = (filter: Filter) =>
  filter === "All"
    ? PROJECTS.length
    : PROJECTS.filter((project) => project.category === filter).length;

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");

  // Sliding highlight behind the active tab
  const tabRefs = useRef<Partial<Record<Filter, HTMLButtonElement | null>>>({});
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [animatePill, setAnimatePill] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[filter];
      if (tab) setPill({ left: tab.offsetLeft, width: tab.offsetWidth });
    };

    measure();
    window.addEventListener("resize", measure);
    // Fonts can change the tab widths after the first paint
    document.fonts?.ready.then(measure);

    return () => window.removeEventListener("resize", measure);
  }, [filter]);

  // Turn the slide animation on only after the first layout (no jump on load)
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimatePill(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="projects" className="border-t py-24 lg:py-32">
      <div className="container-px">
        {/* Header */}
        <Reveal>
          <div className="max-w-xl">
            <h2
              className="font-display text-3xl font-semibold sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Projects
            </h2>

            <p
              className="mt-4 text-[15px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Selected work, from full-stack apps to polished frontends. Open
              any project to see its stack, the challenges and what I would
              improve next.
            </p>
          </div>
        </Reveal>

        {/* Filter */}
        <Reveal delay="0.1s">
          <div
            role="group"
            aria-label="Filter projects"
            className="relative mt-10 inline-flex rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-1 left-0 top-1 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] ${
                animatePill
                  ? "transition-[transform,width] duration-300 ease-out"
                  : ""
              }`}
              style={{
                width: pill.width,
                transform: `translateX(${pill.left}px)`,
              }}
            />

            {FILTERS.map((item) => (
              <button
                key={item}
                ref={(el) => {
                  tabRefs.current[item] = el;
                }}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className="relative z-10 flex cursor-pointer items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: filter === item ? "var(--text)" : "var(--text-muted)",
                }}
              >
                {item}
                <span className="mono rounded-md border border-[var(--border)] px-1.5 text-[11px] leading-5">
                  {countFor(item)}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* List (re-mounts on filter change so the rows rise again) */}
        <div key={filter} className="mt-10 divide-y border-y">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={`${index * 0.06}s`}>
              <ProjectRow project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
