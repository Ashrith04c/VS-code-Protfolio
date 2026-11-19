import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscGithubAlt,
  VscFiles,
  VscMail,
  VscSettings,
  VscVscode,
} from 'react-icons/vsc';
import {
 SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiMysql,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiLangchain,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma,
  SiDocker,
  SiRedis,
} from 'react-icons/si';
import { BrainCircuit } from 'lucide-react';

import { Project } from '@/types';

// Everything personal about the portfolio lives here. Edit this file to make
// the template your own; pages and components read from it.

export const profile = {
  name: 'Ajmera Ashrith',
  role: 'Full Stack Developer',
  currentPosition: 'Software Engineer',
  location: ' Hyderabad, India',
  ogImage: '/og-image.png',
  githubUsername: 'Ashrith04c',
  siteUrl: 'https://vs-code-protfolio-git-main-ashriths-projects-d3eb0fcd.vercel.app',
  repository: 'https://github.com/Ashrith04c/vscode-portfolio',
  metaDescription:
    "Ajmera Ashrith is an avid full stack web developer building websites and applications you'd love to use",
  ogDescription:
    "A full-stack developer building websites that you'd like to use.",
  
keywords: [
  'ashrith ajmera',
  'ashrith',
  'ashrith developer',
  'software engineer portfolio',
  'full stack developer',
  'frontend developer',
  'backend developer',
  'javascript developer',
  'typescript developer',
  'react developer',
  'node.js developer',
  'mern stack developer',
  'full stack web development',
  'generative ai developer',
  'agentic ai developer',
  'multi-agent systems',
  'langchain',
  'langgraph',
  'retrieval augmented generation',
  'rag applications',
  'ai application developer',
  'vscode portfolio',
],
  intro:
    'I craft clean, performant, and scalable digital experiences, blending modern full-stack technologies with Generative AI and Agentic AI to build intelligent products that make an impact.',
  bio: [
    "I'm a software engineer passionate about crafting beautiful, performant web experiences. I primarily work with the JavaScript/TypeScript ecosystem and React, building products that people love to use.",
    'While I specialize in frontend development, I enjoy working across the stack with Node.js, MongoDB, and Express to bring full-stack applications to life.I"m also deeply interested in Generative AI, Agentic AI, and multi-agent systems, exploring how intelligent agents can collaborate, reason, and solve real-world problems. My goal is to combine full-stack engineering with Agentic AI to build intelligent, scalable, and meaningful applications.',
  ],
  beyondCode:
    'Beyond coding, I enjoy trekking, playing badminton, travelling, listening to music, and reading books.',
};

export interface Social {
  id: string;
  handle: string;
  href: string;
}

export const socials: Social[] = [
 
  {
    id: 'email',
    handle: 'ashrith.04c@gmail.com',
    href: 'mailto:ashrith.04c@gmail.com',
  },
  {
    id: 'github',
    handle: 'Ashrith04c',
    href: 'https://github.com/Ashrith04c',
  },
  {
    id: 'linkedin',
    handle: 'Ashrith',
    href: 'https://www.linkedin.com/in/ajmera-ashrith-b343662ab/',
  },
  {
    id: 'reddit',
    handle: 'Ashrith',
    href: 'https://www.reddit.com/u/Kindly_Avocado8968/s/FTagHpsbfQ',
  },
  {
    id: 'telegram',
    handle: 'Ashrith',
    href: 'https://t.me/ashrith48',
  },
];

export const getSocial = (id: string) => socials.find(s => s.id === id);

export interface Experience {
  role: string;
  company?: string;
  period: string;
  highlights?: string[];
  description?: string;
}

export const experience: Experience[] = [
 
{
  role: 'Freelance Full-Stack Developer',
  company: 'Independent',
  period: 'Present',
  highlights: [
    'Building end-to-end web solutions for US-based clients, from planning and development to deployment',
    'Developed a professional photography website with a focus on responsive design and seamless user experience',
    'Managing the complete development lifecycle, including frontend, backend integration, and deployment',
    'Collaborating directly with clients to understand requirements and deliver tailored web solutions',
  ],
},

  {
    role: ' FrontEnd Developer Intern',
    period: '3 months',
    description:
      'Building and optimizing responsive web applications using React.js, JavaScript, and modern frontend technologies',
  },
];

