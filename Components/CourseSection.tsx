import { SwiperSlide } from "swiper/react";
import SwiperCustom from "@/Components/SwiperCustom";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { colors } from "@/styles/global-info";
import { courses } from "@/styles/global-info";
import CourseCard from "./CourseCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";

export const CourseSection = () => {
  return (
    <>
      <Box position="relative" marginX="auto" maxW="1550px">
        <Flex
          flexDirection={{ base: "column-reverse", "2xl": "row" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", xl: "flex-start", "2xl": "flex-end" }}
          height={{ base: "180px", xl: "252px", "2xl": "193px" }}
          px={{ base: "45px", xl: "245px" }}
          pt={{ base: "60px", xl: "117px", "2xl": "63px" }}
          pb={{ "2xl": "10px" }}
        >
          <Box
            borderBottomColor={colors.mainColor}
            borderBottomWidth="2px"
            textAlign="center"
            fontWeight={700}
            fontSize="23px"
            color={colors.mainColor}
          >
            الدورات التدريبه
          </Box>
          <SearchBar />
        </Flex>
        <Box marginTop="40px">
          <SwiperCustom
            swiperClass="swiper-section-1"
            nextBtn="swiper-next-1"
            prevBtn="swiper-prev-1"
            isPagination={false}
            breakpoint={{
              0: { slidesPerView: 1 },

              '800': {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              '1125':{
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1297: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              '1572':{
                slidesPerView: 3,
                spaceBetween: 0,
              },
              '1750': {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            swiperslide={courses.map((course) => {
              return (
                <SwiperSlide key={course.id}>
                  <CourseCard
                    courseName={course.name}
                    price={course.price}
                    trainer={course.trainer}
                    numberOfHours={course.time.hours}
                    numberOfMinutes={course.time.minutes}
                    numberOfVedios={course.time.minutes}
                    icon={course.image}
                  />
                </SwiperSlide>
              );
            })}
            sliderNumber={4}
            arrow={<Arrow_slider />}
          />
        </Box>
      </Box>

      <Box position="relative" marginTop="40px" marginX="auto" maxW="1550px">
        <Flex justifyContent={{base: "center",  xl: "flex-start"}} alignItems="flex-end" px={{base: 0, xl: "245px" }}>
          <Box
            borderBottomColor={colors.mainColor}
            borderBottomWidth="2px"
            textAlign="center"
            fontWeight={700}
            fontSize="23px"
            color={colors.mainColor}
          >
            قريباً
          </Box>
        </Flex>
        <Box marginTop="40px">
          <SwiperCustom
            swiperClass="swiper-section-2"
            nextBtn="swiper-next-2"
            prevBtn="swiper-prev-2"
            isPagination={false}
            breakpoint={{
              0: { slidesPerView: 1 },

              '800': {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              '1125':{
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1297: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              '1572':{
                slidesPerView: 3,
                spaceBetween: 0,
              },
              '1750': {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            swiperslide={courses.map((course) => {
              return (
                <SwiperSlide key={course.id}>
                  <CourseCard
                    courseName={course.name}
                    price={course.price}
                    trainer={course.trainer}
                    numberOfHours={course.time.hours}
                    numberOfMinutes={course.time.minutes}
                    numberOfVedios={course.time.minutes}
                    icon={course.image}
                    soon
                  />
                </SwiperSlide>
              );
            })}
            sliderNumber={4}
            arrow={<Arrow_slider />}
          />
        </Box>
      </Box>
    </>
  );
};
export default CourseSection;
