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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Socials</div>


            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaInstagram />
              <div className="text-[15px] ml-[6px]">@caglarr.keskinn</div>
            </div>

            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaMedium />
              <span className="text-[15px] ml-[6px]">@caglarrkeskinn</span>
            </div>

            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">@caglarrkeskinn</span>
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>

            <a href="tel:+905312654845" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaPhone />
              <span className="text-[15px] ml-[6px]">+90 531 265 48 45</span>
            </a>

            <a href="https://www.google.com.tr/maps/place/Adana/@37.4707087,34.8748937,9z/data=!3m1!4b1!4m6!3m5!1s0x15288f4026736d83:0xfe54dda8f6597217!8m2!3d37.2612315!4d35.3905046!16zL20vMDE5OXM0?hl=tr&entry=ttu" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLocationArrow />
              <span className="text-[15px] ml-[6px]">Adana</span>
            </a>

            <a href="mailto:info@civata.com" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaMailBulk />
              <span className="text-[15px] ml-[6px]">caglarkeskin0134@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Copyright 2024. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
