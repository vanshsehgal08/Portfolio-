import {
  Layout, Workflow, PaintBucket, Palette, Server, Database, Cable, HardDrive, TableProperties, Layers, CloudCog, Flame, Github, GitBranch, MonitorSmartphone, Send, Figma, Trello, Cpu, Network, FolderTree, Lock, LineChart, Box, Settings, Brain, Users, Puzzle, Trophy, MessageSquare, Timer, Lightbulb
} from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import { SiAwsamplify } from 'react-icons/si';

import { SiC, SiCplusplus, SiJavascript, SiPython, SiTypescript } from 'react-icons/si';

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'backend' | 'frontend' | 'database' | 'tools' | 'core_cs' | 'soft_skills';
  icon: React.ElementType;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", level: 5, category: "programming", icon: FaJava },
  { name: "Python", level: 5, category: "programming", icon: SiPython },
  { name: "C", level: 4, category: "programming", icon: SiC },
  { name: "C++", level: 4, category: "programming", icon: SiCplusplus },
  { name: "JavaScript", level: 5, category: "programming", icon: SiJavascript },
  { name: "TypeScript", level: 4, category: "programming", icon: SiTypescript },
  
  // Frontend
  { name: "React.js", level: 5, category: "frontend", icon: Layout },
  { name: "Next.js", level: 4, category: "frontend", icon: Workflow },
  { name: "Bootstrap", level: 4, category: "frontend", icon: PaintBucket },
  { name: "Tailwind", level: 4, category: "frontend", icon: Palette },

  // Backend
  { name: "Node.js", level: 4, category: "backend", icon: Server },
  { name: "Express.js", level: 4, category: "backend", icon: Server },
  { name: "REST APIs", level: 5, category: "backend", icon: Cable },

  // Database
  { name: "MongoDB", level: 4, category: "database", icon: Database },
  { name: "MySQL", level: 4, category: "database", icon: TableProperties },
  { name: "PostgreSQL", level: 3, category: "database", icon: Database },
  { name: "Supabase", level: 4, category: "database", icon: Layers },
  { name: "Firebase", level: 4, category: "database", icon: Flame },
  { name: "Redis", level: 3, category: "database", icon: HardDrive },
  { name: "DynamoDB", level: 3, category: "database", icon: CloudCog },

  // Tools & Platforms
  { name: "Git", level: 5, category: "tools", icon: GitBranch },
  { name: "GitHub", level: 5, category: "tools", icon: Github },
  { name: "VS Code", level: 5, category: "tools", icon: MonitorSmartphone },
  { name: "Postman", level: 4, category: "tools", icon: Send },
  { name: "Figma", level: 4, category: "tools", icon: Figma },
  { name: "Jira", level: 3, category: "tools", icon: Trello },
  { name: "AWS", level: 3, category: "tools", icon: SiAwsamplify },

  // Core CS Subjects
  { name: "DSA", level: 5, category: "core_cs", icon: FolderTree },
  { name: "OS", level: 4, category: "core_cs", icon: Settings },
  { name: "CN", level: 4, category: "core_cs", icon: Network },
  { name: "OOPs", level: 5, category: "core_cs", icon: Box },
  { name: "DBMS", level: 4, category: "core_cs", icon: Database },
  { name: "Linux Environment", level: 4, category: "core_cs", icon: SiC },
  { name: "Computer Architecture", level: 3, category: "core_cs", icon: Cpu },
  { name: "Software Engineering", level: 4, category: "core_cs", icon: LineChart },

  // Soft Skills
  { name: "Problem Solving", level: 5, category: "soft_skills", icon: Puzzle },
  { name: "Teamwork", level: 5, category: "soft_skills", icon: Users },
  { name: "Adaptability", level: 5, category: "soft_skills", icon: Puzzle },
  { name: "Leadership", level: 4, category: "soft_skills", icon: Trophy },
  { name: "Communication", level: 4, category: "soft_skills", icon: MessageSquare },
  { name: "Agile/Scrum", level: 4, category: "soft_skills", icon: Users },
  { name: "Time Management", level: 5, category: "soft_skills", icon: Timer },
  { name: "Critical Thinking", level: 4, category: "soft_skills", icon: Lightbulb }
];

export const categories = [
  { id: "all", name: "All Skills" },
  { id: "programming", name: "Programming Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Databases" },
  { id: "tools", name: "Tools & Platforms" },
  { id: "core_cs", name: "Core CS Subjects" },
  { id: "soft_skills", name: "Soft Skills" }
];