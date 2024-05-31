import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden pb-80 py-20">
      <SkillText />

      {/* Frontend Skills */}
      <div className="skill-section mt-20">
        <div className="flex items-center justify-center gap-3">
          <SparklesIcon className="text-[#bfffff] h-10 w-10" />
          <h1 className="Welcome-text text-[25px] font-bold">Frontend Skills</h1>
        </div>
        <div className="flex flex-wrap justify-around mt-4 gap-10">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              description={image.skill_name}
            />
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div className="skill-section mt-20">
        <div className="flex items-center justify-center gap-3">
          <SparklesIcon className="text-[#bfffff] h-10 w-10" />
          <h1 className="Welcome-text text-[25px] font-bold">Backend Skills</h1>
        </div>
        <div className="flex flex-wrap justify-around mt-4 gap-10">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              description={image.skill_name}
            />
          ))}
        </div>
      </div>

      {/* FullStack Skills */}
      <div className="skill-section mt-20 mb-0">
        <div className="flex items-center justify-center gap-3">
          <SparklesIcon className="text-[#bfffff] h-10 w-10" />
          <h1 className="Welcome-text text-[25px] font-bold">FullStack Skills</h1>
        </div>
        <div className="flex flex-wrap justify-around mt-4 gap-10">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              description={image.skill_name}
            />
          ))}
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute z-[-10] opacity-30">
        <div className="w-full h-full absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="auto"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
