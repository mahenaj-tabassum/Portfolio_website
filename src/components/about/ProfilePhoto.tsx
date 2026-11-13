import Reveal from "../stylesComponent/Reveal";
import useTilt from "../../hooks/useTilt";

/**
 * Image slot.
 * Put ONE file named `profile` (png, jpg, jpeg, webp or svg) into `src/assets`
 * and it is picked up automatically: a photo, a cartoon, anything.
 * With no file there, the animated placeholder below is shown.
 * (If the file doesn't show up right away, restart the dev server once.)
 */
const found = import.meta.glob<string>(
  "../../assets/profile.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" },
);
const PROFILE_SRC: string | undefined = Object.values(found)[0];

/* Animated placeholder: floating figure, tilting head, breathing body,
   twinkling sparkles. Animations live in index.css (.ph-*). */
const Placeholder = () => (
  <svg
    viewBox="0 0 200 240"
    className="animate-float relative w-2/3 overflow-visible"
    aria-hidden="true"
  >


    {/* Body */}
    <path
      className="ph-body"
      d="M30 220c8-52 44-84 70-84s62 32 70 84"
      fill="url(#ph-g2)"
    />

    {/* Head */}
    <circle className="ph-head" cx="100" cy="82" r="46" fill="url(#ph-g1)" />

    {/* Gradients */}
    <defs>
      <linearGradient id="ph-g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#38bdf8" />
        <stop offset="1" stopColor="#3355f4" />
      </linearGradient>

      <linearGradient id="ph-g2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3355f4" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const ProfilePhoto = () => {
  const tiltRef = useTilt<HTMLDivElement>(8);

  return (
    // Reveal: blurs and scales in when scrolled into view
    <Reveal className="photo-reveal">
      {/* This div is the hover area for the tilt */}
      <div className="relative mx-auto w-full max-w-sm lg:mx-0">
        {/* Glow behind the frame */}
        <div
          className="float-a absolute -inset-4 rounded-[2rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,.18), transparent 70%)",
            filter: "blur(30px)",
          }}
          aria-hidden="true"
        />

        {/* Tilting card */}
        <div
          ref={tiltRef}
          className="relative transition-transform duration-200 ease-out will-change-transform"
        >
          {/* Soft rotating glow */}
          <div
            className="aura absolute -inset-1 rounded-[1.9rem] opacity-50 blur-xl"
            aria-hidden="true"
          />

          {/* Rotating gradient ring */}
          <div className="aura relative rounded-[1.6rem] p-[2px]">
            <div
              className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[calc(1.6rem-2px)] bg-[var(--bg-soft)] ${
                PROFILE_SRC ? "" : "shimmer"
              }`}
            >
              <div
                className="absolute inset-0 bg-[var(--surface-strong)]"
                aria-hidden="true"
              />

              {PROFILE_SRC ? (
                <img
                  src={PROFILE_SRC}
                  alt="Mahenaj Tabassum Powshi"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Placeholder />
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProfilePhoto;