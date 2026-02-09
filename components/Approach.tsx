
import React from 'react';

const STEPS = [
  {
    title: 'Diagnose',
    desc: 'Identifying systemic bottlenecks through rigorous operational audits.'
  },
  {
    title: 'Design',
    desc: 'Architecting AI solutions that integrate into existing workflows.'
  },
  {
    title: 'Implement',
    desc: 'Deployment and iteration of tools for measurable performance gains.'
  }
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-gray-400">Operational Strategy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <div className="text-6xl font-extralight text-gray-100">0{index + 1}</div>
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
