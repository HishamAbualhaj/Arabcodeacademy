/** 
 * Intro Component 
 *  
 * The Intro component is a responsive section designed for presenting an introductory message with visual and textual content.
 *  
 * @example 
 * <Intro /> 
 *  
 * @returns {React.ReactElement} An introduction details. 
 */


import { Text, Flex } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import letter from "./letter_transparent.png";
import { useBreakpointValue } from "@chakra-ui/react";
const Intro = () => {
  const letterImageStyle = {
    width: useBreakpointValue({ base: 150, lg: 350, "2xl": 400 }),
    height: useBreakpointValue({ base: 79, lg: 183, "2xl": 209 }),
  };
  const introText = useBreakpointValue({
    base: (
      <Text
        width= "250px"
        height= "285px"
        fontWeight= {400}
        color= "white"
        bgColor= "transparent"
        lineHeight= "25px"
        textAlign= "center"
        fontSize= "14px"
      >
        في الأكاديمية العربية للبرمجة، نسعى
        <br />
        دائمًا إلى تقديم محتوى تعليمي يساهم
        <br />
        في تمكين وتطوير مهارات المبرمجين
        <br />
        الناطقين باللغة العربية. ومن هذا
        <br />
        المنطلق، يهدف هذا القسم إلى تبسيط
        <br />
        المفاهيم البرمجية لأي شخص، سواء
        <br />
        كان مبتدئًا أو محترفًا، من فهمها
        <br />
        واستيعابها بسهولة. نحرص على أن
        <br />
        تكون الشروحات دقيقة وشاملة، مع
        <br />
        توفير أمثلة عملية تساعد المتعلمين
        <br />
        على تطبيق ما يتعلمونه بشكل فعّال.
      </Text>
    ),
    lg: (
      <Text
        width= "700px"
        height= "255px"
        fontWeight= {700}
        color= "white"
        bgColor= "transparent"
        lineHeight= "40px"
        textAlign= "center"
        fontSize= "25px"
      >
        في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى
        <br />
        تعليمي يساهم في تمكين وتطوير مهارات المبرمجين الناطقين
        <br />
        باللغة العربية. ومن هذا المنطلق، يهدف هذا القسم إلى تبسيط
        <br />
        المفاهيم البرمجية لأي شخص، سواء كان مبتدئًا أو محترفًا، من
        <br />
        فهمها واستيعابها بسهولة. نحرص على أن تكون الشروحات
        <br />
        دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على
        <br />
        .تطبيق ما يتعلمونه بشكل فعّال.
      </Text>
    ),
    "2xl": (
      <Text
        width= "633px"
        height= "360px"
        fontWeight= {700}
        color= "white"
        bgColor= "transparent"
        lineHeight= "40px"
        textAlign= "right"
        fontSize= "27px"
      >
        في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم
        <br />
        محتوى تعليمي يساهم في تمكين وتطوير مهارات
        <br />
        المبرمجين الناطقين باللغة العربية. ومن هذا المنطلق،
        <br />
        يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي
        <br />
        شخص، سواء كان مبتدئًا أو محترفًا، من فهمها
        <br />
        واستيعابها بسهولة. نحرص على أن تكون الشروحات
        <br />
        دقيقة وشاملة، مع توفير أمثلة عملية تساعد
        <br />
        المتعلمين على تطبيق ما يتعلمونه بشكل فعّال.
      </Text>
    ),
  });
  
  return (
    <Flex
      width="100%"
      height={{ base: "533px", lg: "801px", "2xl": "1068px" }}
      flexDirection={{ base: "column", "2xl": "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
      bgColor="transparent"
      gap={{ lg: "37px", "2xl": "150px" }}
      position="relative"
      zIndex={"1"}
    >
      <Flex
        width={{ base: "222px", lg: "700px", "2xl": "633px" }}
        height={{ base: "140px", lg: "281px", "2xl": "325px" }}
        bgColor="transparnet"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          src={letter}
          alt="letter"
          width={letterImageStyle.width}
          height={letterImageStyle.height}
          loading= "lazy"
        />
        <Text
          textAlign="center"
          padding={0}
          color="white"
          width={{ base: "66px", lg: "183px", "2xl": "292px" }}
          height="40px"
          fontWeight={700}
          fontSize={{ base: "18px", lg: "50px", "2xl": "80px" }}
          lineHeight="40px"
          mt={{ base: "22px", lg: "58px", "2xl": "70px" }}
          mb={{ base: 0, "2xl": "107px" }}
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
        {introText}
        <CustomButton
          text="لغه الضاد"
          ButtonColor="orange"
          sizeType="secondary"
        ></CustomButton>
      </Flex>
    </Flex>
  );
};

export default Intro;
