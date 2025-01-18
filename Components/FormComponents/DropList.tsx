/**
 * DropList Component
 *
 * This component is a custom dropdown list designed for use in forms that require users to select
 * an option from a predefined list of strings. It integrates with react-hook-form to update the form
 * state when a selection is made. The component uses a menu-style interaction pattern with a
 * visually distinct trigger and scrollable content area for item selection. The design and behavior
 * are customized to fit the overall theme using Chakra UI components.
 *
 * @component
 * 
 * @param {Object} props - The properties passed to the DropList component.
 * @param {Array<string>} props.data - The data array containing the list of options for the dropdown.
 * @param {string} props.title - The initial placeholder or title to display before selection.
 * @param {UseBreakpointValueOptions<string | number>} props.width - The width of the dropdown list, responsive across breakpoints.
 * @param {UseBreakpointValueOptions<string | number>} props.height - The height of each item within the dropdown list, responsive across breakpoints.
 * @param {UseFormSetValue<SignUpTypePageOne|SignUpTypePageTwo>} [props.setValue] - The setValue method from react-hook-form, used to update the form state when an option is selected.
 *
 * @example
 * <DropList
 *   data={["Option 1", "Option 2", "Option 3"]}
 *   title="Select an Option"
 *   width={{ base: "100px", lg: "150px" }}
 *   height={{ base: "20px", lg: "30px" }}
 *   setValue={formMethods.setValue}
 * />
 *
 * @returns {React.ReactElement}
 * Renders a dropdown menu with a list of options. Upon selection, it updates the display to show the
 * selected option and informs the form state of the change. The component is styled to provide a
 * consistent look and feel, and it allows for a customizable and responsive layout.
 */

import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/Components/ui/menu";
import { FaChevronDown } from "react-icons/fa";
import { colors } from "@/styles/global-info";
import { UseFormSetValue } from "react-hook-form";
import { SignUpTypePageOne, SignUpTypePageTwo } from "./signUpValidation";

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
  setValue: UseFormSetValue<SignUpTypePageOne|SignUpTypePageTwo > | undefined;
}

const DropList: React.FC<DropList> = ({
  data,
  title,
  width,
  height,
  setValue,
}) => {
  const [select, setSelect] = useState(title);
  useEffect(() => {
    if(setValue)
      setValue("country", select, { shouldValidate: true });
  }, [select, setValue]);
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
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="59px"
          borderRightColor={colors.mainColor}
          borderRightWidth={"2px"}
        >
          <FaChevronDown color={colors.mainColor} />
        </MenuTrigger>
      </Flex>
      <MenuContent
        position="absolute"
        height={{ base: "150px", xl: "195px" }}
        overflowY="scroll"
      >
        {data.map((item) => {
          let counter: number = 0;
          return (
            <MenuItem
              key={item + counter++}
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
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default DropList;
