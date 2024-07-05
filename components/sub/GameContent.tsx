import React from "react";
import ProjectCard from "./ProjectCard";
import PdfUploader from "./PdfUploader"; // PdfUploader bileşenini import edin

const Games = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20 z-[1]" id="projects">
      <div className="w-full flex flex-col lg:flex-row  gap-10 px-5 md:px-10">
        
        <ProjectCard
          src="/GuessTheMovie.jpg"  
          title="Movie Guessing Game"
          description=""
          url="/movie-guessing-game" 
        />
        
      </div>

    </div>
  );
};

export default Games;
