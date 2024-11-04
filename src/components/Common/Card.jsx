// src/components/Common/Card.jsx

import React from 'react';

const Card = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (rest.onClick) rest.onClick(e);
        }
      }}
    >
      {children}
    </div>
  );
};

export default Card;
