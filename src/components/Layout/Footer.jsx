import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Dylan Zhuang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
