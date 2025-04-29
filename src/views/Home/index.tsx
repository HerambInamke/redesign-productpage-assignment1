import React, { useEffect, useRef, RefObject } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import TestimonialsSection from './components/TestimonialsSection';

const Home: React.FC = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);
	const featuresRef = useRef(null);

	const scrollToSection = (ref: RefObject<HTMLElement>) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center overflow-hidden">
				<HeroSection
					scrollToSection={scrollToSection}
					featuresRef={featuresRef}
					contactRef={contactRef}
					aboutRef={aboutRef}
				/>
			</section>

			{/* Features Grid Section */}
			<section 
				ref={featuresRef}
				className="py-20 bg-gradient-to-b from-blue-50 to-white"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<FeaturesGrid />
				</div>
			</section>

			{/* Info Section */}
			<section 
				ref={aboutRef}
				className="py-20 bg-white"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<InfoSection />
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gradient-to-b from-white to-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<TestimonialsSection />
				</div>
			</section>

			{/* FAQs Section */}
			<section 
				ref={FqRef}
				className="py-20 bg-white"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<HomeFAQs />
				</div>
			</section>

			{/* Contact Form Section */}
			<section 
				ref={contactRef}
				className="py-20 bg-gradient-to-b from-gray-50 to-white"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<ContactForm />
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white">
				<MainFooter />
			</footer>
		</div>
	);
};

export default Home;