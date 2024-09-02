import React from 'react';

function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111,#333)] opacity-30 z-0"></div>

      <h2 className="relative z-10 text-2xl font-semibold text-center mb-10 text-white uppercase tracking-widest leading-tight">
        Projects
      </h2>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project One */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/150" // Replace with your project image URL
            alt="Project One"
            className="w-full md:w-48 h-32 object-cover rounded mb-4 md:mb-0 md:mr-4"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-white">Breaking Bread</h3>
            <p className="text-gray-400 mb-4">Bootcamp project, the website is for sharing food within a community more efficiently and reducing waste through donating or selling left excess food.</p>
            
            {/* Skills Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <i className="fab fa-rails text-red-600 text-2xl" title="Ruby on Rails"></i>
              <i className="fas fa-network-wired text-blue-500 text-2xl" title="HTTP"></i>
              <i className="fab fa-html5 text-orange-600 text-2xl" title="HTML5"></i>
              <i className="fab fa-css3-alt text-blue-600 text-2xl" title="CSS3"></i>
              <i className="fab fa-js text-yellow-400 text-2xl" title="JavaScript"></i>
            </div>
          </div>
        </div>

        {/* Project Two */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src="https://via.placeholder.com/150" // Replace with your project image URL
            alt="Project Two"
            className="w-full md:w-48 h-32 object-cover rounded mb-4 md:mb-0 md:mr-4"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-white">Project Two</h3>
            <p className="text-gray-400 mb-4">A brief description of your project.</p>
            
            {/* Skills Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <i className="fab fa-react text-cyan-400 text-2xl" title="React"></i>
              <i className="fab fa-node text-green-500 text-2xl" title="Node.js"></i>
              <i className="fab fa-docker text-blue-400 text-2xl" title="Docker"></i>
              <i className="fas fa-database text-purple-600 text-2xl" title="Database"></i>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;