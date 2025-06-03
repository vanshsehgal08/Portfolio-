import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  return (
    <motion.div 
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${centered ? 'mx-auto' : ''}`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="relative h-1 w-24 mt-8 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded">
        <div 
          className="absolute -top-2 left-0 w-3 h-3 rounded-full bg-primary-500"
          style={{ animation: 'bounce 1.5s infinite' }}
        />
        <div 
          className="absolute -top-2 right-0 w-3 h-3 rounded-full bg-secondary-500"
          style={{ animation: 'bounce 1.5s infinite 0.5s' }}
        />
      </div>
    </motion.div>
  );
};

export default SectionHeading;