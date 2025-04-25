import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block">Transforming Ideas into</span>
            <span className="block mt-2 text-gray-300">
              Exceptional Digital Experiences
            </span>
          </h1>
          <p className="text-xl md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            We create beautiful, functional web applications that engage users and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#portfolio" 
              className="px-8 py-4 rounded-lg bg-white text-black font-semibold transition duration-300 hover:bg-gray-100 flex items-center"
            >
              View Our Work
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-semibold transition duration-300 hover:bg-white hover:text-black"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;