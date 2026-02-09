
export enum ProjectCategory {
  IOS = 'ios app',
  WEB = 'web app',
  RESEARCH = 'research'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  outcome: string;
}

export interface Step {
  title: string;
  description: string;
}
