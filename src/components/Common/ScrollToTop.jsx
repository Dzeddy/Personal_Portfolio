import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-secondary text-white hover:bg-secondary-dark transition shadow-lg"
        aria-label="Scroll to Top"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    )
  );
};

export default ScrollToTop;
