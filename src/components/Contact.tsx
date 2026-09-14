import { useState, type FormEvent } from "react";
import { Globe, Mail, MapPin, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import Reveal from "./stylesComponent/Reveal";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [formNote, setFormNote] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormNote(
      "Thanks for reaching out! I'll get back to you as soon as possible.",
    );
    toast.success(
      "Thanks for reaching out! I'll get back to you as soon as possible.",
    );
    setFormData({
      name: "",
      email: "",
      project: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-t">
      <div className="container-px grid lg:grid-cols-[1fr_1.2fr] gap-14">
        {/* Contact information */}
        <Reveal>
          <div>
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Let's build something great
            </h2>

            <p className="mt-4 max-w-sm" style={{ color: "var(--text-muted)" }}>
              Tell me a bit about your project and I'll get back to you.
            </p>

            <div
              className="mt-8 space-y-3 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <div className="flex items-center gap-2.5">
                <MapPin
                  className="w-4 h-4"
                  style={{ color: "var(--accent)" }}
                />
                Bangladesh
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4" style={{ color: "var(--accent)" }} />
                Remote, worldwide
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/mahenaj-tabassum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-11 h-11
                  grid place-items-center
                  rounded-full
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  hover:bg-white/10
                  transition
                "
              >
                <FaLinkedinIn
                  className="w-[18px] h-[18px]"
                  style={{ color: "var(--text)" }}
                />
              </a>

              <a
                href="mailto:hello@mahenajtabassum.dev"
                aria-label="Email"
                className="
                  w-11 h-11
                  grid place-items-center
                  rounded-full
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  hover:bg-white/10
                  transition
                "
              >
                <Mail
                  className="w-[18px] h-[18px]"
                  style={{ color: "var(--text)" }}
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay="0.1s">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="
              rounded-[1.4rem]
              p-7 sm:p-9
              bg-white/5
              backdrop-blur-xl
              border border-white/10
            "
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs mb-2"
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
                  className="
                    w-full
                    rounded-xl
                    px-4 py-3
                    text-sm
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    outline-none
                    focus:border-sky-400/50
                    transition
                  "
                  style={{ color: "var(--text)" }}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs mb-2"
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
                  className="
                    w-full
                    rounded-xl
                    px-4 py-3
                    text-sm
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    outline-none
                    focus:border-sky-400/50
                    transition
                  "
                  style={{ color: "var(--text)" }}
                  placeholder="you@email.com"
                />
              </div>

              {/* Project */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="project"
                  className="block text-xs mb-2"
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
                  className="
                    w-full
                    rounded-xl
                    px-4 py-3
                    text-sm
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    outline-none
                    focus:border-sky-400/50
                    transition
                  "
                  style={{ color: "var(--text)" }}
                  placeholder="e.g. Landing page for a startup"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xs mb-2"
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
                  className="
                    w-full
                    rounded-xl
                    px-4 py-3
                    text-sm
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    outline-none
                    resize-none
                    focus:border-sky-400/50
                    transition
                  "
                  style={{ color: "var(--text)" }}
                  placeholder="Tell me a bit about what you need..."
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                cursor-pointer
                mt-6
                w-full sm:w-auto
                bg-[var(--primary)]
                hover:brightness-110
                text-white
                text-sm
                font-medium
                px-7 py-3.5
                rounded-full
                inline-flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              Send message
              <Send className="w-4 h-4" />
            </button>

            {/* Form message */}
            <p
              className="mt-3 text-xs text-center"
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
