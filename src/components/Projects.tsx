import { ArrowUpRight, Code2 } from "lucide-react";
import gymImg from "../assets/img1.png";
import resImg from "../assets/img2.png";
import travelImg from "../assets/img3.png";
import Reveal from "./stylesComponent/Reveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: "Gym Website",
    description:
      "A modern fitness website designed to showcase gym programs, trainers, membership plans, facilities, and an engaging user experience.",
    tags: ["React", "Tailwind", "Responsive", "Vercel"],
    image: gymImg,
    liveUrl: "https://ironforge-gym-website-eta.vercel.app/",
    codeUrl: "https://github.com/mahenaj-tabassum/Gym_website",
  },
  {
    title: "Restaurant Website",
    description:
      "A premium responsive restaurant website featuring a curated menu, chef story, gallery, testimonials, and table reservations.",
    tags: ["React", "Tailwind", "Gallery", "Reservations"],
    image: resImg,
    liveUrl: "https://resaurant-ivory.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Travel Photographer Portfolio",
    description:
      "A visually immersive portfolio website showcasing breathtaking destinations, curated photography collections, and a personal creative journey.",
    tags: ["React", "Tailwind", "Portfolio", "Photography"],
    image: travelImg,
    liveUrl: "https://photographer-portfolio-khaki.vercel.app/",
    codeUrl: "#",
  },
];

const BrowserPreview = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a1a] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-3 h-7 flex-1 rounded-full bg-white/5" />
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Hover Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105"
          >
            Live Demo
          </a>
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
      </div>
    </div>
  );
};

const Projects = () => {
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
              Featured Projects
            </h2>

            <p
              className="mt-4 text-[15px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Carefully crafted projects focused on clean UI, responsive
              layouts, and polished user experiences.
            </p>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={`${index * 0.08}s`}>
              <div className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <BrowserPreview project={project} />

                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col">
                  <h3
                    className="font-display text-xl font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>

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
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
