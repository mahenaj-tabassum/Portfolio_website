import type { LucideIcon } from "lucide-react";
import SpotCard from "../stylesComponent/SpotCard";

type InfoCardProps = {
  icon: LucideIcon;
  label: string;
};

// The glow on the border follows the cursor (shared SpotCard, styles: .spot-card in index.css)
const InfoCard = ({ icon: Icon, label }: InfoCardProps) => {
  return (
    <SpotCard className="glass flex h-full items-center gap-2.5 rounded-xl px-4 py-3.5 text-sm">
      <span
        className="flex items-center gap-2.5"
        style={{ color: "var(--text)" }}
      >
        <Icon className="h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
        {label}
      </span>
    </SpotCard>
  );
};

export default InfoCard;
