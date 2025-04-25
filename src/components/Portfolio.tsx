import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import projectImage from '../assets/work_1.png';

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
  sampleImages?: string[];
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
      title: "Cyberlern E-Learning Platform",
      category: "web",
      image: projectImage,
      clientName: "Cyberlern",
      description: "A dynamic e-learning platform offering interactive courses and personalized learning paths.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      challenge: "The client required a scalable and engaging platform to deliver educational content and track student progress effectively.",
      solution: "We developed a user-friendly platform with features like video lessons, interactive quizzes, progress tracking, and personalized learning recommendations.",
      outcome: "The platform facilitated a 40% increase in course completion rates and improved student satisfaction scores by 25%.",
      sampleImages: [
        "https://images.unsplash.com/photo-1516321318423-f06f8e5782d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f8e5782d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
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
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="inline-flex items-center text-white text-sm font-medium"
                  >
                    View Case Study
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              <div className="text-center mt-4 px-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <div className="relative h-96 w-full">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                  />
                </div>
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
                
                {activeProject.sampleImages && activeProject.sampleImages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeProject.sampleImages.map((image, index) => (
                        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${activeProject.title} screenshot ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
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