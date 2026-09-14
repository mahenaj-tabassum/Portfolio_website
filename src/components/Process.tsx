import Reveal from "./stylesComponent/Reveal";

const processSteps = [
  "Understand requirements",
  "Design structure",
  "Build components",
  "Responsive optimization",
  "Final delivery",
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 border-t">
      <div className="container-px">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-lg">
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Development process
            </h2>
          </div>
        </Reveal>

        {/* Process timeline */}
        <Reveal delay="0.1s">
          <div className="mt-16">
            {/* Desktop timeline line */}
            <div
              className="hidden lg:block relative h-[2px] mb-10"
              style={{ background: "var(--border)" }}
            >
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--primary), var(--secondary))",
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <div key={step} className="text-center lg:text-left">
                  {/* Number */}
                  <div
                    className="
                      w-10 h-10
                      mx-auto lg:mx-0
                      rounded-full
                      grid place-items-center
                      font-display text-sm
                      bg-white/5
                      backdrop-blur-md
                      border border-white/10
                    "
                    style={{ color: "var(--accent)" }}
                  >
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-semibold mt-4 text-sm"
                    style={{ color: "var(--text)" }}
                  >
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
