import { Input, InputElement, Image, Flex } from "@chakra-ui/react";
import {colors} from "@/styles/global-info"
function SearchBar() {
  const heightDesktop = "65px";
  const heightTablet = "75px";
  const heightMobile = "50px";

  return (
    
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        width={{base: "300px", "xl": "770px", "2xl": "720px"}}
        height={{base: heightMobile, "xl": heightTablet, "2xl": heightDesktop}}
      >
        <InputElement
          pointerEvents="none"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={{base: heightMobile, "xl": heightTablet, "2xl": heightDesktop}}
          borderRightColor={colors.color1}
          width={"75px"}
          borderRightWidth={"4px"}
        >
          <Image src="/icons/search.png" alt="Search Icon" boxSize="25px" />
        </InputElement>
        <Input
          height={{base: heightMobile, "xl": heightTablet, "2xl": heightDesktop}}
          placeholder="مقدمة لمحرك الألعاب اليونيتي ....."
          borderRadius="50px"
          borderColor={colors.color1}
          borderWidth={'2px'}
          color={colors.color1}
          _placeholder={{ color: colors.color1 }}
        />
      </Flex>
    
  );
}

export default SearchBar;
