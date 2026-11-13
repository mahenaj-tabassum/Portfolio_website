import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Watches the group once. When it scrolls into view it gets `.is-visible`,
 * and every <StaggerItem> inside rises one after another (styles in index.css).
 */
const StaggerGroup = ({ children, className = "" }: StaggerGroupProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stagger ${className}`}>
      {children}
    </div>
  );
};

type StaggerItemProps = {
  /** Position inside the group: 0 appears first, then 1, 2, ... */
  index: number;
  children: ReactNode;
  className?: string;
};

export const StaggerItem = ({
  index,
  children,
  className = "",
}: StaggerItemProps) => (
  <div
    className={`stagger-item ${className}`}
    style={{ "--i": index } as CSSProperties}
  >
    {children}
  </div>
);

export default StaggerGroup;
