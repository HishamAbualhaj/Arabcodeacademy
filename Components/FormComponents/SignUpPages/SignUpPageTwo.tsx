import { colors } from "@/styles/global-info";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import InputForm from "../InputForm";
import CustomButton from "@/Components/CustomButton";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import CheckBox from "../CheckBox";
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { SignUpTypePageOne, SignUpTypePageTwo } from "../signUpValidation";
import {data} from "../../../countreis"
interface SignUpPageTwoProps {
  registers: {
    userName: ReturnType<UseFormRegister<FieldValues>>;
    firstName: ReturnType<UseFormRegister<FieldValues>>;
    lastName: ReturnType<UseFormRegister<FieldValues>>;
    termsAccepted: ReturnType<UseFormRegister<FieldValues>>;
  };
  errors: FieldErrors;
  isSubmitting: boolean;
  backButton: (number:number) => void;
  setValue: UseFormSetValue<SignUpTypePageOne|SignUpTypePageTwo >;
}
const SignUpPageTwo: React.FC<SignUpPageTwoProps> = ({
  registers,
  errors,
  isSubmitting,
  backButton,
  setValue,
}) => {
  const inputWidth = { base: "250px", xl: "744px", "2xl": "712px" };
  const inputHeight = { base: "50px", xl: "60px", "2xl": "65px" };
 

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
          errorMsg={errors?.country?.message}
          setValue={setValue}
        />
        <Flex width={inputWidth} justifyContent="center">
          <CheckBox register={registers.termsAccepted} errorMsg={errors?.termAccepted?.message} text="يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا" />
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
