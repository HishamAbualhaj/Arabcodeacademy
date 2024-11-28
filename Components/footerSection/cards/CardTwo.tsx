import { Box, Button, Text } from "@chakra-ui/react"
import { FooterCard } from "../FooterCard"
import Image from "next/image"
import site from '@/public/icons/site.png';
import phone from '@/public/icons/phone.png';
import message from '@/public/icons/message.png';
import whitePhone from '@/public/icons/whitePhone.png';
export const CardTwo = () => {
    return (
      <>
       <FooterCard text="التواصل" color="purple">
          <Box display="flex" gap={4} alignItems="center" marginBottom={{ base: "15px", lg: "22px", md: "25px", sm: "15px" }}>
            <Box
              width={{ base: "15px", lg: "17px", md: "15px", sm: "15px" }}
              height={{ base: "19px", lg: "27px", md: "22px", sm: "19px" }}
            >
              <Image src={site} alt="site icon" />
            </Box>
            <Text fontSize={{ base: "12px", lg: "16px", md: "16px", sm: "12px" }}>المقر الرئيسي : برطانيا , لندن</Text>
          </Box>
          <Box display="flex" gap={4} alignItems="center" marginBottom={{ base: "15px", lg: "22px", md: "25px", sm: "15px" }}>
            <Box
              width={{ base: "17px", lg: "24px", md: "17px", sm: "17px" }}
              height={{ base: "13.5px", lg: "22px", md: "16px", sm: "13.5px" }}
            >
              <Image src={phone} alt="phone icon" />
            </Box>
            <Text fontSize={{ base: "12px", lg: "16px", md: "16px", sm: "12px" }}>+447918713367</Text>
          </Box>
          <Box display="flex" gap={4} alignItems="center" marginBottom={{ base: "15px", lg: "22px", md: "25px", sm: "15px" }}>
            <Box
              width={{ base: "13px", lg: "24px", md: "15px", sm: "13px" }}
              height={{ base: "10px", lg: "17px", md: "12px", sm: "10px" }}
            >
              <Image src={message} alt="message icon" />
            </Box>
            <Text fontSize={{ base: "12px", lg: "16px", md: "16px", sm: "12px" }}>info@arabcodeacademy.com</Text>
          </Box>
          <Button
            background="#00BE98"
            height={{ base: "38px", lg: "42px", md: "48px", sm: "38px" }}
            width={{ base: "90px", lg: "128px", md: "148px", sm: "88px" }}
            fontSize={{ base: "11px", lg: "18px", md: "20px", sm: "11px" }}
          >
            <Image width={22} height={22} src={whitePhone} alt="icon" />
            تواصل معنا
          </Button>
        </FooterCard>
      </>)}