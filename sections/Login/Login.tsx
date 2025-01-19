/**
 * Login Component
 *
 * A user authentication section of the web application designed to facilitate user login. 
 * The component provides a login form, alternative sign-in options, and a decorative image, 
 * offering a seamless and visually appealing user experience. The layout is responsive 
 * and adapts to different screen sizes for better accessibility.
 *
 * @component
 *
 * @example
 * <Login />
 *
 * @returns {React.ReactElement}
 * Renders a login interface featuring:
 * - A login form component (`LoginForm`) for user credentials.
 * - Alternative sign-in buttons for Google and Facebook via the `SignWithButton` component.
 * - A decorative image to visually enhance the login section.
 * The component uses a flexible box layout to structure the elements and ensures proper spacing 
 * and alignment across various screen sizes.
 *
 * Features:
 * - Responsive layout: Adjusts seamlessly between mobile and desktop views.
 * - Themed styling: Integrates with the app's global color scheme.
 * - Accessibility: Designed to offer a user-friendly experience across devices.
 */
"use client"
import { Box, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import { colors } from "@/styles/global-info";
import SignWithButton from "@/Components/FormComponents/SignWithButton";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.25)"
          justifyContent="center"
          alignItems="center"
          margin="10%"
          direction={{ base: "column-reverse", lg: "row" }}
         
        >
         
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text
              color={colors.mainColor}
              marginStart={{ base: "15px", lg: "79px" }}
              marginBlock={{ base: "20px", lg: "38px", md: "30px" }}
              fontSize="2xl"
            >
              تسجيل الدخول
            </Text>
           <LoginForm/>
           <Flex alignItems="center" gap={2} justifyContent="center">
             <Box height='1px' width={{base:"160px",lg:"190px",md:"200px"}} bg={colors.mainColor} display={{base:"none",sm:"block"}}></Box>
           <Text color={colors.mainColor}>يمكنك تسجيل الدخول باستخدام </Text>
           <Box height='1px' width={{base:"160px",lg:"190px" ,md:"200px"}} bg={colors.mainColor} display={{base:"none",sm:"block"}}></Box>

           </Flex>
          
            <Flex gap={8} justify="center" marginBlock="30px">
            <SignWithButton type="facebook"/>
            <SignWithButton type="google"/>
            </Flex>
          
          </Box>   

          <Box width={{ base: "100%", lg: "50%" }} >
            <Image src="/images/login.png" alt="login img" width="full" height="full"/>
          </Box>
        </Flex>
      
      </Flex>
      
    </>
  );
};

export default Login;
