/**
 * SwiperCustom Component
 *
 * A flexible and customizable swiper component built using the `swiper/react` library. 
 * This component is designed to handle various use cases, including slideshows, carousels, and other interactive displays.
 *
 * @component
 * @param {Object} props - The properties required to configure and render the SwiperCustom component.
 * @param {boolean} props.isPagination - Whether to display pagination dots for the swiper.
 * @param {Array<ReactNode>} props.swiperslide - An array of React nodes representing the content of each slide.
 * @param {number} props.sliderNumber - The default number of slides visible in the viewport.
 * @param {string} props.swiperClass - Custom class name for the swiper container.
 * @param {string} props.nextBtn - Class name for the next navigation button.
 * @param {string} props.prevBtn - Class name for the previous navigation button.
 * @param {Object} props.breakpoint - An object defining responsive breakpoints for the swiper.
 * @param {ReactNode} props.arrow - Custom arrow icon for navigation buttons.
 * @param {any} [props.px] - Horizontal padding for the swiper container.
 * @param {any} [props.py] - Vertical padding for the swiper container (default is "0px").
 * @param {string} [props.maxW="1550px"] - Maximum width of the swiper container.
 * @param {Object} rest - Additional props to pass to the Swiper component.
 *
 * Features:
 * - Supports responsive breakpoints for different screen sizes.
 * - Customizable navigation buttons with user-defined icons.
 * - Optional pagination dots for slide indication.
 * - Flexibility to adjust container width, padding, and additional styles.
 *
 * @returns {React.ReactElement}
 * Renders a fully functional swiper component with navigation, pagination, and responsive design.
 *
 * Usage Example:
 * ```jsx
 * <SwiperCustom
 *   isPagination={true}
 *   swiperslide={[
 *     <SwiperSlide key={1}>Slide 1</SwiperSlide>,
 *     <SwiperSlide key={2}>Slide 2</SwiperSlide>,
 *   ]}
 *   sliderNumber={3}
 *   swiperClass="custom-swiper"
 *   nextBtn="custom-next-btn"
 *   prevBtn="custom-prev-btn"
 *   breakpoint={{
 *     768: { slidesPerView: 2 },
 *     1024: { slidesPerView: 3 },
 *   }}
 *   arrow={<ArrowIcon />}
 *   px="20px"
 * />
 * ```
 *
 * This component is ideal for creating dynamic slideshows, featured content carousels, or any application requiring a swiper interface.
 */


"use client";
import "../styles/swiper_home.css";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box } from "@chakra-ui/react";

interface SwiperData {
  isPagination: boolean;
  swiperslide: Array<ReactNode>;
  sliderNumber: number;
  swiperClass: string;
  nextBtn: string;
  prevBtn: string;
  breakpoint: any;
  px: any;
  py: any;
  arrow: ReactNode;
  maxW: string;
}

function SwiperCustom({
  isPagination,
  swiperslide,
  sliderNumber,
  swiperClass,
  nextBtn,
  prevBtn,
  breakpoint,
  arrow,
  px,
  maxW = "1550px",
  py="0px",
  ...rest
}: SwiperData) {
  return (
    <Box
      px={px}
      maxW={maxW}
      marginX="auto"
      className={swiperClass}
    >
      <div className={`swiper-button-next custom-next ${nextBtn}`}>{arrow}</div>
      <div className={`swiper-button-prev custom-prev ${prevBtn}`}>{arrow}</div>
      <Swiper
        pagination={isPagination}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${nextBtn}`,
          prevEl: `.${prevBtn}`,
        }}
        breakpoints={breakpoint}
        spaceBetween={0}
        slidesPerView={sliderNumber}
        className="swiper"
        {...rest}
      >
        {swiperslide}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
