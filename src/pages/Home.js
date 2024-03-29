import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import useAnimate from "../hooks/useAnimate.js";

import Progress1 from "./progress/progress1.js";
import Progress2 from "./progress/progress2.js";
import Progress3 from "./progress/progress3.js";
import Progress4 from "./progress/progress4.js";
import FinalProduct from "./progress/finalProduct.js";
import Navbar from "../components/Navbar.js";
import Progress5 from "./progress/progress5.js";

const Home = () => {
  SwiperCore.use([Navigation, Pagination]);
  const useAnimation = useAnimate();

  useEffect(() => {
    useAnimation.onHome();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: useAnimation.isAnimate ? "0%" : "100%" }}
        animate={{ width: "100%" }}
        className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center scrollbar-none"
      >
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
                <Progress5 />
              </SwiperSlide>
              <SwiperSlide>
                <FinalProduct />
              </SwiperSlide>
              {/* <div className="swiper-button-prev" style={{ color: "white" }} />
            <div className="swiper-button-next" style={{ color: "white" }} /> */}
            </Swiper>
            {/* <div
            className="swiper-button-prev"
            style={{ color: "white", paddingLeft: "2rem", opacity: 0.5 }}
          />
          <div
            className="swiper-button-next"
            style={{ color: "white", paddingRight: "2rem", opacity: 0.5 }}
          /> */}
          </div>

          <div
            className="swiper-button-prev"
            style={{
              color: "white",
              paddingLeft: "10rem",
            }}
          ></div>
          <div
            className="swiper-button-next"
            style={{ color: "white", paddingRight: "10rem" }}
          ></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
