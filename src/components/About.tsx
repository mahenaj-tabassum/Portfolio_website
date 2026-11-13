import { BookOpen, Code2, Globe, MapPin } from "lucide-react";
import Reveal from "./stylesComponent/Reveal";
import ProfilePhoto from "./about/ProfilePhoto";
import InfoCard from "./about/InfoCard";

const PARAGRAPHS = [
  "I’m Mahenaj Tabassum Powshi, a Full-Stack Developer from Chattogram, Bangladesh. I enjoy building modern, user-friendly web applications.",
  "My programming journey started with JavaScript. I gradually explored frontend and backend development. I enjoy understanding how different technologies work together.",
  "I love turning ideas into functional products. My interests include building responsive interfaces, creating reusable components, developing APIs, and working with databases.",
  "I'm always eager to learn, explore new ideas, and improve my development skills through hands-on projects.",
];

const INFO = [
  { icon: MapPin, label: "Based in Bangladesh" },
  { icon: Globe, label: "Open to international clients" },
  { icon: Code2, label: "Full-Stack Developer" },
  { icon: BookOpen, label: "Always learning" },
];

const About = () => {
  return (
    <section id="about" className="border-t py-24 lg:py-20">
      <div className="container-px grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: photo / cartoon / placeholder */}
        <ProfilePhoto />

        {/* Right: text + info cards */}
        <div>
          <Reveal delay="0.1s">
            <div>
              <h2
                className="font-display text-3xl font-semibold sm:text-4xl"
                style={{ color: "var(--text)" }}
              >
                About me
              </h2>

              <div
                className="mt-6 space-y-4 text-[15px] leading-relaxed sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                {PARAGRAPHS.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cards rise one after another */}
          <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {INFO.map(({ icon, label }, index) => (
              <Reveal
                key={label}
                delay={`${0.2 + index * 0.08}s`}
                className="h-full"
              >
                <InfoCard icon={icon} label={label} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
