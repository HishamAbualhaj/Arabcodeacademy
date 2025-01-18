import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  title: string;
  icon?: ReactNode;
  paragraph: string;
}

const QuizzType: React.FC<Props> = ({ title, paragraph, icon }) => {
  return (
    <Box
      color="white"
      paddingInline={4}
      textAlign={{ base: "center", lg: "right", md: "center", sm: "center" }}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems={{ base: "center" }}
      marginBottom={{ base: "10%", lg: "2%", md: "2%", sm: "10%" }}
    >
      <Flex
        width="100%"
        align="center"
        justifyContent={{ base: "center", xl: "start" }}
        gap="10px"
        color="white"
        p={4}
      >
        {icon}

        <Text
          fontSize={{ base: "18px", lg: "21px", md: "25px", sm: "18px" }}
          fontWeight="700"
        >
          {title}
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "16px", lg: "18px", md: "19px", sm: "16px" }}
        fontWeight="500"
        textAlign={{ base: "center", xl: "right" }}
        marginRight={{ base: "0px", xl: "50px" }}
        maxW={{ xlDown: "500px", xl: "480px" }}
      >
        {paragraph}
      </Text>
    </Box>
  );
};

export default QuizzType;
