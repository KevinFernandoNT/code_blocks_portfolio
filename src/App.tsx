import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <Portfolio />
      </ScrollAnimation>
      <ScrollAnimation>
        <Process />
      </ScrollAnimation>
      <Testimonials />
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

export default App;