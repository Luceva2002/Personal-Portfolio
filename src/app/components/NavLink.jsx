"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link 
      href={href}
      className={`group relative block py-2 px-3 text-base font-medium transition-all duration-300`}
    >
      <span className={`relative z-10 ${
        isActive 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold" 
          : "text-[#ADB7BE] group-hover:text-cyan-400"
      }`}>{title}</span>
      
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0 bg-[#0d1537]/80 rounded-md -z-10 group-hover:h-full"
        initial={{ height: "0%" }}
        animate={{ height: isActive ? "0%" : "0%" }}
        whileHover={{ height: isActive ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export default NavLink;
