import React, { useEffect, useRef } from 'react';

const features = [
  {
    title: "Visual Canvas",
    description: "Drag and drop components to build your architecture. Connect services with intuitive lines.",
    icon: "draw",
    color: "blue",
    hex: "#3b82f6" // blue-500
  },
  {
    title: "Real-time Sync",
    description: "Collaborate with your team in real-time. See changes as they happen instantly.",
    icon: "sync",
    color: "purple",
    hex: "#a855f7" // purple-500
  },
  {
    title: "Export IaC",
    description: "Turn your diagrams into production-ready Terraform, Pulumi, and CloudFormation.",
    icon: "code",
    color: "emerald",
    hex: "#10b981" // emerald-500
  }
];

const FeaturesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !innerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate ratio (0 to 1) of element passage through viewport
      // 0 = top of element just entering bottom of viewport
      // 1 = bottom of element just leaving top of viewport
      const totalDistance = windowHeight + elementHeight;
      const currentPos = windowHeight - rect.top;
      let scrollRatio = currentPos / totalDistance;

      // Clamp to 0-1 for safety
      scrollRatio = Math.max(0, Math.min(1, scrollRatio));

      // Calculate Animation Progress (0 -> 1 -> 0)
      // Using Sine wave to expand and contract smoothly based on scroll position.
      // Multiplied by 1.5 and clamped to 1 to create a 'plateau' in the middle 
      // where it stays fully expanded while the user reads the content.
      let animationProgress = Math.min(1, Math.sin(scrollRatio * Math.PI) * 1.5);
      
      // Ensure it's not negative
      animationProgress = Math.max(0, animationProgress);

      const target = innerRef.current;
      
      // Calculate Clip Path parameters for smooth interpolation
      // At progress 0 (Cube): 50% inset, 120px offset => 240px centered square
      // At progress 1 (Full): 0% inset, 0px offset => Full size
      const percentage = 50 * (1 - animationProgress);
      const pixelOffset = 120 * (1 - animationProgress);
      // Increased max border radius to 60px for smoother, rounder look
      const borderRadius = 60 * (1 - animationProgress); 
      
      // Apply styles directly to DOM to avoid React render cycle overhead (60fps target)
      target.style.clipPath = `inset(calc(${percentage}% - ${pixelOffset}px) calc(${percentage}% - ${pixelOffset}px) calc(${percentage}% - ${pixelOffset}px) calc(${percentage}% - ${pixelOffset}px) round ${borderRadius}px)`;

      // Overlay Opacity: Visible only when nearly collapsed (Start/End)
      if (overlayRef.current) {
         // Fades out quickly as it starts expanding
         const overlayOpacity = Math.max(0, 1 - animationProgress * 3);
         overlayRef.current.style.opacity = overlayOpacity.toString();
         // Scale down slightly as it fades out
         const overlayScale = 1 - (animationProgress * 0.5);
         overlayRef.current.style.transform = `scale(${overlayScale})`;
      }

      // Content Opacity: Visible when expanded
      if (contentRef.current) {
         // Fades in as it expands
         const contentOpacity = Math.max(0, Math.min(1, (animationProgress - 0.3) * 2));
         contentRef.current.style.opacity = contentOpacity.toString();
         
         // Subtle scale up effect for content entry
         const scale = 0.95 + (0.05 * contentOpacity);
         contentRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation on mount
    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[100vh] relative flex justify-center items-center py-24 lg:py-32 bg-background-light dark:bg-background-dark">
       
       {/* 
          The Expandable Container
          Using clip-path for high-performance scroll-linked animation.
       */}
       <div 
          ref={innerRef}
          className="relative bg-[#121212] shadow-2xl will-change-[clip-path]"
          style={{
            width: '100%',
            maxWidth: '100%',
            // Initial state (overridden by JS immediately)
            clipPath: 'inset(calc(50% - 120px) calc(50% - 120px) calc(50% - 120px) calc(50% - 120px) round 60px)',
          }}
       >
           {/* Background Grid mimicking the Canvas - Always visible inside the clipped area */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
           {/* 
              The 'Cube' Face Overlay 
              Visible ONLY when collapsed (Start/End of scroll). 
              Acts as the initial visual anchor.
           */}
           <div 
             ref={overlayRef}
             className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none origin-center"
           >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                 <span className="material-icons-outlined text-white text-4xl">hub</span>
              </div>
              <div className="mt-4 font-display font-bold text-white tracking-widest uppercase text-xs">System Core</div>
           </div>

           {/* 
              Main Content Grid 
              Fades IN as the box expands.
           */}
           <div 
             ref={contentRef}
             className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32 origin-center"
             style={{ opacity: 0 }}
            >
            
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#2d2d2d] border border-gray-600 px-5 py-2.5 rounded-full shadow-lg mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-gray-300 font-mono font-bold tracking-widest uppercase text-sm">System Modules</span>
                </div>
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">Powering Your Infrastructure</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center group">
                    {/* Node Card */}
                    <div 
                        className={`
                            relative bg-[#1e1e1e] w-full p-8 lg:p-10 rounded-3xl
                            border-2 border-${feature.color}-500 
                            shadow-[0_0_20px_rgba(0,0,0,0.5)] 
                            hover:shadow-[0_0_40px_rgba(${parseInt(feature.hex.slice(1,3),16)},${parseInt(feature.hex.slice(3,5),16)},${parseInt(feature.hex.slice(5,7),16)},0.3)]
                            hover:-translate-y-2
                            transition-all duration-300
                            flex flex-col items-center text-center
                        `}
                    >
                        {/* Icon Container */}
                        <div className={`
                            w-20 h-20 mb-8 rounded-2xl 
                            bg-${feature.color}-900/20 
                            border border-${feature.color}-500/30
                            flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-500
                            shadow-inner
                        `}>
                            <span className={`material-icons-outlined text-${feature.color}-400 text-4xl`}>{feature.icon}</span>
                        </div>

                        <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4 tracking-tight">{feature.title}</h3>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-medium">
                            {feature.description}
                        </p>

                        {/* Tech details decoration */}
                        <div className="mt-8 w-full pt-6 border-t border-gray-800 flex justify-between text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                            <span>Status: <span className="text-green-500 font-bold">Active</span></span>
                            <span>v1.0.{index + 1}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
       </div>
    </div>
  );
};

export default FeaturesGrid;