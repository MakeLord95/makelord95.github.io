import React, { useState, useEffect } from "react";
import Project from "./Project";
import projectsData from "../data/projects.json";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API
    const loadProjects = async () => {
      setLoading(true);
      try {
        // In a real app, this would be fetched from an API
        setProjects(projectsData.projects);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section>
        <h2 className="section-title">Projects</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="card h-64 bg-gray-200 dark:bg-gray-800"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="space-y-6 animate-fade-in">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
