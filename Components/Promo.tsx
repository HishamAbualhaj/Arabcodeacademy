import { Flex } from "@chakra-ui/react";
import {
  cornerRadiusDesktopAndTablet,
  cornerRadiusMobile,
  shadowEffectDesktop,
  shadowEffectMobile,
  shadowEffectTablet,
} from "@/styles/global-info.js";

export const Promo: React.FC<{
  children: React.ReactNode;
  isNotFullVisible?: boolean;
  px: Array<number | string>;
  py: Array<number | string>;
}> = ({ children, isNotFullVisible = false, px, py }) => {
  return (
    <Flex
      textAlign="center"
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      shadow={[shadowEffectDesktop, shadowEffectTablet, shadowEffectMobile]}
      bg={
        isNotFullVisible
          ? [
              "rgba(255, 254, 254, 0.9)",
              "rgba(255, 254, 254, 0.83)",
              "rgba(255, 254, 254, 0.9)",
            ]
          : "white"
      }
      px={px}
      py={py}
      borderRadius={[
        cornerRadiusDesktopAndTablet,
        cornerRadiusDesktopAndTablet,
        cornerRadiusMobile,
      ]}
    >
      {children}
    </Flex>
  );
};
