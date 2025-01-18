/**
 * RecorsesSection Component
 *
 * This component serves as a dedicated section within a footer to display various resource links,
 * utilizing a flexible layout for responsiveness. It showcases multiple FooterButtons, each
 * representing a different resource such as blogs, forums, and educational materials. The Address
 * component is used here to label the section as 'Resources' in a visually distinct manner.
 *
 * @component
 *
 * @example
 * <RecorsesSection />
 *
 * @returns {React.ReactElement}
 * Renders a section within a footer that includes a title and a series of clickable buttons, each
 * leading to different resources. The layout adjusts responsively based on the viewport size to
 * ensure that the buttons are accessible and well-presented on all devices.
 */

import { Box, Flex } from "@chakra-ui/react";
import FooterButton from "./FooterButton";
import { Address } from "./Address";

export const RecorsesSection = () => {
  return (
    <Box
      marginBottom="20px"
      marginTop="70px"
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", lg: "start" }}
    >
      <Address text="مصادر" color="white" />
      <SimpleGrid
        alignSelf="center"
        marginTop="25px"
        columns={{ base: 1, sm: 2, xl: 4 }}
        gap="10px"
      >
        {buttonText.map((item) => (
          <Box flex="1" key={item.id} marginBottom="10px">
            <FooterButton text={item.name} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
const buttonText = [
  { id: 1, name: "المدونة" },
  { id: 2, name: "المنتدى" },
  { id: 3, name: "قاموس الكلمات" },
  { id: 4, name: "دروس فيديو قصيرة" },
  { id: 5, name: "دليل أدوات الذكاء الإصطناعي" },
  { id: 6, name: "بنك الأسئلة التقنية" },
  { id: 7, name: "دروس وأنماط الميدجورني" },
  { id: 8, name: "لغة الضاد" },
];
