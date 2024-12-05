import { Stack, Box, Text, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { colors } from "@/styles/global-info";
import CustomButton from "@/Components/CustomButton";
import Image from "next/image";
import more from "@/public/icons/more.png";

interface Props {
  img: ReactNode;
  courseName: string;
}
const ResourcesCard: React.FC<Props> = ({ img, courseName }) => {
  const { mainColor } = colors;
  return (
    <>
      <Flex
        height={{ base: "100%", sm: "300px" }}
        gap="15px"
        alignItems="center"
        justifyContent="space-between"
        direction="column"
        bgColor="#fff"
      >
        <Box
          width={{ base: "120px", lg: "130px", md: "173px", sm: "120px" }}
          height={{ base: "111px", lg: "130px", md: "173px", sm: "111px" }}
          bgColor={mainColor}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          shadow="0px 11px 10px 0px rgba(0, 0, 0, 0.2)"
        >
          {img}
        </Box>
        <Box>
          <Text
            color={mainColor}
            textAlign="center"
            fontWeight="700"
            fontSize={{ base: "18px", lg: "23px", md: "25px", sm: "18px" }}
          >
            {" " + courseName}
          </Text>
        </Box>
        <CustomButton
          sizeType="secondary"
          text="  المزيد...  "
          icon={<Image width={25} height={25} src={more} alt="icon" />}
          ButtonColor="green"
        />
      </Flex>
    </>
  );
};
export default ResourcesCard;
