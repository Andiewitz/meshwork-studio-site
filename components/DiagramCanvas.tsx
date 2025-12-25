import React from 'react';

const DiagramCanvas: React.FC = () => {
  return (
    <div className="relative w-full bg-[#1e1e1e] rounded-xl border-2 border-neo-border dark:border-white shadow-2xl overflow-hidden flex flex-col h-full max-h-[500px] lg:max-h-full">
      {/* Fake Browser Toolbar */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs font-mono">meshwork-studio-v1.2.2</div>
        <div className="w-4"></div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative overflow-hidden bg-[#121212] p-6">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Scaled Content Wrapper */}
        <div className="w-full h-full relative transform scale-[0.85] origin-center">
            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ stroke: '#4b5563', strokeWidth: '2px' }}>
            <path d="M120 180 C 180 180, 180 250, 240 250" fill="none" strokeDasharray="5,5"></path>
            <path d="M280 250 C 340 250, 340 180, 400 180" fill="none"></path>
            <path d="M280 250 C 340 250, 340 320, 400 320" fill="none"></path>
            </svg>

            {/* Client Node */}
            <div className="absolute top-[140px] left-[60px] w-16 h-20 flex flex-col items-center justify-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-12 h-12 bg-blue-900 rounded-lg border border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="material-icons-outlined text-blue-200">devices</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">Client</span>
            </div>

            {/* Load Balancer Node */}
            <div className="absolute top-[220px] left-[240px] w-16 h-20 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-purple-900 rounded-lg border border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20 relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#121212] z-10 animate-pulse"></div>
                <span className="material-icons-outlined text-purple-200">alt_route</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">LB Nginx</span>
            </div>

            {/* API Gateway Node */}
            <div className="absolute top-[140px] left-[400px] w-16 h-20 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-emerald-900 rounded-lg border border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="material-icons-outlined text-emerald-200">api</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">API Gateway</span>
            </div>

            {/* Database Node */}
            <div className="absolute top-[290px] left-[400px] w-16 h-20 flex flex-col items-center justify-center gap-2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-orange-900 rounded-lg border border-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="material-icons-outlined text-orange-200">storage</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">PostgreSQL</span>
            </div>

            {/* Hover Card */}
            <div className="absolute top-[200px] left-[280px] bg-surface-light text-text-light p-3 rounded shadow-xl border border-neo-border z-20 text-xs w-48 animate-pulse">
            <div className="font-bold mb-1">Load Balancer Config</div>
            <div className="flex justify-between text-gray-500">
                <span>Algorithm</span>
                <span className="font-mono text-primary">Round Robin</span>
            </div>
            </div>
        </div>

        {/* Toolbar */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-surface-light border-2 border-neo-border px-4 py-2 rounded-full shadow-neo flex items-center gap-4 z-20">
          <button className="hover:bg-gray-100 p-1 rounded"><span className="material-icons-outlined text-gray-700">near_me</span></button>
          <button className="hover:bg-gray-100 p-1 rounded"><span className="material-icons-outlined text-gray-700">pan_tool</span></button>
          <div className="w-px h-4 bg-gray-300"></div>
          <button className="bg-primary text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
            <span className="material-icons-outlined text-[14px]">add</span> Add Node
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagramCanvas;