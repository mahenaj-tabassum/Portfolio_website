import BackgroundEffects from "./components/stylesComponent/BackgroundEffects";
import CustomCursor from "./components/stylesComponent/CustomCurson";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/stylesComponent/ProgressBar";
import Hero from "./components/Hero";
import ScrollReveal from "./components/stylesComponent/ScrollReveal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import LearningJourney from "./components/Journey";
import BuildingInPublic from "./components/Building";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <BackgroundEffects />
      <ProgressBar />
      <CustomCursor />
      <ScrollReveal />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
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
        <Footer />
      </main>
    </>
  );
}

export default App;
