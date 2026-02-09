
import { Project, ProjectCategory, Step } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Softday',
    description: 'A personal journal for intentional days.',
    category: ProjectCategory.IOS,
    outcome: 'Increased daily focused-work metrics by 40% while reducing cognitive fatigue.'
  },
  {
    id: '2',
    title: 'ZenoSnap',
    description: 'An AI tool for generating thoughtful photo captions.',
    category: ProjectCategory.IOS,
    outcome: 'Lowered cognitive load during photo sharing by providing context-aware suggestions.'
  },
  {
    id: '3',
    title: 'Hey Bump',
    description: 'Partner connection platform for the journey into parenthood.',
    category: ProjectCategory.WEB,
    outcome: 'Successfully supporting active health journeys with high engagement.'
  },
  {
    id: '4',
    title: 'Kai Care',
    description: 'Augmented workflows for high-volume customer operations.',
    category: ProjectCategory.WEB,
    outcome: 'Achieved 50% reduction in response time and 70% lower operational load.'
  },
  {
    id: '5',
    title: 'Long-term Strategic Research',
    description: 'Future-proof, secure, and private infrastructure models.',
    category: ProjectCategory.RESEARCH,
    outcome: 'Defining the roadmap for future-proof, secure, and private AI infrastructure.'
  }
];

export const STEPS: Step[] = [
  {
    title: 'Diagnose',
    description: 'Identifying systemic bottlenecks through rigorous operational audits.'
  },
  {
    title: 'Design',
    description: 'Architecting AI solutions that integrate into existing workflows.'
  },
  {
    title: 'Implement',
    description: 'Deployment and iteration of tools for measurable performance gains.'
  }
];
