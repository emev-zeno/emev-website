
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tighter text-gray-900">
          EMEV
        </div>
        {/* Contact button removed from top right */}
      </div>
    </nav>
  );
};

export default Navbar;
