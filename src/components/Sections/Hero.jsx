import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Common/Button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background dark:bg-darkBackground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 dark:text-white">
          Hi, I'm Dylan Zhuang
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-gray-600 dark:text-gray-300">
          Software Engineer | Mathematician | TCMB
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="projects" smooth={true} duration={500}>
            <Button className="bg-secondary hover:bg-secondary-dark">View Projects</Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button className="bg-accent hover:bg-accent-dark">Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
