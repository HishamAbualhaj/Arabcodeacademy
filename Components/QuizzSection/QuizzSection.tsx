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
const QuizzSection: React.FC = () => {
  return (
    <>
      <Box
        width="100%"
        aspectRatio={1920 / 740}
        bgGradient="to-r"
        gradientFrom="#462576"
        gradientTo="#783BA2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={10}
          marginBlock={{ base: "5%", sm: "5%", md: "5%" }}
        >
          <GridItem
      
            colSpan={2}
            marginRight={{ lg: "10%" }}
            marginLeft={{ base: "7%",lg:"7%", md: "25%", sm: "7%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <ImageChakara
              src="images/people_2.jpg"
              alt="Quiz Section Image2"
               width="60%"
              maxWidth={{
                base: "150px",
                lg: "350px",
                md: "400px",
                sm: "150px",
              }}
            />

            <ImageChakara
              src="images/people.jpg"
              alt="Quiz Section Image1"
               width="60%"
              maxWidth={{ base: "150px", lg: "350px", md: "400px", sm: "150px" }}
              marginTop={{
                base: "-50px",
                lg: "-95px",
                md: "-130px",
                sm: "-50px",
              }}
              marginRight={{
                base: "208px",
                lg: "395px",
                md: "540px",
                sm: "208px",
              }}
            />
          </GridItem>
          <GridItem
        
            colSpan={3}
            marginRight={{ lg: "12%" }}
            marginLeft={{ base: "7%", md: "7%", sm: "7%" }}
          >
            <QuizzType
              title="اختبر قدراتك"
              paragraph="تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة. من خلال خدمة الامتحان البرمجي الإلكتروني"
              icon={
                <Image width={25} height={25} src={test_skill} alt="icon" />
              }
              displayButton={false}
            />
            <QuizzType
              title="قم بالاختيار"
              paragraph="يمكنك اختيار اللغة البرمجية التي تود اختبار معرفتك بها سواء كانت Python, Java, JavaScript أو أي لغة أخرى من اللغات المتاحة"
              icon={<Image width={25} height={25} src={code} alt="icon" />}
              displayButton={false}
            />
            <QuizzType
              title="اعرف ترتيبك"
              paragraph="قم برفع تقييمك لترتيب قدراتك بين الطلاب المتقدمين للاختبارات، مما سيمكنك من معرفة درجة التميز والرتب بين أقرانك."
              icon={
                <Image width={25} height={25} src={exams} alt="icon" />
              }
              displayButton={true}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default QuizzSection;
