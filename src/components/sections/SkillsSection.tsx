import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skills, categories } from '../../data/skills';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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
    <div className="container-custom">
      <SectionHeading 
        title="Skills & Expertise" 
        subtitle="A comprehensive overview of my technical skills and tools"
      />
      
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-smooth gap-6 pb-4"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 w-[200px] bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <h3 className="font-medium text-dark-800 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.level 
                            ? 'bg-primary-500 dark:bg-primary-400' 
                            : 'bg-gray-200 dark:bg-dark-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
          aria-label="Scroll skills left"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
          aria-label="Scroll skills right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;