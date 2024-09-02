import React from 'react';

function Experience() {
  return (
    <section id="experience" className="p-8 bg-gray-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111,#333)] opacity-30 z-0"></div>


      <div className="relative z-10 flex flex-col space-y-12">

        {/* Experience Section */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase tracking-widest">
            Experience
          </h2>
          
          {/* Experience Item */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 px-4 py-6 bg-gray-800 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center shadow-lg w-16 h-16">
              <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
            </div>
            <div className="text-white">
              <h4 className="text-lg font-semibold mb-2">Assistant Teacher, Le Wagon Institute</h4>
              <p className="text-sm text-gray-300 mb-1">
                09/2022 - 03/2023 | Cologne, Germany
              </p>
              <p className="text-gray-400">
                Assisted new students with daily challenges and answered technical questions regarding programming.
              </p>
            </div>
          </div>

          {/* Experience Item */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 px-4 py-6 bg-gray-800 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center shadow-lg w-16 h-16">
              <i className="fa-solid fa-list-check text-white text-2xl"></i>
            </div>
            <div className="text-white">
              <h4 className="text-lg font-semibold mb-2">Assistant Manager, Einstein Express</h4>
              <p className="text-sm text-gray-300 mb-1">
                2019 - 2022 | Kamp-Lintfort, Germany
              </p>
              <p className="text-gray-400">
                Managed company events, stock inventory, sales, client outreach, and staff recruitment.
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-b border-gray-600"></div>
          </div>
        
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase tracking-widest">
            Education
          </h2>
          
          {/* Education Item */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 px-4 py-6 bg-gray-800 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center shadow-lg w-16 h-16">
              <i className="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
            <div className="text-white">
              <h4 className="text-lg font-semibold mb-2">Communication and Information Engineering, Hochschule Rhein-Waal</h4>
              <p className="text-sm text-gray-300">
                10/2019 – present | Kamp-Lintfort, Germany
              </p>
            </div>
          </div>

          {/* Education Item */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 px-4 py-6 bg-gray-800 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center shadow-lg w-16 h-16">
              <i className="fas fa-laptop-code text-white text-2xl"></i>
            </div>
            <div className="text-white">
              <h4 className="text-lg font-semibold mb-2">Full Stack Web Development, Le Wagon Institute</h4>
              <p className="text-sm text-gray-300">
                07/2022 – 09/2022 | Cologne, Germany
                <br /> 9-week intensive course on full-stack web development
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;