// src/components/Layout/ThemeToggle.jsx

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define animation variants for rotation only
  const iconVariants = {
    light: { rotate: 0 },
    dark: { rotate: 180 },
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        variants={iconVariants}
        initial={theme === 'dark' ? 'dark' : 'light'}
        animate={theme === 'dark' ? 'dark' : 'light'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