// Your skills, shown as installed extensions in the Extensions view. Each one
// gets a detail page at /extensions/<id>.
export interface Extension {
  id: string;
  name: string;
  publisher: string;
  category: string;
  icon: IconType;
  // Brand color for the icon
  color: string;
  // One-liner shown in the extensions list
  description: string;
  // Longer write-up shown on the extension's detail page
  details?: string;
  // Shown where VS Code shows the version, e.g. "4 years"
  experience?: string;
}

export const extensions: Extension[] = [
  {
    id: 'cpp',
    name: 'C++',
    publisher: 'ISO',
    category: 'Languages',
    icon: SiCplusplus,
    color: '#00599c',
    description: 'My go-to language for problem-solving, DSA, and competitive programming.',
     experience: '4 years',
  },
  {
    id: 'c',
    name: 'C',
    publisher: 'ISO',
    category: 'Languages',
    icon: SiC,
    color: '#a8b9cc',
    description: 'Building a strong foundation in programming and memory management.',
     experience: '4 years',
  },
  {
    id: 'python',
    name: 'Python',
    publisher: 'Python Software Foundation',
    category: 'Languages',
    icon: SiPython,
    color: '#3776ab',
    description: 'Writing efficient scripts, working with data, and exploring AI applications.',
     experience: '2 years',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    publisher: 'ECMA International',
    category: 'Languages',
    icon: SiJavascript,
    color: '#f7df1e',
    description: 'Building interactive web applications and dynamic user experiences.',
     experience: '3 years',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    publisher: 'Microsoft',
    category: 'Languages',
    icon: SiTypescript,
    color: '#3178c6',
    description: 'Writing maintainable, scalable, and type-safe application code.',
     experience: '1 years',
  },
  {
    id: 'sql',
    name: 'SQL',
    publisher: 'ISO',
    category: 'Languages',
    icon: SiMysql,
    color: '#4479a1',
    description: 'Writing queries, managing relational data, and working with databases.',
     experience: '2 years',
  },

  // Frontend
  {
    id: 'html-css',
    name: 'HTML & CSS',
    publisher: 'W3C',
    category: 'Frontend',
    icon: SiHtml5,
    color: '#e34f26',
    description: 'Crafting semantic, accessible, and responsive web interfaces.',
     experience: '4 years',
  },
  {
    id: 'react',
    name: 'React.js',
    publisher: 'Meta',
    category: 'Frontend',
    icon: SiReact,
    color: '#61dafb',
    description: 'Building component-driven interfaces and interactive web applications.',
     experience: '3 years',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    publisher: 'Vercel',
    category: 'Frontend',
    icon: SiNextdotjs,
    color: '#ffffff',
    description: 'Developing modern React applications with full-stack capabilities.',
     experience: '0.5 years',
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    publisher: 'Tailwind Labs',
    category: 'Frontend',
    icon: SiTailwindcss,
    color: '#06b6d4',
    description: 'Creating responsive interfaces with utility-first styling.',
     experience: '2 years',
  },

  // Backend & APIs
  {
    id: 'nodejs',
    name: 'Node.js',
    publisher: 'OpenJS Foundation',
    category: 'Backend',
    icon: SiNodedotjs,
    color: '#5fa04e',
    description: 'Building scalable server-side applications and backend services.',
     experience: '3 years',
  },
  {
    id: 'express',
    name: 'Express.js',
    publisher: 'OpenJS Foundation',
    category: 'Backend',
    icon: SiExpress,
    color: '#ffffff',
    description: 'Developing RESTful APIs and lightweight backend architectures.',
     experience: '2 years',
  },
  {
    id: 'socketio',
    name: 'Socket.IO',
    publisher: 'Socket.IO',
    category: 'Backend',
    icon: SiSocketdotio,
    color: '#ffffff',
    description: 'Implementing real-time communication and collaborative features.',
     experience: '1 years',
  },
  {
    id: 'rest-api',
    name: 'REST APIs',
    publisher: 'REST',
    category: 'Backend',
    icon: SiPostman,
    color: '#ff6c37',
    description: 'Designing and integrating RESTful services for full-stack applications.',
     experience: '2 years',
  },

  // Databases
  {
    id: 'mongodb',
    name: 'MongoDB',
    publisher: 'MongoDB Inc.',
    category: 'Databases',
    icon: SiMongodb,
    color: '#47a248',
    description: 'Managing flexible document-based data for full-stack applications.',
    experience: '2 years',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    publisher: 'Oracle',
    category: 'Databases',
    icon: SiMysql,
    color: '#4479a1',
    description: 'Working with relational databases, queries, and data management.',
    experience: '2 years',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    publisher: 'PostgreSQL Global Development Group',
    category: 'Databases',
    icon: SiPostgresql,
    color: '#4169e1',
    description: 'Working with relational data and structured database systems.',
    experience: '1 years',
  },
  {
  id: 'redis',
  name: 'Redis',
  publisher: 'Redis Ltd.',
  category: 'Databases',
  icon: SiRedis,
  color: '#dc382d',
  description: 'Using in-memory data storage for caching, session management, and high-performance data access.',
},

  // AI & GenAI

  {
    id: 'langchain',
    name: 'LangChain',
    publisher: 'LangChain',
    category: 'AI & GenAI',
    icon: SiLangchain,
    color: '#1c3c3c',
    description: 'Building LLM-powered applications with tools, chains, and integrations.',
    experience: '1 years',
  },
  {
  id: 'langgraph',
  name: 'LangGraph',
  publisher: 'LangChain',
  category: 'AI & GenAI',
  icon: BrainCircuit,
  color: '#1c3c3c',
  description: 'Building stateful, multi-agent AI workflows with structured orchestration and control.',
},
{
  id: 'rag',
  name: 'RAG',
  publisher: 'AI',
  category: 'AI & GenAI',
  icon: BrainCircuit,
  color: '#10a37f',
  description: 'Building context-aware AI applications by combining LLMs with external knowledge retrieval.',
},
{
  id: 'agentic-ai',
  name: 'Agentic AI',
  publisher: 'AI',
  category: 'AI & GenAI',
  icon: BrainCircuit,
  color: '#10a37f',
  description: 'Exploring autonomous agents, tool calling, and multi-agent systems.',
  experience: '1 years',
},
{
  id: 'llm',
  name: 'LLMs',
  publisher: 'AI',
  category: 'AI & GenAI',
  icon: BrainCircuit,
  color: '#10a37f',
  description: 'Working with large language models to build intelligent applications.',
  experience: '1 years',
},
  // Tools & DevOps
  {
    id: 'git',
    name: 'Git',
    publisher: 'Software Freedom Conservancy',
    category: 'Tools',
    icon: SiGit,
    color: '#f05032',
    description: 'Managing version control, branching, and collaborative development.',
    experience: '2 years',
  },
  {
    id: 'github',
    name: 'GitHub',
    publisher: 'Microsoft',
    category: 'Tools',
    icon: SiGithub,
    color: '#ffffff',
    description: 'Collaborating on projects and managing code repositories.',
    experience: '2 years',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    publisher: 'Microsoft',
    category: 'Tools',
    icon: VscVscode,
    color: '#0098ff',
    description: 'My primary development environment for building and debugging applications.',
    experience: '3 years',
  },
  {
  id: 'docker',
  name: 'Docker',
  publisher: 'Docker Inc.',
  category: 'Tools & DevOps',
  icon: SiDocker,
  color: '#2496ed',
  description: 'Containerizing applications to ensure consistent development and deployment environments.',
  experience: '0.5 years',
},

];

