/**
 * NotFound Component
 *
 * This component is used to display an error message and an associated image when a page or resource
 * is not found or when a server error occurs. It is designed to inform users that their request could 
 * not be completed, possibly due to a connection issue or a missing page.
 *
 * @component
 *
 * @returns {React.ReactElement}
 * Renders a vertical stack (`VStack`) containing an image and a text message. The image is used to visually
 * indicate an error or issue, and the text provides a clear message explaining the situation to the user.
 *
 * Features:
 * - Utilizes Chakra UI's `VStack` for layout to vertically align the content centrally.
 * - Displays an error image (`OpsImg`) to visually communicate an error state.
 * - Includes a text message styled with the application's main color theme to maintain consistency.
 * - Text is responsive, adjusting size based on the user's device to ensure readability across all platforms.
 *
 * Usage:
 * This component can be used in scenarios where a user navigates to a non-existent page, experiences a 
 * server error, or encounters any issue where the desired content cannot be displayed. It's commonly used 
 * as a fallback UI in routing mechanisms or error boundaries.
 */

import React from "react";
import { colors } from "@/styles/global-info";
import { Text, VStack } from "@chakra-ui/react";
import OpsImg from "@/public/icons/OpsImg.png";
import Image from "next/image";
const NotFound: React.FC = () => {
  return (
    <>
      <VStack>
        <Image
          src={OpsImg}
          alt="OpsImg"
          height={90}
          width={136}
          style={{
            height: "auto",
            width: "auto",
          }}
        />
        <Text
          color={colors.mainColor}
          fontWeight="bold"
          fontSize={{ base: "10px", lg: "20px", md: "13px", sm: "10px" }}
        >
          تعذر الاتصال مع خادم البيانات الرجاء المحاولة مرة أخرى
        </Text>
      </VStack>
    </>
  );
};

export default NotFound;
