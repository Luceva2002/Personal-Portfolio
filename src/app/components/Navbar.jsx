"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    path: "#Herosection",
  },
  {
    title: "Chi Sono",
    path: "#about",
  },
  {
    title: "Tecnologie",
    path: "#tech",
  },
  {
    title: "Progetti",
    path: "#projects",
  },
  {
    title: "Contatti",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Herosection"); // Default alla Home

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ["Herosection", "about", "tech", "projects", "contact"];
      const sectionOffsets = sections.map(id => {
        const element = document.getElementById(id);
        return element ? { id, top: element.offsetTop - 150 } : null;
      }).filter(Boolean);

      // Se non ci sono sezioni visibili, imposta "Herosection" come attivo quando si è in cima alla pagina
      if (sectionOffsets.length === 0 || window.scrollY < 50) {
        if (activeSection !== "Herosection") {
          setActiveSection("Herosection");
        }
        return;
      }

      const scrollPosition = window.scrollY + 150;
      
      const currentSection = sectionOffsets.reduce((acc, section) => {
        return scrollPosition >= section.top ? section.id : acc;
      }, "Herosection"); // Default a Herosection se nessuna sezione è visibile
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Avvia subito per impostare la sezione corretta
    handleScroll();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Close mobile menu if open
          if (navbarOpen) {
            setNavbarOpen(false);
          }
          
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, [activeSection, navbarOpen]);

  return (
    <nav 
      className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled 
          ? "bg-[#060b24]/95 backdrop-blur-md py-3 shadow-lg shadow-blue-500/10" 
          : "bg-[#060b24]/85 py-5"
      } ${activeSection === "contact" ? "bg-[#060b24]/98 backdrop-blur-lg" : ""}`}
    >
      <div className="flex container flex-wrap items-center justify-between mx-auto px-5 max-w-6xl">
        <Link href={"/"}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 font-bold font-sans tracking-wide"
          >
            LUCA EVANGELISTA
          </motion.div>
        </Link>
        
        <div className="mobile-menu block md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-cyan-500 text-slate-200 hover:text-white hover:border-blue-600 transition-all duration-300 hover:bg-[#0d1537]"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-5 w-5" />
            ) : (
              <XMarkIcon className="h-5 w-5" />
            )}
          </motion.button>
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 relative">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative text-base"
              >
                <NavLink 
                  href={link.path} 
                  title={link.title} 
                  isActive={
                    (link.path === "#Herosection" && activeSection === "Herosection") ||
                    (link.path === `#${activeSection}`)
                  }
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} activeSection={activeSection} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
