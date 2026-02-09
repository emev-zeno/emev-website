
import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const ProjectGrid: React.FC = () => {
  const iosProjects = PROJECTS.filter(p => p.category === ProjectCategory.IOS);
  const webProjects = PROJECTS.filter(p => p.category === ProjectCategory.WEB);
  const researchProjects = PROJECTS.filter(p => p.category === ProjectCategory.RESEARCH);

  // Common button component for consistency
  const ExploreButton = ({ href }: { href: string }) => (
    <div className="pt-4">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white rounded-full text-sm font-semibold shadow-md transition-all hover:bg-black group"
      >
        <span>Explore</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );

  return (
    <section id="work" className="py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <p className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">Outcome-focused execution.</p>
        </div>

        {/* Project Sections */}
        <div className="space-y-48">
          
          {/* Softday - Phone Mockup */}
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                {iosProjects[0].title} - {iosProjects[0].description}
              </h3>
              <div className="space-y-6">
                <div className="pt-6 border-t border-gray-100 max-w-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2">Impact</div>
                  <p className="text-gray-600 font-medium italic">"{iosProjects[0].outcome}"</p>
                </div>
                <ExploreButton href="https://apps.apple.com/au/app/softday/id6758242532" />
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="relative aspect-[9/19] w-full max-w-[280px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[10px] border-gray-900 bg-[#0A0A0A] flex flex-col">
                <div className="flex-grow flex flex-col pt-12 px-5 pb-4">
                  <div className="text-white text-xs font-bold mb-6 tracking-tight">softday</div>
                  <div className="bg-[#1C1C1E] rounded-2xl p-3 flex items-center justify-between border border-white/5 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">📅</div>
                      <div>
                        <div className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">today</div>
                        <div className="text-[10px] text-white font-medium">Monday, January 26, 2026</div>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs">▼</div>
                  </div>
                  <div className="w-16 h-1 bg-green-500/80 rounded-full mb-6"></div>
                  <div className="space-y-3">
                    <div className="bg-[#121812] border border-green-900/40 rounded-2xl p-4 flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <span className="text-green-500">📉</span>
                        <span className="text-white text-[11px] font-medium tracking-tight">exercise</span>
                      </div>
                      <div className="w-8 h-4 bg-green-500 rounded-full flex items-center px-0.5">
                        <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                      </div>
                    </div>
                    <div className="bg-[#121812] border border-green-900/40 rounded-2xl p-4 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-green-500">🍽️</span>
                        <span className="text-white text-[11px] font-medium tracking-tight">meals</span>
                      </div>
                      <div className="space-y-4 px-1">
                        {['brekkie', 'lunch'].map((meal) => (
                          <div key={meal} className="flex justify-between items-center">
                            <span className="text-gray-500 text-[10px] font-medium">{meal}</span>
                            <div className="w-8 h-4 bg-green-500 rounded-full flex items-center px-0.5">
                              <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-[10px] font-medium">dinner</span>
                          <div className="w-8 h-4 bg-white/10 rounded-full flex items-center px-0.5">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#121812] border border-green-900/40 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-green-500">💧</span>
                        <span className="text-white text-[11px] font-medium tracking-tight">water</span>
                      </div>
                      <div className="w-8 h-4 bg-green-500 rounded-full flex items-center px-0.5">
                        <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-white/5">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-gray-600">🏠</span>
                      <span className="text-[7px] font-bold text-gray-600 uppercase tracking-tighter">home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-green-500">🗓️</span>
                      <span className="text-[7px] font-bold text-green-500 uppercase tracking-tighter">reflection</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-gray-600">⚙️</span>
                      <span className="text-[7px] font-bold text-gray-600 uppercase tracking-tighter">settings</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl"></div>
              </div>
            </div>
          </div>

          {/* ZenoSnap - Phone Mockup */}
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                {iosProjects[1].title} - {iosProjects[1].description}
              </h3>
              <div className="space-y-6">
                <div className="pt-6 border-t border-gray-100 max-w-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2">Impact</div>
                  <p className="text-gray-600 font-medium italic">"{iosProjects[1].outcome}"</p>
                </div>
                <ExploreButton href="https://apps.apple.com/au/app/zeno-snap/id6756941278" />
              </div>
            </div>
            <div className="flex-1 w-full max-w-md flex flex-col items-center">
              <div className="relative aspect-[9/19] w-full max-w-[320px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-gray-900 bg-[#0A0A0A] flex flex-col">
                <div className="flex-grow flex flex-col bg-[#111111] p-5 relative">
                  <div className="absolute top-10 left-6 text-white/40 text-xl font-light cursor-default">✕</div>
                  <div className="mt-16 bg-white rounded-lg p-3 shadow-xl flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4 gap-0.5">
                      <div className="w-8 h-8 rounded-full bg-[#1AC5B2] flex items-center justify-center text-xl text-white font-bold pb-0.5">☺</div>
                      <div className="text-[10px] font-bold text-gray-900 tracking-tighter border-b border-gray-900 leading-none">zeno</div>
                    </div>
                    <div className="w-full aspect-square rounded-sm overflow-hidden bg-black mb-4 relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-[#0F0F0F]"></div>
                      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] rounded-full bg-[#1A1A1A] blur-2xl opacity-80"></div>
                      <div className="absolute w-full h-[6px] bg-[#3B82F6] opacity-90 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 flex items-center">
                        <div className="w-full h-[1px] bg-white/40"></div>
                      </div>
                      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-16 h-1 bg-white/5 blur-md"></div>
                    </div>
                    <div className="w-full px-2 pb-2 text-center">
                      <p className="text-[11px] leading-relaxed text-[#12423D] font-serif italic font-semibold">
                        "The blue stripe may look cool, but I cant see a thing."
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto space-y-3 pb-8">
                    <button className="w-full bg-[#1AC5B2] text-black py-3.5 rounded-2xl text-[12px] font-bold tracking-tight transition-opacity hover:opacity-90">
                      Chaos
                    </button>
                    <button className="w-full bg-[#1C1C1E] text-white py-3.5 rounded-2xl text-[12px] font-bold tracking-tight border border-white/5">
                      Save
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 w-1/3 h-7 left-1/2 -translate-x-1/2 bg-gray-900 rounded-b-3xl z-20"></div>
              </div>
            </div>
          </div>

          {/* Hey Bump - Laptop Mockup */}
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                {webProjects[0].title} - {webProjects[0].description}
              </h3>
              <div className="space-y-6">
                <div className="pt-6 border-t border-gray-100 max-w-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2">Impact</div>
                  <p className="text-gray-600 font-medium italic">"{webProjects[0].outcome}"</p>
                </div>
                <ExploreButton href="https://latte.emev.com.au" />
              </div>
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative w-full">
                <div className="relative rounded-t-3xl border-[10px] border-[#1C1C1C] bg-[#1C1C1C] shadow-2xl overflow-hidden aspect-[16/10] z-10">
                  <div className="h-full w-full bg-[#FFFCF9] flex flex-col font-sans">
                    <div className="h-10 bg-white"></div>
                    <div className="h-20 flex items-center justify-between px-8 bg-white">
                      <div className="flex items-center gap-4">
                         <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF7E8D] to-[#FFB27E] flex items-center justify-center text-white font-bold text-lg shadow-sm">H</div>
                         <div className="font-bold text-gray-900 tracking-tight text-xl">Hey Bump</div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-[#1C2433] text-white px-4 py-2 rounded-full text-[11px] font-bold flex items-center gap-2 uppercase tracking-widest">
                          <span>🤰</span> MOM
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow px-8 pb-8 pt-6 overflow-y-auto space-y-8 bg-white">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="bg-[#EEF6FF] rounded-[2rem] p-8 border border-[#D1E6FF] relative overflow-hidden group min-h-[160px]">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 text-lg">☺</div>
                            <h4 className="text-blue-600 font-bold text-sm tracking-tight">Baby Status</h4>
                          </div>
                          <p className="text-gray-700 text-[13px] leading-relaxed relative z-10 font-medium">
                            My eyebrows and lids are fully present. I'm kicking more forcefully now—karate chops!
                          </p>
                        </div>
                        <div className="bg-[#FFF1F6] rounded-[2rem] p-8 border border-[#FFE0EB] relative overflow-hidden group min-h-[160px]">
                          <div className="flex items-center gap-3 mb-4 text-[#E62E71]">
                            <span className="text-xl">🎉</span>
                            <h4 className="font-bold text-sm tracking-tight">Your Body</h4>
                          </div>
                          <p className="text-gray-700 text-[13px] leading-relaxed relative z-10 font-medium">
                            Stretch marks might appear (it's genetic, don't stress). Keep that skin moisturized for comfort.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-4 w-[110%] -left-[5%] bg-[#333333] rounded-b-2xl shadow-xl z-20">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1A1A1A] rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Kai Care - Laptop Mockup */}
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                {webProjects[1].title} - {webProjects[1].description}
              </h3>
              <div className="space-y-6">
                <div className="pt-6 border-t border-gray-100 max-w-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2">Impact</div>
                  <p className="text-gray-600 font-medium italic">"{webProjects[1].outcome}"</p>
                </div>
                <ExploreButton href="https://kaicare.emev.com.au" />
              </div>
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative w-full">
                <div className="relative rounded-t-3xl border-[10px] border-[#1C1C1C] bg-[#1C1C1C] shadow-2xl overflow-hidden aspect-[16/10] z-10">
                  <div className="h-full w-full bg-[#0D0D0D] flex flex-col p-4 relative">
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                       <div className="flex items-center gap-2 bg-red-600 px-2 py-1 rounded text-[8px] font-bold text-white uppercase tracking-wider animate-pulse">
                         <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Sharing
                       </div>
                    </div>
                    <div className="flex-grow flex gap-4 opacity-30 grayscale blur-[1px]">
                       <div className="w-16 border-r border-white/10 flex flex-col py-4 gap-4">
                          {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/10 mx-auto"></div>)}
                       </div>
                       <div className="flex-grow grid grid-cols-3 gap-4 p-4">
                          {[1,2,3].map(i => <div key={i} className="h-32 bg-white/5 rounded-xl"></div>)}
                       </div>
                    </div>
                    <div className="absolute bottom-10 right-10 w-48 bg-[#1A1A1A] border border-white/10 rounded-3xl p-5 shadow-2xl shadow-black flex flex-col items-center z-30">
                       <div className="relative mb-3">
                          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-light shadow-lg">
                             👤
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center">
                             <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
                          </div>
                       </div>
                       <div className="text-center mb-4">
                          <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-0.5">Kai Assistant</div>
                          <div className="text-[9px] text-gray-500 font-medium">Active Session</div>
                       </div>
                       <div className="w-full flex justify-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">🎤</div>
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">📹</div>
                          <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-[10px] text-red-500">✕</div>
                       </div>
                       <div className="mt-4 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 w-full">
                          <p className="text-[9px] text-blue-400 leading-tight italic font-medium">
                            "Navigating to regional settings. Follow the green highlight."
                          </p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-4 w-[110%] -left-[5%] bg-[#333333] rounded-b-2xl shadow-xl z-20">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1A1A1A] rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;
