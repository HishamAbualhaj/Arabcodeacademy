import React from "react";
import CoursesCard from '@/Components/ResourcesCard';
import Image from "next/image";
import { Container } from "@chakra-ui/react";
import SwiperCustom from "./SwiperCustom";
import { SwiperSlide } from "swiper/react";

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
    <Container
      width="100%"
      height={{ base: "220px", lg: "350px", md: "333px", sm: "220px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    
    >
        <Container
        width={{ base: "204px", lg: "900px", md: "520px", sm: "204px" }}
        height={{ base: "297px", lg: "450px", md: "433px", sm: "297px" }}
        shadow="0px 1px 20px 3px rgba(0, 0, 0, 0.2)"
        borderRadius="10px"
      >
     
        <SwiperCustom isPanigation={false} sliderNumber={3}   >
   
          {dataCard.map((item) => (
            <SwiperSlide key={item.id}>
              <CoursesCard
                img={<Image src={item.imgPath} alt={item.name} width={65} height={65} />}
                courseName={item.name}
              />
            </SwiperSlide>
          ))}
        
        </SwiperCustom>
        </Container>
     </Container>
  );
};

export default ResourcesSection;
