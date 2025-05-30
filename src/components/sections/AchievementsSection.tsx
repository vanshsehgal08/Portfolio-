import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { achievements, achievementTypes } from '../../data/achievements';
import { Award, BookOpen, FileCheck } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredAchievements = filter === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <FileCheck className="text-primary-600 dark:text-primary-400" />;
      case 'award':
        return <Award className="text-accent-500 dark:text-accent-400" />;
      case 'publication':
        return <BookOpen className="text-secondary-600 dark:text-secondary-400" />;
      default:
        return <Award className="text-primary-600 dark:text-primary-400" />;
    }
  };

  return (
    <div className="container-custom">
      <SectionHeading 
        title="Achievements & Certifications" 
        subtitle="Recognitions and qualifications I've earned throughout my career"
      />
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {achievementTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setFilter(type.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === type.id
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
            }`}
          >
            {type.name}
          </button>
        ))}
      </div>
      
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {achievement.image && (
              <div className="h-40 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center mb-3 gap-2">
                {getIcon(achievement.type)}
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 capitalize">
                  {achievement.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
                {achievement.title}
              </h3>
              
              <div className="flex items-center mb-3 text-sm text-dark-600 dark:text-gray-400">
                <span className="font-medium">{achievement.issuer}</span>
                <span className="mx-2">•</span>
                <span>{achievement.date}</span>
              </div>
              
              <p className="text-dark-600 dark:text-gray-300 mb-4">
                {achievement.description}
              </p>
              
              {achievement.link && (
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                >
                  View credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;