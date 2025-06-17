import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, LucideIcon, X } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find(p => p.id === Number(projectId));

  const handleGitHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Special handling for NeuraLens project
    if (project?.id === 5) {
      setShowPopup(true);
      return;
    }
    
    // For other projects, open the GitHub link normally
    if (project?.githubLink && project.githubLink !== "#") {
      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-4xl font-bold text-dark-800 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-dark-600 dark:text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
        <button
          onClick={() => { console.log('Navigating to /projects'); navigate('/projects'); }}
          className="btn-primary"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-32 bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <button
            onClick={() => { console.log('Navigating to /projects'); navigate('/projects'); }}
            className="inline-flex items-center text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-6">
            {project.title}
          </h1>
          <div className="h-1 w-20 bg-primary-500 rounded mb-8"></div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubLink && (
                  <button 
                    onClick={handleGitHubClick}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-800 dark:bg-dark-700 text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </button>
                )}
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">About the Project</h2>
                <p className="text-dark-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Section */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">Tech Stack</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 rounded-full text-dark-600 dark:text-gray-300">
                        {tech.icon && <tech.icon size={18} />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NeuraLens Project In Progress Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                  🚧 Project In Progress
                </h3>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-dark-400 hover:text-dark-600 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800 dark:text-white">NeuraLens</h4>
                    <p className="text-sm text-dark-600 dark:text-gray-400">AI-Powered Smart Glasses</p>
                  </div>
                </div>
                <p className="text-dark-600 dark:text-gray-300 text-sm leading-relaxed">
                  This project is currently in active development. The GitHub repository will be made public soon with full documentation and setup instructions.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-3">
                  <p className="text-xs text-primary-700 dark:text-primary-300 font-medium">
                    💡 Stay tuned for updates! The repository will include comprehensive documentation, setup guides, and demo videos.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetail; 