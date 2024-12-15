import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { RecorsesSection } from './RecorsesSection';
import { FooterBottom } from './FooterBottom';
import { CardOne } from './cards/CardOne';
import { CardTwo } from './cards/CardTwo';
import { CardThree } from './cards/CardThree';

export const Footer = () => {
  return (
    <>
      <Box 
        background="#462576" 
        padding="20px" 
        paddingTop="92px" 
        paddingBottom="26px" 
        paddingEnd={{ base: "20px", lg: "190px" }} 
        paddingStart={{ base: "20px", lg: "210px" }}
      >
        <Flex 
          gap={5} 
          wrap="wrap" 
          flexDirection={{base:"column",lg:"row",md:"row",sm:"column"}}
          justifyContent={{base:"center",lg:"space-between"}}
          alignItems={{base:"center" ,sm:"center"}}
        >
     
          <Box 
            width={{ base: "65%", lg: "30%" }} 
           marginStart={{base:"0", lg:"0",md:"35%"}}
            marginBottom={{ base: "20px", md: "0" }}
          >
            <CardOne />
          </Box>

  
          <Box 
            width={{ base: "65%", lg: "30%",md:"45%" }} 
            marginBottom={{ base: "20px", md: "0" }}
          >
            <CardTwo />
          </Box>

          <Box 
            width={{ base: "65%", lg: "30%",md:"45%" }} 
          >
            <CardThree />
          </Box>
        </Flex>
        <RecorsesSection />
        <FooterBottom />
      </Box>
    </>
  );
};
