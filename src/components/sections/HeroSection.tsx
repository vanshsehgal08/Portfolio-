import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [textRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = [
  'Full Stack Developer',
  'Competitive Programmer',
  'AI Enthusiast',
  'Problem Solver'
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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-secondary-900 z-0" />
      
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary-400/10 dark:bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-400/10 dark:bg-secondary-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-20 mt-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            ref={textRef}
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-4">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Vansh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-dark-700 dark:text-gray-200 mb-4">
              I'm a <span ref={typingRef} className="text-secondary-600 dark:text-secondary-400">Full Stack Developer</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Computer Science student passionate about building full-stack web applications and solving complex problems.  
              Experienced with React, Node.js, and AI-powered projects using Raspberry Pi and Google Gemini.  
              Always eager to learn cutting-edge tech and contribute to impactful innovations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="https://drive.google.com/file/d/1Eft7QjUwARt1Tjpq9TgcBznZ6cMAfKAb/view?usp=sharing" 
                download
                className="btn-primary"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="btn-outline"
              >
                Contact Me
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full">
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