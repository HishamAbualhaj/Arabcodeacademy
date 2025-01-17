/**
 * Loader Component
 *
 * A simple yet effective loading indicator component designed to provide visual feedback during 
 * content or data loading processes on a website or application. It utilizes Chakra UI's Spinner 
 * and Text components to create a visually appealing and clear indication that an operation is 
 * in progress.
 *
 * @component
 *
 * @returns {React.ReactElement}
 * Renders a full-screen flex container with a vertically stacked spinner and text element. The spinner
 * is prominently displayed, and the text provides additional context to the user, informing them that
 * loading is underway.
 *
 * Features:
 * - Utilizes Chakra UI's `Flex` and `VStack` for layout, ensuring the loader is centered both vertically
 *   and horizontally.
 * - Displays a large spinner animated to indicate ongoing activity.
 * - Includes a text label beneath the spinner to communicate the action to the user, styled to match the
 *   site's color theme.
 * - Responsive design that adjusts text size based on the device's screen size.
 *
 * Usage:
 * Use this component whenever you need to indicate that a process is loading or data is being fetched,
 * such as during API calls or when loading new components into view. It helps improve the user
 * experience by providing a clear visual cue that the application is working, thus preventing confusion
 * and reducing perceived wait times.
 */


import React from "react";
import { Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { colors } from "@/styles/global-info";
const Loader: React.FC = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" minH="800px">
        <VStack py="100px">
          <Spinner color={colors.mainColor} size="xl" borderWidth="4px" />
          <Text
            color={colors.mainColor}
            fontWeight="bold"
            fontSize={{ base: "10px", lg: "20px", md: "13px", sm: "10px" }}
          >
            جاري التحميل ...
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Loader;
