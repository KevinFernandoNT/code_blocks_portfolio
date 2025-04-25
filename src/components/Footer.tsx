import React from 'react';
import { Code, Mail, Phone, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, url: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#home" className="flex items-center mb-6">
              <Code size={32} className="text-white mr-2" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Code</span>
                <span className="text-gray-400">Blocks</span>
              </span>
            </a>
            <p className="text-gray-400 mb-8">
              Creating exceptional web experiences that drive business growth. We bring your digital vision to life with cutting-edge design and development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Web App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Responsive Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Design Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Free Wireframing & Prototyping
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+94112345678" className="flex text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone size={20} className="text-white mr-3 flex-shrink-0" />
                  +94 11 234 5678
                </a>
              </li>
              <li>
                <a href="mailto:hello@codeblocks.lk" className="flex text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail size={20} className="text-white mr-3 flex-shrink-0" />
                  hello@codeblocks.lk
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Ready to start your project?</h3>
              <p className="text-gray-400">
                Let's discuss how we can help bring your vision to life with our expert design and development services.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Code Blocks. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;