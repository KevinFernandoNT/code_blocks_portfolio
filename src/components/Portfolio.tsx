import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  clientName: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ux', name: 'UX Design' },
    { id: 'branding', name: 'Branding' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "FinTrack Dashboard",
      category: "web",
      image: "https://images.pexels.com/photos/7654058/pexels-photo-7654058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      clientName: "GlobalFinance Ltd",
      description: "A comprehensive financial analytics dashboard for tracking investments and expenditures.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
      challenge: "The client needed a powerful yet intuitive dashboard to visualize complex financial data for their customers.",
      solution: "We created a responsive dashboard with customizable widgets, real-time data visualization, and intuitive controls.",
      outcome: "The platform saw a 35% increase in user engagement and reduced customer support inquiries by 28%."
    },
    {
      id: 2,
      title: "EcoShop E-Commerce",
      category: "web",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      clientName: "EcoShop Organics",
      description: "A modern e-commerce platform for sustainable and eco-friendly products.",
      technologies: ["Next.js", "Stripe", "Sanity CMS", "Framer Motion"],
      challenge: "Building a high-performance e-commerce platform that aligns with the client's eco-friendly brand values.",
      solution: "We developed a lightweight, energy-efficient web application with optimized images and sustainable design principles.",
      outcome: "Conversion rates increased by 42% and the site's carbon footprint was reduced by 68% compared to their previous platform."
    },
    {
      id: 3,
      title: "MediConnect App",
      category: "mobile",
      image: "https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      clientName: "HealthTech Solutions",
      description: "A telemedicine mobile application connecting patients with healthcare providers.",
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js"],
      challenge: "Creating a secure, HIPAA-compliant platform for virtual medical consultations with a seamless user experience.",
      solution: "We built a cross-platform mobile app with end-to-end encryption, appointment scheduling, and video consultation features.",
      outcome: "The app facilitated over 10,000 virtual consultations in its first quarter, with a 4.8/5 user satisfaction rating."
    },
    {
      id: 4,
      title: "TravelBuddy UX Redesign",
      category: "ux",
      image: "https://images.pexels.com/photos/3075988/pexels-photo-3075988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      clientName: "TravelBuddy Inc.",
      description: "A comprehensive UX redesign of a popular travel planning platform.",
      technologies: ["Figma", "Adobe XD", "Maze", "UserTesting"],
      challenge: "Addressing user pain points in the existing travel platform that was losing market share to competitors.",
      solution: "We conducted extensive user research and completely redesigned the user journey, focusing on simplifying the booking process.",
      outcome: "User satisfaction scores increased by 47% and booking completion rates improved by 28% after the redesign."
    },
    {
      id: 5,
      title: "FreshBrew Brand Identity",
      category: "branding",
      image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      clientName: "FreshBrew Coffee",
      description: "Complete brand identity design for an artisanal coffee company.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Procreate"],
      challenge: "Creating a distinctive brand identity that stands out in the competitive coffee market while reflecting the company's values.",
      solution: "We developed a comprehensive brand system including logo, typography, color palette, packaging, and digital assets.",
      outcome: "The new brand identity helped secure retail partnerships with premium stores and increased social media following by 215%."
    },
    {
      id: 6,
      title: "WorkFlow Project Management",
      category: "web",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      clientName: "ProductiveCo",
      description: "A collaborative project management tool for remote teams.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      challenge: "Building a real-time collaboration tool that maintains high performance even with hundreds of concurrent users.",
      solution: "We created a reactive application with real-time updates, customizable workflows, and powerful reporting features.",
      outcome: "The platform has been adopted by over 200 companies, improving their team productivity by an average of 32%."
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project: Project) => {
    setActiveProject(project);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-black">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore our latest work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <button
                  onClick={() => openProjectDetails(project)}
                  className="inline-flex items-center text-white text-sm font-medium"
                >
                  View Case Study
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeProject.title}</h2>
                <p className="text-gray-600 font-medium mb-6">Client: {activeProject.clientName}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h3>
                  <p className="text-gray-700">{activeProject.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                  <p className="text-gray-700">{activeProject.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
                  <p className="text-gray-700">{activeProject.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Outcome</h3>
                  <p className="text-gray-700">{activeProject.outcome}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={closeProjectDetails}
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;