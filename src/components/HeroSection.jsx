import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col items-center mt-5 lg:mt-8">
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide pb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        WEAVER'S WISDOM
      </motion.h1>

      <motion.h5
        className="text-lg sm:text-4xl lg:text-5xl text-center tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        நூல் உடைந்து போகலாம், ஆனால் நெசவு நிலைத்திருக்கும்
      </motion.h5>

      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        The thread may break, but the weaving endures!
      </motion.p>

      <div className="flex mt-10 justify-center">
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default HeroSection;
