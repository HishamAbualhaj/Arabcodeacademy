/**
 * FooterBottom Component
 *
 * This component forms the lower part of a webpage's footer. It prominently features the organization's logo
 * and displays a copyright notice. The layout adjusts responsively based on the viewport size to ensure
 * optimal visual presentation across various devices. The component utilizes Chakra UI for styling and layout
 * management, offering a clean and modern look.
 *
 * @component
 *
 * @example
 * <FooterBottom />
 *
 * @returns {React.ReactElement}
 * Renders a flex container with a logo image and a text element. The logo is centered on smaller screens
 * and aligned to the left on larger screens, with the text aligned oppositely to balance the design.
 * This component effectively communicates copyright information while reinforcing brand identity at the
 * bottom of the site.
 */

import { Flex, Text, Box } from "@chakra-ui/react";
import ArabAcademyLogo from "@/public/icons/ArabAcademyLogo.png";
import Image from "next/image";
export const FooterBottom = () => {
  return (
    <>
      <hr />
      <Flex
        flexDirection={{
          base: "column-reverse",
          lg: "row",
          md: "row",
          sm: "column-reverse",
        }}
        justifyContent={{
          base: "center",
          lg: "space-between",
          md: "space-between",
          sm: "center",
        }}
        alignItems="center"
        marginTop="14px"
      >
        <Box width={{base:'170px', md:'300px'}}>
          <Image src={ArabAcademyLogo} alt="ArabAcademyLogo" />
        </Box>
        <Text fontSize={{ base: "14px", lg: "18px" }} color="#fff">
          جميع الحقوق محفوظة © 2023 الأكاديمية العربية للبرمجة
        </Text>
      </Flex>
    </>
  );
};
