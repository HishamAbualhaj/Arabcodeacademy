import React, { ReactNode } from "react";
import { Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Arrow from "@/public/icons/swiper-arrow.svg";
import { Navigation, Pagination } from "swiper/modules";

interface SwiperData {
  children: ReactNode;
  isPanigation: boolean;
  sliderNumber: number;
  
}

function SwiperCustom({ children, isPanigation, sliderNumber}: SwiperData) {
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
        spaceBetween={0}
        slidesPerView={sliderNumber}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
     
      >
        {children}
      </Swiper>
    </div>
  );
}

export default SwiperCustom;
