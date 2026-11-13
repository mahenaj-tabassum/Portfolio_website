import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import BrowserFrame from "./BrowserFrame";
import ProjectImage from "./ProjectImage";
import { projectImage } from "../../data/projects";
import type { Project } from "../../data/projects";

type ProjectRowProps = {
  project: Project;
  /** Position in the visible list (0 = first) */
  index: number;
};

const MAX_TAGS = 4;

// The whole row is one link to the detail page.
// On hover: the row lights up, the title nudges right, the arrow moves,
// and the screenshot slowly scrolls (see ProjectImage).
const ProjectRow = ({ project, index }: ProjectRowProps) => {
  const tags = project.techStack.slice(0, MAX_TAGS);
  const extra = project.techStack.length - tags.length;

  return (
    <Link
      to={`/projects/${project.slug}`}
      aria-label={`View details of ${project.title}`}
      className="group/row -mx-4 grid gap-5 rounded-2xl px-4 py-7 transition-colors duration-300 hover:bg-[var(--surface)] focus-visible:bg-[var(--surface)] active:scale-[0.995] sm:-mx-6 sm:px-6 md:grid-cols-[15rem_minmax(0,1fr)] md:items-center md:gap-8 lg:grid-cols-[2.5rem_17rem_minmax(0,1fr)]"
    >
      {/* Number */}
      <span
        className="mono hidden text-xs transition-colors duration-300 group-hover/row:text-[var(--accent)] lg:block"
        style={{ color: "var(--text-muted)" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Screenshot */}
      <BrowserFrame>
        <ProjectImage src={projectImage(project)} title={project.title} pan />
      </BrowserFrame>

      {/* Text */}
      <div className="min-w-0">
        <h3
          className="font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight tracking-tight transition-transform duration-300 group-hover/row:translate-x-1.5"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>

        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
          {project.type}
        </p>

        <p
          className="mt-4 max-w-xl text-[15px] leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mono rounded-full border border-[var(--border)] px-3 py-1 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {tag}
            </span>
          ))}

          {extra > 0 && (
            <span
              className="mono rounded-full border border-[var(--border)] px-3 py-1 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              +{extra}
            </span>
          )}
        </div>

        <span
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--accent)" }}
        >
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default ProjectRow;
