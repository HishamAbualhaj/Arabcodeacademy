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
  const width = {
    widthDesktop:
      sizeType == "primary"
        ? "30px"
        : sizeType == "secondary"
        ? "30px"
        : "25px",
    widthTablet:
      sizeType == "primary"
        ? "30px"
        : sizeType == "secondary"
        ? "25px"
        : "25px",
    widthMobile:
      sizeType == "primary"
        ? "20px"
        : sizeType == "secondary"
        ? "15px"
        : "10px",
  };

  const { backgroundColor } = background[ButtonColor];
  return (
    <Button
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      px={{
        base: width.widthMobile,
        xl: width.widthTablet,
        "2xl": width.widthDesktop,
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
  );
};

export default CustomButton;
