import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code size={24} className="text-primary-600 dark:text-primary-400" />
              <span className="font-sans font-bold text-xl text-dark-900 dark:text-white">
                Portfolio
              </span>
            </div>
            <p className="text-sm text-dark-600 dark:text-gray-400 max-w-xs">
              A showcase of my skills, projects, and professional journey.
              Feel free to reach out if you'd like to connect!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-dark-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#experience" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                Experience
              </a>
              <a href="#contact" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-semibold text-dark-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="vanshsehgal2019@gmail.com" 
                className="flex items-center space-x-2 text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>vanshsehgal2019@gmail.com</span>
              </a>
              <a 
                href="https://github.com/vanshsehgal08/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-dark-600 dark:text-gray-400">
            © {currentYear} Vansh Sehgal. All rights reserved.
          </p>
          <p className="text-sm text-dark-600 dark:text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-error-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;