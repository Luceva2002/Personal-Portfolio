import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg pt-10">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-between max-w-4xl mx-auto">
          
          <div className="min-w-[200px]">
            <h1 className="font-bold text-[18px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Informations
            </h1>
            <ul className="space-y-4">
              <li className="text-[16px]">3457656206</li>
              <li className="text-[16px]">Luceva2002@gmail.com</li>
              <li className="text-[16px]">P.zza Francesco Zambeccari 3</li>
            </ul>
          </div>
          
          <div className="min-w-[200px]">
            <h1 className="font-bold text-[18px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Social Media
            </h1>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 cursor-pointer">
                <RxGithubLogo />
                <a
                  href="https://github.com/Luceva2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px]"
                >
                  Github
                </a>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <RxLinkedinLogo />
                <a
                  href="https://www.linkedin.com/in/luca-evangelista-91a2101a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px]"
                >
                  Linkedin
                </a>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <RxInstagramLogo />
                <a
                  href="https://www.instagram.com/luc4_evangelist4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <br />
        <div className="w-full max-w-4xl mx-auto mt-10 pt-5 text-center px-5">
          <p className="italic font-semibold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            REALIZED BY USING NEXT.JS
          </p>
          <br />
          <p className="text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-2">
            &copy; Luca Evangelista Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
