import React from 'react';
import { Home, User, Folder, Star, Briefcase, Award, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const navItems = [
  { href: '#home', icon: Home, label: 'Home' },
  { href: '#about', icon: User, label: 'About' },
  { href: '#projects', icon: Folder, label: 'Projects' },
  { href: '#skills', icon: Star, label: 'Skills' },
  { href: '#experience', icon: Briefcase, label: 'Experience' },
  { href: '#achievements', icon: Award, label: 'Achievements' },
  { href: '#contact', icon: Mail, label: 'Contact' },
];

const MobileNavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center" style={{height: '64px', paddingBottom: 'env(safe-area-inset-bottom)'}}>
      <div className="w-full max-w-md mx-2 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-md bg-white/80 dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-dark-700 transition-colors text-dark-700 dark:text-gray-200"
            aria-label={label}
          >
            <Icon size={22} />
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-dark-700 transition-colors text-dark-700 dark:text-gray-200"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default MobileNavBar; 