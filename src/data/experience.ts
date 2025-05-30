export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Bharat Electronics Ltd, Ministry of Defence",
    role: "Internship Trainee",
    duration: "May 2024 – June 2024",
    description: "Engineered algorithms and developed systems focused on decoding ASTERIX radar data to improve accuracy and predict aircraft trajectories.",
    achievements: [
      "Engineered algorithms to decode complex ASTERIX data sequences with a focus on improving data accuracy.",
      "Developed a Python-based system for decoding radar data packets, focusing on CAT-48 of the ASTERIX protocol.",
      "Implemented a linear regression model to predict aircraft coordinates based on historical data.",
      "Collaborated with a cross-functional team to improve decoding techniques.",
      "Visualized aircraft trajectories using scatter plots to illustrate predicted movement patterns.",
      "Participated in daily stand-ups and contributed to sprint planning sessions in an Agile environment.",
      "Built unit tests to validate decoding functions and ensure long-term maintainability."
    ],
    skills: ["Python", "Data Analysis", "Networking","ASTERIX", "Agile", "Unit Testing"],
    logo: "/BEL.png"
  },
  {
    id: 2,
    company: "Technology & Gaming Community (TAG), VIT Vellore",
    role: "Core Member",
    duration: "Ongoing",
    description: "Maintained and enhanced the community website and collaborated on integrating event features to improve user engagement.",
    achievements: [
      "Maintained and updated the official TAG website to ensure smooth user experience and timely content updates.",
      "Assisted in implementing new features and resolving bugs to enhance website functionality.",
      "Coordinated with the events team to integrate event schedules and results on the site, improving community engagement.",
      "Collaborated with a team of developers to brainstorm and implement new features for the website.",
      "Organized technical workshops and hackathons within the community, contributing to member skill development and active participation."
    ],
    skills: ["Web Maintenance", "Bug Fixing", "Feature Implementation", "Team Collaboration"],
    logo: "/TAG.png"
  }
];
