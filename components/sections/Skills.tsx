"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Cpu, Terminal, Database, Rocket } from "lucide-react"; 
import { Caveat } from "next/font/google";

// Big, artistic font for the heading
const caveatFont = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

// Gamified Skill Data
const skillData = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: <Cpu className="h-5 w-5 md:h-6 md:w-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Google Gemini API & OpenAI", level: 95 },
      { name: "RAG & LangChain", level: 90 },
      { name: "XGBoost & NLP", level: 85 },
      { name: "MLOps & Chatbot Dev", level: 80 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: <Terminal className="h-5 w-5 md:h-6 md:w-6" />,
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "Next.js 14 & React.js", level: 95 },
      { name: "TypeScript & JavaScript", level: 90 },
      { name: "Tailwind CSS & Framer", level: 95 },
      { name: "Figma (UI/UX) & Streamlit", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Node.js & Express.js", level: 90 },
      { name: "Python (FastAPI, Django)", level: 90 },
      { name: "PostgreSQL & Supabase", level: 95 },
      { name: "MySQL & WebSockets", level: 85 },
    ],
  },
  {
    id: "languages_devops",
    title: "Core & DevOps",
    icon: <Rocket className="h-5 w-5 md:h-6 md:w-6" />,
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "Python, Java, C++, SQL", level: 90 },
      { name: "Docker & Git/GitHub", level: 85 },
      { name: "Vercel, cPanel, Postman", level: 90 },
      { name: "Android Dev (Kotlin, XML)", level: 80 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillData[0].id);
  const activeData = skillData.find((data) => data.id === activeTab);

  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // The Cinematic Scroll Reveal (Starts blurred, snaps into focus)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)", scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      scale: 1, 
      transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  return (
    // Replaced fixed padding with min-h-screen and center alignment to fit the viewport perfectly
    <section id="skills" className="relative flex min-h-screen w-full flex-col items-center justify-center z-10 overflow-hidden bg-transparent">
      
      {/* Background Warp Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[pulse_4s_ease-in-out_infinite_0.5s]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-12 w-full max-w-6xl">
        
        {/* Section Header with Blur Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers when you scroll to it!
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 md:mb-12 text-center flex flex-col items-center"
        >
          <motion.p variants={itemVariants} className="mb-2 md:mb-4 text-xs md:text-sm uppercase tracking-[0.4em] text-[#d4af37] font-sans font-semibold">
            02. Tech Arsenal
          </motion.p>
          
          <motion.h2 
            variants={itemVariants} 
            className={`${caveatFont.className} text-6xl md:text-7xl lg:text-[5.5rem] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-white drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]`}
          >
            System Capabilities
          </motion.h2>
        </motion.div>

        {/* Gamified Dashboard Layout - Tightened spacing to fit 1 page */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          {/* LEFT SIDE: The HUD Navigation Menu */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex w-full lg:w-1/3 flex-col gap-3"
          >
            {skillData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-4 rounded-2xl border px-4 py-3 md:px-6 md:py-4 text-left transition-all duration-300 overflow-hidden ${
                    isActive 
                      ? "border-[#d4af37]/50 bg-white/10 shadow-[0_0_20px_rgba(212,175,55,0.15)]" 
                      : "border-white/5 bg-black/40 hover:bg-white/5"
                  }`}
                >
                  <div className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${isActive ? "bg-[#d4af37]" : "bg-transparent group-hover:bg-white/20"}`}></div>
                  
                  <div className={`transition-colors duration-300 ${isActive ? "text-[#d4af37]" : "text-gray-500 group-hover:text-gray-300"}`}>
                    {tab.icon}
                  </div>

                  <span className={`text-base md:text-lg font-bold tracking-wide transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* RIGHT SIDE: The "Warp Engine" Skill Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full lg:w-2/3 min-h-[320px] rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {activeData && (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  // Tighter gap here ensures all 4 bars fit perfectly
                  className="flex w-full flex-col gap-5 md:gap-6"
                >
                  {activeData.skills.map((skill, index) => (
                    <div key={index} className="relative w-full">
                      {/* Skill Name & Level Number */}
                      <div className="mb-2 flex justify-between text-xs md:text-sm font-semibold tracking-wider text-gray-300">
                        <span className="uppercase">{skill.name}</span>
                        <span className="text-white font-mono">{skill.level}%</span>
                      </div>

                      {/* The RPG Energy Bar Container */}
                      <div className="relative h-2 md:h-3 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
                        {/* The Animated Filling Bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${activeData.color} shadow-[0_0_10px_currentColor] rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}