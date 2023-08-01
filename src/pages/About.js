import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center"
    >
      <Navbar />
    </motion.div>
  );
};

export default About;
