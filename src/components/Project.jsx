import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card-hover bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-500 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <span className="text-3xl mr-3">{project.emoji}</span>
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
        </div>
        <div className="flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <i className="fas fa-external-link-alt text-xl"></i>
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
          <i className="fas fa-user-check text-blue-600 mr-2"></i>
          My Role
        </h4>
        <p className="text-gray-700">{project.role}</p>
      </div>

      {project.projects && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <i className="fas fa-folder-open text-blue-600 mr-2"></i>
            Sub-projects
          </h4>
          <div className="space-y-3">
            {project.projects.map((subProject, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg p-4 border-l-2 border-blue-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-800">
                    {subProject.title}
                  </h5>
                  {subProject.notebook && (
                    <a
                      href={subProject.notebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className="fas fa-book-open"></i>
                    </a>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{subProject.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
