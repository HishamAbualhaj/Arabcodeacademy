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
}
function SwiperCustom({ swiperslide, isPagination , sliderNumber}: SwiperData) {
  return (
    <Box position={'relative'}>
      <div className="swiper-button-next custom-next" style={{position:'absolute'}}>
        <Arrow width="50" height="50" />
      </div>
      <div className="swiper-button-prev custom-prev">
        <Arrow width="50" height="50" />
      </div>
      <Swiper
        pagination={isPagination}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
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