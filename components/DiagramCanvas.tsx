import React from 'react';

interface DiagramCanvasProps {
    className?: string;
}

const DiagramCanvas: React.FC<DiagramCanvasProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-[#1e1e1e] rounded-xl border-2 border-neo-border dark:border-white shadow-xl overflow-hidden flex flex-col aspect-square ${className}`}>
      {/* Fake Browser Toolbar */}
      <div className="bg-[#2d2d2d] px-3 py-2 flex items-center justify-between border-b border-gray-700 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-500 text-[10px] font-mono">meshwork-studio-v1.2.2</div>
        <div className="w-3"></div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative overflow-hidden bg-[#121212] w-full h-full">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Container for the diagram elements - uses percentages for positioning */}
        <div className="absolute inset-0 w-full h-full">
            
            {/* Connections SVG - Overlay on top of the grid, below nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ stroke: '#4b5563', strokeWidth: '1.5px' }}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    {/* Client (15, 30) -> LB (50, 50) */}
                    <path d="M15 30 C 30 30, 30 50, 46 50" fill="none" strokeDasharray="2,2" className="animate-[dash_1s_linear_infinite]"></path>
                    
                    {/* LB (54, 50) -> API (85, 30) */}
                    <path d="M54 50 C 70 50, 70 30, 85 30" fill="none"></path>
                    
                    {/* LB (54, 50) -> DB (85, 70) */}
                    <path d="M54 50 C 70 50, 70 70, 85 70" fill="none"></path>
                </svg>
            </svg>

            {/* Client Node (Top Left) */}
            <div className="absolute top-[30%] left-[15%] w-[16%] min-w-[48px] aspect-[4/5] flex flex-col items-center justify-center gap-1.5 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-full aspect-square bg-blue-900 rounded-lg border border-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] p-1.5">
                    <span className="material-icons-outlined text-blue-200 text-lg lg:text-xl">devices</span>
                </div>
                <span className="text-[9px] lg:text-[10px] text-gray-400 font-mono font-bold tracking-wider">Client</span>
            </div>

            {/* Load Balancer Node (Center) */}
            <div className="absolute top-[50%] left-[50%] w-[20%] min-w-[56px] aspect-[4/5] flex flex-col items-center justify-center gap-1.5 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-full aspect-square bg-purple-900 rounded-lg border border-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)] relative p-1.5">
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#121212] z-20 animate-pulse"></div>
                    <span className="material-icons-outlined text-purple-200 text-2xl lg:text-3xl">alt_route</span>
                </div>
                <span className="text-[9px] lg:text-[10px] text-gray-400 font-mono font-bold tracking-wider mt-0.5 whitespace-nowrap">LB Nginx</span>
            </div>

            {/* API Gateway Node (Right Top) */}
            <div className="absolute top-[30%] left-[85%] w-[16%] min-w-[48px] aspect-[4/5] flex flex-col items-center justify-center gap-1.5 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-full aspect-square bg-emerald-900 rounded-lg border border-emerald-500 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)] p-1.5">
                    <span className="material-icons-outlined text-emerald-200 text-lg lg:text-xl">api</span>
                </div>
                <span className="text-[9px] lg:text-[10px] text-gray-400 font-mono font-bold tracking-wider">API GW</span>
            </div>

            {/* Database Node (Right Bottom) */}
            <div className="absolute top-[70%] left-[85%] w-[16%] min-w-[48px] aspect-[4/5] flex flex-col items-center justify-center gap-1.5 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-full aspect-square bg-orange-900 rounded-lg border border-orange-500 flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)] p-1.5">
                    <span className="material-icons-outlined text-orange-200 text-lg lg:text-xl">storage</span>
                </div>
                <span className="text-[9px] lg:text-[10px] text-gray-400 font-mono font-bold tracking-wider">Postgres</span>
            </div>

            {/* Hover Card (Floating) - scaled down */}
            <div className="absolute top-[35%] left-[30%] bg-surface-light text-text-light p-2 rounded-md shadow-lg border border-neo-border z-30 w-28 animate-pulse pointer-events-none hidden sm:block">
                <div className="font-bold mb-1 border-b border-gray-200 pb-0.5 text-[9px]">Load Balancer</div>
                <div className="flex justify-between text-gray-600 font-mono text-[8px]">
                    <span>Algo</span>
                    <span className="text-primary font-bold">RR</span>
                </div>
            </div>
        </div>

        {/* Toolbar - Fixed at bottom of canvas container */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-surface-light border border-neo-border px-2 py-1 rounded-full shadow-neo flex items-center gap-2 z-20 hover:scale-105 transition-transform">
          <button className="hover:bg-gray-100 p-1 rounded-full transition-colors"><span className="material-icons-outlined text-gray-700 text-[10px]">near_me</span></button>
          <button className="hover:bg-gray-100 p-1 rounded-full transition-colors"><span className="material-icons-outlined text-gray-700 text-[10px]">pan_tool</span></button>
          <div className="w-px h-2.5 bg-gray-300"></div>
          <button className="bg-primary text-white pl-1.5 pr-2 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-0.5 hover:bg-primary/90 transition-colors">
            <span className="material-icons-outlined text-[10px]">add</span> <span className="uppercase tracking-wide">Node</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagramCanvas;