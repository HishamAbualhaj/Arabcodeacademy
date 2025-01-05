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
