import React from "react";
import Project from "./Project";

const Projects = ({ projectsData }) => {
  return (
    <div>
      <div className="flex items-center mb-8">
        <i className="fas fa-briefcase text-2xl text-blue-600 mr-3"></i>
        <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
      </div>
      {projectsData.projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
