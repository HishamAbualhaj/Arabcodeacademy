import { Box, SimpleGrid } from "@chakra-ui/react";
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
