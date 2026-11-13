import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import Reveal from "./stylesComponent/Reveal";
import { CONTACT, phoneHref, whatsappHref } from "../data/contact";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
  external?: boolean;
};

// খালি তথ্য (যেমন WhatsApp না দিলে) তালিকা থেকে বাদ পড়ে
const ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: <Mail size={18} />,
  },
  CONTACT.phone && {
    label: "Phone",
    value: CONTACT.phone,
    href: phoneHref(CONTACT.phone),
    icon: <Phone size={18} />,
  },
  CONTACT.whatsapp && {
    label: "WhatsApp",
    value: `+${CONTACT.whatsapp.replace(/\D/g, "")}`,
    href: whatsappHref(CONTACT.whatsapp),
    icon: <FaWhatsapp size={18} />,
    external: true,
  },
  {
    label: "Location",
    value: CONTACT.location,
    icon: <MapPin size={18} />,
  },
].filter(Boolean) as ContactItem[];

const fieldClass =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition focus:border-sky-400/60";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [formNote, setFormNote] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setFormNote("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
          subject: `New client inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setFormNote(
        "Thanks for reaching out! I'll get back to you as soon as possible.",
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormNote(
        "Something went wrong. Please try again or email me directly.",
      );
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="border-t py-24 lg:py-32">
      <div className="container-px grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        {/* ===== Contact information ===== */}
        <Reveal>
          <div>
            <h2
              className="font-display text-3xl font-semibold sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Let's build something great
            </h2>

            <p className="mt-4 max-w-sm" style={{ color: "var(--text-muted)" }}>
              Have a project in mind? Reach out directly or send a message with
              the form, and I'll get back to you.
            </p>

            <ul className="mt-8 space-y-3">
              {ITEMS.map(({ label, value, href, icon, external }) => {
                const inner = (
                  <>
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]"
                      style={{ color: "var(--accent)" }}
                    >
                      {icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className="block text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="block truncate text-sm font-medium"
                        style={{ color: "var(--text)" }}
                      >
                        {value}
                      </span>
                    </span>

                    {href && (
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        style={{ color: "var(--text-muted)" }}
                      />
                    )}
                  </>
                );

                const cardClass =
                  "group glass flex items-center gap-4 rounded-2xl p-4";

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className={`${cardClass} lift`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={cardClass}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p
              className="mt-6 flex items-center gap-2 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={14} style={{ color: "var(--accent)" }} />
              Usually replies within 24 hours · Remote, worldwide
            </p>
          </div>
        </Reveal>

        {/* ===== Contact form ===== */}
        <Reveal delay="0.1s">
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-[1.4rem] p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{ color: "var(--text)" }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{ color: "var(--text)" }}
                  placeholder="you@email.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="project"
                  className="mb-2 block text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Project
                </label>
                <input
                  id="project"
                  name="project"
                  type="text"
                  value={formData.project}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{ color: "var(--text)" }}
                  placeholder="e.g. Landing page for a startup"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                  style={{ color: "var(--text)" }}
                  placeholder="Tell me a bit about what you need..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSending ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" />
            </button>

            <p
              className="mt-3 text-center text-xs"
              style={{ color: "var(--text-muted)" }}
              aria-live="polite"
            >
              {formNote}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
