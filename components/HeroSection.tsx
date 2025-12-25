import React from 'react';
import DiagramCanvas from './DiagramCanvas';
import NeoButton from './NeoButton';

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 z-10">
          <div className="inline-block bg-yellow-200 dark:bg-yellow-900/50 border-2 border-neo-border dark:border-white px-4 py-1.5 rounded-full shadow-neo-sm dark:shadow-neo-sm-dark rotate-[-2deg]">
            <span className="font-bold text-sm tracking-wide uppercase dark:text-yellow-100">🚀 Now in Public Beta</span>
          </div>
          
          <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight">
            Architect your <br/>
            <span className="text-primary underline decoration-4 decoration-secondary underline-offset-4">Distributed Systems</span>
            {' '}visually.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            Design, prototype, and document complex microservices architectures in a drag-and-drop canvas. From load balancers to databases, visualize your flow instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <NeoButton href="#" variant="primary" size="lg">
              Try as Guest Architect
              <span className="material-icons-outlined ml-2">arrow_forward</span>
            </NeoButton>
            
            <NeoButton href="#" variant="outline" size="lg">
              <span className="material-icons-outlined mr-2">play_circle</span>
              Watch Demo
            </NeoButton>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 pt-4">
            <div className="flex -space-x-3">
              <img src="https://picsum.photos/100/100?random=1" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark" />
              <img src="https://picsum.photos/100/100?random=2" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark" />
              <img src="https://picsum.photos/100/100?random=3" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark" />
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">+2k</div>
            </div>
            <p>Trusted by 2,000+ architects</p>
          </div>
        </div>

        {/* Right Column: Interactive Graphic */}
        <div className="relative z-10 lg:h-[500px] w-full max-w-[500px] mx-auto hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary rounded-2xl border-2 border-neo-border dark:border-white shadow-neo-lg dark:shadow-neo-lg transform rotate-3 translate-x-4 translate-y-4"></div>
            <DiagramCanvas />
            {/* Floating Badge */}
            <div className="absolute -right-6 top-20 bg-white dark:bg-surface-dark p-4 rounded-xl border-2 border-neo-border dark:border-white shadow-neo dark:shadow-neo-dark rotate-12 z-20 hidden lg:block">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                        <span className="material-icons-outlined text-green-600">check_circle</span>
                    </div>
                    <div>
                        <div className="font-bold text-sm">Valid Config</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">No conflicts found</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;