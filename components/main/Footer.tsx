import React from "react";
import {
  FaInstagram,
  FaMedium,
  FaLinkedin,
  FaPhone,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row w-full items-center justify-around flex-wrap mb-4 gap-6 md:gap-0">
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Socials</div>
            <a
              href="https://www.instagram.com/caglarr.keskinn"
              className="flex items-center my-2 cursor-pointer"
              target="_blank"
            >
              <FaInstagram />
              <span className="ml-2 text-base">Instagram</span>
            </a>
            <a
              href="https://medium.com/@caglarrkeskinn"
              className="flex items-center my-2 cursor-pointer"
              target="_blank"
            >
              <FaMedium />
              <span className="ml-2 text-base">Medium</span>
            </a>
            <a
              href="https://www.linkedin.com/in/caglarrkeskinn/"
              className="flex items-center my-2 cursor-pointer"
              target="_blank"
            >
              <FaLinkedin />
              <span className="ml-2 text-base">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Contact</div>
            <a href="tel:+905312654845" className="flex items-center my-2 cursor-pointer">
              <FaPhone />
              <span className="ml-2 text-base">Phone</span>
            </a>
            <a
              href="https://www.google.com.tr/maps/place/Adana/@37.4707087,34.8748937,9z/data=!3m1!4b1!4m6!3m5!1s0x15288f4026736d83:0xfe54dda8f6597217!8m2!3d37.2612315!4d35.3905046!16zL20vMDE5OXM0?hl=tr&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <FaLocationArrow />
              <span className="ml-2 text-base">Adana</span>
            </a>
            <a href="mailto:caglarkeskin0134@gmail.com" className="flex items-center my-2 cursor-pointer">
              <FaMailBulk />
              <span className="ml-2 text-base">Gmail</span>
            </a>
          </div>
        </div>

        <div className="text-base text-center">
          &copy; Copyright 2024. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
