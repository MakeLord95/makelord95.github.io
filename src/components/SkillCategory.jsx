import React from "react";
import Skill from "./Skill";

const SkillCategory = ({ category, skills }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: "fas fa-code",
      Backend: "fas fa-server",
      Databases: "fas fa-database",
      "APIs & Security": "fas fa-shield-alt",
      "Cloud & DevOps": "fas fa-cloud",
      "Web Servers & System Administration": "fas fa-cogs",
      "Machine Learning": "fas fa-brain",
      "Version Control": "fas fa-code-branch",
      "Project Management & Testing": "fas fa-tasks",
      "Game Development": "fas fa-gamepad",
      "AI & Chatbots": "fas fa-robot",
      "Collaboration & UI": "fas fa-users",
      Methodologies: "fas fa-project-diagram",
    };
    return icons[category] || "fas fa-tag";
  };

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center mb-4">
        <i
          className={`${getCategoryIcon(category)} text-blue-600 mr-3 text-lg`}
        ></i>
        <h3 className="text-xl font-bold text-gray-800">{category}</h3>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
