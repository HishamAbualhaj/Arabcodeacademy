"use client";
import React from "react";
import DiscountBanner from "../Components/DiscountBanner";

import hero from "../data/data";
import landing from "../styles/landing.module.css";
import "../styles/swiper_home.css";
import { Text } from "@chakra-ui/react";

import { Flex } from "@chakra-ui/react";
import SwiperCustom from "../Components/SwiperCustom";
import Button from "../Components/Button";

import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
import Image from "next/image";
import girl from "@/public/images/girl_study.png";
import { Promo } from "@/Components/Promo";
export default function Home() {
  return (
    <>
      {/* <DiscountBanner announcementText="خصومات بنسبة 20% على الكورسات" /> */}
      <div className={landing.max_container}>
        <Task />
      </div>
      {/* <SwiperCustom
        swiperslide={[<Slide />, <Slide />]}
        isPanigation={true}
        sliderNumber={1}
      /> */}
    </>
  );
}
function Task() {
  return (
    <Flex
      gap={{ base: "50px", xl: "20px" }}
      px={{base:"20px" ,md:'40px' , xl:'50px'}}
      py={"70px"}
      width={"100%"}
      height={"100%"}
      alignItems={{base:'center' , xl:'start' ,'2xl':'center'}}
      justifyContent={"space-between"}
      direction={{ base: "column-reverse", xl: "row" }}
    >
      <Flex direction="column" alignItems="center">
        <Promo px={["20px" , "30px" , '50px']} py={['20px','50px',"80px"]}>
          <Text
            fontWeight={700}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ base: "23px" }}
          >
            التجربة التعليمية في الأكاديمية العربية للبرمجة
          </Text>
          <Text
            maxW={{ base: "640px" }}
            marginTop={{ base:'10px', md:'50px', xl: "100px" }}
            lineHeight={{ base: "30px" }}
            fontWeight={500}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ base: "15px" }}
          >
            الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على
            إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات
            العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة
            وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق
            والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور
            مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث
            التقنيات والأساليب التعليمية.
          </Text>
        </Promo>
        <div style={{ marginTop: "40px" }}>
          <Button
            text="المسارات التعليمية"
            px={"51px"}
            py={"20px"}
            bgColor="rgba(0, 190, 152, 1)"
            rounded={10}
            color="white"
            fontSize={17}
            fontWeight={900}
            icon={<Chalkboard width="30" height="24" />}
          />
        </div>
      </Flex>
      <Image src={girl} layout="Fill" alt="girl studying" />
    </Flex>
  );
}


function Slide() {
  return (
    <>
      <Flex
        className={[landing.bg_image, landing.full_screen_h].join(" ")}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div className={`${landing.container}`}>
          <Flex
            alignItems={{ base: "center", md: "start" }}
            direction={{ base: "column-reverse", xl: "row" }}
            gap={20}
          >
            <Flex
              alignItems={{ base: "center", xl: "end" }}
              gap={50}
              direction={{ base: "column-reverse", md: "column" }}
              align="end"
            >
              <div className="text">
                <Text
                  textAlign={{ base: "center", xl: "right" }}
                  fontSize={{ base: "20px", lg: "27px", xl: "23px" }}
                  lineHeight={"27.6px"}
                  fontWeight={900}
                  maxW={{ base: "400px", md: "690px", xl: "685px" }}
                >
                  {hero[0].secondary_text}
                </Text>
                <Text
                  textAlign={{ base: "center", xl: "right" }}
                  fontSize={{ base: "20px", lg: "27px", xl: "23px" }}
                  lineHeight={"27.6px"}
                  fontWeight={900}
                  marginTop={"25px"}
                  maxW={{ base: "400px", md: "690px", xl: "685px" }}
                >
                  {hero[0].secondary_text_mt}
                </Text>
              </div>
              <Button
                text="المسارات التعليمية"
                px={"51px"}
                py={"20px"}
                bgColor="rgba(0, 190, 152, 1)"
                rounded={10}
                color="white"
                fontSize={17}
                fontWeight={900}
                icon={<Chalkboard width="30" height="24" />}
              />
            </Flex>

            <Text
              textAlign={{ base: "center", xl: "right" }}
              fontSize={{ base: "40px", lg: "50px", xl: "40px" }}
              lineHeight={{ base: "45px", lg: "60px", xl: "48px" }}
              fontWeight={900}
              maxW={{ base: "220px", md: "562px", xl: "640px" }}
            >
              {hero[0].primary_text}
            </Text>
          </Flex>
        </div>
      </Flex>
    </>
  );
}
