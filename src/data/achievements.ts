export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
  type: 'certification' | 'award' | 'competition';
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Java OCP Certification",
    issuer: "Oracle",
    date: "2025",
    description: "Oracle Certified Professional Java SE Developer certification",
    type: "certification"
  },
  {
    id: 2,
    title: "HackerRank Certification",
    issuer: "HackerRank",
    date: "2023",
    description: "Problem Solving (Advanced) Certificate",
    type: "certification"
  },
  {
    id: 3,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    description: "Azure cloud services and fundamental concepts certification",
    type: "certification"
  },
  {
    id: 4,
    title: "LeetCode Achievement",
    issuer: "LeetCode",
    date: "2025",
    description: "Solved over 500+ coding problems on LeetCode platform",
    type: "competition"
  },
  {
    id: 5,
    title: "HackBattle Top 10",
    issuer: "IEEE Computer Society VIT Vellore",
    date: "2023",
    description: "Secured top 10 position in the HackBattle competition at Gravitas Fest",
    type: "competition"
  }
];

export const achievementTypes = [
  { id: "all", name: "All" },
  { id: "certification", name: "Certifications" },
  { id: "competition", name: "Competitions" }
];