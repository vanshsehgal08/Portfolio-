import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

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

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  // If on /projects, show all projects in a grid, no slider
  const isProjectsPage = location.pathname === '/projects';

  return (
    <div className="container-custom py-20">
      <SectionHeading 
        title="My Projects" 
        subtitle="Explore my recent work and creations"
      />
      
      {isProjectsPage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full cursor-pointer"
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index === 0 ? 50 : index === 2 ? -50 : 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    {project.githubLink && (
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-primary-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.demoLink && (
                      <motion.a 
                        href={project.demoLink} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-primary-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-gray-300 mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group relative bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full cursor-pointer"
                    initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index === 0 ? 50 : index === 2 ? -50 : 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeInOut"
                    }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          {project.githubLink && (
                            <motion.a 
                              href={project.githubLink} 
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-primary-600 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={18} />
                            </motion.a>
                          )}
                          {project.demoLink && (
                            <motion.a 
                              href={project.demoLink} 
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-primary-600 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={18} />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-dark-600 dark:text-gray-300 mb-3 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {/* Side Navigation Arrows */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12">
              <motion.button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronLeft size={24} />
              </motion.button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6">
              <motion.button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
            {/* Page Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 scale-125'
                      : 'bg-gray-300 dark:bg-dark-600 hover:bg-primary-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/projects');
              }}
              className="inline-flex items-center btn-primary"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsSection;