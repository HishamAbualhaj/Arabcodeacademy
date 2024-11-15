import { SwiperSlide } from "swiper/react";
import SwiperCustom from "@/Components/SwiperCustom";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { colors } from "@/styles/global-info";
import { courses } from "@/data/data";
import CourseCard from "./CourseCard";
export const CourseSection = () => {
  return (
    <>
      <Flex
        flexDirection={{base: "column-reverse", "2xl": "row" }}
        justifyContent={{ base:"space-between"}}
        alignItems={{base:"center", xl: "flex-start", "2xl": "flex-end" }}
        height={{base: "180px", xl: "252px", "2xl": "193px" }}
        px={{base: "45px", xl: "245px" }}
        pt={{ base: "60px", xl: "117px", "2xl": "63px" }}
        pb={{ "2xl": "10px" }}
      >
        <Box
          width={"170px"}
          height={"34px"}
          borderBottomColor={colors.color1}
          borderBottomWidth={"2px"}
          textAlign={"center"}
          fontWeight={700}
          fontSize={ "23px" }
          color={colors.color1}
        >
          الدورات التدريبه
        </Box>
        <SearchBar />
      </Flex>
      <Box>
        <SwiperCustom
          swiperslide={courses.map((course) => {
            return (
              <SwiperSlide key={course.id} style={{ marginLeft: "10px" }}>
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
      <Flex justifyContent={"flex-start"} alignItems={"flex-end"} px={"245px"}>
        <Box
          width={"70px"}
          height={"40px"}
          borderBottomColor={colors.color1}
          borderBottomWidth={"2px"}
          textAlign={"center"}
          fontWeight={700}
          fontSize={ "23px" }
          color={colors.color1}
        >
          قريباً
        </Box>
      </Flex>

      <Box>
        <SwiperCustom
          swiperslide={courses.map((course) => {
            return (
              <SwiperSlide key={course.id} style={{ marginLeft: "10px" }}>
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
    </>
  );
};
export default CourseSection;
