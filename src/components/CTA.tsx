import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Health Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who have already improved their health and wellness with GoGetWell.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg border-2 border-white hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </motion.button>
          </div>
          <p className="mt-4 text-blue-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 