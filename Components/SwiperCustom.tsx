"use client";
import "../styles/swiper_home.css";
import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Arrow from "@/public/icons/swiper-arrow.svg";
import { Navigation, Pagination } from "swiper/modules";
import { Box } from "@chakra-ui/react";

interface SwiperData {
  swiperslide: Array<ReactNode>;
  isPagination: boolean;
  sliderNumber: number;
  swiperClass: string;
  nextBtn: string;
  prevBtn: string;
}
function SwiperCustom({
  swiperslide,
  isPagination,
  sliderNumber,
  swiperClass,
  nextBtn,
  prevBtn,
}: SwiperData) {
  return (
    <Box px="40px" className={swiperClass}>
      <div className={`swiper-button-next custom-next ${nextBtn}`}>
        <Arrow width="50" height="50" />
      </div>
      <div className={`swiper-button-prev custom-prev ${prevBtn}`}>
        <Arrow width="50" height="50" />
      </div>
      <Swiper
        pagination={isPagination}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${nextBtn}`,
          prevEl: `.${prevBtn}`,
        }}
        breakpoints={{
          350: { slidesPerView: 1 },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        spaceBetween={50}
        slidesPerView={sliderNumber}
      >
        {swiperslide}
      </Swiper>
    </Box>
  );
}
export default SwiperCustom;
