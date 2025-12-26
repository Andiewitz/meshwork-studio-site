import React from 'react';
import DiagramCanvas from './DiagramCanvas';
import NeoButton from './NeoButton';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full mb-0 min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Column: Content */}
          <div className="space-y-6 z-20 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center bg-yellow-200 dark:bg-yellow-900/50 border-2 border-neo-border dark:border-white px-3 py-1 rounded-full shadow-neo-sm dark:shadow-neo-sm-dark rotate-[-2deg]">
              <span className="font-bold text-xs tracking-wide uppercase dark:text-yellow-100">🚀 Now in Public Beta</span>
            </div>
            
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight">
              Architect your <br/>
              <span className="text-primary underline decoration-4 decoration-secondary underline-offset-4">Distributed Systems</span>
              {' '}visually.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Design, prototype, and document complex microservices architectures in a drag-and-drop canvas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
              <NeoButton href="#" variant="primary" size="lg" className="w-full sm:w-auto px-6 py-3 text-base">
                Try as Guest Architect
                <span className="material-icons-outlined ml-2 text-lg">arrow_forward</span>
              </NeoButton>
              
              <NeoButton href="#" variant="outline" size="lg" className="w-full sm:w-auto px-6 py-3 text-base">
                <span className="material-icons-outlined mr-2 text-lg">play_circle</span>
                Watch Demo
              </NeoButton>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 pt-2">
              <div className="flex -space-x-2">
                <img src="https://picsum.photos/100/100?random=1" alt="User Avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark" />
                <img src="https://picsum.photos/100/100?random=2" alt="User Avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark" />
                <img src="https://picsum.photos/100/100?random=3" alt="User Avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark" />
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px]">+2k</div>
              </div>
              <p>Trusted by 2,000+ architects</p>
            </div>
          </div>

          {/* Right Column: Interactive Graphic */}
          <div className="relative z-10 w-full flex items-center justify-center lg:justify-end h-full mt-8 lg:mt-0">
             {/* Wrapper controls the max size of the diagram. Reduced max-w for better scaling. */}
             <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
                 <div className="absolute inset-0 bg-secondary rounded-xl border-2 border-neo-border dark:border-white shadow-neo dark:shadow-neo-dark transform rotate-3 translate-x-3 translate-y-3"></div>
                 <DiagramCanvas className="bg-[#1e1e1e]" />
                 
                 {/* Floating Badge */}
                 <div className="absolute -right-2 top-8 lg:-right-4 lg:top-12 bg-white dark:bg-surface-dark p-3 rounded-lg border-2 border-neo-border dark:border-white shadow-neo-sm dark:shadow-neo-sm-dark rotate-6 lg:rotate-12 z-20 hidden sm:block">
                     <div className="flex items-center gap-2">
                         <div className="p-1.5 bg-green-100 rounded-md">
                             <span className="material-icons-outlined text-green-600 text-sm">check_circle</span>
                         </div>
                         <div>
                             <div className="font-bold text-xs">Valid Config</div>
                             <div className="text-[10px] text-gray-500 dark:text-gray-400">No conflicts found</div>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* Connection Wire to Next Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-12 lg:h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-gray-400 dark:to-gray-500 z-0"></div>
    </div>
  );
};

export default HeroSection;