import React, { useState, useEffect } from "react";
import SkillCategory from "./SkillCategory";
import skillsData from "../data/skills.json";

function Skills() {
  const [skills, setSkills] = useState({});
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API
    const loadSkills = async () => {
      setLoading(true);
      try {
        // In a real app, this would be fetched from an API
        setSkills(skillsData.skills);
        setLanguages(skillsData.languages || []);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) {
    return (
      <section>
        <h2 className="section-title">Skills</h2>
        <div className="animate-pulse space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-24 mb-4"></div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((j) => (
                  <div
                    key={j}
                    className="h-20 bg-gray-200 dark:bg-gray-800 rounded"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <div className="space-y-8 animate-fade-in">
        {Object.entries(skills).map(([category, skillsList]) => (
          <SkillCategory
            key={category}
            category={category}
            skills={skillsList}
          />
        ))}

        {languages.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
