import React from 'react';

function Skills() {
  return (
    <section id="skills" className="p-12 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111,#333)] opacity-30 z-0"></div>
      
      {/* Section Title */}
      <h2 className="relative z-10 text-2xl font-semibold text-center mb-10 text-white uppercase tracking-widest leading-tight">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        
        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fas fa-gem text-3xl mb-2 text-red-600 group-hover:text-red-500 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-red-400 transition-colors duration-300">Ruby on Rails</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fab fa-react text-3xl mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">React | React Native</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fa-brands fa-git-alt text-3xl mb-2 text-orange-500 group-hover:text-blue-400 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">Git</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fab fa-bootstrap text-3xl mb-2 text-purple-600 group-hover:text-purple-500 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors duration-300">Bootstrap</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fas fa-database text-3xl mb-2 text-amber-600 group-hover:text-amber-500 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors duration-300">SQL | MongoDB</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fab fa-js-square text-3xl mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">JavaScript</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fab fa-node text-3xl mb-2 text-green-500 group-hover:text-green-400 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-green-300 transition-colors duration-300">Node.JS</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fa-solid fa-server text-3xl mb-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">Express.JS</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fab fa-python text-3xl mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-blue-200 transition-colors duration-300">Python</span>
        </div>

        {/* Skill Item */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group">
          <i className="fab fa-docker text-3xl mb-2 text-blue-300 group-hover:text-blue-200 transition-colors duration-300"></i>
          <span className="text-white text-sm font-medium group-hover:text-blue-100 transition-colors duration-300">Docker</span>
        </div>
        
      </div>
    </section>
  );
}

export default Skills;