import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { background } from "@/styles/global-info";

interface CustomButtonProps extends ButtonProps {
  text: string;
  icon?: ReactNode;
  ButtonColor: "green" | "orange";
  sizeType: "primary" | "secondary" | "thirdly";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon: icon,
  ButtonColor,
  sizeType,
  ...rest
}) => {
  const { backgroundColor } = background[ButtonColor];
  return sizeType == "primary" ? (
    <Button
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
      {icon}
      {text}
    </Button>
  ) : sizeType == "secondary" ? (
    <Button
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
      {icon}
      {text}
    </Button>
  ) : (
    <Button
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px="10px"
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      {icon}
      {text}
    </Button>
  );
};

export default CustomButton;
