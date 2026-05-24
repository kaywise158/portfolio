import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export const bgGradient = "linear-gradient(135deg, #0a0a0a, #2d2d2d)";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <Box overflow="hidden" minHeight="100vh">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}

export default App;
