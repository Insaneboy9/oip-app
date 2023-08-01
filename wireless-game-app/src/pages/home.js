import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import Progress1 from "./progress/progress1";
import Progress2 from "./progress/progress2";
import Progress3 from "./progress/progress3";
import Progress4 from "./progress/progress4";
import FinalProduct from "./progress/finalProduct";

const Home = () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center"
    >
      <div className="absolute top-4 right-4 z-20">
        <Link to="/blog">
        <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded border-2">
          Click to view dailies
        </button>
        </Link>
      </div>
      <div className="w-full h-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <div className="swiper-container h-52rem py-8 relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true} // Enable loop to prevent issues with navigation  (Got some bug that jumps twice)
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <Progress1 />
            </SwiperSlide>
            <SwiperSlide>
              <Progress2 />
            </SwiperSlide>
            <SwiperSlide>
              <Progress3 />
            </SwiperSlide>
            <SwiperSlide>
              <Progress4 />
            </SwiperSlide>
            <SwiperSlide>
              <FinalProduct />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-between mt-4 px-4">
          <div
            className="swiper-button-prev"
            style={{ color: "white", paddingLeft: "10rem" }}
          ></div>
          <div
            className="swiper-button-next"
            style={{ color: "white", paddingRight: "10rem" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
