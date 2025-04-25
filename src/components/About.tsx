import React from 'react';
import { Users, Award, Workflow } from 'lucide-react';
import bgImage from '../assets/cube.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-black">Code Blocks</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We're a dynamic team of full-stack developers dedicated to creating worry-free digital solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building Digital Solutions Since 2023
            </h3>
            <p className="text-gray-700 mb-6">
              Founded by Viduranga Weerasekar and Kevin Fernando, two experienced full-stack developers with over 4 years of industry expertise, Code Blocks is dedicated to designing and implementing complex systems that solve real business challenges.
            </p>
            <p className="text-gray-700 mb-6">
              As a fully remote company, we leverage modern collaboration tools to provide comprehensive solutions that allow our customers to focus on their core business without worrying about their digital infrastructure. We handle the technical complexities so you can concentrate on what matters most - growing your business.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="font-bold text-3xl text-black mb-1">4+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="font-bold text-3xl text-black mb-1">2</div>
                <div className="text-sm text-gray-700">Founding Members</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="font-bold text-3xl text-black mb-1">10+</div>
                <div className="text-sm text-gray-700">Projects Completed</div>
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Expertise</h4>
                  <p className="text-gray-700">
                    Our team brings comprehensive knowledge across the entire web development stack, from frontend to backend.
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Worry-Free Solutions</h4>
                  <p className="text-gray-700">
                    We take care of all technical aspects, allowing you to focus on your business growth without digital concerns.
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer-First Approach</h4>
                  <p className="text-gray-700">
                    Every solution we create is designed with your business needs and peace of mind as our top priority.
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