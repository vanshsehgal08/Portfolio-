import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, Code, Terminal } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <Code size={28} className="text-primary-600 dark:text-primary-400" />
          <span className="font-sans font-bold text-xl md:text-2xl text-dark-900 dark:text-white">
            Portfolio
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `font-sans text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/vanshsehgal08/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vansh-sehgal-794030220/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/vanshsehgal08/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <Terminal size={20} />
            </a>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-dark-800 dark:text-white"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
          >
            <nav className="container-custom py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => 
                    `font-sans text-lg font-medium py-2 transition-colors ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-dark-600 dark:text-gray-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              
              {/* Social Links in Mobile */}
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://github.com/vanshsehgal08/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vansh-sehgal-794030220/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://leetcode.com/vanshsehgal08/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
                  aria-label="LeetCode"
                >
                  <Terminal size={22} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;