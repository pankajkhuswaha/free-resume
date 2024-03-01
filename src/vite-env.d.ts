/// <reference types="vite/client" />

interface EducationProp {
  degree: string;
  college: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface ExperienceProp {
  company: string;
  jobRole: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ProjectProp {
  title: string;
  link: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  description: string[];
}

interface StrengthProp {
  title: string;
  content: string;
}

interface SkillProp {
  name: string;
  level: string;
  type: string;
}

interface ProjectProp {
  title: string;
  link: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  description: string[];
}

interface InfoProp {
  name: string;
  jobRole: string;
}

interface DetailsProps {
  portfolio: string;
  mobile: string;
  email: string;
  address: string;
  linkedin: string;
}

interface ContactDetailProp {
  [key: string]: {
    label: string;
    link: string;
    icon: JSX.Element;
  };
}

interface TemplateProps {
  id: string;
  component: React.JSX.Element;
}

interface ResumeTemplateProps {
  name: string;
  image: string;
  template: TemplateProps[];
}

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

interface GuideStepProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  buttonText: string;
  color: string;
  gradientClass: string;
}
