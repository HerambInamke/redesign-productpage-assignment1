import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';
import { motion } from 'framer-motion';

const solutions = [
  {
    icon: <BiGlobeAlt className="w-8 h-8" />,
    title: "AI-Powered Website",
    description: "Build an intelligent, responsive healthcare website that automates patient interactions and streamlines appointments.",
    color: "from-blue-500 to-blue-600",
    category: "Digital Presence"
  },
  {
    icon: <FaUserSecret className="w-8 h-8" />,
    title: "Patient Conversion",
    description: "Convert more visitors into patients with personalized experiences and smart engagement tools.",
    color: "from-purple-500 to-purple-600",
    category: "Growth"
  },
  {
    icon: <BiMessageSquare className="w-8 h-8" />,
    title: "Smart Communication",
    description: "Handle patient inquiries 24/7 with AI-powered chat support and automated responses.",
    color: "from-green-500 to-green-600",
    category: "Automation"
  },
  {
    icon: <FiFileText className="w-8 h-8" />,
    title: "Medical Reports AI",
    description: "Analyze medical reports instantly with advanced AI for accurate patient assessments.",
    color: "from-orange-500 to-orange-600",
    category: "Intelligence"
  },
  {
    icon: <BiTrendingUp className="w-8 h-8" />,
    title: "Lead Generation",
    description: "Generate and nurture qualified patient leads with data-driven strategies.",
    color: "from-pink-500 to-pink-600",
    category: "Growth"
  },
  {
    icon: <BsDatabase className="w-8 h-8" />,
    title: "Healthcare Database",
    description: "Access comprehensive medical information for better patient guidance and support.",
    color: "from-indigo-500 to-indigo-600",
    category: "Intelligence"
  },
  {
    icon: <LuLanguages className="w-8 h-8" />,
    title: "Global Reach",
    description: "Break language barriers with comprehensive multilingual support for international patients.",
    color: "from-red-500 to-red-600",
    category: "Digital Presence"
  },
  {
    icon: <BiCreditCard className="w-8 h-8" />,
    title: "Payment Processing",
    description: "Handle payments securely and efficiently with integrated global payment solutions.",
    color: "from-teal-500 to-teal-600",
    category: "Automation"
  },
  {
    icon: <BiSearch className="w-8 h-8" />,
    title: "SEO & Marketing",
    description: "Boost your online visibility with advanced SEO and targeted marketing strategies.",
    color: "from-cyan-500 to-cyan-600",
    category: "Growth"
  }
];

const categories = ["All", "Digital Presence", "Growth", "Automation", "Intelligence"];

const FeaturesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredSolutions = activeCategory === "All" 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our AI-powered platform transforms healthcare delivery and improves patient outcomes
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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

                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {solution.category}
                  </span>
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;