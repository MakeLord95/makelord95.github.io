import React from "react";
import myImage from "../assets/Image.jpg";

const Header = () => {
  return (
    <header className="gradient-bg text-white py-16 mb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-8 lg:space-y-0">
          <div className="flex-shrink-0">
            <img
              src={myImage}
              alt="Description"
              className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </div>

          <div className="text-center lg:text-left max-w-4xl">
            <h1 className="text-5xl font-bold mb-2">Markus Salin</h1>
            <h2 className="text-2xl font-medium mb-6 text-blue-100">
              Software Engineer
            </h2>
            <p className="text-lg opacity-95 leading-relaxed mb-8">
              Software Engineer with a solid foundation in full-stack
              development, encompassing both frontend and backend technologies.
              I have practical experience in building robust and scalable
              applications from end-to-end, leveraging modern tools to deliver
              clean, efficient, and user-centric solutions. Driven by a passion
              for problem-solving, I adapt quickly to new technologies and
              continuously explore innovative areas like Machine Learning and
              AI.
            </p>
            <div className="flex justify-center lg:justify-start items-center space-x-8 mt-8">
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
                href="https://www.linkedin.com/in/markus-s-08659537a/"
                className="flex items-center space-x-2 text-white hover:text-blue-200 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-2xl"></i>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:juhani.markus@gmail.com"
                className="flex
                  items-center space-x-2 text-white hover:text-blue-200
                  transition-all duration-300 hover:scale-105"
              >
                <i className="fas fa-envelope text-2xl"></i>
                <span className="text-sm font-medium">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
