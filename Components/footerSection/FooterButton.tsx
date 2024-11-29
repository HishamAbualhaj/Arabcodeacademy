import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";


interface Props extends ButtonProps {
  text: string;
 
}

const FooterButton: React.FC<Props> = ({
  text,
 
}) => {
 
  return (
    <Button
    height={{base:"45px",lg:"50px",md:"60px",sm:"180px"}}
    width={{base:"180px",lg:"220px",md:"277px",sm:"180px"}}
    border="1px solid #ffffff"
    borderRadius="6px"
    fontSize={{base:"14px",lg:"17px",md:"19px",sm:"14px"}}
    lineHeight={{base:"16.8px",lg:"22.8px",md:"22.8",sm:"16.8px"}}
    background="transparent"
    >
      
      {text}
    </Button>
  );
};

export default FooterButton;
