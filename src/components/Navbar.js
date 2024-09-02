import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <div className="text-2xl font-bold">Afolabi Afolayan</div>
      <div className="space-x-4">
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;