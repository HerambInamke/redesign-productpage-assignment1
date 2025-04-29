import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { BiArrowToBottom } from 'react-icons/bi';

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
        <div className="relative min-h-screen bg-gradient-to-br from-[#01052f] to-[#1a1f4b] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#01052f]/30"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
            
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
                    {/* Content Section */}
                    <div className="text-white space-y-8 relative z-10">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                            AI-Powered Healthcare Solutions
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-primary">AI Front Office</span>{' '}
                            <br className="hidden sm:block" />
                            for Healthcare Agents
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                            Create <span className="text-primary font-semibold">AI Store</span> in 2 minutes
                            <br />
                            Scale with{' '}
                            <span className="text-primary font-semibold">
                                Digital Marketing
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <HcfSignupPopup 
                                popupButtonStatus 
                                buttonChildren={
                                    <Button 
                                        variant='solid' 
                                        className='rounded-lg px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/30'
                                    >
                                        Get Started
                                    </Button>
                                } 
                            />
                            <Button 
                                variant='plain'
                                className='rounded-lg px-8 py-3 text-lg font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-colors'
                                onClick={() => scrollToSection(featuresRef)}
                            >
                                Learn More
                            </Button>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <h2 className="text-3xl sm:text-4xl font-bold">
                                    2100<span className="text-primary">+</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-300 mt-2">Qualified Doctors</p>
                            </div>
                            <div className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <h2 className="text-3xl sm:text-4xl font-bold">
                                    1000<span className="text-primary">+</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-300 mt-2">Hospitals</p>
                            </div>
                            <div className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <h2 className="text-3xl sm:text-4xl font-bold">
                                    800<span className="text-primary">+</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-300 mt-2">Treatment Plans</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Video Section */}
                    <div className="relative hidden lg:block">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30"></div>
                            <img
                                src={smallBG}
                                alt="Healthcare AI Platform"
                                className="relative w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#01052f]/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce cursor-pointer" onClick={() => scrollToSection(featuresRef)}>
                <BiArrowToBottom size={24} />
            </div>
        </div>
    );
};

export default HeroSection;