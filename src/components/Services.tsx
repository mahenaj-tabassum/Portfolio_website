import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Reveal from "./stylesComponent/Reveal";
import StaggerGroup, { StaggerItem } from "./stylesComponent/StaggerGroup";
import ServiceCard from "./services/ServiceCard";
import { SERVICES } from "../data/services";

const Services = () => {
  return (
    <section id="services" className="border-t py-24 lg:py-32">
      <div className="container-px">
        {/* Header */}
        <Reveal>
          <div className="max-w-xl">
            <p
              className="mono text-xs uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Services
            </p>
            <h2
              className="font-display mt-3 text-3xl font-semibold sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              What I can help you build
            </h2>
            <p className="mt-4" style={{ color: "var(--text-muted)" }}>
              From a pixel-perfect frontend to a complete full-stack product.
            </p>
          </div>
        </Reveal>

        {/* Cards: একটার পর একটা উঠে আসে */}
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <StaggerItem key={service.title} index={index} className="h-full">
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* CTA strip */}
        <Reveal delay="0.1s">
          <div className="glass-strong mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3
                className="font-display text-xl font-semibold"
                style={{ color: "var(--text)" }}
              >
                Have something different in mind?
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Tell me about it and we'll figure out the best way to build it.
              </p>
            </div>

            <Link
              to="/#contact"
              className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition duration-200 hover:shadow-violet-500/40 active:scale-95"
            >
              {/* Shine sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">Let's talk</span>
              <ArrowRight
                size={16}
                className="relative transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
