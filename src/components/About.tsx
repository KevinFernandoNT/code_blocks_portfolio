import React from 'react';
import { Users, Award, Workflow } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-black">Code Blocks</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We're a passionate team of designers and developers creating cutting-edge web applications in the heart of Sri Lanka.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Crafting Digital Experiences Since 2018
            </h3>
            <p className="text-gray-700 mb-6">
              Code Blocks was founded with a simple mission: to help businesses transform their digital presence through exceptional web application design and development. Based in Colombo, Sri Lanka, we've grown from a small team of passionate designers to a full-service digital studio.
            </p>
            <p className="text-gray-700 mb-6">
              Our team combines technical expertise with creative talent to deliver web applications that not only look stunning but also perform flawlessly. We believe that great design should be functional, intuitive, and aligned with your business goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="font-bold text-3xl text-black mb-1">50+</div>
                <div className="text-sm text-gray-700">Completed Projects</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="font-bold text-3xl text-black mb-1">15+</div>
                <div className="text-sm text-gray-700">Team Members</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="font-bold text-3xl text-black mb-1">30+</div>
                <div className="text-sm text-gray-700">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-gray-100 p-8 rounded-xl">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black text-white">
                    <Users size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-700">
                    Our diverse team brings together expertise in UI/UX design, frontend and backend development, and digital strategy.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black text-white">
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Commitment</h4>
                  <p className="text-gray-700">
                    We're committed to excellence in every project, ensuring pixel-perfect designs and clean, efficient code.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black text-white">
                    <Workflow size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Process</h4>
                  <p className="text-gray-700">
                    We believe in close collaboration with our clients, involving you at every stage of the design and development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;