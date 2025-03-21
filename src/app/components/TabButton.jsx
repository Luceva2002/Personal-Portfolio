"use client";
import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-cyan-500 font-semibold"
    : "text-[#ADB7BE] hover:text-cyan-400";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={selectTab}
      className={`px-4 py-2 rounded-t-lg relative overflow-hidden ${buttonClasses}`}
    >
      {active && (
        <motion.span
          layoutId="activeTab"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <span className="relative z-10 text-sm md:text-base">{children}</span>
    </motion.button>
  );
};

export default TabButton;
