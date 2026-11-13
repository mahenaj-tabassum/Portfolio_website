import type { ReactNode } from "react";
import useSpotlight from "../../hooks/useSpotlight";

type SpotCardProps = {
  children: ReactNode;
  className?: string;
};

// A card whose border glows near the cursor (styles: .spot-card in index.css).
// Shared by the About info cards and the Skills cards.
const SpotCard = ({ children, className = "" }: SpotCardProps) => {
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={`spot-card ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotCard;
