import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page not found");

  return (
    <section className="container-px grid min-h-dvh place-items-center py-32 text-center">
      <div>
        <p className="font-display text-6xl font-bold grad-text sm:text-7xl">
          404
        </p>

        <h1
          className="font-display mt-4 text-2xl font-semibold sm:text-3xl"
          style={{ color: "var(--text)" }}
        >
          This page doesn’t exist
        </h1>

        <p
          className="mx-auto mt-3 max-w-sm"
          style={{ color: "var(--text-muted)" }}
        >
          The link may be broken, or the project may have been moved.
        </p>

        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition duration-200 hover:border-sky-400/60 hover:bg-sky-400/10 active:scale-95"
        >
          <ArrowLeft
            size={16}
            className="transition group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
