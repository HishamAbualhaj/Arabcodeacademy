"use-client";
import React, { useContext, useEffect, useState } from "react";
import {
  signUpSchemaPageOne,
  signUpSchemaPageTwo,
  SignUpTypePageOne,
  SignUpTypePageTwo,
} from "./signUpValidation";
import SignWithButton from "./SignWithButton";
import LinkComponent from "./LinkComponent";
import { Flex, Text } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
import { useForm, SubmitHandler } from "react-hook-form";
import SignUpPageOne from "./SignUpPages/SignUpPageOne";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUpPageTwo from "./SignUpPages/SignUpPageTwo";
import { UserContextProvider } from "@/Components/ContextData/UserInformation";
type CurrentPageSchemaType = SignUpTypePageOne | SignUpTypePageTwo;
const SignUpForm = () => {
  const userInfoContext = useContext(UserContextProvider);

  if (!userInfoContext) {
    console.error("UserInfoContext is undefined.");
  }

  const [page, setPage] = useState(1);
  const currentPageSchema =
    page === 1 ? signUpSchemaPageOne : signUpSchemaPageTwo;

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CurrentPageSchemaType>({
    mode: "onChange",
    resolver: zodResolver(currentPageSchema),
  });
  const country = watch('country');

  useEffect(() => {
    register('country');
  }, [register]);
  useEffect(() => setValue('country', 'اختر بلدك'),[]);
  console.log(errors);
  const onSubmit: SubmitHandler<CurrentPageSchemaType> = (data) => {
    if (page === 1) submitPageOneHandler(data);
    else submitPageTwoHandler(data);
    console.log("well hello");
  };
  const submitPageOneHandler = (data: CurrentPageSchemaType) => {
    userInfoContext?.setUserInformation(data);
    setPage(2);
    console.log(data);
  };
  const submitPageTwoHandler = (data: CurrentPageSchemaType) => {
    userInfoContext?.setUserInformation({...data, country});
    console.log(data);
    console.log("context", userInfoContext);
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight={{ base: "903px", xl: "1477px", "2xl": "1466px" }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={{ base: "300px", xl: "872px", "2xl": "889px" }}
        minHeight={{ base: "870px", xl: "1017px", "2xl": "1000px" }}
        boxShadow={{
          base: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
          xl: "0px 1px 20px 2px rgba(0, 0, 0, 0.25)",
        }}
        borderRadius="10px"
        pb={{ base: "59px", xl: "80px", "2xl": "60px" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {page === 1 ? (
            <SignUpPageOne
              errors={errors}
              isSubmitting={isSubmitting}
              registers={{
                email: register("email"),
                password: register("password"),
                confirmPassword: register("confirmPassword"),
              }}
            />
          ) : (
            <SignUpPageTwo
              errors={errors}
              isSubmitting={isSubmitting}
              registers={{
                userName: register("userName"),
                firstName: register("firstName"),
                lastName: register("lastName"),
                termsAccepted: register("termsAccepted"),
              }}
              backButton={setPage}
              setValue={setValue}
            />
          )}
        </form>
        <Flex
          mt={{ base: "29px", xl: "35px", "2xl": "21px" }}
          justifyContent={{ base: "center", xl: "flex-start" }}
          alignItems={{ base: "center" }}
          flexDirection="column"
          width={{ base: "250px", xl: "744px", "2xl": "712px" }}
        >
          <LinkComponent href="#"> لديك حساب مسبقاً</LinkComponent>
          <Text
            color={colors.mainColor}
            mt={{ base: "22px", xl: "33px", "2xl": "30px" }}
          >
            يمكنك تسجيل الدخول باستخدام
          </Text>
          <Flex
            mt={{ base: "19px", xl: "30px", "2xl": "15px" }}
            width={{ base: "214px", xl: "410px", "2xl": "360px" }}
            justifyContent="space-between"
          >
            <SignWithButton type="facebook" />
            <SignWithButton type="google" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpForm;
