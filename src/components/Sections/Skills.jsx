// src/components/Sections/Skills.jsx

import React, { useState } from 'react';
import Card from '../Common/Card';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const skills = {
  Frontend: [
    { name: 'React.js', level: 'Advanced' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Material-UI', level: 'Intermediate' },
  ],
  Backend: [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Java Spring-Boot', level: 'Intermediate' },
    { name: 'GraphQL', level: 'Intermediate' },
    { name: 'Django', level: 'Beginner' },
  ],
  Tools: [
    { name: 'AWS', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'Jenkins', level: 'Beginner' },
  ],
};

const proficiency = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Animation variants
  const dropdownVariants = {
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    visible: { height: 'auto', opacity: 1, overflow: 'hidden' },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Skills</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(skills).map((category) => (
            <Card
              key={category}
              className="cursor-pointer"
              onClick={() =>
                setActiveCategory(category === activeCategory ? null : category)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{category}</h3>
                <motion.div
                  variants={chevronVariants}
                  animate={category === activeCategory ? 'open' : 'closed'}
                  transition={{ duration: 0.3 }}
                >
                  {category === activeCategory ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
              </div>
              <AnimatePresence>
                {category === activeCategory && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mt-4">
                      {skills[category].map((skill, idx) => (
                        <div key={idx} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                            <span className="text-gray-600 dark:text-gray-400">{skill.level}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div
                              className={`bg-secondary h-2.5 rounded-full`}
                              style={{ width: `${proficiency[skill.level]}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
