import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Day1 from "./dailies/Day1";
import Day2 from "./dailies/Day2";
import Day3 from "./dailies/Day3";
import Day4 from "./dailies/Day4";
import Day5 from "./dailies/Day5";
import Day6 from "./dailies/Day6";
import Day7 from "./dailies/Day7";
import Day8 from "./dailies/Day8";
import Day9 from "./dailies/Day9";
import Day10 from "./dailies/Day10";
import Week1Video from "./dailies/Week1Video";
import Week2Video from "./dailies/Week2Video";

const Dailies = () => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center scrollbar-none">
      <Navbar />
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
              <Day1 />
            </SwiperSlide>
            <SwiperSlide>
              <Day2 />
            </SwiperSlide>
            <SwiperSlide>
              <Day3 />
            </SwiperSlide>
            <SwiperSlide>
              <Day4 />
            </SwiperSlide>
            <SwiperSlide>
              <Week1Video />
            </SwiperSlide>
            <SwiperSlide>
              <Day5 />
            </SwiperSlide>
            <SwiperSlide>
              <Day6 />
            </SwiperSlide>
            <SwiperSlide>
              <Day7 />
            </SwiperSlide>
            <SwiperSlide>
              <Day8 />
            </SwiperSlide>
            <SwiperSlide>
              <Day9 />
            </SwiperSlide>
            <SwiperSlide>
              <Week2Video />
            </SwiperSlide>
            <SwiperSlide>
              <Day10 />
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
    </div>
  );
};

export default Dailies;
