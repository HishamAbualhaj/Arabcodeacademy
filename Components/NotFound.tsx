import React from 'react'
// import { Image, Text ,VStack} from "@chakra-ui/react"
import { colors } from "@/styles/global-info";
import {  Text ,VStack} from "@chakra-ui/react"
import OpsImg from '@/public/icons/OpsImg.png'
import Image from 'next/image';
const NotFound: React.FC = () => {
  return (
   <>
     <VStack>
        
    <Image src={OpsImg} alt='OpsImg'   height={90} 
  width={136} 
  style={{
    height: "auto",
    width: "auto",
  }}/>
    <Text color={colors.mainColor} fontWeight="bold"  fontSize={{base:"10px",lg:"20px",md:"13px",sm:"10px"}}>تعذر الاتصال مع خادم البيانات الرجاء المحاولة مرة أخرى</Text>
  
    </VStack>
   </>
  )
}

export default NotFound