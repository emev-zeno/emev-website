
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group border border-gray-100 rounded-3xl p-8 hover:border-gray-900 transition-all bg-white flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">{project.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow font-light">
        {project.description}
      </p>
      <div className="pt-6 border-t border-gray-50">
        <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-300 mb-3">Impact</div>
        <p className="text-sm font-medium text-gray-800 leading-snug">
          {project.outcome}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
