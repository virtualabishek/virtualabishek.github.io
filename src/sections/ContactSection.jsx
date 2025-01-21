import React from "react";
import grainImage from "../assets/images/grain.jpg";
import ArrowUpRightIcon from "../components/svgComponents/ArrowUpRightIcon";

const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 md:flex md:justify-between items-center md:gap-8">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s create something amazing together.
            </h2>
            <p className="text-sm md:text-base my-2">
              I want to work on more projects and explore new ideas. Let&apos;s
              connect, discuss, and collaborate on projects if you have any!
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/virtualabishek/"
            className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900"
          >
            <span className="font-semibold w-max">Contact Me</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
