import React from "react";

const Header = () => {
  return (
    <header className="gradient-bg text-white py-12 mb-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Full Stack Developer</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with modern
            technologies. Experienced in full-stack development, machine
            learning, and game development.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
