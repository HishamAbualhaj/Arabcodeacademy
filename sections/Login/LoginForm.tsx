import { Flex, Image, Input,Box } from "@chakra-ui/react";
import { Field } from "@/Components/ui/field"
import{colors} from "@/styles/global-info"


const LoginForm: React.FC = () => {
   

  return (
    <>
    <Box marginStart={{base:"15px",lg:"106px",md:"76px"}} marginEnd={"48px"}>
     <Field   
    
     marginBottom="50px"
      label={
          <span style={{ color: colors.mainColor  ,fontWeight:"bold"}}>
            <Flex gap={2}>
            <Image src="icons/emailIcon.svg" alt="email icon"/>
            <Box>
              اسم المستخدم أو البريداللإلكتروني
              <span style={{ color: colors.mainColor }}>*</span></Box>
              </Flex>
          </span>
        } errorText="اسم المستخدم غير صحيح">
      <Input   borderColor={colors.mainColor}  color={colors.mainColor}  focusRingColor={colors.mainColor}   _focus={{boxShadow:" 0px 1px 10px 0px rgba(0, 0, 0, 0.1)"}} />
    </Field>
    <Field  
      label={
          <span style={{ color: colors.mainColor  ,fontWeight:"bold"}}>
            <Flex gap={2}>
            <Image src="icons/lock.svg" alt="email icon"/>
            <Box>
              كلمة المرور
              <span style={{ color: colors.mainColor }}>*</span></Box>
              </Flex>
          </span>
        } errorText="كلمة المرور غير صحيحة">
      <Input  borderColor={colors.mainColor}  color={colors.mainColor}  focusRingColor={colors.mainColor}   _focus={{boxShadow:" 0px 1px 10px 0px rgba(0, 0, 0, 0.1)"}} />
    </Field>
    </Box>
    </>)} ;
    export default LoginForm;