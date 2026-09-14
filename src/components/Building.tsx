import { Code2, Layers, Send } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import Reveal from "./stylesComponent/Reveal";

const activities = [
  {
    text: "Learning React daily",
    icon: Code2,
  },
  {
    text: "Creating portfolio projects",
    icon: Layers,
  },
  {
    text: "Improving Figma-to-code skills",
    icon: FaFigma,
  },
  {
    text: "Preparing for freelance work",
    icon: Send,
  },
];

const BuildingInPublic = () => {
  return (
    <section id="building" className="py-24 lg:py-32 border-t">
      <div className="container-px">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-lg">
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Building in public
            </h2>

            <p className="mt-4" style={{ color: "var(--text-muted)" }}>
              No client testimonials yet — here's what I'm actually doing right
              now instead.
            </p>
          </div>
        </Reveal>

        {/* Activities */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <Reveal key={activity.text} delay={`${index * 0.05}s`}>
                <div
                  className="
                    h-full
                    rounded-[1.2rem]
                    p-6
                    lift
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                  "
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "var(--accent)" }}
                  />

                  <p className="mt-4 text-sm" style={{ color: "var(--text)" }}>
                    {activity.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildingInPublic;
