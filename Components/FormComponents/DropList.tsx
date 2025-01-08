import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/Components/ui/menu";
import { FaChevronDown } from "react-icons/fa";
import { colors } from "@/styles/global-info";

interface UseBreakpointValueOptions<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

interface DropList {
  data: Array<string>;
  title: string;
  width: UseBreakpointValueOptions<string | number>;
  height: UseBreakpointValueOptions<string | number>;
}

const DropList: React.FC<DropList> = ({ data, title, width, height }) => {
  const [select, setSelect] = useState(title);

  const handleSelect = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const target = event.currentTarget; // Use currentTarget
    setSelect(target.textContent || ""); // Safely access textContent
  };

  return (
    <MenuRoot>
      <Flex
        width={width}
        height="60px"
        borderColor={colors.mainColor}
        fontSize="sm"
        borderWidth="1px"
        borderRadius="10px"
      >
        <Flex
          justifyContent={"flex-start"}
          alignItems={"center"}
          textAlign="center"
          color={colors.mainColor}
          width={"653.53px"}
          height={height}
          pr={"19px"}
        >
          {select}
        </Flex>
        <MenuTrigger
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="100%"
          width="59px"
          borderRightColor={colors.mainColor}
          borderRightWidth={"2px"}
        >
          <FaChevronDown color={colors.mainColor} />
        </MenuTrigger>
      </Flex>
      <MenuContent position="absolute">
        {data.map((item) => (
          <MenuItem
            key={item}
            borderColor={colors.mainColor}
            fontSize="sm"
            _placeholder={{ color: "purple.300" }}
            color={colors.mainColor}
            width={width}
            height={height}
            borderRadius="10px"
            pr={"19px"}
            value="new-txt"
            display="flex"
            justifyContent="flex-end"
            _hover={{ backgroundColor: "gray.200" }}
            onClick={handleSelect}
          >
            {item}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default DropList;
