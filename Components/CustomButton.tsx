// ButtonComponent.tsx
import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { background } from "@/styles/global-info";

interface CustomButtonProps extends ButtonProps {
  text: string;
  icon?: ReactNode;
  ButtonColor: "green" | "orange";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon: icon,
  ButtonColor,
  ...rest
}) => {
  const { backgroundColor } = background[ButtonColor];
  return (
    <Button
    width={{ base: "180px", lg: "200px", md: "190px", sm: "180px" }}
    height={{ base: "40px", lg: "60px", md: "50px", sm: "40px" }}
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
