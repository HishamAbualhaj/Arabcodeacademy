/**
 * InputForm Component
 *
 * This component serves as a versatile input field creator for forms, allowing the integration of
 * various input types including text, email, password, and a custom drop-down list. It supports
 * extensive customization through props to match specific design requirements. The component
 * automatically handles visual cues for input validation and errors, and it is designed to work
 * with react-hook-form for efficient form management.
 *
 * @component
 * 
 * @param {Object} props - The properties passed to the InputForm component.
 * @param {'firstName' | 'secondName' | 'email' | 'password' | 'userName' | 'confirmPassword' | 'dropList'} props.type - Specifies the type of input to render.
 * @param {UseBreakpointValueOptions<string | number>} props.width - The responsive width of the input form.
 * @param {UseBreakpointValueOptions<string | number>} props.height - The responsive height of the input field.
 * @param {string} [props.label] - The label for the input field.
 * @param {boolean} [props.disableIcon=false] - If true, does not display an icon next to the input field.
 * @param {Array<string>} [props.data] - Array of strings for the dropdown list, used when type is 'dropList'.
 * @param {string} [props.title] - Initial placeholder text for the dropdown list, used when type is 'dropList'.
 * @param {string | FieldError | Merge<FieldError, FieldErrorsImpl>} [props.errorMsg] - Error message to display when validation fails.
 * @param {ReturnType<UseFormRegister<FieldValues>>} [props.register] - Registration method from react-hook-form for the input field.
 * @param {UseFormSetValue<SignUpTypePageOne|SignUpTypePageTwo>} [props.setValue] - Set value method from react-hook-form, used with 'dropList' type.
 * @param {InputProps} ...rest - Additional Chakra UI InputProps for further customization of the input field.
 *
 * @example
 * <InputForm
 *   type="email"
 *   width={{ base: "100%", xl: "50%" }}
 *   height={{ base: "45px", xl: "55px" }}
 *   label="Email Address"
 *   register={formRegister("email")}
 *   errorMsg={formErrors.email?.message}
 * />
 *
 * @returns {React.ReactElement}
 * Renders a styled input field based on the type specified, optionally including an icon and a label. The component is
 * responsive, adapting its layout and functionality based on the provided breakpoints. It also displays error messages
 * when provided, aiding in user feedback for form validation.
 */

import { colors } from "@/styles/global-info";
import { Box, Input, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { InputProps } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DropList from "./DropList";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { SignUpTypePageOne, SignUpTypePageTwo } from "./signUpValidation";

interface UseBreakpointValueOptions<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

interface FormProps extends InputProps {
  type:
    | "firstName"
    | "secondName"
    | "email"
    | "password"
    | "userName"
    | "confirmPassword"
    | "dropList";
  disableIcon?: boolean;
  width: UseBreakpointValueOptions<string | number>;
  height: UseBreakpointValueOptions<string | number>;
  label?: string;
  textPositionDesktop?: "left" | "right" | "center";
  textPositionMobile?: "left" | "right" | "center";
  textPositionTablet?: "left" | "right" | "center";
  data?: Array<string>;
  title?: string;
  errorMsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  register?: ReturnType<UseFormRegister<FieldValues>>;
  setValue ?: UseFormSetValue<SignUpTypePageOne|SignUpTypePageTwo >;
}

const InputForm: React.FC<FormProps> = ({
  type,
  width,
  height,
  label,
  disableIcon,
  textPositionDesktop = "right",
  textPositionMobile = "center",
  textPositionTablet = "right",
  data,
  title,
  errorMsg = "",
  register,
  setValue,
  ...rest
}) => {
  let inputStructure = {
    type: "text",
    icon: <FaUser color="purple.400" />, // Simple user icon
  };

  switch (type) {
    case "firstName":
      inputStructure = {
        type: "text",
        icon: <FaUserCheck color={colors.mainColor} />, // Simple user icon
      };
      break;
    case "secondName":
      inputStructure = {
        type: "text",
        icon: <FaUserCheck color={colors.mainColor} />, // Simple user icon
      };
      break;
    case "userName":
      inputStructure = {
        type: "text",
        icon: <FaUser color={colors.mainColor} />, // Simple user icon
      };
      break;
    case "email":
      inputStructure = {
        type: "email",
        icon: <HiMail color={colors.mainColor} />, // Simple user icon
      };
      break;
    case "password":
      inputStructure = {
        type: "password",
        icon: <FaLock color={colors.mainColor} />, // Simple user icon
      };
      break;
    case "confirmPassword":
      inputStructure = {
        type: "password",
        icon: <FaLock color={colors.mainColor} />, // Simple user icon
      };
      break;
    case "dropList":
      inputStructure = {
        type: "dropList",
        icon: <FaMapMarkerAlt color={colors.mainColor} />, // Simple user icon
      };
      break;
  }
  return (
    <Box width={width}>
      <Text
        as="label"
        fontSize="sm"
        color={colors.mainColor}
        display="flex"
        alignItems="center"
        gap="2"
        mb={{ base: "10px", xl: "6px", "2xl": "8px" }}
        justifyContent={{
          base:
            textPositionMobile === "center"
              ? "center"
              : textPositionMobile === "left"
              ? "flex-end"
              : "flex-start",
          xl:
            textPositionTablet === "center"
              ? "center"
              : textPositionTablet === "left"
              ? "flex-end"
              : "flex-start",
          "2xl":
            textPositionDesktop === "center"
              ? "center"
              : textPositionDesktop === "left"
              ? "flex-end"
              : "flex-start",
        }}
      >
        {!disableIcon && inputStructure?.icon}
        {label}
      </Text>
      {inputStructure.type !== "dropList" ? (
        <Input
          type={inputStructure?.type}
          borderColor={
            errorMsg !== "" ? "rgba(219, 74, 57, 1)" : colors.mainColor
          }
          fontSize="sm"
          _placeholder={{ color: "purple.300" }}
          color={colors.mainColor}
          height={height}
          px={{ base: "6px", xl: "23px", "2xl": "24px" }}
          {...register}
          {...rest}
        />
      ) : (
        <DropList
          data={data || []}
          title={title || ""}
          width={width}
          height={height}
          setValue={setValue}
        />
      )}{" "}
      {errorMsg && (
        <Text
          width={width}
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
    </Box>
  );
};

export default InputForm;
