import { motion } from 'framer-motion';
import { FaChartLine, FaUserMd, FaMobileAlt, FaLock } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Smart Health Tracking',
    description: 'Monitor your health metrics with intelligent tracking and personalized insights.',
  },
  {
    icon: <FaUserMd className="w-8 h-8" />,
    title: 'Expert Guidance',
    description: 'Connect with healthcare professionals and get personalized advice.',
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: 'Mobile-First Experience',
    description: 'Access your health data and track progress on any device, anywhere.',
  },
  {
    icon: <FaLock className="w-8 h-8" />,
    title: 'Secure & Private',
    description: 'Your health data is encrypted and protected with enterprise-grade security.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Healthy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you manage your health journey effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 