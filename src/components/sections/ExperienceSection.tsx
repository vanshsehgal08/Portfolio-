import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/experience';
import { CheckCircle2 } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  
  const displayExperiences = window.location.pathname === '/' 
    ? experiences.slice(0, 2) // Only show most recent experiences on homepage
    : experiences;

  return (
    <div className="container-custom">
      <SectionHeading 
        title="Work Experience" 
        subtitle="My professional journey and career highlights"
      />
      
      <div className="mt-12">
        {displayExperiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-12 ${index !== experiences.length - 1 ? 'pb-12 border-b border-gray-200 dark:border-dark-700' : ''}`}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Company Logo */}
              <div className="md:w-1/4 flex-shrink-0">
                <div className="w-26 h-26 md:w-27 md:h-27 rounded-lg bg-white dark:bg-dark-700 shadow-md p-4 flex items-center justify-center">

                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {exp.company.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Experience Details */}
              <div className="md:w-3/4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-dark-600 dark:text-gray-300">
                    <span className="font-medium text-primary-600 dark:text-primary-400">
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <span className="text-sm text-dark-500 dark:text-gray-400">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-dark-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                {/* Key Achievements */}
                <div className="mt-4">
                  <h4 className="font-semibold text-dark-700 dark:text-gray-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 size={18} className="text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-dark-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Skills Used */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;