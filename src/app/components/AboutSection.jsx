"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Competenze",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-2 md:gap-4">
        <li className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl">•</span>
          <span>Node.js</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl">•</span>
          <span>Angular</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl">•</span>
          <span>Tailwind</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl">•</span>
          <span>Photoshop</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl">•</span>
          <span>Wordpress</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl">•</span>
          <span>C</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Formazione",
    id: "education",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">Liceo Cavour</h4>
            <p className="text-xs text-gray-400">Diploma di Maturità</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">42RomaLuiss</h4>
            <p className="text-xs text-gray-400">Programmazione e Informatica</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">Synergica Tech</h4>
            <p className="text-xs text-gray-400">Sviluppo Web e Consulenza</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certificazioni",
    id: "certifications",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">Cambridge B2</h4>
            <p className="text-xs text-gray-400">Certificazione linguistica</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">Data & BigData</h4>
            <p className="text-xs text-gray-400">Analisi e gestione dati</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">Human Rights</h4>
            <p className="text-xs text-gray-400">Diritti umani e sociali</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-cyan-400 text-xl mt-0.5">•</span>
          <div>
            <h4 className="font-medium">Film Project European</h4>
            <p className="text-xs text-gray-400">Media e comunicazione</p>
          </div>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-12 md:py-16" id="about" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 md:mb-12"
        >
          Chi Sono
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Bio e foto mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:hidden flex flex-col space-y-6"
          >
            <div className="relative aspect-square w-full max-w-[280px] mx-auto overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-1">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image 
                  src="/aboutme.png" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Luca Evangelista" 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="bg-[#0d1537] p-4 md:p-6 rounded-xl border border-cyan-500/20 shadow-lg">
              <p className="text-[#ADB7BE] text-sm md:text-base leading-relaxed">
                Sono uno studente di programmazione con forti competenze linguistiche, interpersonali e organizzative. La mia esperienza presso <span className="text-cyan-400">42 Roma Luiss</span> mi ha permesso di acquisire solide basi in informatica e nel problem solving.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30">Problem Solver</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30">Team Player</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30">Creative</span>
              </div>
            </div>
          </motion.div>
          
          {/* Bio e info desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 order-2 lg:order-1"
          >
            {/* Bio desktop */}
            <div className="hidden lg:block bg-[#0d1537] p-6 rounded-xl border border-cyan-500/20 shadow-lg mb-6">
              <p className="text-[#ADB7BE] text-base leading-relaxed">
                Sono uno studente di programmazione con forti competenze linguistiche, interpersonali e organizzative. La mia esperienza presso <span className="text-cyan-400">42 Roma Luiss</span> mi ha permesso di acquisire solide basi in informatica e nel problem solving.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30">Problem Solver</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30">Team Player</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30">Creative</span>
              </div>
            </div>
            
            {/* Tabs + Content */}
            <div className="bg-[#0d1537]/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-lg overflow-hidden">
              <div className="flex border-b border-cyan-500/20 overflow-x-auto scrollbar-hide">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Competenze
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Formazione
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  Certificazioni
                </TabButton>
              </div>
              
              <motion.div 
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 md:p-6 text-[#ADB7BE]"
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Foto desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative w-1/3 aspect-auto order-1 lg:order-2"
          >
            <div className="h-full w-full relative rounded-xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-xl shadow-blue-500/10">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image 
                  src="/aboutme.png" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  alt="Luca Evangelista" 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#060b24] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
