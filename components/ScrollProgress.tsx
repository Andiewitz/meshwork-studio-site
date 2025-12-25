import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollTotal = docHeight - winHeight;

      if (scrollTotal <= 0) {
        setScrollProgress(0);
        return;
      }

      const scroll = scrollTop / scrollTotal;
      setScrollProgress(Math.min(1, Math.max(0, scroll)));
    };

    window.addEventListener('scroll', calculateScroll, { passive: true });
    window.addEventListener('resize', calculateScroll);
    
    // Initial calculation
    calculateScroll();
    
    return () => {
      window.removeEventListener('scroll', calculateScroll);
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-3 z-[100] bg-gray-200 dark:bg-gray-800 border-b-2 border-neo-border dark:border-white pointer-events-none">
      <div
        className="h-full bg-primary origin-left transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
      >
        {/* Visual "Head" of the progress bar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-neo-border dark:border-gray-900 rounded-full shadow-sm"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;