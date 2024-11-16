import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript,  SiTailwindcss, SiTypescript, SiReact, SiNodedotjs, SiExpress } from "react-icons/si";

const Skills = () => {
  const [skills] = useState([
    { name: "Html", icon: SiHtml5, color: "text-orange-700" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-orange-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  ]);

  return (
    <section id="skills" className="relative py-20 xl:px-60  text-white overflow-hidden h-[80vh] w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-7xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-6 bg-purple-800/10 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative z-10">
        <skill.icon className={`text-6xl ${skill.color} mb-4`} />
        <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300" />
    </motion.div>
  );
};



export default Skills;
