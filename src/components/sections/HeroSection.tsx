import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowRight, Code, Terminal, Brain } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [textRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = [
    'Full Stack Developer',
    'Software Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Competitive Programmer'
  ];

  useEffect(() => {
    if (!typingRef.current) return;
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -20 },
    { Icon: Terminal, delay: 0.2, x: 20, y: 20 },
    { Icon: Brain, delay: 0.4, x: -15, y: 15 }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${30 + index * 20}%`,
              left: `${20 + index * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.2,
              scale: 1,
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Icon size={40} className="text-primary-400 dark:text-primary-600" />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-20 mt-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            ref={textRef}
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Vansh
              </span>
            </motion.h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-dark-700 dark:text-gray-200 mb-6">
              I'm a{' '}
              <span 
                ref={typingRef} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-600"
              >
                Full Stack Developer
              </span>
              <span className="animate-blink">|</span>
            </h2>

            <motion.p 
              className="text-lg text-dark-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Computer Science student passionate about building full-stack web applications 
              and solving complex problems. Experienced with React, Node.js, and AI-powered projects 
              using Raspberry Pi and Google Gemini.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="https://drive.google.com/file/d/111zIRug27bMRcsoE2CwOkPyUVHi8PH0-/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-primary-600 rounded-full shadow-md text-xl"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary-600 group-hover:translate-x-0 ease">
                  <Download size={20} />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-primary-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Resume
                </span>
                <span className="relative invisible">Resume</span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-secondary-600 rounded-full shadow-md text-xl"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary-600 group-hover:translate-x-0 ease">
                  <ArrowRight size={20} />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-secondary-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Contact
                </span>
                <span className="relative invisible">Contact</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white dark:border-dark-700 shadow-xl">
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;