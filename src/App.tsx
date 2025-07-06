import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { BackToTop } from './components/ui/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import MobileNavBar from './components/layout/MobileNavBar';

// Scroll to top and clean hash on mount
function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <BackToTop />
      <MobileNavBar />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;