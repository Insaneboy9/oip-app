import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Card } from "antd";
import teamPhoto from "../assets/team-photo.jpg";

const About = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center"
    >
      <Navbar />
      <div className="w-full h-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <div className="swiper-container h-52rem py-8 relative">
          <div>
            <Card
              title={
                <h3 className="text-white text-2xl font-playfair">
                  WHO ARE WE?
                </h3>
              }
              headStyle={cardHeaderStyle}
              className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
            >
              <div className="flex flex-col justify-center items-center">
                <div className="w-lg mx-auto rounded-lg border-2 overflow-hidden">
                  <img
                    src={teamPhoto}
                    alt="Step 1 Image"
                    className="w-full h-full object-contain rounded-md overflow-hidden"
                  />
                </div>
                <p className="mb-16 w-lg">
                  From left to right: Kim Beomjun, Xu Xueli, Seah Wen Kang
                </p>
              </div>
              <div className="w-full bg-red p-5 relative border-2 ">
                <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
                  Description
                </div>
                <p className="mt-5 font-playfair text-base">
                  Welcome to TEAM 5C, where our skilled members lead the way in
                  creating an exceptional online experience. Meet Wen Kang, our
                  talented Lead Developer, Kim, our dedicated User Experience
                  (UX) Designer, and Xueli, our creative Content Manager.
                  Together, we are on a mission to craft a cutting-edge
                  web-based platform that empowers the Annexe Communities to
                  showcase their events, share captivating stories, and display
                  stunning art pieces. Join us on this exciting journey of
                  innovation and expression.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
