/**
 * SignWithButton Component
 *
 * A customizable button component designed for social media sign-in options. This component dynamically adjusts
 * its display based on the specified type (e.g., Facebook, Google) and adapts the icon size and label based on
 * the viewport size using Chakra UI's `useBreakpointValue`. It provides a visually appealing and functional
 * button for user authentication through various social media platforms.
 *
 * @component
 * 
 * @param {Object} props - The properties passed to the SignWithButton component.
 * @param {() => void} [props.onClick] - Optional click handler to execute custom functionality when the button is clicked.
 * @param {string} props.type - The type of sign-in button to render. This determines the styling, icon, and text label of the button.
 *
 * @example
 * <SignWithButton
 *   onClick={() => console.log("Sign in with Facebook")}
 *   type="facebook"
 * />
 *
 * @returns {React.ReactElement}
 * Renders a button with a responsive design that adjusts icon and text size according to the screen size. Each button is styled
 * with colors and icons specific to the service it represents (Facebook, Google, etc.), and includes an interactive effect to
 * handle user interactions.
 *
 * Styles and Behaviors:
 * - The button adjusts its content and style based on the `type` prop, supporting various social media platforms.
 * - The size of the icon and text adjusts responsively to screen size changes.
 * - On click, the button executes an optional `onClick` function, allowing for integration with authentication processes.
 */

import React from "react";
import { Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebookF,  FaGooglePlusG } from "react-icons/fa";
interface SignWithButtonProps {
  onClick?: () => void; // Optional click handler
  type: string;
}

const SignWithButton: React.FC<SignWithButtonProps> = ({ onClick, type }) => {
  let buttonStyle = {
    name: "Facebook",
    color: "rgba(53, 102, 165, 1)",
    iconMobile: <FaFacebookF  />,
    iconTablet: <FaFacebookF width="19.39px" height="28.79px" />,
    iconDesktop: <FaFacebookF width="15px" height="21.48px" />,
  };

  switch (type) {
    case "facebook":
      buttonStyle = {
        name: "Facebook",
        color: "rgba(53, 102, 165, 1)",
        iconMobile: <FaFacebookF />,
        iconTablet: <FaFacebookF width="19.39px" height="28.79px" />,
        iconDesktop: <FaFacebookF width="15px" height="21.48px" />,
      };
      break;
    case 'google':
      buttonStyle = {
        name: "Google",
        color: "rgba(219, 74, 57, 1)",
        iconMobile: <FaGooglePlusG />,
        iconTablet: <FaGooglePlusG width="19.39px" height="28.79px" />,
        iconDesktop: <FaGooglePlusG width="15px" height="21.48px" />,
      };
      break;
    case 'twitter':  
  }
  const icon = useBreakpointValue({
    base: buttonStyle.iconMobile,
    xl: buttonStyle.iconTablet,
    "2xl": buttonStyle.iconDesktop,
  });

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={"row-reverse"}
      borderRadius="5px"
      bgColor={buttonStyle.color}
      onClick={onClick}
      width={{ base: "100px", xl: "190px", "2xl": '170px' }}
      height={{ base: "40px", xl: "64.63px", "2xl": '55.74px' }}
      boxShadow="0px 4px 4px 0px rgba(0,0,0,0.25)"
      cursor="button"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRightColor="white"
        borderRightWidth="1.5px"
        width={{ base: "31.61px", xl: "58.16px", "2xl": '45px' }}
        height="100%"
      >
        {icon}
      </Flex>
      <Text
        fontWeight={700}
        fontSize={{ base: "10px", xl: "22px", "2xl": '21px' }}
        lineHeight={{ base: "12.1px", xl: "26.4px", "2xl": '25.41px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={{ base: "68.39px", xl: "131.84px", "2xl": '125px' }}
      >
        {buttonStyle.name}
      </Text>
    </Flex>
  );
};

export default SignWithButton;
