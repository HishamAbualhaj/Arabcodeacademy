import { colors } from "@/styles/global-info";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import InputForm from "../InputForm";
import CustomButton from "@/Components/CustomButton";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import CheckBox from "../CheckBox";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SignUpPageTwoProps {
  registers: {
    userName: ReturnType<UseFormRegister<FieldValues>>;
    firstName: ReturnType<UseFormRegister<FieldValues>>;
    lastName: ReturnType<UseFormRegister<FieldValues>>;
  };
  errors: FieldErrors;
  isSubmitting: boolean;
  backButton: any;
}
const SignUpPageTwo: React.FC<SignUpPageTwoProps> = ({
  registers,
  errors,
  isSubmitting,
  backButton,
}) => {
  const inputWidth = { base: "250px", xl: "744px", "2xl": "712px" };
  const inputHeight = { base: "50px", xl: "60px", "2xl": "65px" };
  const data = [
    "أفغانستان",
    "ألبانيا",
    "الجزائر",
    "أندورا",
    "أنغولا",
    "أنغويلا",
    "أنتاركتيكا",
    "أنتيغوا وباربودا",
    "الأرجنتين",
    "أرمينيا",
    "أستراليا",
    "أوزبكستان",
    "أفريقيا الوسطى",
    "الأرجواي",
    "الأسكا",
    "السنغال",
    "إسبانيا",
    "إستونيا",
    "إيطاليا",
    "إندونيسيا",
    "إيرلندا",
    "إيران",
    "أيرلندا الشمالية",
    "إيسلندا",
    "إثيوبيا",
    "إكوادور",
    "الإكوادور",
    "البرازيل",
    "البحرين",
    "البوسنة والهرسك",
    "البراغواي",
    "البنين",
    "بوتان",
    "بوليفيا",
    "بولندا",
    "بورتو ريكو",
    "بوتسوانا",
    "بوروندي",
    "بيليز",
    "بيرو",
    "جزر القمر",
    "جزر كوك",
    "جزر مارشال",
    "جزر نيكاراغوا",
    "جزر تركس وكايكوس",
    "جيبوتي",
    "جيرسي",
    "جزيرة مان",
    "جزيرة نورفولك",
    "جزيرة كريسماس",
    "جزر سليمان",
    "جمهورية الكونغو",
    "جمهورية الكونغو الديمقراطية",
    "جزر فارو",
    "جمهورية سريلانكا",
    "جمهورية كيب فيردي",
    "جمهورية مصر العربية",
    "جنوب أفريقيا",
    "جنوب السودان",
    "غينيا",
    "غينيا الاستوائية",
    "غينيا بيساو",
    "غواتيمالا",
    "غوادالوب",
    "غويانا",
    "غرينادا",
    "فلسطين",
    "فنلندا",
    "فرنسا",
    "الفلبين",
    "الفاتيكان",
    "فنزويلا",
    "فيتنام",
    "فيجي",
    "قبرص",
    "قطر",
    "كوبا",
    "كوت ديفوار",
    "كازاخستان",
    "كاليدونيا الجديدة",
    "كاميرون",
    "كينيا",
    "كندا",
    "كوريا الجنوبية",
    "كوريا الشمالية",
    "كولومبيا",
    "كوموروس",
    "كوستاريكا",
    "كوسوفو",
    "كيتو",
    "لاتفيا",
    "لاوس",
    "ليبيريا",
    "ليبيا",
    "للكسمبورغ",
    "لبنان",
    "ليتوانيا",
    "ليختنشتاين",
    "ماكاو",
    "مقدونيا",
    "ملاوي",
    "ماليزيا",
    "مالديف",
    "مالي",
    "موزمبيق",
    "مارتينيك",
    "مورتانيا",
    "موريشيوس",
    "مملكة البحرين",
    "موناكو",
    "مونتينيغرو",
    "مستقلة",
    "مونتسيرات",
    "مانغوليا",
    "منتزه مليئ",
    "ميكرونيزيا",
    "موزامبيق",
    "مصر",
  ];

  return (
    <Box
      pt={{ base: "39px", xl: "82.5px", "2xl": "77px" }}
      width={{ base: "300px", xl: "872px", "2xl": "889px" }}
      textAlign="center"
      pr={{ base: "0px", xl: "67px", "2xl": "95px" }}
    >
      <Text
        color={colors.mainColor}
        fontWeight={700}
        fontSize={{ base: "18px", xl: "25px", "2xl": "23px" }}
        lineHeight={{ base: "21.6px", xl: "30px", "2xl": "27.6px" }}
        width={{ base: "100%", xl: "377px", "2xl": "372px" }}
        height={{ base: "22px", xl: "30.52px", "2xl": "28px" }}
        textAlign={{ base: "center", xl: "right" }}
        mb={{ base: "34.5px", xl: "68.5px", "2xl": "60px" }}
      >
        قم بإنشاء حسابك على الأكاديمية!
      </Text>
      <Flex
        flexDirection="column"
        gap={{ base: "55px", xl: "40px", "2xl": "50px" }}
        justifyContent="center"
        alignItems={{ base: "center", xl: "flex-start" }}
      >
        <Flex
          width={inputWidth}
          justifyContent="space-between"
          flexDirection={{ base: "column", xl: "row" }}
        >
          <InputForm
            width={{ base: "250px", xl: "361px", "2xl": "346px" }}
            height={inputHeight}
            type="firstName"
            label="الاسم الأول"
            placeholder="أدخل اسمك الأول"
            errorMsg={errors?.firstName?.message}
            register={registers.firstName}
          />
          <InputForm
            width={{ base: "250px", xl: "361px", "2xl": "346px" }}
            height={inputHeight}
            type="secondName"
            label="الاسم الثاني"
            placeholder="أدخل اسمك الأخير"
            errorMsg={errors?.lastName?.message}
            register={registers.lastName}
          />
        </Flex>
        <InputForm
          width={inputWidth}
          height={inputHeight}
          type="userName"
          label="اسم المستخدم"
          placeholder="اختر اسم مستخدم فريدًا"
          errorMsg={errors?.userName?.message}
          register={registers.userName}
        />
        <InputForm
          width={inputWidth}
          height={inputHeight}
          type="dropList"
          label="بلد الإقامة"
          title="اختر بلدك"
          data={data}
          errorMsg="اسم المستخدم هذا مأخوذ بالفعل. الرجاء اختيار آخر"
        />
        <Flex width={inputWidth} justifyContent="center">
          <CheckBox text="يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا" />
        </Flex>
        <Flex
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent="center"
          gap={{ base: "30px" }}
          alignItems="center"
          width={inputWidth}
        >
          <CustomButton
            text={`رجوع`}
            iconPosition="right"
            icon={<FaArrowRight />}
            sizeType="secondary"
            ButtonColor="orange"
            onClick={() => backButton(1)}
          />
          <CustomButton
            text={`انشاء حساب`}
            iconPosition="right"
            icon={<FaUserCircle />}
            sizeType="secondary"
            ButtonColor="green"
            type="submit"
            disabled={isSubmitting}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUpPageTwo;
