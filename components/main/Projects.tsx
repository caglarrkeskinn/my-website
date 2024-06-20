import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20 z-[1]" id="projects">
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 text-shadow-custom">
        My Projects
      </h1>
      <div className="w-full flex flex-col lg:flex-row  gap-10 px-5 md:px-10">
        <ProjectCard
          src="/github-142-svgrepo-com.svg"
          title=""
          description="You can visit my GitHub account to see my projects."
          url="https://github.com/caglarrkeskinn"
        />
       
      </div>
    </div>
  );
};

export default Projects;
