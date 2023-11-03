"use client";
import { skillsData } from "@/app/lib/datas";
import { animate, motion } from "framer-motion";
import React from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
      },
    };
  },
};

export default function Skills() {
  return (
    <div id="skills">
      <div className="text-white mb-28 max-w-[53rem] scroll-mt-28  text-center leading-8 sm:mb-40 sm:mx-auto">
        <h2 className="text-3xl font-medium capitalize mb-10">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-white-800">
          {skillsData.map((item, i) => {
            const Icon = item.img;
            return (
              <motion.div
                key={i}
                variants={fadeInAnimationVariants}
                whileInView="animate"
                initial="initial"
                viewport={{
                  once: true,
                }}
                custom={i}
                className="  transition flex items-center border-2 px-5 py-3 mb-4 rounded-xl hover:bg-white hover:text-gray-950 "
              >
                <span className="mr-4">
                  <Icon />
                </span>
                <li>{item.title}</li>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
