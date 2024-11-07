import React, { ReactNode } from "react";
import { chakra } from "@chakra-ui/react";

interface Props {
  text: string;
  icon?: ReactNode;
  padding?: number | string;
  px?: number | string;
  py?: number | string;
  rounded?: number | string;
  bgColor?: string;
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
}
const Button: React.FC<Props> = ({
  text,
  icon,
  padding,
  px,
  py,
  rounded,
  bgColor,
  color,
  fontSize,
  fontWeight,
}: Props) => {
  return (
    <chakra.button
      padding={padding}
      px={px}
      py={py}
      rounded={rounded}
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      alignItems={"center"}
      display={"flex"}
      gap={"10px"}
      cursor={"pointer"}
    >
      {text}
      {icon}
    </chakra.button>
  );
};

export default Button;
