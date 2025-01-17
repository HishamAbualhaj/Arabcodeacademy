/**
 * Promo Component
 *
 * This component is a flexible container that is used primarily for promotional or highlight sections
 * within a webpage. It is designed to be visually distinctive, providing a stylized backdrop for its
 * children components. The `Promo` can be customized to be semi-transparent or fully opaque, depending
 * on the needs of the design, making it suitable for overlays or standout sections that require emphasis.
 *
 * @component
 * @param {Object} props - The properties passed to the Promo component.
 * @param {React.ReactNode} props.children - The content elements to be rendered within the Promo.
 * @param {boolean} [props.isNotFullVisible=false] - Determines the background opacity; `true` renders 
 *  a semi-transparent background, while `false` renders a solid white background.
 * @param {FlexProps} obj - Additional Chakra UI Flex properties that can be passed to customize layout,
 *  spacing, and other CSS styles.
 *
 * @returns {React.ReactElement}
 * Renders a flexible `Flex` container from Chakra UI with custom styles that include shadow effects
 * and corner radii, adapted for different devices and resolutions. The background color and shadow
 * effects are configurable based on props, making it versatile for various uses across the UI.
 *
 * Features:
 * - Customizable background transparency to allow for different visual effects.
 * - Shadow effects that can be adapted for desktop, tablet, and mobile views, adding depth and distinction.
 * - Responsive design using Chakra UI's system props, ensuring that the component adjusts smoothly across
 *   different screen sizes and resolutions.
 * - Inherits all properties from Chakra UI's Flex component, allowing extensive customization including
 *   direction, alignment, padding, margin, and other layout-related CSS properties.
 *
 * Usage:
 * Ideal for use in sections where promotional content, important notices, or feature highlights are displayed.
 * Its visual distinctiveness helps in drawing attention to the content it encases. Configure the `isNotFullVisible`
 * prop based on the desired background visibility to create either a subtle overlay effect or a more pronounced
 * section with a solid background.
 */

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
