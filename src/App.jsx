import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import skillsData from "./data/skills.json";
import projectsData from "./data/projects.json";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Skills */}
          <div className="lg:col-span-1">
            <Skills skillsData={skillsData} />
          </div>

          {/* Right side - Projects */}
          <div className="lg:col-span-2">
            <Projects projectsData={projectsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
