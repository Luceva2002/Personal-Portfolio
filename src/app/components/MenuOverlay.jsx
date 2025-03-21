"use client";
import React from "react";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, closeMenu, activeSection }) => {
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { 
        duration: 0.3, 
        staggerChildren: 0.05, 
        staggerDirection: -1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="fixed top-0 left-0 w-full h-screen bg-[#060b24] bg-opacity-95 backdrop-blur-md flex flex-col items-center pt-24 px-4 z-40"
    >
      <motion.button
        onClick={closeMenu}
        className="absolute top-6 right-6 text-white p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <XMarkIcon className="h-6 w-6" />
      </motion.button>
      
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              href={link.path} 
              title={link.title} 
              isActive={
                (link.path === "#Herosection" && activeSection === "Herosection") ||
                (link.path === `#${activeSection}`)
              }
            />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        variants={itemVariants}
        className="absolute bottom-10 left-0 right-0 text-center text-[#ADB7BE] text-sm"
      >
        <div className="pb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Luca Evangelista
          </span>
        </div>
        <div className="text-xs opacity-70">Web Developer & Designer</div>
      </motion.div>
    </motion.div>
  );
};

export default MenuOverlay;
