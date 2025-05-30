import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/sections/ProjectsSection';

const Projects: React.FC = () => {
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
            My Projects
          </h1>
          <p className="text-lg text-dark-600 dark:text-gray-300 max-w-3xl">
            Explore a collection of my work across web development, design, and more.
            Each project represents a unique challenge and solution.
          </p>
          <div className="h-1 w-20 bg-primary-500 rounded mt-8"></div>
        </div>
      </div>

      <section className="section-padding">
        <ProjectsSection />
      </section>
    </motion.div>
  );
};

export default Projects;