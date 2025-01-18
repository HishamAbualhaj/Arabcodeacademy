import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
interface CustomButtonProps extends BoxProps {
  text: string;
  icon: ReactNode;
  ButtonColor: string;
  sizeType: "primary" | "secondary" | "thirdly";
  iconPosition?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  ButtonColor,
  sizeType,
  iconPosition = "right",
  ...rest
}) => {
  const key: string = ButtonColor;
  const backgroundColor = colors[key as keyof typeof colors];

  return sizeType == "primary" ? (
    <Box
      display="flex"
      cursor="pointer"
      alignItems="center"
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px={{
        base: "20px",
        xl: "30px",
        "2xl": "40px",
      }}
      py={{
        base: "22px",
        "2xl": "25px",
      }}
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      {iconPosition === "right" && icon}
      <Box fontSize={{ base: "18px", xl: "20px" }}>{text}</Box>
      {iconPosition === "left" && icon}
    </Box>
  ) : sizeType == "secondary" ? (
    <Box
      display="flex"
      cursor="pointer"
      alignItems="center"
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px={{
        base: "25px",
        xl: "28px",
      }}
      py={{
        base: "14px",
      }}
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      {iconPosition === "right" && icon}
      <Box fontSize={{ base: "18px", xl: "20px" }}>{text}</Box>
      {iconPosition === "left" && icon}
    </Box>
  ) : (
    <Box
      display="flex"
      cursor="pointer"
      alignItems="center"
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px="10px"
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      {iconPosition === "right" && icon}
      <Box fontSize={{ base: "18px", xl: "20px" }}>{text}</Box>
      {iconPosition === "left" && icon}
    </Box>
  );
};

export default CustomButton;
