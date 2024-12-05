import React from "react";
import SwiperCustom from "../SwiperCustom";
import { Flex, Text } from "@chakra-ui/react";
import { hero } from "@/styles/global-info";
import landing from "@/styles/landing.module.css";
import CustomButton from "../CustomButton";
import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
import Arrow from "@/public/icons/swiper-arrow.svg";
import { SwiperSlide } from "swiper/react";
function Landing() {
  return (
    <SwiperCustom
      swiperslide={[
        <SwiperSlide>
          <Slide />
        </SwiperSlide>,
        <SwiperSlide>
          <Slide />
        </SwiperSlide>,
      ]}
      isPagination={true}
      sliderNumber={1}
      swiperClass={""}
      nextBtn={"swiper-next-4"}
      prevBtn={"swiper-prev-4"}
      breakpoint={undefined}
      arrow={<Arrow />}
      maxW="100%"
    />
  );
}
function Slide() {
  return (
    <>
      <Flex
        width="100%"
        className={[landing.bg_image, landing.full_screen_h].join(" ")}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div className={``}>
          <Flex
            alignItems={{ base: "center", md: "start" }}
            direction={{ base: "column-reverse", xl: "row-reverse" }}
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
              <Flex
                justifyContent={{ base: "center", md: "start" }}
                width="100%"
              >
                <CustomButton
                  text="المسارات التعليمية"
                  px={"51px"}
                  py={"20px"}
                  bgColor="rgba(0, 190, 152, 1)"
                  rounded={10}
                  color="white"
                  fontSize={17}
                  fontWeight={900}
                  icon={<Chalkboard width="30" height="24" />}
                  ButtonColor={"green"}
                  sizeType={"secondary"}
                />
              </Flex>
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
export default Landing;
