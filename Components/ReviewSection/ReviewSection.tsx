"use client";
import { Box } from "@chakra-ui/react";
import SwiperCustom from "../SwiperCustom";
import { reviewCards } from "@/styles/global-info";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
import { Flex } from "antd";
const ReviewSection = ({}) => {
  return (
    <Box py={{ base: "90px", xl: "151px", "2xl": "111px" }}>
      <Box position="relative">
        <SwiperCustom
          px={{ base: "60px" }}
          maxW="1550px"
          swiperClass="swiper-section-4"
          nextBtn="swiper-next-4"
          prevBtn="swiper-prev-4"
          isPagination={false}
          breakpoint={{
            0: { slidesPerView: 1, spaceBetween: 40 },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          swiperslide={reviewCards.map((reviewCard) => {
            return (
              <SwiperSlide key={reviewCard.id}>
                <ReviewCard
                  name={reviewCard.name}
                  comment={reviewCard.comment}
                  rating={reviewCard.rating}
                  image={reviewCard.image}
                  date={reviewCard.date}
                />
              </SwiperSlide>
            );
          })}
          sliderNumber={3}
          arrow={
            <Box width={{ base: "40px", xl: "80px", "2xl": "70px" }}>
              <Arrow_slider />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
export default ReviewSection;
