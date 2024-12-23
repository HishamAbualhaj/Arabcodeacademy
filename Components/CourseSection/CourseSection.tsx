import { SwiperSlide } from "swiper/react";
import SwiperCustom from "@/Components/SwiperCustom";
import { Box, Flex,VStack } from "@chakra-ui/react";
import SearchBar from "../SearchBar";
import { colors } from "@/styles/global-info";
import CourseCard from "./CourseCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
import Loader from "@/Components/Loader";
import NotFound from "@/Components/NotFound";
import { useEffect, useState } from "react";

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
export const CourseSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  const getCourses = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/courses`
      );
  
      if (!response.ok) {
        throw new Error(`Error fetching courses: ${response.status}`);
      }
  
      const data = await response.json(); 
      if (Array.isArray(data.courses)) {
        setCourses(data.courses);
      } else {
        console.error("Expected an array, but received:", typeof data, data);
        setCourses([]); 
        
      }
      setLoader(false);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      setCourses([]);
      setLoader(false)
    }
  };
  

  useEffect(() => {
    getCourses();
  }, []);
if(loader){
  return(
  <VStack gap="20" marginTop="8%">
  <SearchBar placeholder="مقدمة لمحرك الألعاب اليونيتي ....."
  />
  <Loader/>
  </VStack>
)
}
if(courses.length===0){
  return(
    <VStack gap="20" marginTop="8%">
    <SearchBar  placeholder="مقدمة لمحرك الألعاب اليونيتي ....." />
  <NotFound/>
  </VStack>
)
} 
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
          <SearchBar  placeholder="مقدمة لمحرك الألعاب اليونيتي ....." />
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
            swiperslide={Array.isArray(courses)?(
              courses
                .filter((course) => course.status === "available")
                .map((course) => (
                  <SwiperSlide key={course.id}>
                    <CourseCard
                      courseName={course.title}
                      price={course.price}
                      trainer={`${course.trainers[0]?.first_name || ""} ${
                        course.trainers[0]?.last_name || ""
                      }`}
                      numberOfHours={course.total_duration}
                      numberOfVedios={course.total_videos}
                     // icon={course.imageURL?course.imageURL:"@/public/images/html.jpg"}
                     icon="/images/java.jpg"
                    />
                  </SwiperSlide>
                ))):[]}
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
            swiperslide={Array.isArray(courses)?(
              courses
                .filter((course) => course.status === "coming_soon" )
                .map((course) => (
                  <SwiperSlide key={course.id}>
                    <CourseCard
                      courseName={course.title}
                      price={course.price}
                      trainer={`${course.trainers[0]?.first_name || ""} ${
                        course.trainers[0]?.last_name || ""
                      }`}
                      numberOfHours={course.total_duration}
                      numberOfVedios={course.total_videos}
                      //icon={course.imageURL}
                      icon="/images/java.jpg"
                    />
                  </SwiperSlide>
                ))):[]}
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
