import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skills, categories } from '../../data/skills';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container-custom py-20">
      <SectionHeading 
        title="Skills & Expertise" 
        subtitle="A comprehensive overview of my technical skills and tools"
      />
      
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-white dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 pb-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="flex-shrink-0 w-[250px] bg-white dark:bg-dark-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className={`w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${
                        isHovered
                          ? 'from-primary-600 to-secondary-600'
                          : 'from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40'
                      }`}
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 360 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent 
                        size={32} 
                        className={`transition-colors duration-300 ${
                          isHovered
                            ? 'text-white'
                            : 'text-primary-600 dark:text-primary-400'
                        }`}
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-4 text-center">
                      {skill.name}
                    </h3>
                    
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`w-3 h-3 rounded-full ${
                            i < skill.level 
                              ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                              : 'bg-gray-200 dark:bg-dark-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;