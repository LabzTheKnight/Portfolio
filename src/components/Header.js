import React from 'react';

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-900 text-center px-6 py-8 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111,#333)] opacity-30 z-0"></div>

      {/* Image Section */}
      <div className="relative z-10 flex-shrink-0 w-2/3 md:w-1/3 mb-8 md:mb-0">
        <img
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-gray-700 shadow-xl transform transition-transform hover:scale-110"
        />
      </div>

      {/* Text and Buttons Section */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full md:w-2/3 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
          Hello, I'm Afolabi
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
          Full Stack & Software Developer
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://github.com/LabzTheKnight"
            className="flex items-center bg-gray-700 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
          <a
            href="https://de.linkedin.com/in/afolabi-afolayan-7b8092248"
            className="flex items-center bg-gray-700 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
          </a>
          <a
            href="mailto:aaafolayan@gmail.com"
            className="flex items-center bg-gray-700 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          >
            <i className="fas fa-envelope mr-2"></i> Email
          </a>
        </div>
        <button className="flex items-center bg-gray-700 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105">
          <i className="fas fa-download mr-2"></i> Download CV
        </button>
      </div>
    </header>
  );
}

export default Header;