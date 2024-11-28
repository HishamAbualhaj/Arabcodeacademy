import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Rating } from "@/Components/ui/rating";
//import "antd/dist/reset.css"; // Ensure Ant Design styles are imported
import ReviewCardImg from "/public/icons/reviewCard.svg"

import {
  cornerRadiusDesktopAndTablet,
  cornerRadiusMobile,
  shadowEffectDesktop,
  shadowEffectMobile,
  shadowEffectTablet,
} from "@/styles/global-info";

interface ReviewProps {
  image: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  image,
  name,
  rating,
  comment,
  date,
}) => {
  return (
    <Box
      position={"relative"}
      width={{ base: "260px", xl: "385px", "2xl": "400px" }}
      height={{ base: "256px", xl: "380px", "2xl": "400px" }}
      shadow={{
        base: shadowEffectDesktop,
        xl: shadowEffectTablet,
        "2xl": shadowEffectMobile,
      }}
      borderRadius={{
        base: cornerRadiusMobile,
        md: cornerRadiusDesktopAndTablet,
      }}
    >
        <Box position={'absolute'} top= {0} left={0} >
            <ReviewCardImg width={{base: "260px", xl: "385px", "2xl": "420px"}} height={{base: "76px", xl: "113px", "2xl": "119px"}}/>

        </Box>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        pt={{ base: "24px", xl: "36px", "2xl": "38px" }}
      >
        <Image
          src={image}
          width={{ base: "62px", xl: "92px", "2xl": "100px" }}
          height={{ base: "62px", xl: "92px", "2xl": "100px" }}
          alt="profile image"
        />
        <Text
          fontSize="19px"
          color="rgba(114, 54, 137, 1)"
          pt={{ base: "9px", xl: "14px", "2xl": "10px" }}
          fontWeight={700}
          my={0}
        >
          {name}
        </Text>

        <Text
          textAlign="center"
          width={{ base: "183px", xl: "272px", "2xl": "295px" }}
          height={{ base: "102px", xl: "135px", "2xl": "108px" }}
          fontSize={{ base: "13px", xl: "19px" }}
          color="rgba(114, 54, 137, 1)"
          pt={{ base: "5px", xl: "11px", "2xl": "15px" }}
          fontWeight={400}
          lineHeight={{ base: "19px", xl: "27px" }}
          //   pb={{ base: "13px", xl: "28px", "2xl": "58px" }}
        >
          {comment}
        </Text>
        <Flex
          width={{ base: "237px", xl: "355px", "2xl": "344px" }}
          pt={{ base: "8px", xl: "28px", "2xl": "58px" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Rating
            width={{ base: "79px", xl: "117px", "2xl": "127px" }}
            height={{ base: "15px", xl: "22px", "2xl": "24px" }}
            readOnly
            colorPalette="yellow"
            allowHalf={true}
            value={rating}
            justifyContent={"flex-end"}
          />
          <Flex
            textAlign="center"
            color="rgba(114, 54, 137, 1)"
            fontWeight={400}
            fontSize={{ base: "13px", xl: "19px" }}
          >
            {date}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ReviewCard;
