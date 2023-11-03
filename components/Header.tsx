"use client";

import React from "react";

import { motion } from "framer-motion";
import { links } from "@/app/lib/datas";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import logo from "./logo.svg";
import { useActiveSectionNull } from "@/context/Useactive-section-context";

function Header() {
  const { activeSection, setActiveSection } = useActiveSectionNull();

  return (
    <header className="z-[999] relative">
      {/* <motion.div
        className="fixed opacity-0  h-[4.5rem] w-1/4 rounded-none backdrop-blur-[0.5rem] sm:top-8 sm:h-[2.5rem] sm:w-[2.5rem] sm:left-[25rem] sm:rounded-full "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 0.5 }}
      >
        <Image src={logo} alt="test" className="opacity-0 sm:opacity-100" />
      </motion.div> */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <Image
            src={logo}
            alt="test"
            className="flex opacity-0 sm:opacity-100 w-[3%] sm:w-[4%]"
          />

          {links.map((item) => (
            <motion.li
              key={item.hash}
              className="relative h-3/4 flex items-center justify-center   "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={item.hash}
                onClick={() => {
                  setActiveSection(item.name);
                }}
                className={clsx(
                  "flex  items-center justify-center px-3 py-3 hover:text-gray-950 transition rounded-full ",
                  { "text-gray-950": activeSection === item.name }
                )}
              >
                {item.name}
                {item.name === activeSection && (
                  <motion.span
                    className="bg-gray-300/60 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
