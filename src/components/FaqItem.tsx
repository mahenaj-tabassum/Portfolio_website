import { Plus } from "lucide-react";
import SpotCard from "./stylesComponent/SpotCard";
import type { Faq } from "./../data/faqs";

type FaqItemProps = {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
};

// One accordion row. Animations (all answer the person's click):
//  1. the height opens smoothly (grid-template-rows 0fr -> 1fr)
//  2. the + icon turns into a x
//  3. the answer fades and slides up, slightly after the panel starts opening
//  4. a gradient bar grows on the left edge
//  + the border glow that follows the cursor comes from SpotCard
const FaqItem = ({ faq, open, onToggle }: FaqItemProps) => {
  const { id, question, answer, points, ordered } = faq;
  const ListTag = ordered ? "ol" : "ul";

  return (
    <SpotCard
      className={`relative overflow-hidden rounded-2xl transition-colors duration-300 ${
        open ? "glass-strong" : "glass"
      }`}
    >
      {/* 4. Left gradient bar */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-3 left-0 w-0.5 origin-center rounded-full bg-linear-to-b from-sky-400 to-violet-500 transition-transform duration-300 ease-out ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      />

      <h3>
        <button
          type="button"
          id={`faq-${id}-button`}
          aria-expanded={open}
          aria-controls={`faq-${id}-panel`}
          onClick={onToggle}
          className="group/q flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span
            className="text-[15px] font-medium transition-transform duration-300 group-hover/q:translate-x-1"
            style={{ color: "var(--text)" }}
          >
            {question}
          </span>

          {/* 2. Plus -> cross */}
          <span
            aria-hidden="true"
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition duration-300 ${
              open
                ? "rotate-45 border-transparent bg-linear-to-br from-sky-500 to-violet-500 text-white"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] group-hover/q:border-sky-400/50 group-hover/q:text-[var(--text)]"
            }`}
          >
            <Plus size={16} />
          </span>
        </button>
      </h3>

      {/* 1. Smooth height */}
      <div
        id={`faq-${id}-panel`}
        role="region"
        aria-labelledby={`faq-${id}-button`}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {/* 3. Answer fades and slides up */}
          <div
            className={`px-5 pb-5 transition duration-300 ease-out sm:px-6 sm:pb-6 ${
              open
                ? "translate-y-0 opacity-100 delay-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            <p
              className="max-w-prose text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {answer}
            </p>

            {points && (
              <ListTag
                className={`mt-3 max-w-prose space-y-1.5 pl-5 text-sm leading-relaxed marker:text-[var(--accent)] ${
                  ordered ? "list-decimal" : "list-disc"
                }`}
                style={{ color: "var(--text-muted)" }}
              >
                {points.map(({ label, text }) => (
                  <li key={text}>
                    {label && (
                      <strong
                        className="font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {label}
                        {ordered ? ": " : " · "}
                      </strong>
                    )}
                    {text}
                  </li>
                ))}
              </ListTag>
            )}
          </div>
        </div>
      </div>
    </SpotCard>
  );
};

export default FaqItem;
