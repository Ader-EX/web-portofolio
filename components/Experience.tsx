"use client";

import { experiencesData } from "@/app/lib/datas";
import React, { Fragment } from "react";

import "react-vertical-timeline-component/style.min.css";

import { Chrono } from "react-chrono";

export default function Experience() {
  return (
    <div
      id="experience"
      className="text-white mb-28 max-w-[53rem] scroll-mt-28  text-center leading-8 sm:mb-40 sm:mx-auto"
    >
      <h2 className="text-3xl font-medium capitalize mb-10">Experiences</h2>
      <Chrono
        theme={{
          primary: "white",
          secondary: "purple",
          cardBgColor: "white",
          cardForeColor: "white",
          titleColor: "white",
          titleColorActive: "white",
          cardTitleColor: "purple",
        }}
        items={[
          {
            title: "Aug - Sep 2022",
            cardTitle:
              "Project-Based Virtual Intern : UI/UX Designer Niagahoster x Rakamin Academy Niagahoster - Web Hosting Unlimited Indonesia",
            cardSubtitle: "Rakamin Virtual Internship",
            cardDetailedText: `I Made a redesign for Niagahoster's hosting website that is backed up by my own UX research to understand the preferences, pain points, and behavior of the target audience and Contribute to the improvement of Niagahoster's web page and gain valuable experience in UX research.`,
          },
          {
            title: "2022 - 2023",
            cardTitle: "Head of Communication and Information Department",
            cardSubtitle: "KSM Android UPNVJ",
            cardDetailedText:
              "Took charge of all the tasks, both official and unofficial, within the Communication and Information division when it comes to design, communication, and teamwork.",
          },
          {
            title: "Jun - Nov 2023",
            cardTitle: "Front-end Developer Team",
            cardSubtitle: `INJECT - KSM Android UPNVJ`,
            cardDetailedText:
              "Joined forces with a team of front-end developers in the  journey of enhancing the Learning Management System (LMS) for KSM Android.",
          },
        ]}
        mode="VERTICAL"
      />
    </div>
  );
}
