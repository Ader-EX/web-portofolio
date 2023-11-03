"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const Aboutme = () => {
  return (
    <div
      id="about"
      className="scroll-mt-40 flex items-center justify-center hover:scale-105 transition "
    >
      <div className="border-2 p-4 rounded-2xl  mb-[10rem] max-w-[45rem] text-center leading-8  lg:mx-auto sm:mx-auto m-4">
        <h2 className="text-3xl font-medium capitalize mb-8">About Me</h2>
        <p className="mb-3 font-normal">
          I am a passionate web developer currently pursuing my studies in
          Informatics at UPN Veteran Jakarta. My proficiency lies in the realm
          of
          <span className="font-medium"> Frontend development </span>, and I
          have a deep understanding of technologies such as
          <span className="font-medium">
            {" "}
            React, Next.js, and Tailwind CSS{" "}
          </span>
          . My journey as a web developer is fueled by an unwavering passion for
          creating exceptional online experiences. I thrive in
          <span className="font-medium"> collaborative </span>
          environments, valuing the exchange of ideas and insights with fellow
          developers, and I am
          <span className="font-medium">dedicated</span>
          to crafting web solutions that have a meaningful and lasting impact on
          users. With a keen eye for design and a commitment to staying at the
          forefront of web development trends, I am excited to contribute to the
          ever-evolving world of web technology
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
