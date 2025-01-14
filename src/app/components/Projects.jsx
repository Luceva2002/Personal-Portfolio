import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Projects
      </h1>
      <div className="w-full flex flex-col items-center gap-10 px-4 md:px-10">
        <div className="flex flex-wrap justify-center gap-10 w-full">
          <ProjectCard
            src="/Epsonstart.png"
            title="Epsonstart"
            description="Login form for billing data of users who collaborate with the consultancy company Synergica.tech. Created by using Angular and Angular Material!"
          />
          <ProjectCard
            src="/Personalportfolio.png"
            title="Personal Portfolio"
            description="My personal portfolio created by using next.js with the famous framework React and optimizing the css thanks to tailwind.css!"
          />
          <ProjectCard
            src="/cabinato.png"
            title="Bartop Arcade"
            description="Arcade cabinet made using waste components obtained from old computers and wooden boards."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
