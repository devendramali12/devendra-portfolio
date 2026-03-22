import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useAnalyticsTracking from "./hooks/useAnalyticsTracking";

function App() {
  // Initialize analytics tracking
  useAnalyticsTracking();

  return (
    <>
      <GlobalStyles />
      <ScrollProgressBar />
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
