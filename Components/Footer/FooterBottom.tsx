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
