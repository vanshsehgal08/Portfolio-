import React from 'react';
import { motion } from 'framer-motion';
import { Download, Check, GraduationCap, Building2, Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const AboutSection: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institute: 'Vellore Institute of Technology, Vellore',
      year: '2022-26',
      score: '9.05/10 CGPA'
    },
    {
      degree: '12th C.B.S.E',
      institute: 'Ryan International School, Ghaziabad',
      year: '2021',
      score: '91%'
    },
    {
      degree: '10th C.B.S.E',
      institute: 'Ryan International School, Ghaziabad',
      year: '2019',
      score: '96%'
    }
  ];

  const highlights = [
    'Full-Stack Development',
    'Data Structures & Algorithms',
    'Cloud Technologies (AWS)',
    'Problem Solving Expert'
  ];

  return (
    <div className="container-custom py-20">
      <SectionHeading 
        title="About Me" 
        subtitle="Computer Science student passionate about building innovative solutions"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div >
            <h2>Summary</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-dark-600 dark:text-gray-300 leading-relaxed">
              Results-driven Computer Science student with a strong foundation in Java, Data Structures & Algorithms (DSA), and OOPs. Achieved a peak rating of 1722 on LeetCode, ranking among the top 12% globally.
            </p>
            
            <p className="text-dark-600 dark:text-gray-300 leading-relaxed">
              Passionate about full-stack development, with hands-on experience in React.js, Node.js, TypeScript, and RESTful APIs. Skilled in working with databases like MongoDB and MySQL, and proficient in tools such as Git, GitHub, and Postman. Experienced in building AI-integrated applications, with working knowledge of LLMs like Gemini and hardware platforms like Raspberry Pi and Groq. Proven ability to thrive in hackathons and coding competitions, demonstrating strong problem-solving, adaptability, and teamwork.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 py-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center">
                <Check size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-dark-700 dark:text-gray-200">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-4">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap size={24} className="text-primary-600 dark:text-primary-400 mr-2" />
              <h3 className="text-xl font-bold text-dark-800 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary-500 pl-4 py-2">
                  <h4 className="font-semibold text-dark-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-dark-600 dark:text-gray-300">{edu.institute}</p>
                  <div className="flex justify-between text-sm text-dark-500 dark:text-gray-400 mt-1">
                    <span>{edu.year}</span>
                    <span className="font-medium text-primary-600 dark:text-primary-400">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Trophy size={24} className="text-primary-600 dark:text-primary-400 mr-2" />
              <h3 className="text-xl font-bold text-dark-800 dark:text-white">Achievements</h3>
            </div>
            <ul className="space-y-2 text-dark-600 dark:text-gray-300">
              <li className="flex items-start">
                <Check size={18} className="text-primary-600 dark:text-primary-400 mr-2 mt-1" />
                <span>Top 5 in Mozilla Firefox Revere Coding, Gravitas Fest</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-primary-600 dark:text-primary-400 mr-2 mt-1" />
                <span>Top 10 in IEEE Computer Society VIT Vellore HackBattle</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-primary-600 dark:text-primary-400 mr-2 mt-1" />
                <span>Event Host at Technology and Gaming (TAG) section</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;