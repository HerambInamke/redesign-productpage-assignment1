import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
    location?: string;
}

const testimonials: TestimonialProps[] = [
    {
        name: "Dr. Sarah Johnson",
        role: "Healthcare Facilitator",
        company: "Global Health Partners",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "gogetwell.ai has revolutionized my practice. The AI tools have streamlined operations and improved patient satisfaction by 85%. It's like having a full-time digital assistant.",
        rating: 5,
        location: "New York, USA"
    },
    {
        name: "Michael Chen",
        role: "Medical Tourism Consultant",
        company: "HealthBridge International",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "The multilingual support and automated lead management have been game-changers. Our patient conversion rate has doubled since implementing gogetwell.ai.",
        rating: 5,
        location: "Singapore"
    },
    {
        name: "Dr. Priya Patel",
        role: "Independent Healthcare Agent",
        company: "Wellness Connect",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "As a solo practitioner, gogetwell.ai has been invaluable. The AI-powered platform handles everything from appointment scheduling to follow-ups.",
        rating: 4,
        location: "London, UK"
    },
    {
        name: "James Wilson",
        role: "Healthcare Marketing Director",
        company: "MediTravel Solutions",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote: "The SEO and marketing features have increased our online visibility by 200%. The ROI has been exceptional, and patient acquisition costs have decreased significantly.",
        rating: 5,
        location: "Toronto, Canada"
    }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ 
    name, 
    role, 
    company, 
    image, 
    quote, 
    rating,
    location 
}) => {
    return (
        <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                    <div className="relative">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                            Verified
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="text-gray-600">{role}</p>
                    <p className="text-sm text-gray-500">{company}</p>
                    {location && (
                        <p className="text-xs text-gray-400 mt-1">{location}</p>
                    )}
                </div>
            </div>
            
            <div className="mb-6 flex-grow">
                <FaQuoteLeft className="text-primary text-2xl mb-4 opacity-50" />
                <p className="text-gray-700 leading-relaxed italic">{quote}</p>
            </div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <FaStar 
                            key={i} 
                            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                    ))}
                </div>
                <div className="text-sm text-gray-500">
                    Reviewed 2 weeks ago
                </div>
            </div>
        </motion.div>
    );
};

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
        );
    };
    
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };
    
    // For mobile, show one testimonial at a time
    const mobileTestimonials = [testimonials[currentIndex]];
    
    // For tablet, show two testimonials
    const tabletTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
    ];
    
    // For desktop, show all testimonials
    const desktopTestimonials = testimonials;

    return (
        <div className="py-20">
            <motion.div 
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                    Client Success Stories
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Trusted by Healthcare Leaders
                </h2>
                <p className="text-lg text-gray-600">
                    See how healthcare professionals are transforming their practices with gogetwell.ai
                </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
                className="max-w-5xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <p className="text-sm text-gray-600">Customer Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                        <p className="text-sm text-gray-600">Patients Served</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                        <p className="text-sm text-gray-600">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">30+</div>
                        <p className="text-sm text-gray-600">Countries</p>
                    </div>
                </div>
            </motion.div>
            
            {/* Mobile View (1 testimonial) */}
            <div className="md:hidden">
                <AnimatePresence mode="wait">
                    <div className="grid grid-cols-1 gap-8">
                        {mobileTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={currentIndex} {...testimonial} />
                        ))}
                    </div>
                </AnimatePresence>
                <div className="flex justify-center mt-8 space-x-4">
                    <motion.button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous testimonial"
                    >
                        <BiChevronLeft className="w-6 h-6 text-gray-600" />
                    </motion.button>
                    <motion.button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next testimonial"
                    >
                        <BiChevronRight className="w-6 h-6 text-gray-600" />
                    </motion.button>
                </div>
            </div>
            
            {/* Tablet View (2 testimonials) */}
            <div className="hidden md:block lg:hidden">
                <AnimatePresence mode="wait">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tabletTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`${currentIndex}-${index}`} {...testimonial} />
                        ))}
                    </div>
                </AnimatePresence>
                <div className="flex justify-center mt-8 space-x-4">
                    <motion.button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous testimonial"
                    >
                        <BiChevronLeft className="w-6 h-6 text-gray-600" />
                    </motion.button>
                    <motion.button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next testimonial"
                    >
                        <BiChevronRight className="w-6 h-6 text-gray-600" />
                    </motion.button>
                </div>
            </div>
            
            {/* Desktop View (all testimonials) */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {desktopTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection; 