import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { SkillsAndTech } from "./components/SkillsAndTech";

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
    <Box minHeight="100vh">
      <Navbar />
      <Box overflowX="hidden">
        <HeroSection />
        <AboutSection />
        <SkillsAndTech />
        <Services />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </Box>
    </Box>
  );
}

export default App;
