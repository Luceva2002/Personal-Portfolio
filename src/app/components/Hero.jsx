"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16 px-10">
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-5 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
              Hello, I&apos;m {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Luca",
                1000,
                "Web Developer",
                1000,
                "Graphic Designer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Welcome to my portfolio! Here, you’ll find a showcase of my journey,
          <br /> skills, and the projects I'm passionate about. 
          <br />Dive in and explore what I love to create!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-slate-200 text-white border"
            >
              Hire Me
            </Link>
            <Link
              download
              href="./CVLuceva.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-slate-800 text-[#3193c4] mt-3"
            >
              <span className="block bg-[#ffffffff] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#ffffff00] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <br /><br /><br /><br /><br />
      <div className="w-full max-w-xs mx-auto an-500 border-2 italic font-semibold text-center py-4 px-6 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      REALIZED BY USING NEXT.JS
    </div>
    </section>
  );
};

export default HeroSection;
