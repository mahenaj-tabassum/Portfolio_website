import { Briefcase, LayoutPanelTop, UserRound } from "lucide-react";
import Reveal from "./stylesComponent/Reveal";
import { FiFigma } from "react-icons/fi";

const services = [
  {
    title: "Figma to responsive website",
    description:
      "Pixel-perfect conversion from design file to production code.",
    icon: FiFigma,
    isFigma: true,
  },
  {
    title: "Landing pages",
    description: "Modern, conversion-focused pages that load fast.",
    icon: LayoutPanelTop,
  },
  {
    title: "Portfolio websites",
    description: "Professional personal websites that showcase your work.",
    icon: UserRound,
  },
  {
    title: "Business websites",
    description: "Fast, responsive sites built around trust and clarity.",
    icon: Briefcase,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 border-t">
      <div className="container-px">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-lg">
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              What I can help you build
            </h2>
          </div>
        </Reveal>

        {/* Services grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={`${index * 0.05}s`}>
                <div className="grad-border glass-strong rounded-[1.2rem] p-6 lift h-full">
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "var(--accent)" }}
                  />

                  <h3
                    className="font-display font-semibold mt-4 text-base"
                    style={{ color: "var(--text)" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {service.description}
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

export default Services;
