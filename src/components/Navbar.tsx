import { useEffect, useState } from "react";
import { Menu, SunMoon, X } from "lucide-react";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { toggleTheme } = useTheme();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      id="navbar"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    >
      <nav
        className={`
          w-full
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/5 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent border-b border-transparent"
          }
        `}
        aria-label="Primary"
      >
        <div className="container-px flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            className={`navlink pb-1 ${
              activeSection === "home" ? "active" : ""
            }`}
            style={{ color: "var(--text)" }}
            onClick={closeMenu}
          >
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg font-display font-bold"
              style={{
                background:
                  "linear-gradient(135deg,var(--accent),var(--primary))",
                color: "#06070d",
              }}
            >
              MT
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul
            className="hidden md:flex items-center gap-8 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <li>
              <a
                href="#home"
                className={`navlink pb-1 ${
                  activeSection === "home" ? "active" : ""
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={`navlink pb-1 ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={`navlink pb-1 ${
                  activeSection === "skills" ? "active" : ""
                }`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={`navlink pb-1 ${
                  activeSection === "projects" ? "active" : ""
                }`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`navlink pb-1 ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right-side buttons */}
          <div className="flex items-center gap-2">
            {/* Theme button */}
            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              className="
                w-10 h-10
                cursor-pointer
                grid place-items-center
                rounded-full
                bg-white/5
                backdrop-blur-md
                border border-white/10
                transition-transform duration-200
                hover:scale-110
              "
            >
              <SunMoon
                className="w-[18px] h-[18px]"
                style={{ color: "var(--text)" }}
              />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobileMenu"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="
                md:hidden
                cursor-pointer
                w-10 h-10
                grid place-items-center
                rounded-full
                bg-white/5
                backdrop-blur-md
                border border-white/10
                transition-transform duration-200
                hover:scale-110
              "
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" style={{ color: "var(--text)" }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: "var(--text)" }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`
          md:hidden
          mx-4 mt-2
          rounded-2xl
          overflow-hidden
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          ${isMenuOpen ? "block" : "hidden"}
        `}
      >
        <ul
          className="flex flex-col py-2 text-base"
          style={{ color: "var(--text)" }}
        >
          <li>
            <a href="#home" className="block px-6 py-3" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="block px-6 py-3" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="block px-6 py-3" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="block px-6 py-3" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="block px-6 py-3" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
