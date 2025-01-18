import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { RecorsesSection } from "./RecorsesSection";
import { FooterBottom } from "./FooterBottom";
import { CardOne } from "./cards/CardOne";
import { CardTwo } from "./cards/CardTwo";
import { CardThree } from "./cards/CardThree";

export const Footer = () => {
  return (
    <>
      <Box paddingInline="20px" background="#462576">
        <Box
          paddingTop={{base:'20px', md: '50px', xl:'92px'}}
          paddingBottom="26px"
          maxW={{ base: "900px", xl: "1400px" }}
          marginInline="auto"
        >
          <Flex
            gap={{ base: "50px", xl: "70px" }}
            flexDirection={{ base: "column", xl: "row" }}
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            <Box>
              <CardOne />
            </Box>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              gap="20px"
              flex="1"
            >
              <Box
                paddingInline="25px"
                pb="80px"
                background="#ffffff"
                borderRadius="5px"
                flex="1"
              >
                <CardTwo />
              </Box>
              <Box
                paddingInline="25px"
                pb="80px"
                background="#ffffff"
                borderRadius="5px"
                flex="1"
              >
                <CardThree />
              </Box>
            </Flex>
          </Flex>
          <RecorsesSection />
          <FooterBottom />
        </Box>
      </Box>
    </>
  );
};
