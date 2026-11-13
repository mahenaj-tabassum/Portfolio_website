import { Link } from "react-router";
import { ArrowUpRight, Check } from "lucide-react";
import SpotCard from "../stylesComponent/SpotCard";
import type { Service } from "../../data/services";

type ServiceCardProps = {
  service: Service;
  /** 0 = প্রথম কার্ড (নম্বর 01 দেখাতে) */
  index: number;
};

// হোভার ইফেক্টগুলো `group/svc` দিয়ে চলে: আইকন ঘোরে, নম্বর রঙ বদলায়,
// পয়েন্টগুলো একটার পর একটা ডানে সরে, আর লিংকের আন্ডারলাইন স্লাইড করে।
const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { title, description, points, icon: Icon, featured } = service;

  return (
    <SpotCard
      className={`group/svc lift relative flex h-full flex-col rounded-2xl p-6 ${
        featured
          ? "glass-strong border-sky-400/40 bg-linear-to-br from-sky-500/10 via-transparent to-violet-500/10"
          : "glass"
      }`}
    >
      {featured && (
        <span className="mono absolute -top-3 left-6 rounded-full bg-linear-to-r from-sky-500 to-violet-500 px-3 py-1 text-[11px] font-medium text-white shadow-lg shadow-violet-500/25">
          Most requested
        </span>
      )}

      {/* Icon + number */}
      <div className="flex items-start justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] transition duration-300 group-hover/svc:rotate-6 group-hover/svc:scale-110 group-hover/svc:border-transparent group-hover/svc:bg-linear-to-br group-hover/svc:from-sky-500 group-hover/svc:to-violet-500 group-hover/svc:text-white"
          style={{ color: "var(--accent)" }}
        >
          <Icon className="h-5 w-5" />
        </span>

        <span
          className="font-display text-4xl font-bold opacity-30 transition duration-300 group-hover/svc:text-[var(--accent)] group-hover/svc:opacity-100"
          style={{ color: "var(--text-muted)" }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className="font-display mt-5 text-lg font-semibold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h3>

      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {points.map((point, i) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-sm transition duration-300 group-hover/svc:translate-x-1"
            style={{
              color: "var(--text)",
              transitionDelay: `${i * 50}ms`,
            }}
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: "var(--accent)" }}
            />
            {point}
          </li>
        ))}
      </ul>

      {/* mt-auto: কার্ডের উচ্চতা আলাদা হলেও লিংক সবসময় নিচে থাকে */}
      <Link
        to="/#contact"
        className="group/link mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-medium"
        style={{ color: "var(--accent)" }}
      >
        <span className="relative">
          Get a quote
          <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/link:scale-x-100" />
        </span>
        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      </Link>
    </SpotCard>
  );
};

export default ServiceCard;
