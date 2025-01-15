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
