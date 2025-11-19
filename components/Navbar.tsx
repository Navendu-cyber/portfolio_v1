import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 border-b border-gray-200 dark:border-neon-blue/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
            <span className="font-mono font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              NAVENDU<span className="text-neon-blue">.DEV</span>
            </span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="font-mono text-sm text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-neon-blue transition-colors uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="#contact"
            className="hidden md:block px-4 py-1.5 border border-neon-blue/30 text-neon-blue font-mono text-xs hover:bg-neon-blue/10 transition-all rounded"
          >
            HIRE_ME
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;