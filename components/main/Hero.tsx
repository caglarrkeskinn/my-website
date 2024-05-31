import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative z-[2] flex items-center justify-center h-full w-full bg-black bg-opacity-50">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
