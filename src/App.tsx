import { Box, Spinner, Flex, Text } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';

// Lazy load heavy components
const ProjectsSection = lazy(() =>
  import('./components/ProjectsSection').then((module) => ({
    default: module.ProjectsSection,
  }))
);
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((module) => ({
    default: module.AboutSection,
  }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((module) => ({
    default: module.ContactSection,
  }))
);

export const bgGradient =
  'linear-gradient(135deg, #0a0a0a, #2d2d2d';


const LoadingFallback = ({ text = 'Loading...' }: { text?: string }) => (
  <Flex justify='center' align='center' h='60vh' direction='column' gap={3}>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
    color='whiteAlpha.600'
      size='xl'
    />
    <Text color='gray.400' fontSize='lg' fontWeight='medium'>
      {text}
    </Text>
  </Flex>
);

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route index path='/' element={<HeroSection />} />
            <Route path='about' element={<AboutSection />} />
            <Route path='projects' element={<ProjectsSection />} />
            <Route path='contact' element={<ContactSection />} />
          </Routes>
        </Suspense>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
