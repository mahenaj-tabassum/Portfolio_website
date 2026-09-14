import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import Reveal from "./stylesComponent/Reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="container-px relative grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* ================= LEFT SIDE ================= */}

        <Reveal>
          <div>
            {/* Availability Badge */}
            <span
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full glass"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80" }}
              />
              Available for remote freelance work
            </span>

            {/* Heading */}
            <h1
              className="font-display font-bold mt-6 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
              style={{ color: "var(--text)" }}
            >
              I build responsive websites that feel{" "}
              <span className="grad-text">premium.</span>
            </h1>

            {/* Description */}
            <p
              className="mt-6 max-w-md text-base sm:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Frontend developer specializing in React, JavaScript, Tailwind
              CSS, and pixel-perfect Figma-to-code implementation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* View Projects */}
              <a
                href="#projects"
                className="ripple btn-primary text-white text-sm font-medium px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-[1.03]"
              >
                View projects
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="ripple text-sm font-medium px-6 py-3.5 rounded-full glass lift inline-flex items-center gap-2"
                style={{ color: "var(--text)" }}
              >
                Hire me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mahenaj-tabassum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 grid place-items-center rounded-full glass lift"
              >
                <FaLinkedinIn
                  className="w-[18px] h-[18px]"
                  style={{ color: "var(--text)" }}
                />
              </a>

              {/* Email */}
              <a
                href="mailto:hello@mahenajtabassum.dev"
                aria-label="Send an email"
                className="w-11 h-11 grid place-items-center rounded-full glass lift"
              >
                <Mail
                  className="w-[18px] h-[18px]"
                  style={{ color: "var(--text)" }}
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ================= RIGHT SIDE ================= */}

        <Reveal delay="0.1s">
          <div className="relative">
            {/* React Floating Badge */}
            <div
              className="absolute -top-6 -right-4 hidden sm:flex items-center gap-2 glass rounded-full px-3 py-2 text-xs float-b"
              style={{ color: "var(--text-muted)" }}
            >
              <SiReact className="w-4 h-4 text-[#61DAFB]" />
              React
            </div>

            {/* Tailwind Floating Badge */}
            <div
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 glass rounded-full px-3 py-2 text-xs float-a"
              style={{ color: "var(--text-muted)" }}
            >
              <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />
              Tailwind
            </div>

            {/* Code Window */}
            <div className="grad-border glass-strong rounded-[1.1rem] p-5 sm:p-6 shadow-2xl">
              {/* Window Header */}
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
                  Hero.jsx
                </span>
              </div>

              {/* Code */}
              <pre className="mono text-[13px] leading-relaxed overflow-x-auto">
                <code>
                  <span style={{ color: "#8b93ac" }}>
                    // pixel-perfect, by design
                  </span>
                  {"\n"}
                  <span style={{ color: "#38bdf8" }}>function</span>{" "}
                  <span style={{ color: "#8b5cf6" }}>Hero</span>() {"{"}
                  {"\n  "}
                  <span style={{ color: "#38bdf8" }}>return</span> ({"\n    "}
                  <span style={{ color: "#4ade80" }}>&lt;section&gt;</span>
                  {"\n      "}
                  <span style={{ color: "#4ade80" }}>&lt;h1&gt;</span>
                  Built for <span style={{ color: "#facc15" }}>impact</span>
                  <span style={{ color: "#4ade80" }}>&lt;/h1&gt;</span>
                  {"\n      "}
                  <span style={{ color: "#4ade80" }}>&lt;Button&gt;</span>
                  Hire me
                  <span style={{ color: "#4ade80" }}>&lt;/Button&gt;</span>
                  {"\n    "}
                  <span style={{ color: "#4ade80" }}>&lt;/section&gt;</span>
                  {"\n  "});
                  {"\n}"}
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        <span>Scroll</span>

        <span
          className="w-[1px] h-8"
          style={{
            background: "linear-gradient(var(--accent), transparent)",
          }}
        />
      </a>
    </section>
  );
};

export default Hero;
