import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./stylesComponent/Reveal";
import SpotCard from "./stylesComponent/SpotCard";
import StaggerGroup, { StaggerItem } from "./stylesComponent/StaggerGroup";
import FaqItem from "./FaqItem";
import { CONTACT, whatsappHref } from "../data/contact";
import { FAQ_CATEGORIES, getFaqsByCategory } from "../data/faqs";
import type { FaqCategory } from "../data/faqs";

const FAQ = () => {
  const [category, setCategory] = useState<FaqCategory>(FAQ_CATEGORIES[0]);
  // One answer open at a time. The first one starts open.
  const [openId, setOpenId] = useState<string | null>(
    getFaqsByCategory(FAQ_CATEGORIES[0])[0]?.id ?? null,
  );

  // Sliding highlight behind the active tab (same idea as the Projects filter)
  const tabRefs = useRef<
    Partial<Record<FaqCategory, HTMLButtonElement | null>>
  >({});
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [animatePill, setAnimatePill] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[category];
      if (tab) setPill({ left: tab.offsetLeft, width: tab.offsetWidth });
    };

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);

    return () => window.removeEventListener("resize", measure);
  }, [category]);

  // Enable the slide only after the first layout, so there is no jump on load
  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setAnimatePill(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const selectCategory = (next: FaqCategory) => {
    if (next === category) return;
    setCategory(next);
    setOpenId(getFaqsByCategory(next)[0]?.id ?? null);
  };

  const visible = getFaqsByCategory(category);

  return (
    <section id="faq" className="border-t py-24 lg:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* ===== Left: intro + contact card (sticky on desktop) ===== */}
        <Reveal className="h-full">
          <div className="lg:sticky lg:top-28">
            <h2
              className="font-display text-3xl font-semibold sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Questions, answered
            </h2>

            <p
              className="mt-4 max-w-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              The things clients ask me most before we start: what I use, how we
              work together, and what to expect along the way.
            </p>

            <SpotCard className="glass-strong mt-8 hidden rounded-2xl p-6 lg:block">
              <h3
                className="font-display text-lg font-semibold"
                style={{ color: "var(--text)" }}
              >
                Still have a question?
              </h3>

              <p
                className="mt-1.5 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Send me a message and I'll answer it directly.
              </p>

              <p
                className="mt-4 flex items-center gap-2 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Usually replies within 24 hours
              </p>

              <ContactActions />
            </SpotCard>
          </div>
        </Reveal>

        {/* ===== Right: tabs + accordion ===== */}
        <div className="min-w-0">
          <Reveal delay="0.1s">
            <div className="max-w-full overflow-x-auto">
              <div
                role="group"
                aria-label="Filter questions"
                className="relative inline-flex rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1"
              >
                <span
                  aria-hidden="true"
                  className={`absolute bottom-1 left-0 top-1 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] ${
                    animatePill
                      ? "transition-[transform,width] duration-300 ease-out"
                      : ""
                  }`}
                  style={{
                    width: pill.width,
                    transform: `translateX(${pill.left}px)`,
                  }}
                />

                {FAQ_CATEGORIES.map((item) => (
                  <button
                    key={item}
                    ref={(el) => {
                      tabRefs.current[item] = el;
                    }}
                    type="button"
                    onClick={() => selectCategory(item)}
                    aria-pressed={category === item}
                    className="relative z-10 cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200"
                    style={{
                      color:
                        category === item ? "var(--text)" : "var(--text-muted)",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Re-mounts on tab change, so the cards rise one after another again */}
          <StaggerGroup key={category} className="mt-6 space-y-3">
            {visible.map((faq, index) => (
              <StaggerItem key={faq.id} index={index}>
                <FaqItem
                  faq={faq}
                  open={openId === faq.id}
                  onToggle={() =>
                    setOpenId((current) => (current === faq.id ? null : faq.id))
                  }
                />
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Mobile / tablet: the contact card sits below the list */}
          <Reveal delay="0.1s" className="mt-10 lg:hidden">
            <SpotCard className="glass-strong rounded-2xl p-6">
              <h3
                className="font-display text-lg font-semibold"
                style={{ color: "var(--text)" }}
              >
                Still have a question?
              </h3>

              <p
                className="mt-1.5 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Send me a message and I'll answer it directly.
              </p>

              <p
                className="mt-4 flex items-center gap-2 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Usually replies within 24 hours
              </p>

              <ContactActions />
            </SpotCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// 10. Primary button with the shine sweep + two quick direct links
const ContactActions = () => (
  <div className="mt-5 flex flex-wrap items-center gap-3">
    <Link
      to="/#contact"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition duration-200 hover:shadow-violet-500/40 active:scale-95"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative">Ask me directly</span>
      <ArrowRight
        size={16}
        className="relative transition group-hover:translate-x-0.5"
      />
    </Link>

    <a
      href={`mailto:${CONTACT.email}`}
      aria-label="Email me"
      className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-[var(--text)] active:scale-90"
    >
      <Mail size={17} />
    </a>

    {CONTACT.whatsapp && (
      <a
        href={whatsappHref(CONTACT.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message me on WhatsApp"
        className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-[var(--text)] active:scale-90"
      >
        <FaWhatsapp size={17} />
      </a>
    )}
  </div>
);

export default FAQ;
