/**
 * FooterButton Component
 *
 * A reusable button component tailored for use within a footer context, leveraging Chakra UI for styling.
 * This button is styled with transparency and a white border, making it suitable for dark-themed footers.
 * The component inherits properties from Chakra UI's ButtonProps, allowing it to accept any button-related
 * props for further customization.
 *
 * @component
 * 
 * @param {Object} props - Extends Chakra UI's ButtonProps, including any button-specific properties.
 * @param {string} props.text - The text content displayed on the button.
 *
 * @example
 * <FooterButton text="Contact Us" onClick={handleClick} />
 *
 * @returns {React.ReactElement}
 * Renders a customizable button styled specifically for footer usage. The button's dimensions, border,
 * font size, and other styling properties can be adjusted to fit different design needs and footer styles.
 */

import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";


interface Props extends ButtonProps {
  text: string;
 
}

const FooterButton: React.FC<Props> = ({
  text,
 
}) => {
 
  return (
    <Button
    height={{base:"45px",lg:"50px",md:"60px",sm:"180px"}}
    width={{base:"180px",lg:"220px",md:"277px",sm:"180px"}}
    border="1px solid #ffffff"
    borderRadius="6px"
    fontSize={{base:"14px",lg:"17px",md:"19px",sm:"14px"}}
    lineHeight={{base:"16.8px",lg:"22.8px",md:"22.8",sm:"16.8px"}}
    background="transparent"
    color="white"
    >
      
      {text}
    </Button>
  );
};

export default FooterButton;
