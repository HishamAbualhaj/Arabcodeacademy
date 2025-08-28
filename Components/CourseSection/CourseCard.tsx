/**
 * CourseCard Component
 *
 * This component renders a card layout for course offerings. It displays course details including
 * the name, price, trainer, number of videos, and number of hours. Optional visual indicators can
 * be added to signify upcoming courses. The card design includes two custom buttons for further
 * interaction: one for more detailed information and another to purchase the course.
 *
 * @component
 * 
 * @param {Object} props - The properties defining the course's attributes.
 * @param {string} props.courseName - The name of the course.
 * @param {number} props.price - The price of the course.
 * @param {string} props.trainer - The name of the trainer or instructor of the course.
 * @param {number} props.numberOfVedios - The total number of videos available in the course.
 * @param {number} props.numberOfHours - The total duration of the course in hours.
 * @param {string} props.icon - URL to the course's representative icon or image.
 * @param {boolean} [props.soon=false] - Indicator whether the course is coming soon.
 *
 * @example
 * <CourseCard
 *   courseName="Advanced Programming"
 *   price={199}
 *   trainer="John Doe"
 *   numberOfVedios={10}
 *   numberOfHours={15}
 *   icon="/path/to/icon.jpg"
 *   soon={true}
 * />
 *
 * @returns {React.ReactElement}
 * Renders a visually appealing card with structured information about a course, providing
 * interactive elements for users to learn more or purchase the course. If marked as 'soon',
 * an additional visual element indicates the upcoming availability of the course.
 */

import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
import { Promo } from "@/Components/Promo/Promo";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Cart from "@/public/icons/svgCart.svg";
import ReadMore from "@/public/icons/readMore.svg";
import Soon from "@/public/icons/soon.svg";
interface PromoProps {
  courseName: string;
  price: number;
  trainer: string;
  numberOfVedios: number;
  numberOfHours: number;
  icon: string;
  soon?: boolean;
}
const CourseCard: React.FC<PromoProps> = ({
  courseName,
  price,
  trainer,
  numberOfVedios,
  numberOfHours,
  icon,
  soon = false,
}) => {
  const numCards = useBreakpointValue({
    base: <Soon width="110px" height="108px" />,
    xl: <Soon width="158px" height="155px" />,
  });
  return (
    <Promo
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="550px"
      fontFamily="Tajawal"
      position="relative"
    >
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
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        bg="white"
        pt={{ base: "10px", xl: "30px", "2xl": "35px" }}
        pb={{ base: "9px", xl: "28px", "2xl": "26px" }}
        pl={{ base: "24px", xl: "17px", "2xl": "28.25px" }}
        pr={{ base: "28px", xl: "24px", "2xl": "28.25px" }}
        textAlign="right"
        color={colors.mainColor}
        borderBottomRadius="inherit"
      >
        <Flex flexDirection={{ base: "column" }}>
          <Flex
            justifyContent="space-between"
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
              lineClamp="2"
              fontSize={{ base: "13px", xl: "22px", "2xl": "20px" }}
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
            {numberOfHours}
          </Box>
        </Flex>
        <Flex gap="10px" justifyContent="space-between">
          <CustomButton
            flex="1"
            py="8px"
            text="أقرا المزيد"
            ButtonColor="green"
            sizeType="thirdly"
            icon={<ReadMore></ReadMore>}
          ></CustomButton>
          <CustomButton
            justifyContent="center"
            flex="1"
            text="شراء"
            ButtonColor="orange"
            sizeType="thirdly"
            icon={<Cart></Cart>}
          ></CustomButton>
        </Flex>
      </Flex>
    </Promo>
  );
};

export default CourseCard;
