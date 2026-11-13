import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll progress bar + glass background after the first few pixels
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      progressRef.current?.style.setProperty(
        "transform",
        `scaleX(${max > 0 ? y / max : 0})`,
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll-spy: highlight the section currently in the middle of the screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Mobile menu: close on Escape, lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#07080d]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a
          href="#home"
          aria-label="Mahenaj Tabassum Powshi, back to top"
          className="group grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-sky-400 to-violet-500 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-rotate-6 hover:scale-105 active:scale-95"
        >
          MT
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`group relative block px-3.5 py-2 text-sm transition-colors duration-200 ${
                  active === id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-linear-to-r from-sky-400 to-violet-400 transition-transform duration-300 ${
                    active === id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:border-sky-400/50 hover:bg-sky-400/10 active:scale-95 sm:inline-block"
          >
            Hire me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition active:scale-90 lg:hidden"
          >
            <Menu
              size={18}
              className={`absolute transition duration-300 ${
                open ? "rotate-90 scale-50 opacity-0" : ""
              }`}
            />
            <X
              size={18}
              className={`absolute transition duration-300 ${
                open ? "" : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 pb-5">
            {links.map(({ id, label }, i) => (
              <li
                key={id}
                className={`transition duration-300 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`flex items-center justify-between border-b border-white/5 py-3.5 text-base ${
                    active === id ? "text-sky-300" : "text-slate-300"
                  }`}
                >
                  {label}
                  {active === id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll progress */}
      <div
        ref={progressRef}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-sky-400 via-violet-400 to-fuchsia-400"
      />
    </header>
  );
}
