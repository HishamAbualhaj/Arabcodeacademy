import { Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { Image as ImageChakara } from "@chakra-ui/react";
import React from "react";
import QuizzType from "./QuizzType";
import test_skill from "@/public/icons/test_skills.png";
import code from "@/public/icons/code.png";
// import certificate from "@/public/icons/certificate.png";
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
            marginLeft={{ base: "7%", md: "7%", sm: "7%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <ImageChakara
              src="images/people.jpg"
              alt="Quiz Section Image1"
              width="50%"
              maxWidth={{
                base: "150px",
                lg: "250px",
                md: "250px",
                sm: "150px",
              }}
            />

            <ImageChakara
              src="images/people_2.jpg"
              alt="Quiz Section Image2"
              width="50%"
              maxWidth={{ base: "150px", lg: "250", md: "250px", sm: "150px" }}
              marginTop={{
                base: "-50px",
                lg: "-85px",
                md: "-85px",
                sm: "-50px",
              }}
              marginRight={{
                base: "208px",
                lg: "340px",
                md: "350px",
                sm: "208px",
              }}
            />
          </GridItem>
          <GridItem
            colSpan={3}
            marginRight={{ lg: "5%" }}
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
              displayButton={true}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default QuizzSection;
