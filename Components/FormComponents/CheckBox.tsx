/**
 * CheckBox Component
 *
 * A customizable checkbox component that integrates with react-hook-form for form handling. It includes
 * additional styling and error display capabilities. This component is designed to be used in forms
 * where user agreements or selections are required. It displays a label alongside the checkbox and
 * provides visual feedback on errors associated with the checkbox field.
 *
 * @component
 * 
 * @param {Object} props - The properties passed to the CheckBox component.
 * @param {string} props.text - The text label displayed next to the checkbox.
 * @param {ReturnType<UseFormRegister<FieldValues>>} props.register - The registration object from react-hook-form, binding the checkbox to form data.
 * @param {string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined} props.errorMsg - Optional error message to display if the checkbox validation fails.
 * @param {CheckboxProps} ...rest - Additional props from Chakra UI's Checkbox component to customize styling and behavior.
 *
 * @example
 * <CheckBox
 *   text="I agree to the terms and conditions"
 *   register={register("termsAccepted")}
 *   errorMsg={errors.termsAccepted?.message}
 * />
 *
 * @returns {React.ReactElement}
 * Renders a flex container with a checkbox and a text label. If there is an error associated with the
 * checkbox input, it displays an error message below the checkbox. The component uses Chakra UI for
 * styling, ensuring consistent design and responsiveness.
 */


import { Checkbox, CheckboxProps } from "@/Components/ui/checkbox";
import { colors } from "@/styles/global-info";
import { Text, Flex } from "@chakra-ui/react";
import React from "react";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

interface CheckBoxProps extends CheckboxProps {
  text: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
  errorMsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, register, errorMsg, ...rest }) => {
  return (
    <Flex
      flexDirection="row-reverse"
      alignItems="center"
      width={{ base: "200px", xl: "450px", "2xl": '390.04px' }}
      height={{ base: "34px", xl: "23px", "2xl": '20px' }}
    >
      <Text
        textAlign={{ base: "center" }}
        color={colors.mainColor}
        fontWeight={400}
        fontSize={{ base: "14px", xl: "19px", '2xl': '17px' }}
        lineHeight={{ base: "16px", xl: "22.8px", '2xl': '20.4px' }}
        borderBottomColor={{ xl: colors.mainColor }}
        borderBottomWidth={{ xl: "1.3px" }}
        pb={{ xl: "5px" }}
        mr={2} // Adjust spacing between text and checkbox
      >
        {text}
      </Text>
      <Checkbox
        borderWidth={"1px"}
        borderColor={colors.mainColor}
        colorPalette="purple"
        boxShadow={{
          base: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
          xl: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
        {...register}
        {...rest}
      />
        {errorMsg && (
        <Text
          height={{ base: "34px" }}
          color="rgba(219, 74, 57, 1)"
          fontWeight={400}
          fontSize={{ base: "14px" }}
          lineHeight={{ base: "16.8px" }}
          textAlign={{ base: "center", xl: 'right' }}
          mt={{base: '7px', xl: '12px'}}
        >
          {errorMsg.toString()}
        </Text>
      )}
    </Flex>
  );
};

export default CheckBox;
