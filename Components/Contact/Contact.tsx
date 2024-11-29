/**
 * Contact Component
 *
 * The `Contact` component represents the contact section of the website. It includes a background image and a promo box with a custom message and a button for users to contact the academy.
 * The component is responsive and adjusts its layout and text size based on the screen size using Chakra UI's `useBreakpointValue`.
 * It includes a `CustomButton` with a text and icon for users to take action.
 *
 * @returns {JSX.Element} - The Contact section of the page.
 */
import { Promo } from "../Promo";
import CustomButton from "../CustomButton";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
export const Contact = () => {
  const contactText = useBreakpointValue({
    base: (
      <Text
        textAlign="center"
        maxW="640px"
        lineHeight="20px"
        fontWeight={500}
        color={"rgba(113, 52, 136, 1)"}
        fontSize="14px"
      >
        تميز الأكاديمية العربية للبرمجة بتطوير أدوات
        <br />
        تفاعلية وألعاب تعليمية مبتكرة باستخدام
        <br />
        أساليب الـتلعيب Gamification، مما يجعل
        <br />
        عملية التعلم أكثر متعةوجاذبية. نقدم حلولًا
        <br />
        مخصصة تلبي احتياجات المؤسسات
        <br />
        والشركات، حيث نساعد في تصميم تجارب
        <br />
        تعليمية تفاعلية تعزز من تفاعل المستخدمين
        <br />
        وتحفزهم على التعلم بطرق غير تقليدية. سواء
        <br />
        كنت تبحث عن تطوير مهارات فريق العمل أو
        <br />
        تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية للبرمجة
        <br />
        هي شريكك المثالي لتحقيق هذه الأهداف بنجاح.
      </Text>
    ),
    xl: (
      <Text
        textAlign="center"
        maxW="640px"
        lineHeight="40px"
        fontWeight={500}
        color={"rgba(113, 52, 136, 1)"}
        fontSize="20px"
      >
        تميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية
        مبتكرة
        <br />
        باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم أكثر متعة
        <br />
        وجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات، حيث
        <br />
        نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين
        <br />
        وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات
        <br />
        فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية
        للبرمجة
        <br />
        هي شريكك المثالي لتحقيق هذه الأهداف بنجاح.
      </Text>
    ),
    "2xl": (
      <Text
        textAlign="center"
        lineHeight="30px"
        fontWeight={500}
        color={"rgba(113, 52, 136, 1)"}
        fontSize="19px"
      >
        تميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية
        مبتكرة
        <br />
        باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم أكثر
        متعةوجاذبية.
        <br />
        نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات، حيث نساعد في تصميم
        <br />
        تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين وتحفزهم على التعلم بطرق
        غير
        <br />
        تقليدية. سواء كنت تبحث عن تطوير مهارات فريق العمل أو تقديم تجربة تعليمية
        فريدة
        <br />
        لعملائك، الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف
        بنجاح.
      </Text>
    ),
  });

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
        height={{ base: "90vh", xl: "100vh", "2xl": "100vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Promo
          width={{ base: "300px", xl: "670px", "2xl": "790px" }}
          height={{ base: "350px", xl: "530px", "2xl": "590px"}}
          isNotFullVisible
        >
          <Text
            fontWeight={700}
            color={"rgba(113, 52, 136, 1)"}
            fontSize={{ base: "16px", xl: "30px", "2xl": "27px" }}
            pt={{ "2xl": "30px" }}
          >
            أدوات تفاعليه و العاب تعليميه
          </Text>
          {contactText}
          <CustomButton
            text="تواصل معنا"
            sizeType="secondary"
            ButtonColor="green"
            rounded={10}
            color="white"
            fontSize={17}
            fontWeight={900}
            icon={"/icons/Chalkboard_Teacher.svg"}
          />
        </Promo>
      </Flex>
    </Flex>
  );
};
