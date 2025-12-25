import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  if (variant === 'icon') {
     return (
        <div className={`w-8 h-8 bg-primary border-2 border-neo-border dark:border-white flex items-center justify-center shadow-neo-sm dark:shadow-neo-sm-dark ${className}`}>
            <span className="text-white font-bold font-display text-lg">M</span>
        </div>
     );
  }

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
    <div className={`flex items-center -space-x-1.5 ${className}`}>
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
            cursor-default
          `}
        >
          <span className="text-white font-bold font-display text-xl select-none">{letter.char}</span>
        </div>
      ))}
    </div>
  );
};

export default Logo;