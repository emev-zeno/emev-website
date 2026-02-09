
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Reduce operational friction. <br />
            <span className="text-gray-400">Unlock intelligent efficiency.</span>
          </h1>
          
          <div className="mt-10 mb-12">
            <button 
              onClick={onContactClick}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-all shadow-sm"
            >
              Start a Conversation
            </button>
          </div>

          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            EMEV helps organizations identify hidden inefficiencies and implement practical AI solutions that drive measurable operational impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
