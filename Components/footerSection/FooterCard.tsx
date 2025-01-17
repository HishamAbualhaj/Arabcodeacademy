/**
 * FooterCard Component
 *
 * This component serves as a styled container for footer elements, combining an address label with
 * additional content which can be dynamically inserted. It uses Chakra UI for styling, allowing for
 * responsive and theme-consistent design across various devices. The component is ideal for creating
 * visually distinct sections within a website's footer, such as contact information, links, or any other
 * relevant content.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the FooterCard component.
 * @param {string} props.text - The text to be displayed by the Address component within the FooterCard.
 * @param {'white' | 'purple'} props.color - The color theme for the Address component's text and styling.
 * @param {React.ReactNode} props.children - Child components or elements to be displayed within the FooterCard.
 *
 * @example
 * <FooterCard text="Contact Us" color="purple">
 *   <Link href="/contact">More Info</Link>
 * </FooterCard>
 *
 * @returns {React.ReactElement}
 * Renders a styled box containing an Address component for the header, followed by any children elements
 * provided. This arrangement allows for flexible use of the FooterCard to suit various content needs within
 * a footer.
 */

import { Box } from "@chakra-ui/react";
import React from "react";
import { Address } from "./Address";
interface Props {
  text: string;
  color: "white" | "purple";
  children: React.ReactNode;
}

export const FooterCard: React.FC<Props> = ({ children, text, color }) => {
  return (
    <>
      <Box
        height={{ base: "270px", lg: "369px", md: "340px", sm: "270px" }}
        width={{ base: "247px", lg: "380px", md: "338px", sm: "247px" }}
        background="#ffffff"
        borderRadius="5px"
      >
        <Box
          paddingRight={{ base: "27px", lg: "37.5px", md: "35px", sm: "27px" }}
          paddingTop={{ base: "25px", lg: "33px", md: "33px", sm: "25px" }}
          paddingBottom={{ base: "22px", lg: "105px", md: "38px", sm: "22px" }}
        >
          <Address text={text} color={color} />
          <Box
            marginTop={{ base: "35px", lg: "40px", md: "35px", sm: "35px" }}
            color="#713488"
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
