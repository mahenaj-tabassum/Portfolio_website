import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Process from "../components/Process";
import LearningJourney from "../components/Journey";
import BuildingInPublic from "../components/Building";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <LearningJourney />
      <BuildingInPublic />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
