"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setIsScrollingDown(currentScrollY > lastScrollY);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 transition-transform duration-300 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="/about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={65}
            height={65}
            className="cursor-pointer"
          />
        </a>

        <div className="hidden md:flex flex-row gap-3 md:gap-5 justify-center">
          <div className="navbar-button">
            <a href="/about-me">About</a>
          </div>
          <div className="navbar-button">
            <a href="/skills">Skills</a>
          </div>
          <div className="navbar-button">
            <a href="/projects">Projects</a>
          </div>
          <div className="navbar-button">
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-3 md:gap-5">
          {Socials.map((social) => (
            <div className="navbar-button" key={social.name}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none px-4">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-[65px] right-0 w-2/7 max-w-xs bg-[#03001417] backdrop-blur-md shadow-lg rounded-lg p-4 transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="navbar-button">
            <a href="/about-me">About</a>
          </div>
          <div className="navbar-button">
            <a href="/skills">Skills</a>
          </div>
          <div className="navbar-button">
            <a href="/projects">Projects</a>
          </div>
          <div className="navbar-button">
            <a href="/contact">Contact</a>
          </div>
          <div className="flex flex-row gap-3 md:gap-5">
            {Socials.map((social) => (
              <div className="navbar-button" key={social.name}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
