
import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const fonts = [
  'Georgia, serif',
  'Monaco, monospace',
  'Impact, sans-serif',
  'Palatino, serif',
  'Courier New, monospace',
  'Arial Black, sans-serif',
  'Times New Roman, serif',
  'Verdana, sans-serif',
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentFont, setCurrentFont] = useState('inherit');
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = window.setInterval(() => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        setCurrentFont(randomFont);
      }, 200);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCurrentFont('inherit');
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  return (
    <section className="pt-40 pb-24 px-6">
      <style>{`
        @keyframes textGlitch {
          0% { transform: translate(0); filter: blur(0); }
          20% { transform: translate(-2px, 1px); filter: blur(0.5px); }
          40% { transform: translate(2px, -1px); filter: blur(0); }
          60% { transform: translate(-1px, -1px); filter: blur(0.5px); }
          80% { transform: translate(1px, 1px); filter: blur(0); }
          100% { transform: translate(0); filter: blur(0); }
        }
        @keyframes letterSpacing {
          0% { letter-spacing: -0.02em; }
          50% { letter-spacing: 0.05em; }
          100% { letter-spacing: -0.02em; }
        }
        .animate-glitch:hover {
          animation: textGlitch 0.3s ease-in-out infinite, letterSpacing 0.5s ease-in-out infinite;
        }
        .animate-glitch {
          display: inline-block;
          transition: all 0.2s ease;
          cursor: default;
        }
        .animate-glitch:hover {
          text-shadow: 
            2px 0 #3b82f6,
            -2px 0 #ef4444;
        }
        .animate-font {
          cursor: default;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.2]">
            Reduce <span className="animate-glitch">operational friction</span>.
          </h1>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-gray-400 leading-[1.2] mt-2">
            Unlock <span 
              className="animate-font"
              style={{ fontFamily: currentFont }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >intelligent efficiency</span>.
          </h1>
          
          <div className="mt-10 mb-12">
            <button 
              onClick={onContactClick}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-all shadow-sm"
            >
              Start a Conversation
            </button>
          </div>

          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            EMEV helps organizations identify hidden inefficiencies and implement practical AI solutions that drive measurable operational impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
