import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import poster from "../assets/poster.png";
import Navbar from "../components/Navbar";

const Poster = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center"
    >
      <Navbar />
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Annexe Poster
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={poster}
            alt="Poster"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
      </Card>
    </div>
    </motion.div>
  );
};

export default Poster;