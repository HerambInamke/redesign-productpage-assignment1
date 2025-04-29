import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: TestimonialProps[] = [
    {
        name: "Dr. Sarah Johnson",
        role: "Healthcare Facilitator",
        company: "Global Health Partners",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "gogetwell.ai has transformed how I manage my healthcare practice. The AI-powered tools have streamlined my operations and improved patient satisfaction significantly.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Medical Tourism Consultant",
        company: "HealthBridge International",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "The platform's ability to handle multilingual communication and manage patient leads has been invaluable. It's like having a dedicated team working for me 24/7.",
        rating: 5
    },
    {
        name: "Dr. Priya Patel",
        role: "Independent Healthcare Agent",
        company: "Wellness Connect",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "As an independent agent, I needed a solution that could scale with my business. gogetwell.ai has provided exactly that, with excellent support and continuous improvements.",
        rating: 4
    },
    {
        name: "James Wilson",
        role: "Healthcare Marketing Director",
        company: "MediTravel Solutions",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote: "The SEO and marketing support features have helped us increase our online visibility and attract more qualified patients. The ROI has been impressive.",
        rating: 5
    }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, company, image, quote, rating }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
            <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="text-gray-600">{role}</p>
                    <p className="text-sm text-gray-500">{company}</p>
                </div>
            </div>
            
            <div className="mb-6 flex-grow">
                <FaQuoteLeft className="text-primary text-2xl mb-4 opacity-50" />
                <p className="text-gray-700 leading-relaxed">{quote}</p>
            </div>
            
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <FaStar 
                        key={i} 
                        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                ))}
            </div>
        </div>
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
        <div className="py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600">
                    Hear from healthcare professionals who have transformed their practices with gogetwell.ai
                </p>
            </div>
            
            {/* Mobile View (1 testimonial) */}
            <div className="md:hidden">
                <div className="grid grid-cols-1 gap-8">
                    {mobileTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <BiChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <BiChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
            
            {/* Tablet View (2 testimonials) */}
            <div className="hidden md:block lg:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tabletTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <BiChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <BiChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
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