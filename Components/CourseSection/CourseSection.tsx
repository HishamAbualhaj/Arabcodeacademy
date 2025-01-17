/**
 * CourseSection Component
 *
 * This component fetches and displays courses from an API endpoint, organizing them into two
 * categories based on their availability status: "available" and "coming soon". Each category
 * is presented in a separate swiper slider. If no courses are fetched, a NotFound component is
 * rendered. The component integrates search functionality to filter through courses, enhancing
 * user interaction.
 *
 * @component
 * 
 * @returns {React.ReactElement}
 * Renders two sections, one for available courses and another for courses that are coming soon.
 * Each section uses a SwiperCustom component to display courses in a slider format. If no courses
 * are available, the NotFound component is displayed instead.
 *
 * @example
 * <CourseSection />
 *
 * This will render the course section with sliders filled with courses or a message indicating
 * no courses are available depending on the fetch results.
 */

import { SwiperSlide } from "swiper/react";
import SwiperCustom from "@/Components/SwiperCustom";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "../SearchBar";
import { colors } from "@/styles/global-info";
import CourseCard from "./CourseCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
import NotFound from "../NotFound/NotFound";


interface Course {
  id: number;
  title: string;
  price: number;
  trainers: { first_name: string; last_name: string }[];
  total_duration: number;
  total_videos: number;
  imageURL: string;
  status: string;
}

export const CourseSection = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/courses`
  );

  let courses: Course[] = [];
  if (response.ok) {
    const data = await response.json();
    if (Array.isArray(data.courses)) {
      courses = data.courses;
    }
  }
  if (!courses || courses.length === 0){
    return(<NotFound/>)
  } 
  const availableCourses = courses.filter((course) => course.status === "available");
  const comingSoonCourses = courses.filter((course) => course.status === "coming_soon");

  return (
    <>
      <Box>
        <Flex
          flexDirection={{ base: "column-reverse", "2xl": "row" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", xl: "flex-start", "2xl": "flex-end" }}
          px={{ base: "45px", xl: "245px" }}
          marginTop="50px"
          pb={{ "2xl": "10px" }}
          gap={{ xlDown: "15px" }}
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
          <SearchBar placeholder="مقدمة لمحرك الألعاب اليونيتي ....." />
        </Flex>
        <Box pb="10px" position="relative" marginTop="40px">
          <SwiperCustom
            px={{ base: "60px" }}
            maxW="1550px"
            swiperClass="swiper-section-1"
            nextBtn="swiper-next-1"
            prevBtn="swiper-prev-1"
            isPagination={false}
            breakpoint={{
              0: { slidesPerView: 1, spaceBetween: 40 },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            swiperslide={availableCourses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard
                  courseName={course.title}
                  price={course.price}
                  trainer={`${course.trainers[0]?.first_name || ""} ${
                    course.trainers[0]?.last_name || ""
                  }`}
                  numberOfHours={course.total_duration}
                  numberOfVedios={course.total_videos}
                  icon="/images/java.png"
                />
              </SwiperSlide>
            ))}
            sliderNumber={4}
            arrow={<Arrow_slider />}
            py={undefined}
          />
        </Box>
      </Box>

      <Box marginTop="40px" marginX="auto">
        <Flex
          justifyContent={{ base: "center", xl: "flex-start" }}
          alignItems="flex-end"
          px={{ base: 0, xl: "245px" }}
        >
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
        <Box position="relative" marginTop="40px">
          <SwiperCustom
            px={{ base: "60px" }}
            maxW="1550px"
            swiperClass="swiper-section-2"
            nextBtn="swiper-next-2"
            prevBtn="swiper-prev-2"
            isPagination={false}
            breakpoint={{
              0: { slidesPerView: 1, spaceBetween: 40 },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              1280: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            swiperslide={comingSoonCourses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard
                  courseName={course.title}
                  price={course.price}
                  trainer={`${course.trainers[0]?.first_name || ""} ${
                    course.trainers[0]?.last_name || ""
                  }`}
                  numberOfHours={course.total_duration}
                  numberOfVedios={course.total_videos}
                  icon="/images/java.png"
                />
              </SwiperSlide>
            ))}
            sliderNumber={4}
            arrow={<Arrow_slider />}
            py={undefined}
          />
        </Box>
      </Box>
    </>
  );
};
export default CourseSection;
