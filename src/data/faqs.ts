export type FaqCategory = "General" | "Tech & Process" | "Working Together";

export const FAQ_CATEGORIES: FaqCategory[] = [
  "General",
  "Tech & Process",
  "Working Together",
];

export type FaqPoint = {
  /** Optional bold lead-in, e.g. "Frontend" */
  label?: string;
  text: string;
};

export type Faq = {
  /** Unique, used for aria-controls and element ids */
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  /** Optional list shown under the answer */
  points?: FaqPoint[];
  /** true -> numbered steps, false/undefined -> bullets */
  ordered?: boolean;
};

export const FAQS: Faq[] = [
  /* ---------------------------- General ---------------------------- */
  {
    id: "what-i-do",
    category: "General",
    question: "What do you do?",
    answer:
      "I'm a full-stack developer. I build complete web products: the interface in React or Next.js, the API in Node.js and Express, and the database in MongoDB. You work with one person who understands the whole picture, from the first screen to the last query.",
  },
  {
    id: "freelance",
    category: "General",
    question: "Are you available for freelance work?",
    answer:
      "Yes. I'm open to remote freelance projects and longer collaborations with clients anywhere in the world. The badge at the top of the page always shows my current availability.",
  },
  {
    id: "international",
    category: "General",
    question: "Do you work with international clients?",
    answer:
      "Absolutely. I'm based in Chattogram, Bangladesh (UTC+6) and work fully remotely. I keep communication clear and written, so time zones are rarely a problem.",
  },

  /* ------------------------- Tech & Process ------------------------- */
  {
    id: "technologies",
    category: "Tech & Process",
    question: "What technologies do you use?",
    answer: "Here is the stack I build with every day:",
    points: [
      {
        label: "Frontend",
        text: "React, Next.js, TypeScript, Tailwind CSS, shadcn/ui",
      },
      { label: "Backend", text: "Node.js, Express, REST APIs" },
      { label: "Database", text: "MongoDB" },
      { label: "Auth", text: "Better Auth and JWT" },
      { label: "Tools", text: "Git, GitHub, Postman, Vercel, Figma" },
    ],
  },
  {
    id: "figma",
    category: "Tech & Process",
    question: "Can you turn my Figma design into code?",
    answer:
      "Yes. I convert Figma files into pixel-accurate, responsive React or Next.js components. They are reusable, so your design stays consistent as the product grows.",
  },
  {
    id: "responsive",
    category: "Tech & Process",
    question: "Will my website work on phones?",
    answer:
      "Yes. I build mobile-first and test across breakpoints before delivery, so it works properly on phones, tablets and desktops.",
  },
  {
    id: "security",
    category: "Tech & Process",
    question: "How secure are the login and user data?",
    answer:
      "I use Better Auth with JWT-protected API routes, and permissions are checked on the server, not just hidden in the interface. In HandsTogether, for example, only the creator of an event can edit or delete it, and the API enforces that rule.",
  },

  /* ------------------------ Working Together ------------------------ */
  {
    id: "process",
    category: "Working Together",
    question: "How does a project usually go?",
    answer: "Most projects follow five simple steps:",
    ordered: true,
    points: [
      {
        label: "Discuss",
        text: "you share the idea, goals and any references.",
      },
      {
        label: "Plan",
        text: "we agree on scope, features and a timeline.",
      },
      {
        label: "Build",
        text: "I work in small steps and share progress along the way.",
      },
      { label: "Review", text: "you give feedback and I refine." },
      {
        label: "Launch",
        text: "I deploy it (usually on Vercel) and hand everything over.",
      },
    ],
  },
  {
    id: "timeline",
    category: "Working Together",
    question: "How long will my project take?",
    answer:
      "It depends on the scope. A landing page can take a few days, a portfolio or business site about one to two weeks, and a full-stack app a few weeks. After we talk, I'll give you an honest estimate before any work starts.",
  },
  {
    id: "after-delivery",
    category: "Working Together",
    question: "What happens after the project is delivered?",
    answer:
      "I stay available for fixes and small adjustments after launch. Bigger new features can be scoped as a follow-up. You get the full source code and a short handover so you're never locked in.",
  },
  {
    id: "contact",
    category: "Working Together",
    question: "How can I reach you, and how fast do you reply?",
    answer:
      "Use the contact form, or write to me on email, WhatsApp or LinkedIn. I usually reply within 24 hours.",
  },
];

export const getFaqsByCategory = (category: FaqCategory) =>
  FAQS.filter((faq) => faq.category === category);