export const getExtension = (id: string) => extensions.find(e => e.id === id);

// Extension names grouped by category, in the order they're listed above
export const skills = extensions.reduce<Record<string, string[]>>(
  (groups, { category, name }) => {
    (groups[category] ??= []).push(name);
    return groups;
  },
  {}
);

export const competitiveProgramming = [

  {
    name: 'LeetCode',
    rating: '1891',
    rank: 'Knight',
    href: 'https://leetcode.com/u/Ashrith04c/',
  },
  {
    name: 'Codeforces',
    rating: '1311',
    rank: 'Pupil',
    href: 'https://codeforces.com/profile/Ashrith.04',
  },
  {
    name: 'HackerRank',
    rating: '5 Star',
    rank: 'Problem Solving',
    href: 'https://www.hackerrank.com/profile/ashrith_04c',
  },
  {
    name: 'CodeChef',
    rating: '1783',
    rank: '4 Star',
    href: 'https://www.codechef.com/users/ashrith04c',
  },
];

export const projects: Project[] = [

  {
    title: 'AI-SWE-AGENT',
    description:
      'An AI-powered software engineering agent designed to understand coding tasks, analyze codebases, and assist with automated development workflows.',
    logo: '/logos/ai agent.png',
    link: 'https://github.com/Ashrith04c/AI-SWE-AGENT',
    slug: 'ai-swe-agent',
  },
  {
    title: 'ChatAPP',
    description:
      'A real-time messaging application enabling seamless communication through interactive chat features.',
    logo: '/logos/logo.png',
    link: 'https://github.com/Ashrith04c/ChatAPP',
    slug: 'chatapp',
  },
  {
    title: 'DOCMIND',
    description:
      'An intelligent document-focused application designed to simplify document understanding and information retrieval.',
    logo: '/logos/ai agent.png',
    link: 'https://github.com/Ashrith04c/DOCMIND',
    slug: 'docmind',
  },
  {
    title: 'Chatbot AI Agent',
    description:
      'An AI-powered chatbot agent designed to interact with users, understand queries, and provide intelligent responses.',
    logo: '/logos/ai agent.png',
    link: 'https://github.com/Ashrith04c/chatbot-ai-agent',
    slug: 'chatbot-ai-agent',
  },

];

