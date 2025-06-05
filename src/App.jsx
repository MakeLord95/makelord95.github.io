import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Code,
  Database,
  Cloud,
  Brain,
  Gamepad2,
  Bot,
  Users,
  TestTube,
} from "lucide-react";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});

  const projects = projectsData.projects;
  const skills = skillsData.skills;

  const skillIcons = {
    Frontend: Code,
    Backend: Database,
    Databases: Database,
    "APIs & Security": Cloud,
    "Cloud & DevOps": Cloud,
    "Web Servers & System Administration": Cloud,
    "Machine Learning": Brain,
    "Version Control": Github,
    "Project Management & Testing": TestTube,
    "Game Development": Gamepad2,
    "AI & Chatbots": Bot,
    "Collaboration & UI": Users,
    Methodologies: Users,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="w-full max-w-none mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="w-full max-w-none mx-auto text-center">
          <div className="mb-8 animate-pulse">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
              <Code size={64} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Markus Salin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionate about creating innovative web applications, AI solutions,
            and immersive game experiences. Specialized in modern technologies
            and always eager to tackle new challenges.
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="w-full max-w-none mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a full-stack developer who enjoys solving problems across
                web, AI, and game development. I build things end-to-end—turning
                ideas into working products.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I've worked across the entire stack, from planning and
                architecture to deployment and iteration. I'm especially drawn
                to modern web frameworks, machine learning use cases, and
                designing smooth, intuitive user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of work, I explore new tools, contribute to open source
                when I can, and keep pushing forward on indie game projects.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  🎯 Focus Areas
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Full-Stack Web Development</li>
                  <li>• AI & Machine Learning Integration</li>
                  <li>• Game Development</li>
                  <li>• API Design & Development</li>
                  <li>• Database Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="w-full max-w-none mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => {
              const IconComponent = skillIcons[category] || Code;
              return (
                <div
                  key={category}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                    isVisible.skills
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-400">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="w-full max-w-none mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                  isVisible.projects
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{project.emoji}</span>
                    <h3 className="text-xl font-semibold text-blue-400">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.role && (
                    <p className="text-sm text-purple-300 mb-4 italic">
                      Role: {project.role}
                    </p>
                  )}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-2 py-1 rounded text-xs border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.live_demo && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="w-full max-w-none mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:juhani.markus@gmail.com"
              className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </a>
            <a
              href="https://github.com/makelord95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-white/30 hover:border-white/60 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="w-full max-w-none mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Markus Salin Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
