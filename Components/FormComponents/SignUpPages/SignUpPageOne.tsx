/**
 * SignUpPageOne Component
 *
 * This component forms the first part of a multi-step signup process for a user account creation interface.
 * It collects the user's email, password, and password confirmation. It utilizes Chakra UI for responsive
 * styling and integrates react-hook-form for form handling, validation, and submission. The component also
 * includes visual feedback for input errors and a button to proceed to the next step of the signup process.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the SignUpPageOne component.
 * @param {Object} props.registers - Contains registration methods for each input field provided by react-hook-form.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.email - Registration method for the email input field.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.password - Registration method for the password input field.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.registers.confirmPassword - Registration method for the confirm password input field.
 * @param {FieldErrors} props.errors - Object containing any errors to display in the form as returned by react-hook-form.
 * @param {boolean} props.isSubmitting - Indicates whether the form is currently being submitted.
 *
 * @example
 * <SignUpPageOne
 *   registers={{
 *     email: register('email'),
 *     password: register('password'),
 *     confirmPassword: register('confirmPassword')
 *   }}
 *   errors={formState.errors}
 *   isSubmitting={formState.isSubmitting}
 * />
 *
 * @returns {React.ReactElement}
 * Renders a sign-up form with fields for email, password, and password confirmation, along with a submit button.
 * It provides responsive layout adjustments and error feedback for user inputs.
 */

import { colors } from "@/styles/global-info";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import InputForm from "../InputForm";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { FaArrowLeft } from "react-icons/fa";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SignUpProps {
  registers: {
    email: ReturnType<UseFormRegister<FieldValues>>;
    password: ReturnType<UseFormRegister<FieldValues>>;
    confirmPassword: ReturnType<UseFormRegister<FieldValues>>;
  };
  errors: FieldErrors;
  isSubmitting: boolean;
}
const SignUpPageOne: React.FC<SignUpProps> = ({
  registers,
  errors,
  isSubmitting,
}) => {
  const inputWidth = { base: "250px", xl: "744px", "2xl": "712px" };
  const inputHeight = { base: "50px", xl: "60px", "2xl": "65px" };
  // console.log(errors?.email?.message)
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
        <InputForm
          width={inputWidth}
          height={inputHeight}
          type="email"
          label="عنوان البريد الإلكتروني"
          placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
          errorMsg={errors?.email?.message}
          register={registers.email}
        />
        <InputForm
          width={inputWidth}
          height={inputHeight}
          type="password"
          label="كلمة المرور"
          placeholder=" قم بإنشاء كلمة مرور قوية"
          errorMsg={errors?.password?.message}
          register={registers.password}
        />
        <InputForm
          width={inputWidth}
          height={inputHeight}
          type="confirmPassword"
          label="تأكيد كلمة المرور"
          placeholder="أعد إدخال كلمة المرور للتأكد من مطابقتها"
          errorMsg={errors?.confirmPassword?.message}
          register={registers.confirmPassword}
        />
        <Flex justifyContent="center" alignItems="center" width={inputWidth}>
          <Button disabled={isSubmitting} type="submit">
            <CustomButton
              text={`التالي`}
              iconPosition="left"
              icon={<FaArrowLeft />}
              sizeType="secondary"
              ButtonColor="green"
            />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUpPageOne;
