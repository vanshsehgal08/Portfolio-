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
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-center md:justify-between relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Code size={28} className="text-primary-600 dark:text-primary-400" />
          <span className="font-sans font-bold text-xl md:text-2xl text-dark-900 dark:text-white">
            Portfolio
          </span>
        </NavLink>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
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
        {/* Removed hamburger menu and mobile menu for mobile, as MobileNavBar handles mobile navigation now */}
      </div>

      {/* Mobile Menu */}
      {/* Removed mobile menu dropdown for mobile */}
    </header>
  );
};

export default Navbar;