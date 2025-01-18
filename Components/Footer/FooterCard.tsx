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
      <Box>
        <Box paddingTop={{ base: "25px", lg: "33px", md: "33px", sm: "25px" }}>
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
