import { MapPin, Globe, BookOpen } from "lucide-react";
import { SiReact } from "react-icons/si";
import Reveal from "./stylesComponent/Reveal";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 border-t">
      <div className="container-px grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        {/* ================= LEFT SIDE ================= */}

        <Reveal>
          <div>
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Glow behind illustration */}
              <div
                className="absolute -inset-4 rounded-[2rem] float-a"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,.18), transparent 70%)",
                  filter: "blur(30px)",
                }}
                aria-hidden="true"
              />

              {/* Illustration Container */}
              <div className="relative grad-border glass-strong rounded-[1.6rem] aspect-[4/5] grid place-items-center overflow-hidden">
                <svg viewBox="0 0 200 240" className="w-2/3" aria-hidden="true">
                  {/* Head */}
                  <circle cx="100" cy="82" r="46" fill="url(#g1)" />

                  {/* Body */}
                  <path
                    d="M30 220c8-52 44-84 70-84s62 32 70 84"
                    fill="url(#g2)"
                  />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#38bdf8" />
                      <stop offset="1" stopColor="#3355f4" />
                    </linearGradient>

                    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#3355f4" />
                      <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= RIGHT SIDE ================= */}

        <Reveal delay="0.1s">
          <div>
            {/* Heading */}
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              About me
            </h2>

            {/* Description */}
            <div
              className="mt-6 space-y-4 max-w-xl text-[15px] sm:text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <p>Hi, I'm Mahenaj Tabassum.</p>

              <p>
                I'm a frontend developer from Bangladesh who enjoys turning
                designs into responsive, interactive websites.
              </p>

              <p>
                My current focus is building production-quality React projects
                while improving my full-stack skills.
              </p>

              <p>
                I believe great websites should feel fast, clean, and
                effortless.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
              {/* Location */}
              <div
                className="glass rounded-xl px-4 py-3.5 flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text)" }}
              >
                <MapPin
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--accent)" }}
                />
                Based in Bangladesh
              </div>

              {/* International Clients */}
              <div
                className="glass rounded-xl px-4 py-3.5 flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text)" }}
              >
                <Globe
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--accent)" }}
                />
                Open to international clients
              </div>

              {/* React */}
              <div
                className="glass rounded-xl px-4 py-3.5 flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text)" }}
              >
                <SiReact className="w-4 h-4 shrink-0 text-[#06B6D4]" />
                React developer
              </div>

              {/* Learning */}
              <div
                className="glass rounded-xl px-4 py-3.5 flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text)" }}
              >
                <BookOpen
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--accent)" }}
                />
                Full-time learner
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
