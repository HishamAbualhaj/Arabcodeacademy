import "../styles/swiper_home.css";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Arrow from "@/public/icons/swiper-arrow.svg";
import { Navigation, Pagination } from "swiper/modules";
interface SwiperData {
  swiperslide: Array<ReactNode>;
  isPanigation: boolean;
  sliderNumber: number;
}
function SwiperCustom({ swiperslide, isPanigation , sliderNumber}: SwiperData) {
  return (
    <div>
      <div className="swiper-button-next custom-next">
        <Arrow width="50" height="50" />
      </div>
      <div className="swiper-button-prev custom-prev">
        <Arrow width="50" height="50" />
      </div>
      <Swiper
        pagination={isPanigation}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={50}
        slidesPerView={sliderNumber}
      >
        {swiperslide.map((slide) => (
          <SwiperSlide>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperCustom;
