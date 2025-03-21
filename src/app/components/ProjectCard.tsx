"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  src, 
  title, 
  description, 
  tags = [], 
  link = "#" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="h-full overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0d1537] p-3 md:p-4 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(14, 165, 233, 0.2)" }}
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div 
          className="relative h-40 sm:h-44 md:h-52 w-full overflow-hidden rounded-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={src}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 hover:scale-110"
          />
          
          <motion.div 
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="bg-blue-500 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-base"
            >
              Visualizza <FaExternalLinkAlt />
            </motion.div>
          </motion.div>
        </div>
      </a>
      
      <div className="mt-3 md:mt-4 px-1 md:px-2">
        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          {title}
        </h3>
        <p className="mt-2 text-[#ADB7BE] text-sm md:text-base line-clamp-3">{description}</p>
        
        {tags.length > 0 && (
          <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 md:px-3 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
