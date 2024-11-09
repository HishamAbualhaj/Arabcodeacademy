import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import CustomButton from "../CustomButton";
import Exams from "@/public/icons/exams.png";
import Image from "next/image";
interface Props {
  title: string;
  icon?: ReactNode;
  paragraph: string;
  displayButton: boolean;
}

const QuizzType: React.FC<Props> = ({
  title,
  paragraph,
  displayButton,
  icon,
}) => {
  // Destructure displayButton here
  return (
    <Box
      color="white"
      paddingInline={4}
      textAlign={{ base: "center", lg: "right", md: "center", sm: "center" }}
      display={{ lg: "block", sm: "flex" }}
      justifyContent={{ base: "center" }}
      flexDirection="column"
      alignItems={{ base: "center" }}
    >
      <Flex
        align="center"
        justify={{ base: "center", xl: "start" }}
        gap="10px"
        color="white"
        p={4}
      >
        {icon}

        <Text
          fontSize={{ base: "md", lg: "lg", md: "lg", sm: "md" }}
          fontWeight="700"
        >
          {title}
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "sm", lg: "md", md: "md", sm: "sm" }}
        fontWeight="500"
        marginRight="5%"
        width={{ base: "100%", xl: "65%" }}
      >
        {paragraph}
      </Text>
      {displayButton && (
        <CustomButton
          text="  قسم الامتحانات "
          icon={<Image width={25} height={25} src={Exams} alt="icon" />}
          sizeType="lg"
          ButtonColor="orange"
          marginRight="6%"
          marginTop="4%"
        />
      )}
    </Box>
  );
};

export default QuizzType;
