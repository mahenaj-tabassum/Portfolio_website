import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import BackgroundEffects from "./components/stylesComponent/BackgroundEffects";
import CustomCursor from "./components/stylesComponent/CustomCurson";
import ProgressBar from "./components/stylesComponent/ProgressBar";
import ScrollManager from "./components/stylesComponent/ScrollManager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <BackgroundEffects />
      <ProgressBar />
      <CustomCursor />
      <ScrollManager />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="relative z-10" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
