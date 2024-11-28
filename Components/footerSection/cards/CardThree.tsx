import { Box, Flex, Text } from "@chakra-ui/react"
import { FooterCard } from "../FooterCard"
import Image from "next/image"
import facebook from '@/public/icons/facebook.png';
import instagram from '@/public/icons/instagram.png';
import linkedin from '@/public/icons/linkedin.png';
import youtube from '@/public/icons/youtube.png';
import twitter from '@/public/icons/twitter.png';
import discord from '@/public/icons/discord.png';
import tiktok from '@/public/icons/tiktok.png';
import thread from '@/public/icons/thread.png';
export const CardThree = () => {
    return (
      <>
         <FooterCard text="مواقع التواصل الاجتماعي" color="purple">
         <Box marginTop="30px">
         <Flex wrap="wrap" width={{base:"80%",lg:"50%",md:"70%",sm:"80%"}} >
         {icons.map((icon, index) => (
          <Box
          key={icon.id}
          width="25%"
           marginBottom="15px"
          >
          <Image width={30} height={30} src={icon.path} alt={`icon-${index}`} />
        </Box>
      ))}
    </Flex>
    </Box>
    <Text 
    width={{base:"100%",lg:"95%",md:"",sm:"100%"}}
     marginTop={{base:"10px",lg:"30px",md:"20px",sm:"10px"}}
     fontSize={{base:"14px",lg:"17px",md:"19px",sm:"14px"}}
     >انضم الآن إلى مجتمع المبرمجين في الأكاديمية
    وابدأ رحلتك نحو احتراف البرمجة!</Text>
</FooterCard>
      </>)}
      const icons = [
        { id: 1, path: facebook },
        { id: 2, path: instagram },
        { id: 3, path: twitter },
        { id: 4, path: linkedin },
        { id: 5, path: tiktok },
        { id: 6, path: youtube },
        { id: 7, path: thread },
        { id: 8, path: discord },
      ];
