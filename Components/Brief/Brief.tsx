/** 
 * Brief Component
 * 
 * A promotional section of a web application designed to showcase the educational experience 
 * at the Arabic Academy of Programming. This component features a textual description of the 
 * academy's offerings and a call-to-action button, alongside a decorative image. The layout 
 * adapts responsively to different screen sizes.
 * 
 * @component 
 * 
 * @example
 * <Brief />
 * 
 * @returns {React.ReactElement}
 * Renders a promotional block with rich textual content and a call-to-action button. It uses 
 * a flexible box layout to organize the content and image. The image fills the assigned 
 * container space and complements the educational theme of the text. The Promo component 
 * encapsulates the text to emphasize its promotional nature, while the CustomButton below 
 * the text invites user interaction with a label "المسارات التعليمية".
 */

import { Promo } from "@/Components/Promo/Promo";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import girl from "@/public/images/girl_study.jpg";
import CustomButton from "@/Components/CustomButton/CustomButton";
import landing from "@/styles/landing.module.css";
import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
export default function Brief() {
  return (
    <>
      <Box marginInline="auto" maxW="1700px">
        <Flex
          gap={{ base: "50px", xl: "80px" }}
          px={{ base: "20px", md: "40px", xl: "50px" }}
          py={"70px"}
          width={"100%"}
          height={"100%"}
          alignItems={{ base: "center", xl: "start", "2xl": "center" }}
          justifyContent={"space-between"}
          direction={{ base: "column-reverse", xl: "row-reverse" }}
        >
          <Flex direction="column" alignItems="center">
            <Promo px={["20px", "30px", "50px"]} py={["20px", "50px", "80px"]}>
              <Text
                fontWeight={700}
                color={"rgba(113, 52, 136, 1)"}
                fontSize={{ base: "23px" }}
              >
                التجربة التعليمية في الأكاديمية العربية للبرمجة
              </Text>
              <Text
                maxW={{ base: "640px" }}
                marginTop={{ base: "10px", md: "50px", xl: "100px" }}
                lineHeight={{ base: "30px" }}
                fontWeight={500}
                color={"rgba(113, 52, 136, 1)"}
                fontSize={{ base: "18px" }}
              >
                الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز
                على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع
                الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة
                بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى
                يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا
                ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية
                تواكب أحدث التقنيات والأساليب التعليمية.
              </Text>

              <Box display={{ base: "block", md: "none" }}>
                <CustomButton
                  marginTop="40px"
                  sizeType="primary"
                  text="المسارات التعليمية"
                  ButtonColor="green"
                  rounded={10}
                  color="white"
                  fontSize={17}
                  fontWeight={900}
                  icon={<Chalkboard width="30px" height="30px" />}
                />
              </Box>
            </Promo>

            <Box display={{ base: "none", md: "block" }}>
              <CustomButton
                marginTop="40px"
                sizeType="primary"
                text="المسارات التعليمية"
                ButtonColor="green"
                rounded={10}
                color="white"
                fontSize={17}
                fontWeight={900}
                icon={<Chalkboard width="30px" height="30px" />}
              />
            </Box>
          </Flex>
          <Box>
            <Image src={girl} layout="Fill" alt="girl studying" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
