import React from 'react';
import { Search, PenTool, Code, LayoutGrid, Zap, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target users, and requirements through in-depth research and strategy sessions.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Wireframing & UX",
      description: "We create user flows and wireframes that focus on structure and usability before moving to visual design.",
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "UI Design",
      description: "We develop high-fidelity mockups that reflect your brand identity, with responsive designs for all screen sizes.",
    },
    {
      icon: <Code size={24} />,
      title: "Development & Daily Demos",
      description: "Our developers bring the designs to life using modern frameworks. We provide daily demos and release features based on your immediate needs and feedback.",
    },
    {
      icon: <Zap size={24} />,
      title: "Continuous Testing & QA",
      description: "We maintain rigorous testing throughout development, ensuring each feature meets quality standards before release.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Deployment & Support",
      description: "We deploy features as they're ready and provide ongoing support to ensure your application runs smoothly and securely.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-black">Process</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We follow an agile approach with daily demos and feature releases based on your needs, ensuring continuous progress and immediate feedback.
          </p>
        </div>
        
        {/* Desktop Workflow */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>
          <div className="grid grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gray-300"></div>
                <div className="pt-20">
                  <div className="relative">
                    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Workflow */}
        <div className="hidden md:block lg:hidden relative">
          <div className="grid grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 w-8 h-px bg-gray-300`}></div>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-3">
                      {step.icon}
                    </div>
                    <span className="text-sm text-gray-500">Step {index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-black"></div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-3">
                        {step.icon}
                      </div>
                      <span className="text-sm text-gray-500">Step {index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;