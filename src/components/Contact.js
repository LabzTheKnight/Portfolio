import React from 'react';

function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-900 text-center relative overflow-hidden">
    
     {/* Background Effect */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111,#333)] opacity-30 z-0"></div>

      <h2 className="relative z-10 text-2xl font-semibold text-center mb-10 text-white uppercase tracking-widest leading-tight">Contact</h2>
      <p className="text-gray-400 mb-4">Feel free to reach out to me at:</p>
      <p className="text-white">aaafolayan@gmail.com</p>
    </section>
  );
}

export default Contact;