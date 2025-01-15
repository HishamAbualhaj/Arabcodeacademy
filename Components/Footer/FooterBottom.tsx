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
        <Box
          width={{ base: 75, lg: 190, md: 180, sm: 75 }}
          height={{ base: 40, lg: 100, md: 100, sm: 40 }}
        >
          <Image src={ArabAcademyLogo} alt="ArabAcademyLogo" />
        </Box>
        <Text
          marginTop={{ base: "15px", lg: "30px", md: "30px", sm: "15px" }}
          marginBottom={{ base: "15px", lg: "0", md: "0", sm: "15px" }}
          fontSize={{ base: "11px", lg: "20px", md: "16px", sm: "11px" }}
          color="#fff"
        >
          جميع الحقوق محفوظة © 2023 الأكاديمية العربية للبرمجة
        </Text>
      </Flex>
    </>
  );
};
