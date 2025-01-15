import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
interface CustomButtonProps extends ButtonProps {
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
    <Button
      width={{ base: "200px", xl: "330px", "2xl": "310px" }}
      height={{ base: "60px", xl: "85px", "2xl": "80px" }}
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px={{
        base: "20px",
        xl: "30px",
        "2xl": "40px",
      }}
      py={{
        base: "32px",
        "2xl": "35px",
      }}
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      {iconPosition === "right" && icon}
      {text}
      {iconPosition === "left" && icon}
    </Button>
  ) : sizeType == "secondary" ? (
    <Button
      width={{ base: "150px", xl: "234px", "2xl": "200px" }}
      height={{ base: "50px", xl: "70px", "2xl": "60px" }}
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px={{
        base: "10px",
        "2xl": "20px",
      }}
      py={{
        base: "25px",
      }}
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      {iconPosition === "right" && icon}
      {text}
      {iconPosition === "left" && icon}
    </Button>
  ) : (
    <Button
      width={{ base: "100px", xl: "160px", "2xl": "140px" }}
      height={{ base: "40px", xl: "50px", "2xl": "44px" }}
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
      {text}
      {iconPosition === "left" && icon}
    </Button>
  );
};

export default CustomButton;
