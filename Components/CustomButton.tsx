// ButtonComponent.tsx
import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { background } from "@/styles/global-info";

interface CustomButtonProps extends ButtonProps {
  text: string;
  icon?: ReactNode;
  sizeType: "lg" | "md" | "sm";
  ButtonColor: "green" | "orange";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon: icon,
  sizeType,
  ButtonColor,
  ...rest
}) => {
  const { backgroundColor } = background[ButtonColor];
  return (
    <Button
      // width={width}
      //height={height}
      size={sizeType}
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      padding="10px 20px"
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
