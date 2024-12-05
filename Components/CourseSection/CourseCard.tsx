import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
import { Promo } from "@/Components/Promo";
import CustomButton from "@/Components/CustomButton";
import Cart from "@/public/icons/svgCart.svg";
import ReadMore from "@/public/icons/readMore.svg";
import Soon from "@/Components/soon.svg";
interface PromoProps {
  courseName: string;
  price: number;
  trainer: string;
  numberOfVedios: number;
  numberOfHours: number;
  numberOfMinutes: number;
  icon: string;
  soon?: boolean;
}
const CourseCard: React.FC<PromoProps> = ({
  courseName,
  price,
  trainer,
  numberOfVedios,
  numberOfHours,
  numberOfMinutes,
  icon,
  soon = false,
}) => {
  const numCards = useBreakpointValue({
    base: <Soon width="110px" height="108px" />,
    xl: <Soon width="158px" height="155px" />,
  });
  return (
    <Promo fontFamily={"Tajawal"} position={"relative"}>
      {soon && (
        <Box position="absolute" top="-5px" left="-5px">
          {numCards}
        </Box>
      )}
      <Flex
        width="100%"
        height={{ base: "232px", xl: "280px", "2xl": "286px" }}
        bg={colors.orange}
        borderTopRadius={"inherit"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={icon}
          alt="image"
          width={{ base: "126px", xl: "280px", "2xl": "200px" }}
          height={{ base: "161px", xl: "280px", "2xl": "200px" }}
        />
      </Flex>

      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        width="100%"
        height={{ base: "150px", xl: "245px", "2xl": "223px" }}
        bg={"white"}
        pt={{ base: "15px", xl: "37px", "2xl": "41px" }}
        pb={{ base: "9px", xl: "28px", "2xl": "26px" }}
        pl={{ base: "24px", xl: "17px", "2xl": "28.25px" }}
        pr={{ base: "28px", xl: "24px", "2xl": "28.25px" }}
        textAlign={"right"}
        color={colors.mainColor}
        borderBottomRadius={"inherit"}
      >
        <Flex flexDirection={{ base: "column" }}>
          <Flex
            justifyContent={"space-between"}
            css={{
              "& span": {
                color: colors.mainColor,
                fontWeight: 700,
                bottom: "10px",
              },
            }}
          >
            <Text
              as="span"
              fontSize={{ base: "16px", xl: "25px", "2xl": "23px" }}
              pr={{ base: "56px", xl: 0 }}
            >
              {courseName}
            </Text>
            <Text
              as="span"
              fontSize={{ base: "16px", xl: "25px", "2xl": "23px" }}
            >
              ${price}
            </Text>
          </Flex>
          <Box
            pt={{ base: "7px", xl: "13px", "2xl": "10px" }}
            pb={{ base: "5px", xl: "13px", "2xl": "4px" }}
            textAlign={{ base: "center", xl: "right" }}
          >
            {trainer}
          </Box>
          <Box
            fontSize={{ xl: "20px", "2xl": "18px" }}
            pb={{ base: "8px", xl: "17px", "2xl": "15px" }}
            pr={{ base: "15px", xl: 0 }}
          >
            {numberOfVedios}فيديو.
            {numberOfHours}ساعة و{numberOfMinutes}دقيقه
          </Box>
        </Flex>
        <Flex gap="10px" justifyContent={"space-between"}>
          <CustomButton
            flex="1"
            text="أقرا المزيد"
            ButtonColor="green"
            sizeType="thirdly"
            icon={<ReadMore width="25px" height="25px" />}
          ></CustomButton>
          <CustomButton
            flex="1"
            text="شراء"
            ButtonColor="orange"
            sizeType="thirdly"
            icon={<Cart width="25px" height="25px" />}
          ></CustomButton>
        </Flex>
      </Flex>
    </Promo>
  );
};

export default CourseCard;
