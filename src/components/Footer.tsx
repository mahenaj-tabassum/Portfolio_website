import { Link } from "react-router";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CONTACT, phoneHref, whatsappHref } from "../data/contact";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: <FaGithub size={16} />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: <FaLinkedinIn size={16} />,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: <Mail size={16} />,
    external: false,
  },
  CONTACT.whatsapp && {
    label: "WhatsApp",
    href: whatsappHref(CONTACT.whatsapp),
    icon: <FaWhatsapp size={16} />,
    external: true,
  },
].filter(Boolean) as {
  label: string;
  href: string;
  icon: React.ReactNode;
  external: boolean;
}[];

const Footer = () => {
  const linkClass =
    "text-sm transition-colors duration-200 hover:text-[var(--text)]";

  return (
    <footer className="border-t py-12">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              to="/#home"
              className="inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-sky-400 to-violet-500 text-sm font-bold text-white">
                MT
              </span>
              <span
                className="font-display text-sm font-semibold"
                style={{ color: "var(--text)" }}
              >
                Mahenaj Tabassum Powshi
              </span>
            </Link>

            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Full-Stack Developer building responsive, user-friendly web
              applications with React, Next.js, Node.js and MongoDB.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h2
              className="font-display text-sm font-semibold"
              style={{ color: "var(--text)" }}
            >
              Quick links
            </h2>

            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={`/#${id}`}
                    className={linkClass}
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2
              className="font-display text-sm font-semibold"
              style={{ color: "var(--text)" }}
            >
              Get in touch
            </h2>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={linkClass}
                  style={{ color: "var(--text-muted)" }}
                >
                  {CONTACT.email}
                </a>
              </li>

              {CONTACT.phone && (
                <li>
                  <a
                    href={phoneHref(CONTACT.phone)}
                    className={linkClass}
                    style={{ color: "var(--text-muted)" }}
                  >
                    {CONTACT.phone}
                  </a>
                </li>
              )}

              <li className="text-sm" style={{ color: "var(--text-muted)" }}>
                {CONTACT.location}
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-[var(--text)]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Mahenaj Tabassum Powshi. All rights
            reserved.
          </p>

          <Link
            to="/#home"
            className="group inline-flex items-center gap-2 text-xs transition-colors hover:text-[var(--text)]"
            style={{ color: "var(--text-muted)" }}
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
