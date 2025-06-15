import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Have a project in mind? Let's discuss how we can work together."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactInfo />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;