export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CogniVue",
    description: "Real-time, voice-based AI mock interviews using ElevenLabs for dynamic conversation flow. Features interactive salary negotiation simulations with instant AI feedback.",
    image: "/Cognivue.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Claude API"],
    githubLink: "",
    demoLink: "https://www.cognivue.software",
    featured: true
  },
  {
    id: 2,
    title: "LT-Companion",
    description: "Chrome extension enhancing LeetCode experience with AI-powered features like dynamic hints, code analysis, test case generation, and a modern floating UI.",
    image: "/LT-Companion.jpg",
    tags: ["Chrome Extension", "Google Gemini", "JavaScript", "AI Integration"],
    githubLink: "https://github.com/vanshsehgal08/LT-Companion",
    featured: true
  },
  {
    id: 3,
    title: "CodeInsight",
    description: "Python software that analyzes repositories and generates visual dependency graphs between functions and folders for better code understanding.",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
    tags: ["Python", "Code Analysis", "Dependency Graph", "Software Visualization"],
    githubLink: "https://github.com/vanshsehgal08/CodeInsight",
    featured: true
  },
  {
    id: 4,
    title: "NeuraLens",
    description: "Smart glasses-based personal AI assistant using Raspberry Pi and Gemini 1.5 Flash. Features real-time vision, voice, and code assistance through multimodal LLMs.",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg",
    tags: ["Raspberry Pi", "Google Gemini", "Electron", "Vertex AI"],
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 5,
    title: "Buildify",
    description: "Website builder app with in-browser development environment using WebContainers. Features dynamic UI and robust backend processing.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    tags: ["React", "Express", "Node.js", "TypeScript", "WebContainers"],
    githubLink: "https://github.com/vanshsehgal08/Buildify",
    demoLink: "https://buildify-sand.vercel.app/",
    featured: true
  },
  {
    id: 6,
    title: "Medicare",
    description: "AI-powered mental health support platform with chatbot integration and features for connecting users with certified psychologists.",
    image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/vanshsehgal08/Mini-Project",
    featured: true
  },
  {
    id: 7,
    title: "GreenQuest",
    description: "An environmental awareness platform featuring AI chatbot interaction, personalized video learning, carbon footprint tracking via CO₂ Blueprint Extension, adaptive quizzes, and a curated news feed.",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
    tags: ["AI Chatbot", "Personalized Learning", "Carbon Footprint", "Quizzes", "User Accounts"],
    githubLink: "https://github.com/vanshsehgal08/GreenQuest",
    demoLink: "https://green-quest-zeta.vercel.app/",
    featured: false
  },
  {
    id: 8,
    title: "Metro Route Planner",
    description: "Web application built with Python and Streamlit to find the shortest route path across Delhi and Bangalore metro systems using advanced data structures and algorithms.",
    image: "https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg",
    tags: ["Python", "Streamlit", "DSA", "Route Planning"],
    githubLink: "https://github.com/vanshsehgal08/Metro-Project",
    featured: false
  },
  {
    id: 9,
    title: "Brain Tumor Detection",
    description: "Medical imaging project using Python and machine learning to detect brain tumors accurately, assisting early diagnosis and treatment planning.",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
    tags: ["Python", "Machine Learning", "Medical Imaging", "AI"],
    githubLink: "https://github.com/vanshsehgal08/Brain-tumor",
    featured: false
  }
];