import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import WorkflowSection from './components/WorkflowSection';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Removed overflow-x-hidden from main, relying on the background container to clip */}
      <main className="relative w-full grid-bg flex-grow flex flex-col">
        {/* Background blobs - Wrapper div with overflow-hidden handles the clipping */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none h-full">
            <div className="absolute top-20 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        </div>
        
        <HeroSection />
        <FeaturesGrid />
        <WorkflowSection />
        
        {/* Marquee moved before footer but kept at bottom of content flow */}
        <div className="py-12 relative">
             <Marquee />
        </div>
        <div className="h-16"></div> {/* Spacer for visual balance */}

        <Footer />
      </main>
    </div>
  );
}