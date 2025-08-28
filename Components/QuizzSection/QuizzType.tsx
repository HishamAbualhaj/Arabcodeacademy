/**
 * QuizzType Component
 *
 * A component designed to display individual quiz categories within the QuizzSection. It features a flexible layout that
 * adapts to various screen sizes, includes a title, an optional icon, a descriptive paragraph, and a customizable button.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the quiz category.
 * @param {ReactNode} [props.icon] - An optional icon related to the quiz type.
 * @param {string} props.paragraph - A short description or information about the quiz type.
 * @param {boolean} props.displayButton - Controls the visibility of the button; if true, the button is displayed.
 *
 * Features:
 * - Responsive design that adjusts based on the viewport, ensuring proper display on all devices.
 * - Utilizes Chakra UI components for layout, styling, and responsiveness.
 * - Optional icon integration to visually represent the quiz type.
 * - Customizable button that can be enabled or disabled based on the `displayButton` prop.
 *
 * @returns {React.ReactElement}
 * Renders a section of content related to a specific quiz type with a title, optional icon, descriptive text, and an optional button.
 * The component is visually structured to align content appropriately across different devices, making it versatile for various
 * display needs.
 *
 * Structure:
 * - A flexible box (`Flex`) wraps the title and optional icon, aligning them centrally or to the start based on the screen size.
 * - A text component displays the quiz description or paragraph.
 * - A custom button is conditionally rendered based on the `displayButton` prop, which can trigger actions like navigating to
 *   a quiz detail page or starting a quiz.
 *
 * Usage:
 * Ideal for use in educational platforms, e-learning applications, or sections of websites where quizzes or tests are
 * highlighted. Can be effectively used in a list or grid layout to present multiple quiz types or categories.
 */

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  title: string;
  icon?: ReactNode;
  paragraph: string;
}

const QuizzType: React.FC<Props> = ({ title, paragraph, icon }) => {
  return (
    <Box
      color="white"
      paddingInline={4}
      textAlign={{ base: "center", lg: "right", md: "center", sm: "center" }}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems={{ base: "center" }}
      marginBottom={{ base: "10%", lg: "2%", md: "2%", sm: "10%" }}
    >
      <Flex
        width="100%"
        align="center"
        justifyContent={{ base: "center", xl: "start" }}
        gap="10px"
        color="white"
        p={4}
      >
        {icon}

        <Text
          fontSize={{ base: "18px", lg: "21px", md: "25px", sm: "18px" }}
          fontWeight="700"
        >
          {title}
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "16px", lg: "18px", md: "19px", sm: "16px" }}
        fontWeight="500"
        textAlign={{ base: "center", xl: "right" }}
        marginRight={{ base: "0px", xl: "50px" }}
        maxW={{ xlDown: "500px", xl: "480px" }}
      >
        {paragraph}
      </Text>
    </Box>
  );
};

export default QuizzType;
