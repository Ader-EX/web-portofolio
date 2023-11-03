"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import ldLogo from "@/app/img/linkedin.png";
import myPhoto from "@/app/img/me.png";
import { motion } from "framer-motion";
import { BiSolidDownload } from "react-icons/bi";

function Home() {
  return (
    <div id="home scroll-mt-[100rem]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <motion.div
          className="sm:text-[5rem] text-[3rem] "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2, delay: 0.11 }}
        >
          <h1 className="sm:mx-[10rem] sm:mt-[5rem] sm:mb-[2rem] m-4">
            I am a <br />
            <span className="text-white] p-2 font-bold  flex">
              <Typewriter
                words={["Developer", "Designer", "Leader"]}
                loop={0}
                cursor
                typeSpeed={120}
                deleteSpeed={80}
              ></Typewriter>
            </span>
          </h1>

          <div className="flex flex-wrap sm:mx-[10rem] sm:my-[2rem] m-4 gap-x-5 ">
            <Link
              className="rounded-full bg-white p-4 flex  focus:scale-110  hover:scale-110 active:scale-105 hover:shadow-lg"
              href="https://github.com/Ader-EX"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                alt="github logo"
                sizes="100vw"
                width={0}
                height={0}
                className="w-[2rem] h-[2rem]"
              />
            </Link>
            <Link
              className="flex rounded-full p-4 bg-white focus:scale-110  hover:scale-110 active:scale-105 hover:shadow-lg"
              href="https://github.com/Ader-EX"
            >
              <Image
                src={ldLogo}
                alt="Linkedin logo"
                sizes="100vw"
                width={0}
                height={0}
                className="w-[2rem] h-[2rem] "
              />
            </Link>
          </div>

          <div className="flex sm:mx-[10rem]  sm:mb-[2rem] m-4 text-[1rem] ">
            <Link
              className="flex text-gray-500  cursor-pointer  rounded-full p-6 bg-white focus:scale-110 hover:bg-[#2E1274] transition hover:text-white  hover:scale-110 active:scale-105 hover:shadow-lg w-[110%]"
              href="https://drive.google.com/file/d/1eGvO6e-TWC-OIh2wTZ8dybDAZPcir9ud/view?usp=sharing"
            >
              Download CV{" "}
              <span className="mt-[0.3rem] ml-2">
                <BiSolidDownload />
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center sm:items-center sm:justify-end sm:mr-[9rem]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2, delay: 0.11 }}
        >
          <Image
            src={myPhoto}
            width={0}
            alt="my photo"
            height={0}
            className="flex w-full sm:w-auto h-[100%]  sm:h-auto lg:h-[100%] p-4 focus:scale-110  hover:scale-105 active:scale-105 transition "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
