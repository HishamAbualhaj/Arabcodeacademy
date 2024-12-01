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
        ? "310px"
        : sizeType == "secondary"
        ? "200px"
        : "140px",
    widthTablet:
      sizeType == "primary"
        ? "330px"
        : sizeType == "secondary"
        ? "234px"
        : "160px",
    widthMobile:
      sizeType == "primary"
        ? "200px"
        : sizeType == "secondary"
        ? "150px"
        : "100px",
  };

  const height = {
    heightDesktop:
      sizeType == "primary"
        ? "80px"
        : sizeType == "secondary"
        ? "60px"
        : "44px",
    heightTablet:
      sizeType == "primary"
        ? "85px"
        : sizeType == "secondary"
        ? "70px"
        : "50px",
    heightMobile:
      sizeType == "primary"
        ? "60px"
        : sizeType == "secondary"
        ? "50px"
        : "40px",
  };

  const { backgroundColor } = background[ButtonColor];
  return (
    <Button
      _hover={{ bg: ButtonColor === "green" ? "#04B08E" : "#FA4E27" }}
      width={{
        base: width.widthMobile,
        xl: width.widthTablet,
        "2xl": width.widthDesktop,
      }}
      height={{
        base: height.heightMobile,
        xl: height.heightTablet,
        "2xl": height.heightDesktop,
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
