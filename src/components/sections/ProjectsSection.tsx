import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  return (
    <div className="container-custom py-20">
      <SectionHeading 
        title="My Projects" 
        subtitle="Explore my recent work and creations"
      />
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="space-x-2">
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark-800/80 text-white hover:bg-primary-600 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark-800/80 text-white hover:bg-primary-600 transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-600 text-dark-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === i
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-dark-600 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;