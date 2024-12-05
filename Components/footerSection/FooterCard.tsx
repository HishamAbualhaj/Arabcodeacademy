import { Box } from "@chakra-ui/react";
import React from "react";
import { Address } from "./Address";
interface Props {
  text: string;
  color: "white" | "purple";
  children: React.ReactNode;
}

export const FooterCard: React.FC<Props> = ({ children, text, color }) => {
  return (
    <>
      <Box
        height={{ base: "270px", lg: "369px", md: "340px", sm: "270px" }}
        width={{ base: "247px", lg: "380px", md: "338px", sm: "247px" }}
        background="#ffffff"
        borderRadius="5px"
      >
        <Box
          paddingRight={{ base: "27px", lg: "37.5px", md: "35px", sm: "27px" }}
          paddingTop={{ base: "25px", lg: "33px", md: "33px", sm: "25px" }}
          paddingBottom={{ base: "22px", lg: "105px", md: "38px", sm: "22px" }}
        >
          <Address text={text} color={color} />
          <Box
            marginTop={{ base: "35px", lg: "40px", md: "35px", sm: "35px" }}
            color="#713488"
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
