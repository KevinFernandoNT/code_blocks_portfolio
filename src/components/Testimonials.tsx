import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Code Blocks transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and creative approach exceeded our expectations.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Ltd",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      quote: "Working with Code Blocks was a game-changer for our startup. They didn't just design our app interface; they helped us rethink the entire user experience, resulting in a 40% increase in user engagement.",
      name: "Michael Chang",
      role: "CEO",
      company: "InnovateSL",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      quote: "The team at Code Blocks truly understands how to balance aesthetics with functionality. Our e-commerce platform not only looks stunning but has also significantly improved our conversion rates.",
      name: "Priya Mendis",
      role: "E-Commerce Manager",
      company: "Ceylon Traders",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, testimonials.length]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, nextTestimonial]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client <span className="text-black">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Hear what our clients say about working with us and the results we've delivered.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="relative max-w-4xl mx-auto" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div 
              className={`transition-all duration-500 transform ${
                isTransitioning
                  ? direction === 'right'
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              <div className="text-gray-400 mb-6">
                <Quote size={48} />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-600">{testimonials[activeIndex].role}</div>
                  <div className="text-black">{testimonials[activeIndex].company}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index > activeIndex) {
                      setDirection('right');
                    } else {
                      setDirection('left');
                    }
                    setActiveIndex(index);
                  }}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-black w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;