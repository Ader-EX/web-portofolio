"use client";
import React, { useState, useRef } from "react";
import { projectsData } from "@/app/lib/datas";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

function Projects() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const [showMore, setShowMore] = useState(false);
  const projectsToShow = showMore ? projectsData : projectsData.slice(0, 3);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInAnimationVariants}
      whileInView="animate"
      initial="initial"
      viewport={{
        once: true,
      }}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      id="projects"
      className="group scroll-mt-40 flex items-center justify-center"
    >
      <div className="text-white mb-28 max-w-[40rem] text-center leading-8 sm:mb-40 sm:mx-auto">
        <h2 className="text-3xl font-medium capitalize mb-10">Projects</h2>
        <div>
          {projectsToShow.map((item, key) => (
            <div key={key}>
              <Project {...item} />
            </div>
          ))}
        </div>
        {!showMore && projectsData.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowMore(true)}
              className="flex hover:bg-[#2E1274] transition hover:text-white font-medium py-2 px-20 rounded-lg mt-4 bg-white text-gray-950 hover:scale-110 shadow-lg max-w-[70rem]"
            >
              More
              <span className="mt-2 ml-2">
                <BsArrowRight />
              </span>
            </button>
          </div>
        )}

        {showMore && (
          <button
            onClick={() => setShowMore(false)}
            className="hover:bg-[#2E1274] transition hover:text-white font-medium py-2 px-20 rounded-lg mt-4 bg-white text-gray-950 hover:scale-110 shadow-lg max-w-[60rem]"
          >
            See Less
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default Projects;
function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLink,
}: ProjectProps) {
  return (
    <div className="flex flex-col m-4 text-white text-left border-2 border-white overflow-hidden mb-8 max-w-[50rem] shadow-2xl rounded-lg hover:bg-white hover:text-gray-950 hover:scale-105 transition">
      <div className="flex justify-end">
        <Image
          src={imageUrl}
          alt={title}
          quality={90}
          className="rounded-t-lg shadow-2xl overflow-hidden"
        />
      </div>
      <div className="py-4 px-5 sm:pl-10 sm:pt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold ">{title}</h3>
        </div>
        <p className="mt-2 leading-relaxed font-normal">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, i) => (
            <li
              key={i}
              className="bg-[#2E1274]/[0.7] py-1 px-4 text-[0.7rem] uppercase tracking-wider text-white rounded-full mb-5"
            >
              {tag}
            </li>
          ))}
        </ul>
        {projectLink !== "s" && (
          <Link
            href={projectLink}
            className="px-8 py-2 text-white rounded-lg bg-[#2E1274]/[0.7] flex items-center justify-center underline font-semibold"
          >
            {projectLink}
          </Link>
        )}
      </div>
    </div>
  );
}
