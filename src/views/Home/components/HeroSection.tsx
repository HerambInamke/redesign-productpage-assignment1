import React, { useEffect } from 'react';
import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { BiArrowToBottom } from 'react-icons/bi';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white/30"></div>
            
            {/* Animated Floating Elements */}
            <motion.div 
                className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute bottom-40 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
                    {/* Content Section */}
                    <motion.div 
                        className="text-gray-900 space-y-8 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            AI-Powered Healthcare Solutions
                        </motion.div>
                        
                        <motion.h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Transform</span>{' '}
                            Your Healthcare Practice with AI
                        </motion.h1>
                        
                        <motion.p 
                            className="text-lg sm:text-xl text-gray-600 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Create your <span className="text-primary font-semibold">AI-powered healthcare platform</span> in minutes.
                            <br />
                            Scale your practice with{' '}
                            <span className="text-primary font-semibold">
                                intelligent automation
                            </span>
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <HcfSignupPopup 
                                popupButtonStatus 
                                buttonChildren={
                                    <Button 
                                        variant='solid' 
                                        className='rounded-lg px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/30 bg-gradient-to-r from-primary to-blue-600 text-white'
                                    >
                                        Start Free Trial
                                    </Button>
                                } 
                            />
                            <Button 
                                variant='plain'
                                className='rounded-lg px-8 py-3 text-lg font-semibold border-2 border-primary/20 text-primary hover:bg-primary/10 transition-colors backdrop-blur-sm'
                                onClick={() => scrollToSection(featuresRef)}
                            >
                                See How It Works
                            </Button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div 
                            className="pt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <p className="text-gray-500 text-sm mb-4">Trusted by leading healthcare providers</p>
                            <div className="grid grid-cols-3 gap-8">
                                <motion.div 
                                    className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                                    whileHover={{ y: -5 }}
                                >
                                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                                        2100<span className="text-primary">+</span>
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-500 mt-2">Qualified Doctors</p>
                                </motion.div>
                                <motion.div 
                                    className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                                    whileHover={{ y: -5 }}
                                >
                                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                                        1000<span className="text-primary">+</span>
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-500 mt-2">Hospitals</p>
                                </motion.div>
                                <motion.div 
                                    className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                                    whileHover={{ y: -5 }}
                                >
                                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                                        800<span className="text-primary">+</span>
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-500 mt-2">Treatment Plans</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image/Video Section */}
                    <motion.div 
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30"></div>
                            <img
                                src={smallBG}
                                alt="Healthcare AI Platform"
                                className="relative w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/70 cursor-pointer"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                onClick={() => scrollToSection(featuresRef)}
            >
                <BiArrowToBottom size={24} />
            </motion.div>
        </div>
    );
};

export default HeroSection;