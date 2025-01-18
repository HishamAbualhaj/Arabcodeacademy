/**
 * QuizzSection Component
 *
 * A dynamic section of a web application designed to engage users with quizzes related to programming. This
 * component uses a visually appealing layout with interactive elements to offer users a way to test their
 * programming skills, choose programming languages for quizzes, and see their rankings among other participants.
 *
 * @component
 *
 * Features:
 * - Displays a flexible grid layout that adapts to different screen sizes, focusing on providing a responsive user experience.
 * - Incorporates visually distinct areas for each quiz type with related information and interactive options.
 * - Uses a gradient background to create a vibrant and engaging visual appeal.
 * - Each quiz type is represented with an icon and includes a brief description and, optionally, a button for further actions.
 *
 * @returns {React.ReactElement}
 * Renders a section with a gradient background containing multiple `GridItem` elements. Each item displays
 * a type of quiz available to the user, enriched with icons and descriptive texts. The layout ensures that
 * the information is well-organized and easily accessible, enhancing the overall user interaction with the quiz options.
 *
 * Structure:
 * - The component is built using Chakra UI's `Box` and `Grid` components to arrange the content effectively.
 * - Two main `GridItem` blocks are used:
 *   1. The left block contains two stacked images, creating a layered visual effect.
 *   2. The right block lists different types of quizzes through the `QuizzType` subcomponent, each equipped with specific details and functionalities.
 * - The `QuizzType` subcomponents are utilized to display distinct quizzes, incorporating icons for visual guidance, textual information for clarity, and optional buttons for interaction.
 *
 * Usage:
 * Use this component on educational platforms or sections of websites where interactive and educational content
 * related to programming is necessary. It is ideal for quiz or test preparation sections where users can engage
 * with content dynamically.
 */

import { Box, Grid, GridItem } from "@chakra-ui/react";
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
