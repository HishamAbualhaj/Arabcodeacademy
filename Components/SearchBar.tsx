/**
 * SearchBar Component
 *
 * A responsive and customizable search bar component designed for seamless input functionality. 
 * The component includes a search input field and a button with a search icon, styled using Chakra UI.
 *
 * @component
 * @param {Object} props - The properties required to render the SearchBar component.
 * @param {string} [props.value] - The current value of the input field (optional).
 * @param {string} props.placeholder - The placeholder text displayed in the input field when empty.
 * @param {function} [props.onChange] - A callback function to handle changes in the input field (optional).
 *
 * Features:
 * - A responsive design that adjusts the size and layout of the search bar based on screen size using Chakra UI breakpoints.
 * - Includes a stylized input field and a search button with an icon.
 * - Customizable placeholder and value for the input field.
 * - Styled with a rounded border and consistent color palette from the global `colors` object.
 *
 * @returns {React.ReactElement}
 * Renders a flexible and visually appealing search bar with an input field and a search button.
 *
 * Usage Example:
 * ```jsx
 * <SearchBar
 *   placeholder="Search here..."
 *   value={searchTerm}
 *   onChange={(e) => setSearchTerm(e.target.value)}
 * />
 * ```
 *
 * This component is suitable for use in headers, search sections, or anywhere a search bar is required.
 */


import {
  Input,

  Image,
  Flex,
  
  Button,
} from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
interface Props {
  value?:string
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: React.FC<Props> = ({ placeholder, onChange,value }) => {
  const heightDesktop = "65px";
  const heightTablet = "75px";
  const heightMobile = "50px";

  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      width={{ base: "300px", xl: "770px", "2xl": "720px" }}
      borderRadius="50px"
      borderColor={colors.mainColor}
      borderWidth={"2px"}
      paddingLeft="20px"
    >
      <Input
        onChange={onChange}
        _focus={{ outline: "none" }}
        border="none"
        paddingRight="20px"
        fontSize={{ base: "17px", md: "20px" }}
        height={{ base: heightMobile, xl: heightTablet, "2xl": heightDesktop }}
        placeholder={placeholder}
        color={colors.mainColor}
        value={value}
        _placeholder={{ color: colors.mainColor }}
      />
      <Button
        type="submit"
        paddingRight="15px"
        display="flex"
        bg="transparent"
        alignItems="center"
        height={{ base: heightMobile, xl: heightTablet, "2xl": heightDesktop }}
        borderRight={`2px solid ${colors.mainColor}`}
      >
        <Image src="/icons/search.svg" alt="Search Icon" boxSize="25px" />
      </Button>
    </Flex>
  );
};

export default SearchBar;
