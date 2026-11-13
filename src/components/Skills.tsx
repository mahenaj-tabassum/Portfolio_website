import Reveal from "./stylesComponent/Reveal";
import SpotCard from "./stylesComponent/SpotCard";
import StaggerGroup, { StaggerItem } from "./stylesComponent/StaggerGroup";
import { SKILL_GROUPS } from "../data/skills";

// Group titles rotate through these colors (accent -> secondary -> muted)
const TITLE_COLORS = ["var(--accent)", "var(--secondary)", "var(--text-muted)"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t">
      <div className="container-px">
        {/* ================= HEADER ================= */}
        <Reveal>
          <div className="max-w-lg">
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              My tech stack
            </h2>

            <p className="mt-4" style={{ color: "var(--text-muted)" }}>
              The tools I build with, and the practices behind how I work.
            </p>
          </div>
        </Reveal>

        {/* ================= SKILL GROUPS ================= */}
        <div className="mt-14 space-y-14">
          {SKILL_GROUPS.map((group, groupIndex) => {
            // Items with a note are big cards, the rest are compact chips
            const cards = group.items.filter((item) => item.note);
            const chips = group.items.filter((item) => !item.note);

            return (
              <StaggerGroup key={group.title}>
                <h3
                  className="mb-5 text-sm font-medium tracking-wide"
                  style={{
                    color: TITLE_COLORS[groupIndex % TITLE_COLORS.length],
                  }}
                >
                  {group.title}
                </h3>

                {/* Big cards */}
                {cards.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {cards.map(({ name, icon: Icon, color, note }, i) => (
                      <StaggerItem key={name} index={i} className="h-full">
                        <SpotCard className="glass lift h-full rounded-xl p-5">
                          <Icon
                            className="h-[26px] w-[26px]"
                            style={{ color: color ?? "var(--accent)" }}
                          />

                          <h4
                            className="font-display mt-3 text-sm font-semibold"
                            style={{ color: "var(--text)" }}
                          >
                            {name}
                          </h4>

                          <p
                            className="mt-1 text-xs leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {note}
                          </p>
                        </SpotCard>
                      </StaggerItem>
                    ))}
                  </div>
                )}

                {/* Compact chips: keep the stagger going after the cards */}
                {chips.length > 0 && (
                  <div
                    className={`flex flex-wrap gap-2.5 ${cards.length > 0 ? "mt-4" : ""}`}
                  >
                    {chips.map(({ name, icon: Icon, color }, j) => (
                      <StaggerItem key={name} index={cards.length + j}>
                        <SpotCard className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs">
                          <Icon
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: color ?? "var(--accent)" }}
                          />
                          <span style={{ color: "var(--text)" }}>{name}</span>
                        </SpotCard>
                      </StaggerItem>
                    ))}
                  </div>
                )}
              </StaggerGroup>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
