import React from 'react';
import { Layers, Monitor, Smartphone, Palette, Briefcase, Zap } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-black mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layers size={28} />,
      title: "UI/UX Design",
      description: "We create intuitive, engaging user experiences that delight your customers and achieve your business goals."
    },
    {
      icon: <Monitor size={28} />,
      title: "Web App Development",
      description: "From concept to deployment, we build custom web applications with clean code and cutting-edge technologies."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Design",
      description: "We ensure your application looks and works perfectly on all devices, from desktop to mobile."
    },
    {
      icon: <Palette size={28} />,
      title: "Branding & Visual Identity",
      description: "We help define and develop your brand identity to create a cohesive digital presence."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Design Consulting",
      description: "We provide expert advice to optimize your digital products, improve conversion rates, and enhance user satisfaction."
    },
    {
      icon: <Zap size={28} />,
      title: "Prototyping & Wireframing",
      description: "We create interactive prototypes to test concepts and refine your product before full development."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-black">Services</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We offer a comprehensive suite of design and development services to bring your digital vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;