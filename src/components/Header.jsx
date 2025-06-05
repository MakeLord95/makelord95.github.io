import React from "react";

const Header = () => {
  return (
    <header className="gradient-bg text-white py-16 mb-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">Markus Salin</h1>
          <h2 className="text-2xl font-medium mb-6 text-blue-100">
            Software Engineer
          </h2>
          <p className="text-lg opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
            Full-stack developer with a solid foundation in frontend and backend
            technologies. I thrive on solving complex problems, adapt quickly to
            new tools, and build clean, efficient solutions. Passionate about
            modern web development, machine learning, and game development.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <a
              href="https://github.com/makelord95"
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-2xl"></i>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="mailto:juhani.markus@gmail.com"
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-envelope text-2xl"></i>
              <span className="text-sm font-medium">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
