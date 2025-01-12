import { colors } from "@/styles/global-info";
import { Box, Input, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { InputProps } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DropList from "./DropList";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

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
  ...rest
}) => {
  let inputStructure = {
    type: "text",
    icon: <FaUser color="purple.400" />, // Simple user icon
  };
  //   const inputWidthHeight = {
  //     width: {
  //       firstLastNameWidth: useBreakpointValue({
  //         base: "250px",
  //         xl: "361px",
  //         "2xl": "346px",
  //       }),
  //       others: useBreakpointValue({
  //         base: "250px",
  //         xl: "744px",
  //         "2xl": "712px",
  //       }),
  //     },
  //     height: useBreakpointValue({
  //       base: "50px",
  //       xl: "65px",
  //       "2xl": "60px",
  //     }),
  //   };

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
