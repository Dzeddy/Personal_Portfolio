// src/components/Sections/Experience.jsx

import React, { useContext } from 'react';
import Card from '../Common/Card';
import { ThemeContext } from '../../context/ThemeContext';

// Import light and dark mode logos
import capitalOneLogoLight from '../../assets/images/capitalone.png';
import capitalOneLogoDark from '../../assets/images/capitalonedarkmode.png';
import raymondJamesLogoLight from '../../assets/images/raymondjames.png';
import raymondJamesLogoDark from '../../assets/images/raymondjamesdarkmode.png';
import deepMotionLogoLight from '../../assets/images/deepmotion.png';
import deepMotionLogoDark from '../../assets/images/deepmotiondarkmode.png';

const experiences = [
  {
    position: 'Software Engineering Intern',
    company: 'Capital One',
    logoLight: capitalOneLogoLight,
    logoDark: capitalOneLogoDark,
    location: 'Richmond, VA',
    duration: 'May 2025 – August 2025',
    description: 'Incoming 2025',
    achievements: [],
  },
  {
    position: 'Software Engineering Intern',
    company: 'Raymond James Financial',
    logoLight: raymondJamesLogoLight,
    logoDark: raymondJamesLogoDark,
    location: 'St. Petersburg, FL',
    duration: 'May 2024 – August 2024',
    description: '',
    achievements: [
      'Delivered $11,000 in monthly cost savings through a 2% increase in productivity across a 180-person team by optimizing filters in OracleDB, refactoring Java Spring-Boot middleware, and building Angular + TypeScript UX/UI.',
      'Increased code coverage by 5% through writing E2E tests for internal spreadsheet tools using Protractor.',
      'Developed scripts in Python, Powershell, and Bash to automate data transfer across international teams.',
      'Reduced monthly AWS EC2 instance costs by 15% through refactoring TigerGraph Database Queries.',
      'Drove a 20% reduction in relevant real-time Anti Money Laundering case investigation time by cross-referencing alerts with existing cases in GraphQL, allowing investigators to focus on novel high-priority cases.',
    ],
  },
  {
    position: 'Software Engineering Intern',
    company: 'DeepMotion',
    logoLight: deepMotionLogoLight,
    logoDark: deepMotionLogoDark,
    location: 'San Diego, CA',
    duration: 'June 2023 – August 2023',
    description: '',
    achievements: [
      'Developed and maintained RESTful APIs using Node.js, improving data retrieval efficiency by 40%.',
      'Conducted A/B tests that improved user engagement by 20%, streamlined user stories, and automated testing and deployment, reducing release times by 50%.',
    ],
  },
];

const Experience = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Experience</h2>
        <div className="mt-10 space-y-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0">
                {/* Conditionally render light or dark logo based on theme */}
                <img
                  src={theme === 'dark' ? exp.logoDark : exp.logoLight}
                  alt={`${exp.company} logo`}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{exp.position}</h3>
                <p className="text-gray-500 dark:text-gray-400">{exp.company} - {exp.location}</p>
                <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
                {exp.description && <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>}
                {exp.achievements.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
