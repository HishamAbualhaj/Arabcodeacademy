import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "@/styles/global-info";
import { Checkbox } from "@/Components/ui/checkbox";
import LoginForm from "./LoginForm";
import CustomButton from "@/Components/CustomButton/CustomButton";
import  Profile  from '@/public/icons/profile.svg';
import  LoginIcon  from '@/public/icons/login.svg';
import GooglePlus from '@/public/icons/google-plus-g.svg';
import Facebook from '@/public/icons/facebook-f.svg'

const Login: React.FC = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height={{ base: "857px", lg: "818px", md: "1384px", sm: "857px" }}
        gap={10}
      >
        <Flex
          boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.25)"
          justifyContent="center"
          alignItems="center"
          direction={{ base: "column", lg: "row" }}
          width={{ base: "270px", lg: "1100px", md: "667px", sm: "370px" }}
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
            <LoginForm />
            <Text
              color={colors.mainColor}
              textAlign={{ base: "start",lg:"start", md: "center", sm: "center" }}
              marginStart={{ base: "0px", lg: "106px" }}
              marginTop="55px"
            >
              نسيت كلمة المرور؟
            </Text>
            <Flex
              
              justifyContent={{ base: "flex-start",lg:"flex-start", md: "center", sm: "center" }}
              marginStart={{ base: "0px", lg: "106px" }}
              marginTop="25px"
            >
              <Checkbox dir="rtl" color={colors.mainColor}>البقاء متصلا</Checkbox>
            </Flex>
            <Flex flexDirection={{ base: "column", xl: "row" }} gap="10px" marginBlock="25px" justify="center">
            <CustomButton
                text="تسجيل دخول"
                ButtonColor="green"
                sizeType="secondary"
                icon={<LoginIcon  width="25px" height="25px"/>}
              ></CustomButton>
              <CustomButton
               text="إنشاء حساب"
                ButtonColor="orange"
                sizeType="secondary"
                icon={<Profile width="25px" height="25px" />}
              ></CustomButton>
            </Flex>
            <Button  
            width={{base:"100px",lg:"170px",md:"190px"}}
            height={{base:"40px",lg:"58px",md:"64px"}}
            bg="#DB4A39"
              fontWeight="bold"
              fontSize={{base:"10px",lg:"20px",md:"22px"}}
              textAlign={{ base: "center",lg:"center", md: "start", sm: "center" }}
              marginBlock="40px">
               Google  <GooglePlus width="35px" height="35px" /> 
            </Button>
          </Box>   
          <Box width={{ base: "100%", lg: "50%" }}>
            <Image src="/images/login.png" alt="login img" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
