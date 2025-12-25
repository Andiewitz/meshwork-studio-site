import React from 'react';

const features = [
  {
    title: "Visual Canvas",
    description: "Drag and drop components to build your architecture. Connect services with intuitive lines and define relationships instantly.",
    icon: "draw"
  },
  {
    title: "Real-time Sync",
    description: "Collaborate with your team in real-time. See changes as they happen and resolve conflicts with our smart merging system.",
    icon: "sync"
  },
  {
    title: "Export to Terraform",
    description: "Turn your visual diagrams into production-ready Infrastructure as Code. Support for Terraform, Pulumi, and CloudFormation.",
    icon: "code"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-surface-light dark:bg-surface-dark border-2 border-neo-border dark:border-white p-8 rounded-xl shadow-neo dark:shadow-neo-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:hover:shadow-none transition-all group"
          >
            <div className="w-12 h-12 bg-primary text-white rounded-lg border-2 border-neo-border dark:border-white flex items-center justify-center mb-6 shadow-neo-sm dark:shadow-neo-sm-dark group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined">{feature.icon}</span>
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Spacer to ensure enough scroll depth */}
      <div className="h-24"></div>
    </div>
  );
};

export default FeaturesGrid;