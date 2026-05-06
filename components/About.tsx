
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative group text-center flex flex-col items-center max-w-5xl w-full">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-gray-600 mb-10">About EMEV</h2>
            <p className="text-2xl md:text-3xl font-medium leading-[1.6] tracking-tight text-gray-100">
              EMEV brings together deep operational perspective and advanced AI expertise to modernize how work gets done.
            </p>
          </div>
          {/* Subtle decorative element */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
