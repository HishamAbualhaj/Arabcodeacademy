import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { Image as ImageChakara } from "@chakra-ui/react";
import React from "react";
import QuizzType from "./QuizzType";
import test_skill from "@/public/icons/test_skills.png";
import code from "@/public/icons/code.png";
import exams from "@/public/icons/exams.png";
import CustomButton from "../CustomButton/CustomButton";
import Exams from "@/public/icons/exams.svg";
const QuizzSection: React.FC = () => {
  return (
    <>
      <Box
        bgGradient="to-r"
        gradientFrom="#462576"
        gradientTo="#783BA2"
        display="flex"
        justifyContent="center"
        px="15px"
        py={{ base: "40px", xl: "100px" }}
      >
        <Box
          flex="1"
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent="space-between"
          display="flex"
          maxW={{ base: "700px", md: "900px", xl: "1250px" }}
        >
          <Box display="flex" justifyContent="center">
            <ImageChakara src="images/people.png" alt="Quiz Section Image" />
          </Box>

          <Flex alignItems={{base:'center' , xl:'start'}} flexDirection="column">
            <QuizzType
              title="اختبر قدراتك"
              paragraph="تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة. من خلال خدمة الامتحان البرمجي الإلكتروني"
              icon={
                <Image width={25} height={25} src={test_skill} alt="icon" />
              }
            />
            <QuizzType
              title="قم بالاختيار"
              paragraph="يمكنك اختيار اللغة البرمجية التي تود اختبار معرفتك بها سواء كانت Python, Java, JavaScript أو أي لغة أخرى من اللغات المتاحة"
              icon={<Image width={25} height={25} src={code} alt="icon" />}
            />
            <QuizzType
              title="اعرف ترتيبك"
              paragraph="قم برفع تقييمك لترتيب قدراتك بين الطلاب المتقدمين للاختبارات، مما سيمكنك من معرفة درجة التميز والرتب بين أقرانك."
              icon={<Image width={25} height={25} src={exams} alt="icon" />}
            />

            <CustomButton
              px={{
                base: "20px",
                xl: "30px",
                "2xl": "45px",
              }}
              py={{
                base: "17px",
                "2xl": "18px",
              }}
              marginRight={{base:'0px' , xl:'65px'}}
              marginTop="20px"
              width="fit-content"
              sizeType="primary"
              text="قسم الامتحانات "
              icon={<Exams width="35px" height="35px" />}
              ButtonColor="orange"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default QuizzSection;
