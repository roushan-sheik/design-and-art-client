import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide1"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Comic Strip Drawing</h2>
            
            </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide2"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Pencil Sketch Portrait</h2>
            </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide3"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Realistic Oil Portrait</h2>
          
            </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide4"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Mountain view canvas</h2>
           
            </div></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}