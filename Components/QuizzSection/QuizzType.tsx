
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton";
// import { FaItunesNote } from "react-icons/fa";
// import { IconType } from 'react-icons'; 

interface Props {
  title: string;
  // icon?: IconType;
  paragraph: string;
  displayButton: boolean; 
}
// , icon: Icon
const QuizzType: React.FC<Props> = ({ title, paragraph, displayButton }) => { // Destructure displayButton here
  return (
    <Box 
      color="white" 
      paddingInline={4} 
      textAlign={{base:"center", lg: "right", md: "center", sm: "center" }}
      display={{ lg: "block", sm: "flex" }}
      justifyContent={{base:"center"}}
      flexDirection= "column" 
      alignItems= {{base:"center"}} 
    >
      <Flex align="center" gap="10px" color="white"   p={4}>
        {/* {Icon  ? <Icon fontWeight="500" /> : undefined} */}

        <Text fontSize={{base:"md",lg:"lg",md:"lg",sm:"md"}} fontWeight="700">
          {title}
        </Text>
      </Flex>
      <Text fontSize={{base:"sm",lg:"md",md:"md",sm:"sm"}} fontWeight="500" marginRight="5%" width="65%">
        {paragraph}
      </Text> 
      {displayButton && (
        <CustomButton
          text="  قسم الامتحانات "
          // icon={FaItunesNote}
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

