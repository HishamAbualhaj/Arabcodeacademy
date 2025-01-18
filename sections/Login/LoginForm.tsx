/**
 * LoginForm Component
 *
 * A form component designed for user authentication. It provides an intuitive interface for 
 * users to log in by entering their email and password. The component includes:
 * - Input validation using `zod` with `loginSchema`.
 * - Error handling with user feedback for invalid inputs or failed login attempts.
 * - Integration with a backend authentication API.
 * - Responsive layout for various screen sizes.
 *
 * @component
 *
 * @example
 * <LoginForm />
 *
 * @returns {React.ReactElement}
 * Renders a login form that includes:
 * - Text fields for email and password with validation and error handling.
 * - An option to stay logged in using a checkbox.
 * - Links for password recovery.
 * - Buttons for "Login" and "Create Account," each with associated icons.
 *
 * Key Features:
 * - Input validation using `zod` schema to ensure proper data entry.
 * - API interaction to authenticate users via the `/api/authenticate` endpoint.
 * - Uses Chakra UI components for styling and layout.
 * - Accessible and localized for Arabic-speaking users.
 */
"use client"
import { Flex, Image, Input,Box,Text } from "@chakra-ui/react";
import { Field } from "@/Components/ui/field"
import { Checkbox } from "@/Components/ui/checkbox";
import { PasswordInput } from "@/Components/ui/password-input"
import CustomButton from "@/Components/CustomButton/CustomButton";
import  Profile  from '@/public/icons/profile.svg';
import  LoginIcon  from '@/public/icons/login.svg';
import { colors } from "@/styles/global-info";
import {loginSchema} from '@/validation/loginSchema'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
const LoginForm: React.FC = () => {
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
   <form onSubmit={handleSubmit}>
             <Box marginStart={{base:"15px",lg:"106px",md:"78px"}} marginEnd={"48px"}>
                 <Field   
                 invalid={!!errors.email}
                 marginBottom={errors.email?"8px":"40px"}
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
                  invalid={!!errors.password}
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
              marginTop="40px"
            >
              نسيت كلمة المرور؟
            </Text>
            <Flex
              
              justifyContent={{ base: "center",lg:"flex-start", md: "center", sm: "center" }}
              marginStart={{ base: "0px", lg: "106px" }}
              marginTop="20px"
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
    </>)} ;
    export default LoginForm;