"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
        <Link
          href="/#contact"
          className="flex items-center justify-center w-16 h-16 bg-[#060b24] hover:bg-[#0d1537] rounded-full transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactButton; 