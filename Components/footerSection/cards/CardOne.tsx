/**
 * CardOne Component
 *
 * This component renders a custom card styled with Chakra UI, designed to display informational 
 * links and a navigational button. The card includes two sections: one for general academy information 
 * and another for policy details, each followed by a button linking to educational paths.
 * It uses responsive design properties to adapt to various screen sizes.
 *
 * @component
 * 
 * @example
 * <CardOne />
 *
 * @returns {React.ReactElement}
 * Returns a stylized box containing structured data lists and a button. The lists are organized into
 * two columns: one for general information about the academy and another for policy information. At
 * the bottom of the card, a visually prominent button features an icon and text, guiding users to
 * educational paths.
 */

import learningRoad from "@/public/icons/learningRoad.png";
import {
  Box,
  Button,
  DataListItem,
  DataListRoot,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { Address } from "../Address";
export const CardOne = () => {
  return (
    <>
      <Box
        height={{ base: "270px", lg: "369px", md: "340px", sm: "270px" }}
        width={{ base: "247px", lg: "380px", md: "338px", sm: "247px" }}
        borderRadius="5px"
        color="#fff"
        marginTop="3%"
      >
        <Flex>
          <Box>
            <Address text="معلومات" color="white" />
            <DataListRoot marginTop="35px" width="max-content">
              <DataListItem paddingBottom="10px">المساعدة والدعم</DataListItem>
              <DataListItem paddingBottom="10px">حول الأكاديمية</DataListItem>
              <DataListItem paddingBottom="10px">رسالة الأكاديمية</DataListItem>
            </DataListRoot>
          </Box>
          <Box
            marginStart={{ base: "38px", lg: "100px", md: "60px", sm: "38px" }}
          >
            <Address text="سياسات" color="white" />
            <DataListRoot marginTop="35px" width="max-content">
              <DataListItem paddingBottom="10px">سياسة الاستخدام</DataListItem>
              <DataListItem paddingBottom="10px">سياسة الخصوصية </DataListItem>
              <DataListItem paddingBottom="10px">إخلاء مسؤولية </DataListItem>
            </DataListRoot>
          </Box>
        </Flex>
        <Button
          width={{ base: "200px", lg: "240px", md: "234px", sm: "200px" }}
          height={{ base: "60px", lg: "65px", md: "50px", sm: "60px" }}
          background="#00BE98"
          marginTop={{ base: "30px", lg: "90px", md: "60px", sm: "30px" }}
          color="white"
        >
          <Image
            width={22}
            height={22}
            src={learningRoad}
            alt="learning Road"
          />
          المسارات التعليمية
        </Button>
      </Box>
    </>
  );
};
