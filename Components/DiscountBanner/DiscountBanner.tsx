/**
 * DiscountBanner Component
 *
 * A component that displays a promotional or discount banner based on a date range. 
 * It only renders the banner if the current date falls within the specified start and end dates.
 * This component is ideal for limited-time promotions or announcements on a website.
 *
 * @component
 * 
 * @param {Object} props - The properties required to configure the DiscountBanner.
 * @param {string} props.announcementText - The text content to be displayed within the banner.
 * @param {string} props.startDate - The start date of the discount period in YYYY-MM-DD format.
 * @param {string} props.endDate - The end date of the discount period in YYYY-MM-DD format.
 *
 * @example
 * <DiscountBanner 
 *   announcementText="Summer Sale – Up to 50% Off!" 
 *   startDate="2021-06-01" 
 *   endDate="2021-06-20" 
 * />
 *
 * @returns {React.ReactElement | null}
 * Returns the promotional banner if the current date is within the start and end dates; otherwise, 
 * returns null. The banner includes styling defined in DiscountBanner.module.css and displays the 
 * announcement text prominently.
 */

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
