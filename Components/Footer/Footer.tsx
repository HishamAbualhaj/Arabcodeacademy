/**
 * Footer Component
 *
 * This component serves as the footer for a website, integrating several sub-components to display
 * a variety of information and links. It utilizes a flexible box layout to arrange its child
 * components into a responsive grid that adapts to different screen sizes. The Footer includes
 * three main card components (CardOne, CardTwo, CardThree), a resources section, and a basic footer
 * bottom component, which together provide a comprehensive display of contact details, social media
 * links, and additional resources.
 *
 * @component
 * 
 * @example
 * <Footer />
 *
 * @returns {React.ReactElement}
 * Renders a full-featured footer that organizes various pieces of information in a visually appealing
 * and accessible layout. The footer's background color and padding are set to provide visual
 * separation from the main content. Each card component within the footer can be individually
 * tailored to display specific types of content, such as contact information, social media links,
 * or additional navigation options. The flexibility of the layout ensures that it remains
 * functional and stylish across all device sizes.
 */

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
