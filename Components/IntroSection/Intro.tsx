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
