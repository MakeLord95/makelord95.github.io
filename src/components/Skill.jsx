import React, { useState } from "react";
import SkillModal from "./SkillModal";

function Skill({ skill }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="card p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 h-28"
        onClick={openModal}
      >
        {/* Use a placeholder for the icon */}
        <div className="text-4xl mb-2 text-primary">
          <i className={skill.logo}></i>
        </div>
        <span className="text-sm font-medium text-center">{skill.name}</span>
      </div>

      <SkillModal skill={skill} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Skill;
