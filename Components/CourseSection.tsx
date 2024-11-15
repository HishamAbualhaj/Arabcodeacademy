import { SwiperSlide } from "swiper/react";
import SwiperCustom from "@/Components/SwiperCustom";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { colors } from "@/styles/global-info";
import { courses } from "@/data/data";
import CourseCard from "./CourseCard";
import LandingPage from "@/styles/landing.module.css";
export const CourseSection = () => {
  return (
    <>
      <Box position="relative" marginX="auto" maxW="1550px">
        <Flex
          flexDirection={{ base: "column-reverse", "2xl": "row" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", xl: "flex-start", "2xl": "flex-end" }}
          
        >
          <Box
            borderBottomColor={colors.color1}
            borderBottomWidth="2px"
            textAlign="center"
            fontWeight={700}
            fontSize="23px"
            color={colors.color1}
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
            isPagination={false}
            sliderNumber={4}
          />
        </Box>
      </Box>

      <Box position="relative" marginTop="40px" marginX="auto" maxW="1550px">
        <Flex justifyContent="flex-start" alignItems="flex-end">
          <Box
            borderBottomColor={colors.color1}
            borderBottomWidth="2px"
            textAlign="center"
            fontWeight={700}
            fontSize="23px"
            color={colors.color1}
          >
            قريباً
          </Box>
        </Flex>
        <Box marginTop="40px">
          <SwiperCustom
          swiperClass="swiper-section-2"
            nextBtn="swiper-next-2"
            prevBtn="swiper-prev-2"
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
            isPagination={false}
            sliderNumber={4}
          />
        </Box>
      </Box>
    </>
  );
};
export default CourseSection;
