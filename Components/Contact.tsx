import { Promo } from "./Promo";
import CustomButton from "./CustomButton";
import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
import { Flex, Text } from "@chakra-ui/react";
export const Contact = () => {
  return (
    <Flex
      width="100%"
      height="89vh"
      backgroundImage="url('/images/group_people.png')"
      backgroundSize="cover"
      direction={"row"}
      justifyContent={{ sm: "center", md: "center", xl: "flex-end" }}
    >
      <Flex
        width={{ sm: "90%", md: "100%", xl: "60%" }}
        height={{ sm: "90vh", md: "100vh", xl: "100vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Promo
          px={["30px", "30px", "20px"]}
          py={["10px", "40px", "60px"]}
          isNotFullVisible
        >
          <Text
            fontWeight={700}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ sm: "27px", md: "30px", xl: "23px" }}
          >
            أدوات تفاعليه و العاب تعليميه
          </Text>

          <Text
            maxW={{ base: "640px" }}
            marginTop={{ base: "10px", md: "50px", xl: "100px" }}
            lineHeight={{ base: "30px" }}
            fontWeight={500}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ base: "15px" }}
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
            marginTop={"50px"}
            text="تواصل معنا"
            sizeType="secondary"
            ButtonColor="green"
            rounded={10}
            color="white"
            fontSize={17}
            fontWeight={900}
            icon={<Chalkboard width="30" height="24" />}
          />
        </Promo>
      </Flex>
    </Flex>
  );
};
