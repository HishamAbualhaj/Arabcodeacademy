/**
 * CardTwo Component
 *
 * This component, part of a footer card series, is specifically designed for displaying contact
 * information. It includes icons and text for a physical address, a telephone number, and an email
 * address, followed by a button encouraging direct communication. Styled with Chakra UI, this
 * component ensures clear visibility and ease of access to the academy's contact details.
 *
 * @component
 * 
 * @example
 * <CardTwo />
 *
 * @returns {React.ReactElement}
 * Renders a FooterCard with detailed contact information arranged in a flex layout. Each contact
 * detail is accompanied by an icon for visual reference, enhancing the user's ability to quickly
 * identify communication channels. The card includes a call-to-action button that could be linked
 * to initiating direct communication, such as a phone call or email.
 */

import { Box, Button, Text } from "@chakra-ui/react";
import { FooterCard } from "../FooterCard";
import Image from "next/image";
import site from "@/public/icons/site.png";
import phone from "@/public/icons/phone.png";
import message from "@/public/icons/message.png";
import Call from "@/public/icons/call.svg";
import CustomButton from "@/Components/CustomButton/CustomButton";
export const CardTwo = () => {
  return (
    <>
      <FooterCard text="التواصل" color="purple">
        <Box
          display="flex"
          gap={4}
          alignItems="center"
          marginBottom={{ base: "15px", lg: "22px", md: "25px", sm: "15px" }}
        >
          <Box
            width={{ base: "15px", lg: "17px", md: "15px", sm: "15px" }}
            height={{ base: "19px", lg: "27px", md: "22px", sm: "19px" }}
          >
            <Image src={site} alt="site icon" />
          </Box>
          <Text fontSize={{ base: "17px", md: "19px" }}>
            المقر الرئيسي : برطانيا , لندن
          </Text>
        </Box>
        <Box
          display="flex"
          gap={4}
          alignItems="center"
          marginBottom={{ base: "15px", lg: "22px", md: "25px", sm: "15px" }}
        >
          <Box
            width={{ base: "17px", lg: "24px", md: "17px", sm: "17px" }}
            height={{ base: "13.5px", lg: "22px", md: "16px", sm: "13.5px" }}
          >
            <Image src={phone} alt="phone icon" />
          </Box>
          <Text fontSize={{ base: "17px", md: "19px" }}>+447918713367</Text>
        </Box>
        <Box
          display="flex"
          gap={4}
          alignItems="center"
          marginBottom={{ base: "15px", lg: "22px", md: "25px", sm: "15px" }}
        >
          <Box
            width={{ base: "17px", lg: "24px", md: "17px", sm: "17px" }}
            height={{ base: "13.5px", lg: "22px", md: "16px", sm: "13.5px" }}
          >
            <Image src={message} alt="message icon" />
          </Box>
          <Text fontSize={{ base: "17px", md: "19px" }}>
            info@arabcodeacademy.com
          </Text>
        </Box>

        <CustomButton
          py="5px"
          px="10px"
          width="fit-content"
          text={"تواصل معنا"}
          icon={<Call width="20px" height="20px"></Call>}
          ButtonColor={"green"}
          sizeType={"secondary"}
        ></CustomButton>
      </FooterCard>
    </>
  );
};
