import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 border-t">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Name */}
        <span className="font-display text-sm" style={{ color: "var(--text)" }}>
          Mahenaj Tabassum Powshi
        </span>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/mahenaj-tabassum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
                w-9 h-9
                grid place-items-center
                rounded-full
                bg-white/5
                backdrop-blur-md
                border border-white/10
                transition-transform duration-200
                hover:scale-110"
          >
            <FaLinkedinIn
              className="w-4 h-4"
              style={{ color: "var(--text)" }}
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="text-center text-xs mt-6"
        style={{ color: "var(--text-muted)" }}
      >
        © 2026 Mahenaj Tabassum Powshi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
