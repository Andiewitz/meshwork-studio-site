import React from 'react';

const brands = [
  { name: 'CloudScale', icon: 'cloud_queue' },
  { name: 'BlockChainz', icon: 'token' },
  { name: 'StarShip', icon: 'rocket_launch' },
  { name: 'NetWork', icon: 'hub' },
  { name: 'SecureFlow', icon: 'security' },
  { name: 'CloudScale', icon: 'cloud_queue' },
  { name: 'BlockChainz', icon: 'token' },
  { name: 'StarShip', icon: 'rocket_launch' },
  { name: 'NetWork', icon: 'hub' },
  { name: 'SecureFlow', icon: 'security' },
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-surface-light dark:bg-surface-dark border-y-2 border-neo-border dark:border-white py-6 overflow-hidden whitespace-nowrap relative z-10">
      <div className="flex gap-12 items-center animate-marquee opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {brands.map((brand, index) => (
          <span key={index} className="flex items-center gap-2 text-xl font-bold font-display">
            <span className="material-icons-outlined">{brand.icon}</span> {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;