import { useState } from "react";

type ProjectImageProps = {
  src: string;
  title: string;
  /** Slowly scrolls a tall screenshot while the parent `group/row` is hovered */
  pan?: boolean;
};

const initials = (title: string) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

// Shows the screenshot from the public folder. If the file is missing (or broken),
// a gradient placeholder with the project's initials is shown instead.
const ProjectImage = ({ src, title, pan = false }: ProjectImageProps) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return (
      <div
        role="img"
        aria-label={`${title} preview (screenshot coming soon)`}
        className="grid aspect-[16/10] w-full place-items-center bg-linear-to-br from-sky-500/20 via-[var(--surface-strong)] to-violet-500/20"
      >
        <span className="font-display text-3xl font-bold grad-text">
          {initials(title)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} screenshot`}
      loading="lazy"
      draggable={false}
      onError={() => setFailedSrc(src)}
      className={`aspect-[16/10] w-full object-cover object-top ${
        pan
          ? "transition-[object-position] duration-[4000ms] ease-in-out motion-safe:group-hover/row:object-bottom"
          : ""
      }`}
    />
  );
};

export default ProjectImage;
