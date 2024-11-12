import { Flex, FlexProps } from "@chakra-ui/react";
import {
  cornerRadiusDesktopAndTablet,
  cornerRadiusMobile,
  shadowEffectDesktop,
  shadowEffectMobile,
  shadowEffectTablet,
} from "@/styles/global-info.js";

interface PromoProps extends FlexProps {
  children: React.ReactNode;
  isNotFullVisible?: boolean;
}
export const Promo: React.FC<PromoProps> = ({ children, isNotFullVisible = false, ...obj }) => {
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
      borderRadius={[
        cornerRadiusMobile,
        cornerRadiusDesktopAndTablet,
        cornerRadiusDesktopAndTablet,
        
      ]}
      {...obj}
    >
      {children}
    </Flex>
  );
};
