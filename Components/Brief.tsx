import { Promo } from "./Promo";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import girl from "@/public/images/girl_study.jpg";
import CustomButton from "./CustomButton";
import landing from "../styles/landing.module.css";
export default function Brief() {
    return (
      <>
        
      <div  className={landing.max_container}>
          <Flex
            gap={{ base: "50px", xl: "80px" }}
            px={{base:"20px" ,md:'40px' , xl:'50px'}}
            py={"70px"}
            width={"100%"}
            height={"100%"}
            alignItems={{base:'center' , xl:'start' ,'2xl':'center'}}
            justifyContent={"space-between"}
            direction={{ base: "column-reverse", xl: "row-reverse" }}
          >
            <Flex direction="column" alignItems="center">
              <Promo px={["20px" , "30px" , '50px']} py={['20px','50px',"80px"]}>
                <Text
                  fontWeight={700}
                  color={"rgba(113, 52, 136, 1)"}
                  fontSize={{ base: "23px" }}
                >
                  التجربة التعليمية في الأكاديمية العربية للبرمجة
                </Text>
                <Text
                  maxW={{ base: "640px" }}
                  marginTop={{ base:'10px', md:'50px', xl: "100px" }}
                  lineHeight={{ base: "30px" }}
                  fontWeight={500}
                  color={"rgba(113, 52, 136, 1)"}
                  fontSize={{ base: "15px" }}
                >
                  الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على
                  إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات
                  العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة
                  وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق
                  والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور
                  مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث
                  التقنيات والأساليب التعليمية.
                </Text>
              </Promo>
              <div style={{ marginTop: "40px" }}>
                <CustomButton
                  sizeType="primary"
                  text="المسارات التعليمية"
                  px={"51px"}
                  py={"20px"}
                  ButtonColor="green"
                  rounded={10}
                  color="white"
                  fontSize={17}
                  fontWeight={900}
                  icon={"/icons/Chalkboard_Teacher.svg"}
                />
              </div>
            </Flex>
            <Image src={girl} layout="Fill" alt="girl studying" />
          </Flex>
      </div>
      </>
    );
  }
  