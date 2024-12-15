import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import CustomButton from "../CustomButton";
import Exams from "@/public/icons/exams.svg";
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
  return (
    <Box
      color="white"
      paddingInline={4}
      textAlign={{ base: "center", lg: "right", md: "center", sm: "center" }}
      display={{ lg: "block", sm: "flex" }}
      justifyContent={{ base: "center" }}
      flexDirection="column"
      alignItems={{ base: "center" }}
      marginBottom={{ base: "10%", lg: "2%", md: "2%", sm: "10%" }}
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
          fontSize={{ base: "18px", lg: "21px", md: "25px", sm: "18px" }}
          fontWeight="700"
        >
          {title}
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "16px", lg: "18px", md: "19px", sm: "16px" }}
        fontWeight="500"
        marginRight="7%"
        width={{ base: "267px", lg: "495", md: "495px", sm: "267px" }}
        height={{ base: "62px", lg: "66px", md: "67px", sm: "62px" }}
      >
        {paragraph}
      </Text>
      {displayButton && (
        <CustomButton
          sizeType="primary"
          fontSize={{ base: "14px", lg: "19px", md: "19px", sm: "14px" }}
          text="  قسم الامتحانات "
          icon={<Exams />}
          ButtonColor="orange"
          marginRight="6%"
          marginTop={{ base: "15%", lg: "5%", md: "6%", sm: "15%" }}
        />
      )}
    </Box>
  );
};

export default QuizzType;
