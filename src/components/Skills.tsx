import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCss,
} from "react-icons/si";

import Reveal from "./stylesComponent/Reveal";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t">
      <div className="container-px">
        {/* ================= HEADER ================= */}

        <Reveal>
          <div className="max-w-lg">
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              My tech stack
            </h2>

            <p className="mt-4" style={{ color: "var(--text-muted)" }}>
              The tools I use daily, and the ones I'm actively picking up next.
            </p>
          </div>
        </Reveal>

        {/* ================= SKILL GROUPS ================= */}

        <div className="mt-14 space-y-12">
          {/* ================= FRONTEND ================= */}

          <Reveal>
            <div>
              <h3
                className="text-sm font-medium tracking-wide mb-5"
                style={{ color: "var(--accent)" }}
              >
                Frontend
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* React */}
                <div className="glass rounded-xl p-5 lift">
                  <SiReact className="w-[26px] h-[26px] text-[#61DAFB]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    React
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Building reusable component-based interfaces.
                  </p>
                </div>

                {/* JavaScript */}
                <div className="glass rounded-xl p-5 lift">
                  <SiJavascript className="w-[26px] h-[26px] text-[#F7DF1E]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    JavaScript
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Writing clean, modern ES6+ logic.
                  </p>
                </div>

                {/* HTML5 */}
                <div className="glass rounded-xl p-5 lift">
                  <SiHtml5 className="w-[26px] h-[26px] text-[#E34F26]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    HTML5
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Semantic, accessible markup.
                  </p>
                </div>

                {/* CSS3 */}
                <div className="glass rounded-xl p-5 lift">
                  <SiCss className="w-[26px] h-[26px] text-[#1572B6]" />
                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    CSS3
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Layouts with Flexbox and Grid.
                  </p>
                </div>

                {/* Tailwind CSS */}
                <div className="glass rounded-xl p-5 lift">
                  <RiTailwindCssFill className="w-[26px] h-[26px] text-[#06B6D4]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Tailwind CSS
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Fast, consistent utility-first styling.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================= CURRENTLY LEARNING ================= */}

          <Reveal>
            <div>
              <h3
                className="text-sm font-medium tracking-wide mb-5"
                style={{ color: "var(--secondary)" }}
              >
                Currently learning
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* TypeScript */}
                <div className="glass rounded-xl p-5 lift">
                  <SiTypescript className="w-[26px] h-[26px] text-[#3178C6]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    TypeScript
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Adding static typing to catch bugs earlier.
                  </p>
                </div>

                {/* Node.js */}
                <div className="glass rounded-xl p-5 lift">
                  <SiNodedotjs className="w-[26px] h-[26px] text-[#339933]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Node.js
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Running JavaScript on the server.
                  </p>
                </div>

                {/* Express */}
                <div className="glass rounded-xl p-5 lift">
                  <SiExpress className="w-[26px] h-[26px] text-white" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Express
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Building simple REST APIs.
                  </p>
                </div>

                {/* MongoDB */}
                <div className="glass rounded-xl p-5 lift">
                  <SiMongodb className="w-[26px] h-[26px] text-[#47A248]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    MongoDB
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Storing and querying app data.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================= TOOLS ================= */}

          <Reveal>
            <div>
              <h3
                className="text-sm font-medium tracking-wide mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                Tools
              </h3>

              <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Git */}
                <div className="glass rounded-xl p-5 lift">
                  <SiGit className="w-[26px] h-[26px] text-[#F05032]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Git
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Tracking changes with confidence.
                  </p>
                </div>

                {/* GitHub */}
                <div className="glass rounded-xl p-5 lift">
                  <SiGithub className="w-[26px] h-[26px] text-white" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    GitHub
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Hosting and shipping projects.
                  </p>
                </div>

                {/* VS Code */}
                <div className="glass rounded-xl p-5 lift">
                  <VscVscode className="w-[26px] h-[26px] text-[#007ACC]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    VS Code
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    My daily editor of choice.
                  </p>
                </div>

                {/* Vercel */}
                <div className="glass rounded-xl p-5 lift">
                  <SiVercel className="w-[26px] h-[26px] text-white" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Vercel
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Deploying fast, previewable builds.
                  </p>
                </div>

                {/* Figma */}
                <div className="glass rounded-xl p-5 lift">
                  <SiFigma className="w-[26px] h-[26px] text-[#F24E1E]" />

                  <h4
                    className="font-display mt-3 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Figma
                  </h4>

                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Reading and translating design files.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