export interface Route {
  path: string;
  label: string;
  // Activity bar and command palette icon
  icon: IconType;
  // Where the route's icon sits in the activity bar, if at all
  activityBar?: 'top' | 'bottom';
  // Second key of the "G <key>" navigation chord
  shortcut?: string;
  // Routes with a file appear in the explorer and tabs bar
  file?: {
    name: string;
    icon: string;
  };
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    icon: VscFiles,
    activityBar: 'top',
    shortcut: 'h',
    file: { name: 'home.tsx', icon: '/logos/react_icon.svg' },
  },
  {
    path: '/about',
    label: 'About',
    icon: VscAccount,
    activityBar: 'bottom',
    shortcut: 'a',
    file: { name: 'about.html', icon: '/logos/html_icon.svg' },
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: VscMail,
    activityBar: 'top',
    shortcut: 'c',
    file: { name: 'contact.css', icon: '/logos/css_icon.svg' },
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: VscCode,
    activityBar: 'top',
    shortcut: 'p',
    file: { name: 'projects.js', icon: '/logos/js_icon.svg' },
  },
  {
    path: '/articles',
    label: 'Articles',
    icon: VscEdit,
    activityBar: 'top',
    shortcut: 'r',
    file: { name: 'journey.json', icon: '/logos/json_icon.svg' },
  },
  {
    path: '/github',
    label: 'GitHub',
    icon: VscGithubAlt,
    activityBar: 'top',
    shortcut: 'g',
    file: { name: 'github.md', icon: '/logos/markdown_icon.svg' },
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: VscSettings,
    activityBar: 'bottom',
    shortcut: 's',
  },
];

export const fileRoutes = routes.filter(
  (route): route is Route & { file: NonNullable<Route['file']> } =>
    route.file !== undefined
);