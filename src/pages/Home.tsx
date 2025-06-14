import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home">
        <HeroSection />
        <div className="flex justify-center">
          <motion.a
            href="#about"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </motion.a>
        </div>
      </section>

      <section id="about" className="section-padding">
        <AboutSection />
      </section>

      <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-900">
        <SkillsSection />
      </section>

      <section id="projects" className="section-padding">
        <ProjectsSection />
      </section>

      <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-900">
        <ExperienceSection />
        <div className="mt-12 text-center">
          <Link 
            to="/experience"
            className="inline-flex items-center btn-primary"
          >
            <span>View Full Experience</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      <section id="achievements" className="section-padding">
        <AchievementsSection />
      </section>

      <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-900">
        <ContactSection />
      </section>
    </motion.div>
  );
};

export default Home;