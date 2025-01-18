/**
 * CustomButton Component
 *
 * A reusable button component that adapts to different styles, sizes, and color themes. It supports displaying an icon
 * on either side of the button's text, based on the `iconPosition` property.
 *
 * @component
 * @param {Object} props - The properties required to render the CustomButton component.
 * @param {string} props.text - The text to be displayed inside the button.
 * @param {ReactNode} props.icon - An optional icon to be displayed alongside the button text.
 * @param {string} props.ButtonColor - The key from the global colors object determining the button's background color.
 * @param {"primary" | "secondary" | "thirdly"} props.sizeType - The size variant of the button. Determines the button's
 * width, height, and padding:
 *  - `primary`: Large button with extra padding.
 *  - `secondary`: Medium button with moderate padding.
 *  - `thirdly`: Small button with compact padding.
 * @param {string} [props.iconPosition="right"] - The position of the icon relative to the text. Defaults to `right`.
 * @param {ButtonProps} props.rest - Additional properties inherited from Chakra UI's `Button` component.
 *
 * Features:
 * - Supports three size types (`primary`, `secondary`, `thirdly`) for flexible usage.
 * - Accepts customizable colors from the global `colors` object.
 * - Optionally displays an icon to the left or right of the button text.
 * - Implements hover effects for visual feedback.
 * - Fully responsive design, adapting dimensions to screen sizes using Chakra UI breakpoints.
 *
 * @returns {React.ReactElement}
 * Renders a button element with customizable styles, text, and optional icon.
 *
 * Usage Example:
 * ```jsx
 * <CustomButton
 *   text="Submit"
 *   icon={<SubmitIcon />}
 *   ButtonColor="green"
 *   sizeType="primary"
 *   iconPosition="left"
 *   onClick={() => console.log('Button clicked')}
 * />
 * ```
 *
 * This component is suitable for use across the application for consistent button styling and behavior.
 */

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
