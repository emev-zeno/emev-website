
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Approach from './components/Approach';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero onContactClick={openContact} />
        <ProjectGrid />
        <Approach />
        <About />
      </main>
      <Footer onContactClick={openContact} />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={closeContact} 
      />
    </div>
  );
};

export default App;
