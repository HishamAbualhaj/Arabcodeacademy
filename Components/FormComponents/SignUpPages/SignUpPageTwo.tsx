/**
 * SignUpPageTwo Component
 *
 * This component represents the second page of a multi-step sign-up process for an online platform.
 * It collects additional user information, including first name, last name, username, and country of residence,
 * and also includes terms acceptance. It leverages react-hook-form for form handling and validation,
 * ensuring a smooth user experience with responsive feedback. The component is styled with Chakra UI
 * for a consistent and responsive layout across devices.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the SignUpPageTwo component.
 * @param {Object} props.registers - Contains registration methods for each input field provided by react-hook-form.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.userName - Registration method for the username input.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.firstName - Registration method for the first name input.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.lastName - Registration method for the last name input.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.termsAccepted - Registration method for the terms acceptance checkbox.
 * @param {FieldErrors} props.errors - Object containing any errors to display in the form as returned by react-hook-form.
 * @param {boolean} props.isSubmitting - Indicates whether the form is currently being submitted.
 * @param {(number) => void} props.backButton - Function to navigate back to the previous step of the sign-up process.
 * @param {UseFormSetValue<SignUpTypePageOne|SignUpTypePageTwo>} props.setValue - Function from react-hook-form used to manually set form values, used here for dropdown list handling.
 *
 * @example
 * <SignUpPageTwo
 *   registers={{
 *     userName: register('userName'),
 *     firstName: register('firstName'),
 *     lastName: register('lastName'),
 *     termsAccepted: register('termsAccepted')
 *   }}
 *   errors={formState.errors}
 *   isSubmitting={formState.isSubmitting}
 *   backButton={handleBack}
 *   setValue={formMethods.setValue}
 * />
 *
 * @returns {React.ReactElement}
 * Renders a form that includes inputs for username, first name, last name, and country, with validations.
 * It also includes navigation buttons to either proceed with the registration or return to the previous step.
 */

import { colors } from "@/styles/global-info";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import InputForm from "../InputForm";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import CheckBox from "../CheckBox";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { SignUpTypePageOne, SignUpTypePageTwo } from "../signUpValidation";
import { data } from "../../../countreis";
interface SignUpPageTwoProps {
  registers: {
    userName: ReturnType<UseFormRegister<FieldValues>>;
    firstName: ReturnType<UseFormRegister<FieldValues>>;
    lastName: ReturnType<UseFormRegister<FieldValues>>;
    termsAccepted: ReturnType<UseFormRegister<FieldValues>>;
  };
  errors: FieldErrors;
  isSubmitting: boolean;
  backButton: (number: number) => void;
  setValue: UseFormSetValue<SignUpTypePageOne | SignUpTypePageTwo>;
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
          <CheckBox
            register={registers.termsAccepted}
            errorMsg={errors?.termAccepted?.message}
            text="يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا"
          />
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
          <Button disabled={isSubmitting} type="submit">
            <CustomButton
              text={`انشاء حساب`}
              iconPosition="right"
              icon={<FaUserCircle />}
              sizeType="secondary"
              ButtonColor="green"
            />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUpPageTwo;
