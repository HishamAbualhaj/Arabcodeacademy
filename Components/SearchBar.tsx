import { Input, InputElement, Image, Flex, Box } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
function SearchBar() {
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
        _focus={{ outline: "none" }}
        border="none"
        paddingRight="20px"
        fontSize={{base:"17px", md:"20px"}}
        height={{ base: heightMobile, xl: heightTablet, "2xl": heightDesktop }}
        placeholder="مقدمة لمحرك الألعاب اليونيتي ....."
        color={colors.mainColor}
        _placeholder={{ color: colors.mainColor }}
      />
      <Box
        paddingRight="15px"
        display="flex"
        alignItems="center"
        height={{ base: heightMobile, xl: heightTablet, "2xl": heightDesktop }}
        borderRight={`2px solid ${colors.mainColor}`}
      >
        <Image src="/icons/search.svg" alt="Search Icon" boxSize="25px" />
      </Box>
    </Flex>
  );
}

export default SearchBar;
