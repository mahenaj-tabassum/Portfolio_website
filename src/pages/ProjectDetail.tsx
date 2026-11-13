import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "../components/stylesComponent/Reveal";
import BrowserFrame from "../components/projects/BrowserFrame";
import ProjectImage from "../components/projects/ProjectImage";
import usePageTitle from "../hooks/usePageTitle";
import { PROJECTS, getProject, projectImage } from "../data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageTitle(project?.title);

  if (!project) return <NotFound />;

  // আগের / পরের প্রজেক্ট (লুপ করে)
  const i = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  const linkBtn =
    "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] transition duration-200 hover:border-sky-400/60 hover:bg-sky-400/10 active:scale-95";

  return (
    <article className="container-px pt-28 pb-20">
      <Link
        to="/#projects"
        className="group inline-flex items-center gap-2 text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowLeft
          size={16}
          className="transition group-hover:-translate-x-0.5"
        />
        Back to projects
      </Link>

      {/* Header */}
      <Reveal>
        <header className="mt-6 flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-2xl">
            {/* প্রজেক্ট টাইপ ব্যাজ */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="mono rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-medium"
                style={{ color: "var(--accent)" }}
              >
                {project.category}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {project.type}
              </span>
            </div>

            <h1
              className="font-display mt-4 text-4xl font-semibold sm:text-5xl"
              style={{ color: "var(--text)" }}
            >
              {project.title}
            </h1>
            <p className="mt-3" style={{ color: "var(--text-muted)" }}>
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBtn}
              >
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBtn}
              >
                <FaGithub size={16} /> GitHub
              </a>
            )}
            {project.serverUrl && (
              <a
                href={project.serverUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBtn}
              >
                <FaGithub size={16} /> Server
              </a>
            )}
          </div>
        </header>
      </Reveal>

      {/* বড় স্ক্রিনশট */}
      <Reveal delay="0.1s">
        <div className="mt-10">
          <BrowserFrame>
            <ProjectImage src={projectImage(project)} title={project.title} />
          </BrowserFrame>
        </div>
      </Reveal>

      {/* দুই কলাম */}
      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-12">
          <section>
            <h2
              className="font-display text-2xl font-semibold"
              style={{ color: "var(--text)" }}
            >
              About the project
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {project.description}
            </p>
          </section>

          <NoteList title="Challenges I faced" notes={project.challenges} />
          <NoteList
            title="What I'd improve next"
            notes={project.improvements}
          />
        </div>

        {/* Sticky সাইডবার */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="glass rounded-2xl p-5">
            <h2
              className="font-display text-sm font-semibold"
              style={{ color: "var(--text)" }}
            >
              Project type
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--accent)" }}>
              {project.category}
            </p>

            <h2
              className="font-display mt-6 text-sm font-semibold"
              style={{ color: "var(--text)" }}
            >
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="mono rounded-full border border-[var(--border)] px-3 py-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl || project.serverUrl) && (
              <div className="mt-6 space-y-2 border-t pt-5 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                    style={{ color: "var(--accent)" }}
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                    style={{ color: "var(--accent)" }}
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
                {project.serverUrl && (
                  <a
                    href={project.serverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                    style={{ color: "var(--accent)" }}
                  >
                    Server repo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* আগের / পরের */}
      <nav
        className="mt-20 grid gap-4 border-t pt-8 sm:grid-cols-2"
        aria-label="Project navigation"
      >
        <Link
          to={`/projects/${prev.slug}`}
          className="group glass lift rounded-2xl p-5"
        >
          <span
            className="flex items-center gap-2 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} /> Previous project
          </span>
          <span
            className="font-display mt-2 block text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            {prev.title}
          </span>
        </Link>

        <Link
          to={`/projects/${next.slug}`}
          className="group glass lift rounded-2xl p-5 sm:text-right"
        >
          <span
            className="flex items-center gap-2 text-xs sm:justify-end"
            style={{ color: "var(--text-muted)" }}
          >
            Next project <ArrowRight size={14} />
          </span>
          <span
            className="font-display mt-2 block text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            {next.title}
          </span>
        </Link>
      </nav>
    </article>
  );
};

// Challenges / Improvements তালিকা
const NoteList = ({
  title,
  notes,
}: {
  title: string;
  notes: { title: string; detail: string }[];
}) => (
  <section>
    <h2
      className="font-display text-2xl font-semibold"
      style={{ color: "var(--text)" }}
    >
      {title}
    </h2>
    <ul className="mt-5 space-y-4">
      {notes.map((n) => (
        <li key={n.title} className="glass rounded-xl p-5">
          <h3
            className="font-display text-base font-semibold"
            style={{ color: "var(--text)" }}
          >
            {n.title}
          </h3>
          <p
            className="mt-1.5 text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {n.detail}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectDetail;
