import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="/about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 md:ml-4 text-gray-300 hidden md:block">
            Caglar Keskin
          </span>
        </a>

        <div className="flex flex-row gap-3 md:gap-5">
            <div className="navbar-button">
                <a href="/about-me">
                    About
                </a>
            </div>
            <div className="navbar-button">
                <a href="/skills">
                    Skills
                </a>
            </div>
            <div className="navbar-button">
                <a href="/projects">
                    Projects
                </a>
            </div>
        </div>

        <div className="flex flex-row gap-3 md:gap-5">
          {Socials.map((social) => (
            <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
