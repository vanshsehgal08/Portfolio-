import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
        Contact Information
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-dark-800 dark:text-white">
              Email
            </h4>
            <a 
              href="mailto:vanshsehgal2019@gmail.com" 
              className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              vanshsehgal2019@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-dark-800 dark:text-white">
              Location
            </h4>
            <p className="text-dark-600 dark:text-gray-300">
              Vellore, TN, India
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium text-dark-800 dark:text-white mb-4">
          Connect with me
        </h4>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/vanshsehgal08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-dark-800 dark:bg-dark-600 flex items-center justify-center text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/vansh-sehgal-794030220/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-dark-800 dark:bg-dark-600 flex items-center justify-center text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://x.com/VxnshM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-dark-800 dark:bg-dark-600 flex items-center justify-center text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;