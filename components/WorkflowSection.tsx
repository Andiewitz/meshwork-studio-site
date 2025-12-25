import React from 'react';

const steps = [
  {
    num: "01",
    title: "Define Services",
    desc: "Drag nodes onto the infinite canvas to represent microservices, databases, and external APIs."
  },
  {
    num: "02",
    title: "Connect Flows",
    desc: "Draw connection lines to define request paths, message queues, and data streams between components."
  },
  {
    num: "03",
    title: "Configure Policies",
    desc: "Set retry policies, timeouts, and circuit breakers directly on the connection edges."
  },
  {
    num: "04",
    title: "Deploy Infrastructure",
    desc: "Export to Terraform or Kubernetes manifests with a single click. CI/CD ready."
  }
];

const WorkflowSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full border-t-2 border-neo-border dark:border-white">
      <div className="mb-16">
        <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">How it works</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            From chaos to clarity in four simple steps. Meshwork Studio handles the complexity so you can focus on the architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -inset-2 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-surface-light dark:bg-surface-dark border-2 border-neo-border dark:border-white p-6 rounded-lg shadow-neo-sm dark:shadow-neo-sm-dark h-full flex flex-col">
                <span className="font-display font-bold text-6xl text-gray-100 dark:text-gray-800 absolute -top-4 -right-2 select-none z-0">
                    {step.num}
                </span>
                <h3 className="font-display font-bold text-xl mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 relative z-10 text-sm leading-relaxed">
                    {step.desc}
                </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional vertical spacing for dramatic scrolling */}
      <div className="h-32"></div>
    </div>
  );
};

export default WorkflowSection;