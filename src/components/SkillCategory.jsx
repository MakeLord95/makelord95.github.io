import React from "react";

function SkillCategory({ category, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
