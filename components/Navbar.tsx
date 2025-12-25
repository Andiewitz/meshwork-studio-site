import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const logoLetters = [
    { char: 'M', color: 'bg-primary', rotate: '-rotate-3 z-10' },
    { char: 'E', color: 'bg-secondary', rotate: 'rotate-2 z-20' },
    { char: 'S', color: 'bg-accent', rotate: '-rotate-2 z-10' },
    { char: 'H', color: 'bg-blue-600', rotate: 'rotate-3 z-30' },
    { char: 'W', color: 'bg-rose-500', rotate: '-rotate-3 z-20' },
    { char: 'O', color: 'bg-indigo-500', rotate: 'rotate-2 z-10' },
    { char: 'R', color: 'bg-orange-500', rotate: '-rotate-2 z-30' },
    { char: 'K', color: 'bg-teal-500', rotate: 'rotate-3 z-20' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-neo-border dark:border-white bg-surface-light dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1 overflow-visible">
            <div className="flex items-center -space-x-1.5">
              {logoLetters.map((letter, index) => (
                <div 
                  key={index} 
                  className={`
                    w-9 h-9 ${letter.color} ${letter.rotate} 
                    border-2 border-neo-border dark:border-white 
                    flex items-center justify-center 
                    shadow-neo-sm dark:shadow-neo-sm-dark 
                    flex-shrink-0 rounded-md 
                    relative
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-110 hover:rotate-0 hover:z-50
                  `}
                >
                  <span className="text-white font-bold font-display text-xl select-none">{letter.char}</span>
                </div>
              ))}
            </div>
            
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
            <a href="#" className="bg-primary text-white px-4 py-2 font-bold border-2 border-neo-border dark:border-white shadow-neo-sm dark:shadow-neo-sm-dark hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none dark:hover:shadow-none transition-all rounded-md">
              Start Building
            </a>
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