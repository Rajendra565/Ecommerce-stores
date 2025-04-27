// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Man from "../assets/man1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <div className="">
        <SwiperSlide>
          <section class=" bg-[#d6d2d2a6] m-2 h-96">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#000]">
                  Payments tool for software companies
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Insta Cool Look,All Eyrs you Fits
                </p>
                <Link
                  to=""
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-[#000]"
                >
                  View More
                </Link>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex h-full">
                <img
                  src="https://ik.imagekit.io/4sjmoqtje/tr:w-1480,c-at_max/cdn/shop/files/4-slider-banner-india-mens-desktop-2800x1050-27-3-25.jpg?v=1743509002"
                  alt="mockup"
                  className=" h-full cursor-pointer"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}

export default Hero;
