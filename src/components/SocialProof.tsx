import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Wellness Coach',
    content: 'GoGetWell has transformed how I manage my clients\' health journeys. The platform is intuitive and powerful.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Fitness Enthusiast',
    content: 'The personalized insights and tracking features have helped me achieve my health goals faster than ever.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
    content: 'As a healthcare provider, I recommend GoGetWell to all my patients. It\'s a game-changer for health management.',
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Health Enthusiasts Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of users who have transformed their health journey with GoGetWell
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-gray-900 mb-8">
            Trusted by 100+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder logos - replace with actual client logos */}
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof; 