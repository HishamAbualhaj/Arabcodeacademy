/**
 * Landing Component
 *
 * This component is the main landing section of the website, prominently featuring a swiper slider
 * that displays multiple slides. Each slide contains dynamic content including text and a custom
 * button that guides users to major educational tracks. It's designed to capture user interest and
 * direct them towards key areas of the site.
 *
 * @component
 *
 * @returns {React.ReactElement}
 * Renders a swiper slider that cycles through multiple `Slide` components, each providing a snapshot
 * of what the platform offers. The component is responsive, ensuring that the slider and its contents
 * adapt to different screen sizes for optimal viewing experience.
 *
 * Features:
 * - Uses `SwiperCustom` for a robust and flexible slider experience with pagination.
 * - Dynamically generates swiper slides using an array of `SwiperSlide` components.
 * - Includes navigation buttons customized with icons for moving through slides.
 *
 * Usage:
 * This component should be placed at the top of a homepage or a significant landing page to provide
 * a visually engaging introduction to the site's offerings.
 */

/**
 * Slide Component
 *
 * A component used within the `Landing` component's swiper slider. It displays a set of stylized text
 * elements and a custom button, providing a concise and engaging introduction to a specific aspect of
 * the website, such as educational tracks. The design and layout are tailored to create visual appeal
 * and enhance readability.
 *
 * @returns {React.ReactElement}
 * Renders a slide for use in the `Landing` component's swiper slider. Each slide contains a headline,
 * supplementary text, and a custom button that links to further details about the platform's offerings.
 * The layout adjusts based on screen size to maintain aesthetic quality and user engagement.
 *
 * Features:
 * - Responsive text sizing and layout changes to accommodate various device sizes.
 * - Custom button that links to detailed sections, enhancing site navigation and user engagement.
 * - Utilizes Chakra UI for styling and layout, providing a consistent and modern user interface.
 *
 * Example Slide Content:
 * - Primary headline with bold styling and strategic alignment based on screen size.
 * - Secondary text blocks that further describe the headline's topic.
 * - A custom button that promotes user interaction and exploration of site content.
 */


import React from "react";
import SwiperCustom from "../SwiperCustom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { hero } from "@/styles/global-info";
import landing from "@/styles/landing.module.css";
import CustomButton from "../CustomButton";
import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
import Arrow from "@/public/icons/swiper-arrow.svg";
import { SwiperSlide } from "swiper/react";
function Landing() {
  return (
    <Box position="relative">
      <SwiperCustom
        swiperslide={[
          <SwiperSlide key={1}>
            <Slide />
          </SwiperSlide>,
          <SwiperSlide key={2}>
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
        px={undefined}
        py="10px"
      />
    </Box>
  );
}
function Slide() {
  return (
    <>
      <Flex
        width="100%"
        py={{base:"15px", md: "0px"}}
        pb={{base:"40px", md: "0px"}}
        className={[landing.bg_image, landing.full_screen_h].join(" ")}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div>
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
                justifyContent={{ base: "center", "2xl": "start" }}
                width="100%"
              >
                <CustomButton
                  text="المسارات التعليمية"
                  bgColor="rgba(0, 190, 152, 1)"
                  rounded={10}
                  color="white"
                  fontSize={17}
                  fontWeight={900}
                  icon={<Chalkboard width="30" height="24" />}
                  ButtonColor={"green"}
                  sizeType={"primary"}
                />
              </Flex>
            </Flex>

            <Text
              textAlign={{ base: "center", xl: "right" }}
              fontSize={{ base: "40px", lg: "50px", xl: "40px" }}
              lineHeight={{ base: "48px", lg: "60px", xl: "48px" }}
              fontWeight={900}
              maxW={{ base: "285px", md: "562px", xl: "640px" }}
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
