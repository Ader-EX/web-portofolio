import React from "react";
import dignition from "@/app/img/dignition.png";
import meetups from "@/app/img/meetups.png";
import bar from "@/app/img/bar.png";
import rfrends from "../img/rfriends.png";
import vacine from "../img/vaccine.png";
import meals from "../img/meals.png";

import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiGitBranch,
  BiLogoFirebase,
} from "react-icons/bi";
import { SiNextdotjs, SiXdadevelopers } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";

export const skillsData = [
  {
    title: "HTML",
    img: AiFillHtml5,
  },
  {
    title: "CSS",
    img: BiLogoCss3,
  },
  {
    title: "JavaScript",
    img: BiLogoJavascript,
  },
  {
    title: "TypeScript",
    img: BiLogoTypescript,
  },
  {
    title: "React",
    img: BiLogoReact,
  },
  {
    title: "Next.js",
    img: SiNextdotjs,
  },
  {
    title: "Node.js",
    img: BiLogoNodejs,
  },
  {
    title: "Git",
    img: BiGitBranch,
  },
  {
    title: "Firebase",
    img: BiLogoFirebase,
  },
  {
    title: "Tailwind",
    img: BiLogoTailwindCss,
  },
  {
    title: "Redux",
    img: BiLogoRedux,
  },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Project-Based Virtual Intern : UI/UX Designer Niagahoster x Rakamin Academy Niagahoster - Web Hosting Unlimited Indonesia",
    location: "Rakamin Virtual Internship",
    description:
      "I Made a redesign for Niagahoster's hosting website that is backed up by my own UX research to understand the preferences, pain points, and behavior of the target audience and Contribute to the improvement of Niagahoster's web page and gain valuable experience in UX research.",
    icon: React.createElement(PiStudentBold),
    date: "Aug - Sep 2022",
  },
  {
    title: "Head of Communication and Information Department",
    location: "KSM Android UPNVJ",
    description:
      "Took charge of all the tasks, both official and unofficial, within the Communication and Information division when it comes to design, communication, and teamwork.",
    icon: React.createElement(IoShareSocialOutline),
    date: "December 2022 - December 2023",
  },
  {
    title: "Front-end Developer Team ",
    location: "INJECT - KSM Android UPNVJ",
    description:
      "Joined forces with a team of front-end developers in the  journey of enhancing the Learning Management System (LMS) for KSM Android.",
    icon: React.createElement(SiXdadevelopers),
    date: "June 2023 - November 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Dignition Learning Management System",
    description:
      "A website dedicated to UPN Veteran Jakarta's student club. Dignition is a Learning Management System with a goal to develop student skills",
    tags: ["React", "Next.js", "Zod", "Tailwind", "Shadcn"],
    imageUrl: dignition,
    projectLink: "s",
  },
  {
    title: "To do List ",
    description:
      "A web that shows the list of what to dos from Firebase with details such as year, expenses, filters, and more",
    tags: ["React", "Next.js", "Firebase"],
    imageUrl: bar,
    projectLink: "https://github.com/Ader-EX/To-do_List",
  },
  {
    title: "Robofriends ",
    description: "A web that shows the list of Robots using an API",
    tags: ["React", "CSS"],
    imageUrl: rfrends,
    projectLink: "https://github.com/Ader-EX/roboF",
  },
  {
    title: "React Meals",
    description: "A web that uses React to order food items",
    tags: ["React", "CSS"],
    imageUrl: meals,
    projectLink: "s",
  },
  {
    title: "React Meetup",
    description:
      "A website created using Next JS that shows meetups and the details of it.",
    tags: ["React", "Next.js", "MongoDB", "Firebase"],
    imageUrl: meetups,
    projectLink: "https://github.com/Ader-EX/formMeal",
  },
  {
    title: "COVID-19 Website",
    description: "A website that is used to give COVID-19 informations",
    tags: ["HTML", "CSS"],
    imageUrl: vacine,
    projectLink: "https://github.com/Ader-EX/vaccine_registration",
  },
] as const;
