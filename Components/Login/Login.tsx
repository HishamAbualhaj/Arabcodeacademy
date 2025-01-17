"use client"
import { Box, Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "@/styles/global-info";
import { Checkbox } from "@/Components/ui/checkbox";
import { PasswordInput } from "@/Components/ui/password-input"
import CustomButton from "../CustomButton";
import  Profile  from '@/public/icons/profile.svg';
import  LoginIcon  from '@/public/icons/login.svg';
import {loginSchema} from '@/validation/loginSchema'
import { Field } from "@/Components/ui/field"
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = loginSchema.safeParse(formData);
  
    if (!validation.success) {
      const newErrors = validation.error.format();
      setErrors({
        email: newErrors.email?._errors[0],
        password: newErrors.password?._errors[0],
      });
    } else {
      setErrors({});
      try {
        const response = await fetch("/api/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          toast.success('تم عملية الدخول بنجاح', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
           router.push('/')
        } else {
          const error = await response.json();
          console.error(error.message);
          setErrors({ email: "Invalid email or password" });
        }
      } catch (err) {
        console.error("Error during login:", err);
      }
    }
  };
 
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height={{  lg: "818px", md: "1384px" }}
        gap={10}
      >
        <Flex
          boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.25)"
          justifyContent="center"
          alignItems="center"
          direction={{ base: "column-reverse", lg: "row" }}
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
            <form onSubmit={handleSubmit}>
             <Box marginStart={{base:"15px",lg:"106px",md:"76px"}} marginEnd={"48px"}>
                 <Field   
                 invalid={!!errors.email}
                 marginBottom="50px"
                  label={
                      <span style={{ color: colors.mainColor  ,fontWeight:"bold"}}>
                        <Flex gap={2} alignItems="center">
                        <Image src="icons/emailIcon.svg" alt="email icon"/>
                        <Box>
                          اسم المستخدم أو البريداللإلكتروني
                          <span style={{ color: colors.mainColor }}>*</span></Box>
                          </Flex>
                      </span>
                    } errorText={errors.email}>
                  <Input   name="email" value={formData.email}
                   onChange={handleChange} borderColor={errors.email?"red":colors.mainColor}  color={colors.mainColor}  focusRingColor={colors.mainColor}   _focus={{boxShadow:" 0px 1px 10px 0px rgba(0, 0, 0, 0.1)"}} />
                </Field>
                <Field 
                  invalid
                  label={
                      <span style={{ color: colors.mainColor  ,fontWeight:"bold"}}>
                        <Flex gap={2}>
                        <Image src="icons/lock.svg" alt="email icon"/>
                        <Box>
                          كلمة المرور
                          <span style={{ color: colors.mainColor }}>*</span></Box>
                          </Flex>
                      </span>
                    } errorText={errors.password}>
                  <PasswordInput name="password"
                      value={formData.password}
                    onChange={handleChange}
                   borderColor={errors.password?"red":colors.mainColor}  color={colors.mainColor}  focusRingColor={colors.mainColor}   _focus={{boxShadow:" 0px 1px 10px 0px rgba(0, 0, 0, 0.1)"}} />
                </Field>
                </Box>
            <Text
              color={colors.mainColor}
              textAlign={{ base: "center",lg:"start", md: "center", sm: "center" }}
              marginStart={{ base: "0px", lg: "106px" }}
              marginTop="55px"
            >
              نسيت كلمة المرور؟
            </Text>
            <Flex
              
              justifyContent={{ base: "center",lg:"flex-start", md: "center", sm: "center" }}
              marginStart={{ base: "0px", lg: "106px" }}
              marginTop="25px"
            >
              <Checkbox dir="rtl" color={colors.mainColor}>البقاء متصلا</Checkbox>
            </Flex>
            <Flex flexDirection={{ base: "column", xl: "row" }} alignItems="center" gap="10px" marginBlock="25px" justify="center">
            <CustomButton
               type="submit"
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
            </form> 
            <Flex gap={8} justify="center">
            <Button  
            _hover={{ bg: "#2C5590" }}
            width={{base:"100px",lg:"155px",md:"175px"}}
            height={{base:"40px",lg:"47px",md:"58px"}}
            bg="#3566A5"
              fontWeight="bold"
              fontSize={{base:"10px",lg:"20px",md:"22px"}}
              textAlign={{ base: "center",lg:"center", md: "start", sm: "center" }}
              marginBlock="40px">
                <Flex justifyContent="center" alignItems="center"  width={{base:"95px",lg:"155px",md:"175px"}}>
                <Text borderLeft="1px solid white" width="60%" paddingBlock="8%"  height={{base:"35px",lg:"47px",md:"58px"}}>Facebook </Text> 
               <Image src="icons/facebook-f.svg" width="10%" marginStart="10px" alt="google-plus-g"  />
                </Flex>
            </Button>
            <Button  
            _hover={{ bg: "#C13A2E" }}
            width={{base:"100px",lg:"155px",md:"175px"}}
            height={{base:"40px",lg:"47px",md:"58px"}}
            bg="#DB4A39"
              fontWeight="bold"
              fontSize={{base:"10px",lg:"20px",md:"22px"}}
              textAlign={{ base: "center",lg:"center", md: "start", sm: "center" }}
              marginBlock="40px">
                <Flex justifyContent="center" alignItems="center"  width={{base:"95px",lg:"155px",md:"175px"}}>
                <Text borderLeft="1px solid white" width="53%" paddingBlock="8%"  height={{base:"35px",lg:"47px",md:"58px"}}>Google </Text> 
               <Image src="icons/google-plus-g.svg" width="22%" marginStart="10px" alt="google-plus-g"  />
                </Flex>
             
            </Button>
            </Flex>
          </Box>   
          <Box width={{ base: "100%", lg: "50%" }}  >
            <Image src="/images/login.png" alt="login img" />
          </Box>
        </Flex>
      </Flex>
  
    </>
  );
};

export default Login;
