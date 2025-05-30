import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-32 bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-dark-600 dark:text-gray-300 max-w-3xl">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Reach out using the form below.
          </p>
          <div className="h-1 w-20 bg-primary-500 rounded mt-8"></div>
        </div>
      </div>

      <section className="section-padding">
        <ContactSection />
      </section>
    </motion.div>
  );
};

export default Contact;