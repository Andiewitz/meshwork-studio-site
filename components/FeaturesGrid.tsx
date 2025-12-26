import React, { useEffect, useRef } from 'react';

const features = [
  {
    title: "Visual Canvas",
    description: "Drag and drop components to build your architecture.",
    icon: "draw",
    color: "blue",
    hex: "#3b82f6"
  },
  {
    title: "Real-time Sync",
    description: "Collaborate with your team in real-time. See changes instantly.",
    icon: "sync",
    color: "purple",
    hex: "#a855f7"
  },
  {
    title: "Export IaC",
    description: "Turn diagrams into production-ready Terraform and Pulumi.",
    icon: "code",
    color: "emerald",
    hex: "#10b981"
  },
  {
    title: "Policy Engine",
    description: "Enforce compliance and security rules directly on edges.",
    icon: "gavel",
    color: "orange",
    hex: "#f97316"
  },
  {
    title: "Cost Analysis",
    description: "Estimate infrastructure costs before you deploy.",
    icon: "attach_money",
    color: "pink",
    hex: "#ec4899"
  }
];

const FeaturesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current || !innerRef.current || !horizontalTrackRef.current) return;

      const container = containerRef.current;
      
      // Get dimensions
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // START POINT: When the top of the container enters the viewport from the bottom.
      // We add a small buffer (20px) so it triggers as soon as the user sees it (requested "like 12 pixels").
      const startOffset = containerTop - windowHeight + 20; 
      
      // END POINT: When the container finishes scrolling (bottom aligns with bottom of viewport)
      const endOffset = containerTop + containerHeight - windowHeight;
      
      let progress = (scrollY - startOffset) / (endOffset - startOffset);
      progress = Math.max(0, Math.min(1, progress));

      // ANIMATION PHASES (0.0 to 1.0)
      // Total scroll distance is roughly containerHeight (500vh).
      // The "Entry" phase (moving from bottom to top of screen) is approx 20% of the total distance (100vh / 500vh).
      
      // Phase 1: Expansion (0% -> 6%) 
      // This happens while the element is rising from the bottom. 
      // It will be fully expanded by the time it is ~30% up the screen.
      const P1_EXPAND_END = 0.06; 
      
      // Phase 2: Hold (6% -> 30%) 
      // Includes the rest of the travel up the screen and a pause at the top.
      const P2_HOLD_END = 0.30;
      
      // Phase 3: Reveal (30% -> 40%)
      // Content fades in.
      const P3_REVEAL_END = 0.40;
      
      // Phase 4: Scroll (40% -> 100%)
      // Horizontal movement.

      // --- 1. EXPANSION ---
      let expansionProgress = progress / P1_EXPAND_END;
      expansionProgress = Math.max(0, Math.min(1, expansionProgress));
      
      const easedExpansion = 1 - Math.pow(1 - expansionProgress, 3); // Cubic ease out

      const percentage = 50 * (1 - easedExpansion);
      const pixelOffset = 120 * (1 - easedExpansion);
      const borderRadius = 60 * (1 - easedExpansion);

      innerRef.current.style.clipPath = `inset(calc(${percentage}% - ${pixelOffset}px) calc(${percentage}% - ${pixelOffset}px) calc(${percentage}% - ${pixelOffset}px) calc(${percentage}% - ${pixelOffset}px) round ${borderRadius}px)`;

      // --- 2. REVEAL ---
      let revealProgress = 0;
      if (progress > P2_HOLD_END) {
          revealProgress = (progress - P2_HOLD_END) / (P3_REVEAL_END - P2_HOLD_END);
          revealProgress = Math.max(0, Math.min(1, revealProgress));
      }

      if (horizontalTrackRef.current) {
          horizontalTrackRef.current.style.opacity = revealProgress.toString();
          // Slight upward drift during reveal
          const yDrift = 50 * (1 - revealProgress);
          horizontalTrackRef.current.style.transform = `translateY(${yDrift}px)`;
      }
      
      if (headerRef.current) {
          headerRef.current.style.opacity = revealProgress.toString();
          headerRef.current.style.transform = `translateY(${30 * (1 - revealProgress)}px)`;
      }

      // --- 3. HORIZONTAL SCROLL ---
      if (progress > P3_REVEAL_END) {
          const scrollProgress = (progress - P3_REVEAL_END) / (1 - P3_REVEAL_END);
          
          const trackWidth = horizontalTrackRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          
          const maxTranslate = -(trackWidth - viewportWidth + 100); 
          const currentTranslate = maxTranslate * scrollProgress;
          
          horizontalTrackRef.current.style.transform = `translateX(${currentTranslate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    // Height 500vh to give ample scroll room
    <div ref={containerRef} className="w-full h-[500vh] relative bg-background-light dark:bg-background-dark">
       
       <div ref={stickyRef} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
           
           {/* The Expandable "Cube" Box */}
           <div 
              ref={innerRef}
              className="relative w-full h-full bg-[#121212] shadow-2xl will-change-[clip-path] flex flex-col"
              style={{
                clipPath: 'inset(calc(50% - 120px) calc(50% - 120px) calc(50% - 120px) calc(50% - 120px) round 60px)',
              }}
           >
               {/* Background Grid */}
               <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
               {/* Main Content Area */}
               <div className="relative z-10 w-full h-full flex flex-col justify-center">
                    
                    {/* Fixed Header */}
                    <div ref={headerRef} className="text-center absolute top-10 lg:top-16 left-0 right-0 z-20 opacity-0 will-change-[opacity,transform]">
                        <div className="inline-flex items-center gap-2 bg-[#2d2d2d] border border-gray-600 px-5 py-2.5 rounded-full shadow-lg mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-gray-300 font-mono font-bold tracking-widest uppercase text-sm">System Pipeline</span>
                        </div>
                        <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">Architecture Flow</h2>
                    </div>

                    {/* Horizontal Scroll Track */}
                    <div className="w-full flex items-center overflow-visible pl-[50vw] pr-[20vw] h-[60vh]">
                        <div ref={horizontalTrackRef} className="flex gap-24 lg:gap-32 items-center will-change-transform opacity-0">
                            
                            {/* Connection Line Layer */}
                            <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 -z-10 pointer-events-none overflow-visible">
                                <path 
                                    d={`M 0 50 L ${features.length * 600} 50`} 
                                    stroke="#4b5563" 
                                    strokeWidth="2" 
                                    strokeDasharray="8 8" 
                                    fill="none"
                                />
                                <circle r="4" fill="#3b82f6">
                                    <animateMotion dur="3s" repeatCount="indefinite" path={`M 0 50 L ${features.length * 600} 50`} />
                                </circle>
                                <circle r="4" fill="#a855f7">
                                    <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path={`M 0 50 L ${features.length * 600} 50`} />
                                </circle>
                                <circle r="4" fill="#10b981">
                                    <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path={`M 0 50 L ${features.length * 600} 50`} />
                                </circle>
                            </svg>

                            {features.map((feature, index) => (
                                <div key={index} className="relative flex-shrink-0 w-[80vw] sm:w-[400px]">
                                    {/* Connection Point Left */}
                                    {index > 0 && (
                                        <div className="absolute top-1/2 -left-16 lg:-left-20 w-8 h-8 -translate-y-1/2 bg-[#121212] border-2 border-gray-600 rounded-full flex items-center justify-center z-0">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        </div>
                                    )}

                                    {/* Node Card */}
                                    <div 
                                        className={`
                                            relative bg-[#1e1e1e] w-full p-8 lg:p-10 rounded-3xl
                                            border-2 border-${feature.color}-500 
                                            shadow-[0_0_20px_rgba(0,0,0,0.5)] 
                                            flex flex-col items-center text-center z-10
                                            group
                                        `}
                                    >
                                        <div className={`
                                            w-20 h-20 mb-6 rounded-2xl 
                                            bg-${feature.color}-900/20 
                                            border border-${feature.color}-500/30
                                            flex items-center justify-center
                                            shadow-inner
                                        `}>
                                            <span className={`material-icons-outlined text-${feature.color}-400 text-4xl`}>{feature.icon}</span>
                                        </div>

                                        <h3 className="font-display font-bold text-3xl text-white mb-4">{feature.title}</h3>
                                        <p className="text-gray-400 text-base leading-relaxed">
                                            {feature.description}
                                        </p>

                                        <div className="mt-8 w-full pt-4 border-t border-gray-800 flex justify-between text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                                            <span>Node ID: {index.toString().padStart(2, '0')}</span>
                                            <span className={`text-${feature.color}-400`}>Online</span>
                                        </div>
                                    </div>

                                    {/* Connection Point Right */}
                                    {index < features.length - 1 && (
                                        <div className="absolute top-1/2 -right-16 lg:-right-20 w-8 h-8 -translate-y-1/2 bg-[#121212] border-2 border-gray-600 rounded-full flex items-center justify-center z-0">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
               </div>
           </div>
       </div>
    </div>
  );
};

export default FeaturesGrid;