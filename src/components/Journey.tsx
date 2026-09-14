import Reveal from "./stylesComponent/Reveal";

const journey = [
  {
    year: "2024",
    text: "Started learning web development and exploring the fundamentals of HTML, CSS, and JavaScript.",
    current: true,
  },
  {
    year: "2025",
    text: "Focused on improving frontend development skills and building responsive websites.",
  },
  {
    year: "2026",
    text: "Started building React projects and learning modern frontend development.",
  },
  {
    year: "Now",
    text: "Learning full-stack development and building projects for international freelance opportunities.",
  },
];

const LearningJourney = () => {
  return (
    <section id="journey" className="py-24 lg:py-32 border-t">
      <div className="container-px max-w-2xl">
        {/* Heading */}
        <Reveal>
          <div>
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Learning journey
            </h2>

            <p className="mt-4" style={{ color: "var(--text-muted)" }}>
              Honest progress, shown as a timeline instead of invented years of
              experience.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol
          className="mt-12 relative border-l pl-8"
          style={{ borderColor: "var(--border)" }}
        >
          {journey.map((item, index) => (
            <Reveal key={item.year} delay={`${index * 0.05}s`}>
              <li
                className={`relative ${
                  index !== journey.length - 1 ? "mb-10" : ""
                }`}
              >
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[38px] top-1 w-3.5 h-3.5 rounded-full ${
                    item.current
                      ? ""
                      : "bg-white/5 backdrop-blur-md border border-white/10"
                  }`}
                  style={
                    item.current ? { background: "var(--accent)" } : undefined
                  }
                />

                {/* Year */}
                <span
                  className="text-xs font-medium mono"
                  style={{ color: "var(--accent)" }}
                >
                  {item.year}
                </span>

                {/* Description */}
                <p
                  className="mt-1.5 text-[15px]"
                  style={{ color: "var(--text)" }}
                >
                  {item.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default LearningJourney;
