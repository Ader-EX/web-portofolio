"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      className=" hidden sm:flex border-2 border-white bg-white items-center justify-center sm:mx-auto my-24 h-[5rem] w-1 rounded-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

export default SectionDivider;
