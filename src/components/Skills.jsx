import React from "react";
import SkillCategory from "./SkillCategory";

const Skills = ({ skillsData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-fit sticky top-6">
      <div className="flex items-center mb-8">
        <i className="fas fa-tools text-2xl text-blue-600 mr-3"></i>
        <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
      </div>
      {Object.entries(skillsData.skills).map(([category, skills]) => (
        <SkillCategory key={category} category={category} skills={skills} />
      ))}
    </div>
  );
};

export default Skills;
