import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import AchievementsSection from '../components/sections/AchievementsSection';

const About: React.FC = () => {
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
            About Me
          </h1>
          <div className="h-1 w-20 bg-primary-500 rounded mb-8"></div>
        </div>
      </div>

      <section className="section-padding">
        <AboutSection />
      </section>

      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <SkillsSection />
      </section>

      <section className="section-padding">
        <AchievementsSection />
      </section>
    </motion.div>
  );
};

export default About;