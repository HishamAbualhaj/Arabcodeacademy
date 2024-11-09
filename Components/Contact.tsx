import { Flex, Text } from "@chakra-ui/react";
import { Promo } from "./Promo";
import CustomButton from "./CustomButton";
export const Contact = () => {

  return (
    <Flex
      width="100%"
      height="89vh"
      backgroundImage="url('/images/group_people.png')"
      backgroundSize="cover"
      direction={'row'}
      justifyContent={{sm:'center', md:'center', xl:'flex-end'}}
    >
      <Flex 
      width={{ base: '90%', md: '100%', xl: '60%' }}
      height={{ base: '90vh', md: '100vh', xl: '100vh' }} 
      justifyContent={'center'}
      alignItems={'center'}
      >
        <Promo 
          px={["30px", "30px", "20px"]}
          py={["10px", "40px", "60px"]}
          isNotFullVisible
        >
          <Text
            fontWeight={700}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ sm: "27px", md: '30px', xl:'23px' }}
          >
            أدوات تفاعليه و العاب تعليميه
          </Text>

          <Text
            maxW={{ base: "266px" , md: '641px', xl:'665px'}}
            marginTop={{ base: "10px",md: "60px", xl: "40px" }}
            lineHeight={{ base: "20px" }}
            textAlign={'center'}
            fontWeight={{base : 500, md : [700], xl: [700]}}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ base: "14px", md: '20px', xl: '19px' }}
          >
            تميز الأكاديمية العربية للبرمجة بتطوير أدوات 
            تفاعلية وألعاب تعليمية مبتكرة باستخدام 
            أساليب الـتلعيب Gamification، مما يجعل عملية التعلم
            أكثر متعةوجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات
            والشركات، حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل
            المستخدمين وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن
            تطوير مهارات فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك،
            الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف
            بنجاح.

          </Text>
          <CustomButton
                  marginTop={'50px'}
                  text="تواصل معنا"
                  px={"51px"}
                  py={"20px"}
                  ButtonColor="green"
                  rounded={10}
                  color="white"
                  fontSize={17}
                  fontWeight={900}
                  sizeType='lg'
                //   icon={<Chalkboard width="30" height="24" />}
                />
        </Promo>
      </Flex>
    </Flex>
  );
};
