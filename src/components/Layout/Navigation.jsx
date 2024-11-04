import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-secondary">Dylan Zhuang</h1>
          </div>
          <div className="hidden md:flex md:items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64} // Adjust for fixed header
                className="ml-10 text-gray-700 dark:text-gray-300 hover:text-secondary cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="ml-2 text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;