import styles from "@/styles/DiscountBanner.module.css";
import { Box, Flex } from "@chakra-ui/react";
interface Props {
  announcementText: string;
  startDate: string;
  endDate: string;
}
const checkIfDateInRange = (startDate: string, endDate: string): boolean => {
  const SDate = new Date(startDate);
  const EDate = new Date(endDate);
  const now = new Date();
  return now >= SDate && now <= EDate;
};

const DiscountBanner: React.FC<Props> = ({
  announcementText,
  startDate,
  endDate,
}) => {
  return (
    <>
      {checkIfDateInRange(startDate, endDate) && (
        <Box
          bgColor="#462576"
          color="white"
          padding="15px"
          lineHeight="30px"
          fontSize="25px"
        >
          <Flex justifyContent="center" alignItems="center" width="100%">
            <Box fontSize={{ base: "12px", lg: "23px", xl: "25px" }}>
              {announcementText}
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default DiscountBanner;
