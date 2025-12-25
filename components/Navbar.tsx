import React from 'react';
import Logo from './Logo';
import NeoButton from './NeoButton';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-neo-border dark:border-white bg-surface-light dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1 overflow-visible">
            <Logo />
            
            {/* Enhanced Studio Badge */}
            <div className="hidden xl:flex ml-1 transform -rotate-2 hover:rotate-0 transition-all duration-300 origin-left">
                <div className="bg-surface-light dark:bg-surface-dark border-2 border-neo-border dark:border-white px-3 py-1.5 rounded-md shadow-neo-sm dark:shadow-neo-sm-dark flex items-center gap-2 group cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:animate-ping"></span>
                    <span className="font-display font-black text-xs tracking-[0.25em] uppercase text-neo-border dark:text-white">Studio</span>
                </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Features</a>
            <a href="#" className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Templates</a>
            <a href="#" className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Pricing</a>
            <div className="h-6 w-0.5 bg-neo-border dark:bg-white opacity-20"></div>
            <button 
                onClick={toggleDarkMode}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Toggle Dark Mode"
            >
                <span className="material-icons-outlined text-xl">
                    {darkMode ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
            <a href="#" className="font-medium">Sign in</a>
            <NeoButton href="#" size="md" variant="primary">
              Start Building
            </NeoButton>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleDarkMode}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
                <span className="material-icons-outlined text-xl">
                    {darkMode ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
            <button className="p-2 border-2 border-neo-border dark:border-white rounded-md shadow-neo-sm dark:shadow-neo-sm-dark active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;