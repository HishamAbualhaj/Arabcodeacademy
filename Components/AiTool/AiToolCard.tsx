"use client";
import { Box, Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { colors } from "@/styles/global-info";
import ReadMore from "@/public/icons/readMore.svg";
import Added from "@/public/favouriteIcons/added.svg";
import NotAdded from "@/public/favouriteIcons/notAdded.svg";
import CustomButton from "../CustomButton";

interface AiToolCard {
  aiImage?: string;
  aiName: string;
  functionality: string;
  description: string;
  tag: string;
  isFav: boolean;
}

const AiToolCard: React.FC<AiToolCard> = ({
  aiImage,
  aiName,
  functionality,
  description,
  tag,
  isFav,
}) => {
  const cardStyles = {
    width: useBreakpointValue({ base: 280, xl: 400 }),
    height: useBreakpointValue({ base: 411, xl: 478 }),
    imageHeight: useBreakpointValue({ base: 130, xl: 193 }),
  };
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    setIsFavourite(isFav);
  }, [isFav]);
  return (
    <Box shadow="0px 1px 20px 2px rgba(0, 0, 0, 0.25)" position="relative">
      <Image
        src={aiImage ?? "/ai-tool-card-images/upward.jpg"}
        alt="Ai Image Tool"
        width={cardStyles.width}
        height={cardStyles.imageHeight}
      />
      <Box padding="12px">
        <Flex
          py={{ base: "12px", xl: "19px" }}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Text
            color={colors.mainColor}
            fontSize={{ base: "16px", xl: "23px" }}
            fontWeight={700}
            lineHeight={{ base: "19px", xl: "28px" }}
          >
            {aiName}
          </Text>
          <Text
            direction="ltr"
            color={colors.mainColor}
            fontSize={{ base: "16px", xl: "20px" }}
            fontWeight={700}
            lineHeight={{ base: "19px", xl: "28px" }}
          >
            {tag}
          </Text>
          <Text
            lineClamp="2"
            minH="50px"
            alignSelf="start"
            marginTop="10px"
            color={colors.mainColor}
            fontSize={{ base: "14px", xl: "18px" }}
            fontWeight={700}
            lineHeight={{ base: "18px", xl: "25px" }}
          >
            {functionality}
          </Text>
        </Flex>
        <Text
          minH="40px"
          color={colors.mainColor}
          fontSize={{ base: "14px", xl: "17px" }}
          fontWeight={500}
          lineHeight={{ base: "16px", xl: "20px" }}
          textAlign="right"
        >
          {description}
        </Text>
        <Flex>
          <CustomButton
            text="المزيد"
            sizeType="thirdly"
            icon={<ReadMore></ReadMore>}
            ButtonColor="green"
            margin="0 auto"
          />
        </Flex>
      </Box>
      <Flex
        position="absolute"
        width="50px"
        height="50px"
        borderRadius="50%"
        shadow="0px 2px 4px 2px rgba(0, 0, 0, 0.25)"
        top={"14px"}
        left={"14px"}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={() => setIsFavourite((preState) => !preState)}
      >
        {isFavourite ? <Added /> : <NotAdded />}
      </Flex>
    </Box>
  );
};

export default AiToolCard;
