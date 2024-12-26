import React from "react";
import { Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
const Loader: React.FC = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" minH="800px">
        <VStack py="100px">
          <Spinner color={colors.mainColor} size="xl" borderWidth="4px" />
          <Text
            color={colors.mainColor}
            fontWeight="bold"
            fontSize={{ base: "10px", lg: "20px", md: "13px", sm: "10px" }}
          >
            جاري التحميل ...
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Loader;
