import React from "react";
import CoursesCard from "@/Components/ResourcesCard";
import Image from "next/image";
import { Container, Flex } from "@chakra-ui/react";
import SwiperCustom from "./SwiperCustom";
import { SwiperSlide } from "swiper/react";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
const dataCard = [
  { id: 1, name: "دروس وانماط الميدجورني", imgPath: "/icons/book.png" },
  { id: 2, name: "بنك الأسئلة التقنية", imgPath: "/icons/list.png" },
  { id: 3, name: "قاموس المصطلحات التقنية", imgPath: "/icons/education.png" },
  { id: 4, name: "لغة الضاد", imgPath: "/icons/letter.png" },
  { id: 5, name: "دليل أدوات الذكاء الاصطناعي", imgPath: "/icons/ai.png" },
  { id: 6, name: "دروس الفيديو القصيرة", imgPath: "/icons/videoLogo.png" },
];

const ResourcesSection: React.FC = () => {
  return (
    <Flex justify="center">
      <Container
        bgColor='white'
        maxW="1400px"
        width="100%"
        height={{ base: "220px", lg: "350px", md: "333px", sm: "220px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
           <Container
          width={{ base: "240px", lg: "900px", md: "520px", sm: "240px" }}
          height={{ base: "297px", lg: "450px", md: "433px", sm: "297px" }}
          shadow="0px 1px 20px 3px rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          bgColor='white'
        >
          <SwiperCustom
            swiperClass="swiper-section-3"
            nextBtn="swiper-next-3"
            prevBtn="swiper-prev-3"
            breakpoint={{
              340: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            isPagination={false}
            sliderNumber={3}
            arrow={<Arrow_slider />}
            swiperslide={
              dataCard.map((item) => (
              <SwiperSlide key={item.id}>
                <CoursesCard
                  img={
                    <Image
                      src={item.imgPath}
                      alt={item.name}
                      width={65}
                      height={65}
                    />
                  }
                  courseName={item.name}
                />
              </SwiperSlide>
            ))}
          />
       
        </Container>
      </Container>
    </Flex>
  );
};

export default ResourcesSection;
