import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg pt-10 px-10">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                    <h1 className="font-bold text-[16px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Social Media</h1>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/Luceva2002"><span className="text-[15px] ml-[6px]">Github</span></a>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <a href="https://www.linkedin.com/in/luca-evangelista-91a2101a3/"><span className="text-[15px] ml-[6px]">Linkedin</span></a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <a href="https://www.instagram.com/luc4_evangelist4/"><span className="text-[15px] ml-[6px]">Instagram</span> </a>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                    <h1 className="font-bold text-[16px] py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Informations</h1>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">3457656206</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">luceva2002@gmail.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Piazza Francesco Zambeccari 3</span>    
                    </p>
                </div>
                
            </div>

            <br />

            <div className="w-full max-w-xs mx-auto an-500 italic font-semibold text-center py-4 px-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            REALIZED BY USING NEXT.JS
            </div>

            <div className="mb-[20px] text-[15px] text-xl pt-5 text-left">
                &copy; Luca Evangelista Inc. All rights reserved
            </div>

        </div>
    </div>
  )
}

export default Footer