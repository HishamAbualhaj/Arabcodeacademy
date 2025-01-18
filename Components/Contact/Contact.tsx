import { Promo } from "../Promo/Promo";
import CustomButton from "../CustomButton/CustomButton";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Call from "@/public/icons/call.svg";
export const Contact = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundImage="url('/images/contact/group_people.jpg')"
      backgroundSize="cover"
      direction={"row"}
      justifyContent={{ base: "center", xl: "center", "2xl": "flex-end" }}
    >
      <Flex
        width={{ base: "90%", xl: "100%", "2xl": "60%" }}
        height={{ base: "90vh", "2xl": "100vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Promo padding={{ base: "20px", md: "50px" }} isNotFullVisible>
          <Text
            fontWeight={700}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ base: "20px", xl: "30px", "2xl": "27px" }}
          >
            أدوات تفاعليه و العاب تعليميه
          </Text>
          <Text
            textAlign="center"
            lineHeight="35px"
            fontWeight={500}
            color={"rgba(113, 52, 136, 1)"}
            fontSize="19px"
            maxW="700px"
            marginTop="25px"
          >
            تميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية
            مبتكرة باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم
            أكثر متعةوجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات،
            حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين
            وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات
            فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية
            للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح.
          </Text>
          <CustomButton
            marginTop="30px"
            py="15px"
            text="تواصل معنا"
            sizeType="primary"
            ButtonColor="green"
            rounded={10}
            color="white"
            fontSize={17}
            fontWeight={900}
            icon={<Call width="25px" height="25px" />}
          />
        </Promo>
      </Flex>
    </Flex>
  );
};
