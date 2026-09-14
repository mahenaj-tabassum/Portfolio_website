import { ChevronDown } from "lucide-react";
import Reveal from "./stylesComponent/Reveal";

const faqs = [
  {
    question: "What technologies do you use?",
    answer:
      "Mainly React, JavaScript, and Tailwind CSS for the frontend, and I'm currently adding TypeScript, Node.js, Express, and MongoDB to that.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes — every project is built mobile-first and tested across breakpoints before it ships.",
  },
  {
    question: "Can you convert Figma to React?",
    answer:
      "Yes, that's one of my core skills — turning a Figma file into pixel-accurate, responsive components.",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes, I'm currently open to remote freelance projects and international clients.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Use the contact form below, or reach out directly on LinkedIn or email.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 border-t">
      <div className="container-px max-w-2xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div>
            <h2
              className="font-display font-semibold text-3xl sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Frequently asked
            </h2>
          </div>
        </Reveal>

        {/* FAQ list */}
        <div
          className="mt-10 divide-y"
          style={{ borderColor: "var(--border)" }}
        >
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={`${index * 0.05}s`}>
              <details className="py-5 group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span
                    className="text-[15px] font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className="
                      w-4 h-4
                      shrink-0
                      transition-transform
                      duration-300
                      group-open:rotate-180
                    "
                    style={{ color: "var(--text-muted)" }}
                  />
                </summary>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
