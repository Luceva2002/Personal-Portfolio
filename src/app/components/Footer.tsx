"use client";
import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#060b24] text-gray-200 pt-10 border-t border-cyan-500/20"
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-between max-w-5xl mx-auto px-4">
          
          {/* Informazioni di contatto */}
          <motion.div 
            className="min-w-[200px] mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-bold text-[20px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Informazioni
            </h1>
            <ul className="space-y-4">
              <motion.li 
                className="text-[16px] flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                3457656206
              </motion.li>
              <motion.li 
                className="text-[16px] flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Luceva2002@gmail.com
              </motion.li>
              <motion.li 
                className="text-[16px] flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                P.zza Francesco Zambeccari 3
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Link Utili */}
          <motion.div 
            className="min-w-[200px] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-bold text-[20px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Link Utili
            </h1>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="text-[16px] hover:text-cyan-400 transition-colors duration-300"
              >
                <a href="#about">Chi Sono</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="text-[16px] hover:text-cyan-400 transition-colors duration-300"
              >
                <a href="#tech">Tecnologie</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="text-[16px] hover:text-cyan-400 transition-colors duration-300"
              >
                <a href="#projects">Progetti</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="text-[16px] hover:text-cyan-400 transition-colors duration-300"
              ></motion.li>
            </ul>
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            className="min-w-[200px] mb-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="font-bold text-[20px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Social Media
            </h1>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ x: 5, color: "#6e5494" }}
              >
                <RxGithubLogo className="text-xl" />
                <a
                  href="https://github.com/Luceva2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px]"
                >
                  Github
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ x: 5, color: "#0A66C2" }}
              >
                <RxLinkedinLogo className="text-xl" />
                <a
                  href="https://www.linkedin.com/in/luca-evangelista-91a2101a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px]"
                >
                  Linkedin
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ x: 5, color: "#E1306C" }}
              >
                <RxInstagramLogo className="text-xl" />
                <a
                  href="https://www.instagram.com/luc4_evangelist4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px]"
                >
                  Instagram
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <div className="w-full py-6 mt-4 border-t border-cyan-500/20">
          <div className="w-full max-w-5xl mx-auto text-center px-5">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="italic font-semibold text-[14px] md:text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              REALIZZATO CON NEXT.JS
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[14px] md:text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mt-4"
            >
              &copy; {currentYear} Luca Evangelista. Tutti i diritti riservati
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
