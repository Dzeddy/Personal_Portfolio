import React from 'react';

const Button = ({ children, onClick, href, type = 'button', className }) => {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
