import React from 'react';

const DiagramCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#1e1e1e] rounded-xl border-2 border-neo-border dark:border-white shadow-2xl overflow-hidden flex flex-col aspect-square">
      {/* Fake Browser Toolbar */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-gray-700 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs font-mono">meshwork-studio-v1.2.2</div>
        <div className="w-4"></div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative overflow-hidden bg-[#121212] flex items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Scaled Scene Container - Fixed 500x500 coordinate system for the diagram */}
        {/* scale-[0.6] reduces it to 60% size to provide whitespace margin and fit smaller container */}
        <div className="relative w-[500px] h-[500px] transform scale-[0.6] origin-center shrink-0 select-none">
            
            {/* Connections SVG - strictly defined viewbox matching container */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" style={{ stroke: '#4b5563', strokeWidth: '2px' }}>
                {/* Curve from Client(60, 140) to LB(240, 220) */}
                {/* Adjusted control points for smoother curves */}
                <path d="M90 170 C 150 170, 150 220, 200 220" fill="none" strokeDasharray="5,5" className="animate-[dash_1s_linear_infinite]"></path>
                
                {/* Curve from LB(240, 220) to API(400, 140) */}
                <path d="M280 220 C 340 220, 340 170, 370 170" fill="none"></path>
                
                {/* Curve from LB(240, 220) to DB(400, 290) */}
                <path d="M280 220 C 340 220, 340 290, 370 290" fill="none"></path>
            </svg>

            {/* Client Node (Top Left) */}
            {/* Centered around 60, 140 */}
            <div className="absolute top-[140px] left-[60px] w-20 h-24 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-14 h-14 bg-blue-900 rounded-xl border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <span className="material-icons-outlined text-blue-200 text-2xl">devices</span>
                </div>
                <span className="text-xs text-gray-400 font-mono font-bold tracking-wider">Client</span>
            </div>

            {/* Load Balancer Node (Center) */}
            {/* Centered around 240, 220 */}
            <div className="absolute top-[220px] left-[240px] w-20 h-24 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-16 h-16 bg-purple-900 rounded-xl border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#121212] z-20 animate-pulse"></div>
                    <span className="material-icons-outlined text-purple-200 text-3xl">alt_route</span>
                </div>
                <span className="text-xs text-gray-400 font-mono font-bold tracking-wider mt-1">LB Nginx</span>
            </div>

            {/* API Gateway Node (Right Top) */}
            {/* Centered around 400, 140 */}
            <div className="absolute top-[140px] left-[400px] w-20 h-24 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 bg-emerald-900 rounded-xl border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    <span className="material-icons-outlined text-emerald-200 text-2xl">api</span>
                </div>
                <span className="text-xs text-gray-400 font-mono font-bold tracking-wider">API GW</span>
            </div>

            {/* Database Node (Right Bottom) */}
            {/* Centered around 400, 290 */}
            <div className="absolute top-[290px] left-[400px] w-20 h-24 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 bg-orange-900 rounded-xl border-2 border-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                    <span className="material-icons-outlined text-orange-200 text-2xl">storage</span>
                </div>
                <span className="text-xs text-gray-400 font-mono font-bold tracking-wider">Postgres</span>
            </div>

            {/* Hover Card (Floating) */}
            <div className="absolute top-[150px] left-[200px] bg-surface-light text-text-light p-3 rounded-lg shadow-xl border-2 border-neo-border z-30 text-xs w-48 animate-pulse pointer-events-none">
                <div className="font-bold mb-2 border-b border-gray-200 pb-1">Load Balancer Config</div>
                <div className="flex justify-between text-gray-600 font-mono text-[10px]">
                    <span>Algorithm</span>
                    <span className="text-primary font-bold">Round Robin</span>
                </div>
                <div className="flex justify-between text-gray-600 font-mono text-[10px] mt-1">
                    <span>Health Check</span>
                    <span className="text-green-600 font-bold">Active</span>
                </div>
            </div>
        </div>

        {/* Toolbar - Fixed at bottom of canvas container */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-surface-light border-2 border-neo-border px-4 py-2 rounded-full shadow-neo flex items-center gap-4 z-20 hover:scale-105 transition-transform">
          <button className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"><span className="material-icons-outlined text-gray-700 text-sm">near_me</span></button>
          <button className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"><span className="material-icons-outlined text-gray-700 text-sm">pan_tool</span></button>
          <div className="w-px h-4 bg-gray-300"></div>
          <button className="bg-primary text-white pl-2 pr-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 hover:bg-primary/90 transition-colors">
            <span className="material-icons-outlined text-[16px]">add</span> <span className="uppercase tracking-wide">Node</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagramCanvas;