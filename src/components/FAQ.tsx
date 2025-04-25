import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is your typical project timeline?",
      answer: "Our project timelines vary depending on the scope and complexity of each project. A standard website design typically takes 4-6 weeks, while more complex web applications may take 8-12 weeks. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
    },
    {
      question: "How do you handle revisions?",
      answer: "We include two rounds of revisions in our standard packages. This allows for refinements after the initial design presentation and again after the development phase. Additional revision rounds can be arranged if needed, though they may affect the project timeline and cost."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer monthly maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. These packages include regular updates, security monitoring, performance optimization, and technical support."
    },
    {
      question: "Who will own the website or application once it's completed?",
      answer: "You will have full ownership of the final product. We provide all necessary files, source code, and access credentials upon project completion. We also offer a comprehensive handover session to ensure you understand how to manage your new digital asset."
    },
    {
      question: "Do you build responsive websites?",
      answer: "Absolutely. All our websites and applications are built with a mobile-first approach, ensuring they work seamlessly across all devices including smartphones, tablets, laptops, and desktop computers. We meticulously test on multiple devices and screen sizes before launch."
    },
    {
      question: "What technologies do you use?",
      answer: "We work with modern frameworks and technologies including React, Vue.js, Next.js, and Node.js. For content management, we implement solutions like WordPress, Sanity, or custom CMS depending on your needs. Our technology choices are guided by your specific requirements and what will deliver the best performance and user experience."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-black">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our process, services, and working with us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <span className="text-gray-600 ml-4">
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;