import React from 'react';

interface NeoButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "inline-flex justify-center items-center font-bold border-2 border-neo-border dark:border-white transition-all rounded-md cursor-pointer select-none";
  
  // Shadow and hover effects
  const shadowStyles = "shadow-neo-sm dark:shadow-neo-sm-dark hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none dark:hover:shadow-none";
  const largeShadowStyles = "shadow-neo dark:shadow-neo-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:hover:shadow-none";

  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "bg-surface-light dark:bg-surface-dark text-text-light dark:text-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  const selectedShadow = size === 'lg' ? largeShadowStyles : shadowStyles;
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${selectedShadow} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default NeoButton;