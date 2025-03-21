"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-70px" });
  
  useEffect(() => {
    if (isInView) {
      const cards = document.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, [isInView]);

  const projectsData = [
    {
      id: 1,
      src: "/Epsonstart.png",
      title: "Epsonstart",
      description: "Form di login per i dati di fatturazione degli utenti che collaborano con la società di consulenza Synergica.tech. Creato utilizzando Angular e Angular Material!",
      tags: ["Angular", "TypeScript", "Material UI"],
      link: "https://epsonstart-authentication.web.app/"
    },
    {
      id: 2,
      src: "/Personalportfolio.png",
      title: "Portfolio Personale",
      description: "Il mio portfolio personale creato utilizzando Next.js con il famoso framework React e ottimizzando il CSS grazie a Tailwind CSS!",
      tags: ["Next.js", "React", "Tailwind CSS"],
      link: "/"
    },
    {
      id: 3,
      src: "/cabinato.png",
      title: "Bartop Arcade",
      description: "Cabinet arcade realizzato utilizzando componenti di scarto ottenuti da vecchi computer e pannelli di legno.",
      tags: ["Hardware", "DIY", "Gaming"],
      link: "https://github.com/Luceva2002"
    },
    {
      id: 4,
      src: "/images/projects/template-figo.png",
      title: "Template-Figo",
      description: "Un template moderno e responsive per applicazioni web, creato con HTML, CSS e JavaScript. Include componenti riutilizzabili e un design elegante già pronto all'uso.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
      link: "https://github.com/Luceva2002/template-figo"
    },
    {
      id: 5,
      src: "/images/projects/so_long.png",
      title: "So_Long Game",
      description: "Un semplice gioco 2D sviluppato utilizzando la MiniLibX. Il giocatore deve raccogliere tutti gli oggetti sulla mappa ed uscire evitando gli ostacoli.",
      tags: ["C", "MiniLibX", "Game Dev"],
      link: "https://github.com/Luceva2002/so_long"
    },
    {
      id: 6,
      src: "/images/projects/get_next_line.png",
      title: "Get_Next_Line",
      description: "Una funzione in C che legge una riga da un file descriptor. Implementa gestione efficiente del buffer e della memoria per ottimizzare la lettura di file di grandi dimensioni.",
      tags: ["C", "File I/O", "Memory Management"],
      link: "https://github.com/Luceva2002/get_next_line"
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-16 overflow-hidden" 
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-6 md:mb-10"
        >
          I Miei Progetti
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <ProjectCard 
                src={project.src}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8 md:mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="https://github.com/Luceva2002" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm md:text-base font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-block mx-auto"
          >
            Visualizza altri progetti su GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
