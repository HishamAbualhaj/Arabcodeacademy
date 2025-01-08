import { Checkbox, CheckboxProps } from "@/Components/ui/checkbox";
import { colors } from "@/styles/global-info";
import { Text, Flex } from "@chakra-ui/react";
import React from "react";

interface CheckBoxProps extends CheckboxProps {
  text: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, ...rest }) => {
  return (
    <Flex
      flexDirection="row-reverse"
      alignItems="center"
      width={{ base: "200px", xl: "450px", "2xl": '390.04px' }}
      height={{ base: "34px", xl: "23px", "2xl": '20px' }}
    >
      <Text
        textAlign={{ base: "center" }}
        color={colors.mainColor}
        fontWeight={400}
        fontSize={{ base: "14px", xl: "19px", '2xl': '17px' }}
        lineHeight={{ base: "16px", xl: "22.8px", '2xl': '20.4px' }}
        borderBottomColor={{ xl: colors.mainColor }}
        borderBottomWidth={{ xl: "1.3px" }}
        pb={{ xl: "5px" }}
        mr={2} // Adjust spacing between text and checkbox
      >
        {text}
      </Text>
      <Checkbox
        borderWidth={"1px"}
        borderColor={colors.mainColor}
        colorPalette="purple"
        boxShadow={{
          base: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
          xl: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
        {...rest}
      />
    </Flex>
  );
};

export default CheckBox;
