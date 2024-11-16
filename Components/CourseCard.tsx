import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
import { Promo } from "./Promo";
import CustomButton from "./CustomButton";
import Cart from "@/public/icons/svgCart.svg";
import ReadMore from "@/public/icons/readMore.svg";
import Soon from "./soon.svg"
interface PromoProps {
  courseName: string;
  price: number;
  trainer: string;
  numberOfVedios: number;
  numberOfHours: number;
  numberOfMinutes: number;
  icon: string;
  soon ?: boolean
}
const CourseCard: React.FC<PromoProps> = ({
  courseName,
  price,
  trainer,
  numberOfVedios,
  numberOfHours,
  numberOfMinutes,
  icon,
  soon = false
}) => {

  console.log(icon);
  return (
    <Promo width={{base: "260px", xl: "372px", '2xl': "350px"}} height={{base: "378px", xl: "526px", '2xl':"509px"}} fontFamily={"Tajawal"} position={'relative'}>
      {soon && <Box position="absolute" top='-5px' left='-5px' >
        <Soon width="157.5px" height="154.78px" />
      </Box>}
      <Flex
        width="100%"
        height="56.2%"
        bg={colors.color4}
        borderTopRadius={"inherit"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={icon} alt="image" width={"200px"} height={"200px"} />
      </Flex>

      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        width="100%"
        height="43.8%"
        bg={"white"}
        pt={"calc(60px * 0.58)"}
        pb={"calc(60px - (60px * 0.6667))"}
        px={"28.25px"}
        textAlign={"right"}
        color={colors.color1}
        borderBottomRadius={"inherit"}
      >
        <Flex flexDirection={{base: "column"}} >
          <Flex
            justifyContent={"space-between"}
            mt={"-4px"}
            mb={"-4px"}
            css={{
              "& span": {
                color: colors.color1,
                fontWeight: 700,
                bottom: "10px",
                
              },
            }}
          >
            <Text  as="span" fontSize={{base:"16px", xl: "25px", "2xl": "23px"}}>{courseName}</Text>
            <Text as="span" fontSize={{base:"16px", xl: "25px", "2xl": "23px"}}>${price}</Text>
          </Flex>
          <Box pt={"10px"} textAlign={{base: "center", xl:"right"}}>{trainer}</Box>
          <Box fontSize={{xl: "20px", "2xl": "18px"}}>
            {numberOfVedios}فيديو.
            {numberOfHours}ساعة و{numberOfMinutes}دقيقه
          </Box>
        </Flex>
        <Flex mt={"23px"} justifyContent={"space-between"}>
          <CustomButton
            text="أقرا المزيد"
            ButtonColor="green"
            icon={<ReadMore width="25px" height="25px" />}
          ></CustomButton>
          <CustomButton
            text="أقرا المزيد"
            ButtonColor="orange"
            icon={<Cart width="25px" height="25px" />}
          ></CustomButton>
        </Flex>
      </Flex>
    </Promo>
  );
};

export default CourseCard;
