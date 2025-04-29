import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt className="w-6 h-6" />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaUserSecret className="w-6 h-6" />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <BiMessageSquare className="w-6 h-6" />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: <BiTrendingUp className="w-6 h-6" />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <BsDatabase className="w-6 h-6" />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: <LuLanguages className="w-6 h-6" />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <BiCreditCard className="w-6 h-6" />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: <BiSearch className="w-6 h-6" />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our AI-powered platform transforms healthcare delivery and improves patient outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${solution.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;