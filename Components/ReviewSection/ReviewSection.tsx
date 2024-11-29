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
    <Flex justify="center">
      <Box
      position="relative"
        maxW="1400px"
        height={{ base: "438px", xl: "639px", "2xl": "622px" }}
        py={{ base: "90px", xl: "151px", "2xl": "111px" }}
      >
        <Box marginTop="40px">
          <SwiperCustom
            swiperClass="swiper-section-4"
            nextBtn="swiper-next-4"
            prevBtn="swiper-prev-4"
            isPagination={false}
            breakpoint={{
              250: { slidesPerView: 1 },
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
    </Flex>
  );
};
export default ReviewSection;
