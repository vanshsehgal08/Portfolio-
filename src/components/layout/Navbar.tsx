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
      className={`hidden md:flex fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-fit px-8 py-3 rounded-full glassmorphism shadow-lg items-center justify-center`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              `font-sans text-base font-semibold px-4 py-2 rounded-full transition-all duration-200
              ${isActive 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                : 'text-dark-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-dark-700 hover:text-primary-700 dark:hover:text-primary-400'}
              `
            }
          >
            {link.label}
          </NavLink>
        ))}
        <div className="flex items-center gap-3 ml-4">
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
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;