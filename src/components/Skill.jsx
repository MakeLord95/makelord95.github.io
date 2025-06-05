import React from "react";

const Skill = ({ skill }) => {
  return (
    <span className="skill-tag inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2 font-medium hover:bg-blue-200 cursor-default">
      {skill}
    </span>
  );
};

export default Skill;
