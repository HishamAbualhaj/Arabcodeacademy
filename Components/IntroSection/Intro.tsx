/**
 * Intro Component
 *
 * This component serves as an introduction or hero section for the Arabic Academy of Programming,
 * featuring dynamic text and image content that adapts based on the viewport size. It includes a 
 * visual representation through an image and stylized text that provides a brief introduction to 
 * the academy's mission and offerings. Additionally, it contains a custom button that may lead 
 * to more detailed content.
 *
 * @component
 *
 * @returns {React.ReactElement}
 * Renders a responsive introduction section with an image and descriptive text that adjusts based
 * on breakpoint values. The layout changes from a column orientation on smaller screens to a row 
 * orientation on larger screens, ensuring optimal readability and visual balance across devices.
 *
 * Features:
 * - Responsive design that changes layout and content sizing based on the viewport size using 
 *   Chakra UI's `useBreakpointValue`.
 * - An image that visually complements the introduction text, enhancing the aesthetic appeal and 
 *   engagement of the section.
 * - Custom button that potentially leads to further detailed content, encouraging user interaction.
 * - Text content that dynamically adjusts for clarity and emphasis depending on the device, 
 *   ensuring the message is effectively communicated.
 *
 * Usage:
 * This component is typically used at the top of a homepage or a significant landing page to provide
 * visitors with a clear and attractive overview of the academy's goals and how it serves its audience.
 */

import { Text, Flex, AbsoluteCenter } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";
import letter from "./letter_transparent.png";
import Details from "@/public/icons/detail.svg";
import { useBreakpointValue } from "@chakra-ui/react";
const Intro = () => {
  const letterImageStyle = {
    width: useBreakpointValue({ base: 150, lg: 350, xl: 400 }),
    height: useBreakpointValue({ base: 79, lg: 183, xl: 209 }),
  };

  return (
    <AbsoluteCenter>
      <Flex
        width={{ base: "400px", md: "720", lg: "990px", xl: "1200px" }}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        bgColor="transparent"
        gap={{ lg: "37px", "2xl": "150px" }}
        position="absolute"
        zIndex="1"
        marginTop={{ base: "30px", md: "20px" }}
      >
        <Flex
          bgColor="transparnet"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Image
            src={letter}
            width={letterImageStyle.width}
            height={letterImageStyle.height}
            alt="letter"
            loading="lazy"
          />
          <Text
            textAlign="center"
            padding={0}
            color="white"
            fontWeight={700}
            fontSize={{ base: "18px", lg: "50px", "2xl": "80px" }}
            lineHeight="40px"
            marginTop="25px"
          >
            لغة ضاد
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent={{ base: "center", "2xl": "flex-start" }}
          alignItems={{ base: "center", "2xl": "flex-start" }}
          gap={{ lg: "35px", "2xl": 0 }}
        >
          <Text
            textAlign={{ base: "center", xl: "right" }}
            fontSize={{ base: "19px", md: "25px" }}
            minW={{ md: "450px" }}
            maxW="250px"
          >
            في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي
            يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن
            هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص،
            سواء كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن
            تكون الشروحات دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على
            تطبيق ما يتعلمونه بشكل فعّال.
          </Text>
          <CustomButton
            marginTop="20px"
            alignSelf={{ base: "center", xl: "start" }}
            text="لغه الضاد"
            ButtonColor="orange"
            sizeType="secondary"
            icon={<Details />}
          ></CustomButton>
        </Flex>
      </Flex>
    </AbsoluteCenter>
  );
};

export default Intro;
