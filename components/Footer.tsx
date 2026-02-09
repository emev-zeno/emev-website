
import React from 'react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-50 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 tracking-tight">
            Operational excellence begins with clarity.
          </h2>
          <button 
            onClick={onContactClick}
            className="bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-black transition-all shadow-md"
          >
            Request an Introduction
          </button>
        </div>
        
        <div className="border-t border-gray-200 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-gray-900">EMEV</div>
          <div className="text-sm text-gray-400 font-medium tracking-wide">
            © {new Date().getFullYear()} EMEV. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
