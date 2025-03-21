"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiAdobephotoshop, SiC } from "react-icons/si";

// Tech icons con le icone di React Icons
const technologies = [
  { name: "React", icon: <FaReact size={65} className="text-[#61DAFB]" /> },
  { name: "Angular", icon: <FaAngular size={65} className="text-[#DD0031]" /> },
  { name: "Node.js", icon: <FaNodeJs size={65} className="text-[#68A063]" /> },
  { name: "JavaScript", icon: <SiJavascript size={65} className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript size={65} className="text-[#3178C6]" /> },
  { name: "HTML", icon: <FaHtml5 size={65} className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt size={65} className="text-[#1572B6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={65} className="text-[#06B6D4]" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop size={65} className="text-[#31A8FF]" /> },
  { name: "WordPress", icon: <FaWordpress size={65} className="text-[#21759B]" /> },
  { name: "C", icon: <SiC size={65} className="text-[#A8B9CC]" /> },
  { name: "Git", icon: <FaGitAlt size={55} className="text-[#F05032]" /> },
];

const TechStack = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Correggiamo lo scrolltrigger per evitare glitch
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Horizontal scroll animation solo per schermi più grandi
      const scrollTween = gsap.to(scrollerRef.current, {
        x: () => {
          // Calcolo più preciso per evitare glitch e assicurarsi che tutte le card siano visibili
          const maxScroll = scrollerRef.current.scrollWidth - window.innerWidth + 150;
          return -Math.min(maxScroll, scrollerRef.current.scrollWidth * 0.7);
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: () => `+=${scrollerRef.current.scrollWidth * 0.6}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      return () => {
        if (scrollTween) scrollTween.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      // Versione mobile: scroll verticale con effetto stagger
      const cards = document.querySelectorAll(".tech-card");
      gsap.fromTo(
        cards,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.85,
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
            scrub: false,
          }
        }
      );
    });

    // Individual card animations desktop
    const cards = document.querySelectorAll(".tech-card");
    gsap.fromTo(
      cards,
      { 
        y: 40, 
        opacity: 0,
        scale: 0.8,
        rotationY: 20,
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        rotationY: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mm.revert();
    };
  }, []);

  return (
    <section className="py-10 md:py-16 overflow-hidden" id="tech">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 md:mb-10">
        Le Mie Tecnologie
      </h2>
      
      {/* Desktop version */}
      <div 
        ref={containerRef} 
        className="relative md:h-[500px] h-auto overflow-hidden"
      >
        {/* Desktop scroller */}
        <div 
          ref={scrollerRef} 
          className="md:absolute md:flex md:gap-8 md:pl-10 hidden md:block"
        >
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-card flex flex-col items-center bg-[#0d1537] p-6 rounded-xl shadow-lg min-w-[200px] hover:shadow-blue-500/50 transition-all duration-300 border border-cyan-500/20"
            >
              <div className="relative h-[100px] w-[100px] mb-4 flex items-center justify-center">
                {tech.icon}
              </div>
              <h3 className="text-white text-xl font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 px-4 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-card flex flex-col items-center bg-[#0d1537] p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 border border-cyan-500/20"
            >
              <div className="relative h-[60px] w-[60px] mb-2 flex items-center justify-center">
                {React.cloneElement(tech.icon, { size: 45 })}
              </div>
              <h3 className="text-white text-sm sm:text-base font-semibold text-center">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 