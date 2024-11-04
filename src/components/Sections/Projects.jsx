import React, { useState } from 'react';
import Card from '../Common/Card';
import Modal from '../Common/Modal';
import projectsData from '../../data/projects'; // Assume projects data is stored here
import Button from '../Common/Button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition" onClick={() => setSelectedProject(project)}>
              <img src={project.thumbnail} alt={project.title} className="h-48 w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        {selectedProject && (
          <Modal isOpen={true} onClose={() => setSelectedProject(null)}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedProject.title}</h2>
            <img src={selectedProject.thumbnail} alt={selectedProject.title} className="mt-4 w-full h-64 object-cover rounded" />
            <p className="mt-4 text-gray-600 dark:text-gray-300">{selectedProject.details}</p>
            <div className="mt-4 flex space-x-4">
              {selectedProject.demo && (
                <Button href={selectedProject.demo} className="bg-accent hover:bg-accent-dark">
                  Live Demo
                </Button>
              )}
              {selectedProject.repo && (
                <Button href={selectedProject.repo} className="bg-secondary hover:bg-secondary-dark">
                  Repository
                </Button>
              )}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Projects;
