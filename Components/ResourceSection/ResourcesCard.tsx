/**
 * ResourcesCard Component
 *
 * A reusable card component that displays a resource with an image, a title, and a call-to-action button. 
 * It is designed to present resources such as courses or tools in an aesthetically pleasing and responsive layout.
 *
 * @component
 *
 * @example
 * <ResourcesCard 
 *   img={<Image src="/path-to-image.png" alt="Resource" />} 
 *   courseName="React for Beginners" 
 * />
 *
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.img - The image or icon to be displayed inside the circular container.
 * @param {string} props.courseName - The name of the course or resource.
 *
 * @returns {React.ReactElement}
 * Renders a resource card with an image, a title, and a button for more details.
 *
 * Features:
 * - **Dynamic Content**: Accepts a customizable image/icon (`img`) and resource title (`courseName`).
 * - **Call-to-Action**: Includes a button with an icon for further actions or navigation.
 * - **Responsive Design**: Adjusts the layout and sizing based on the screen size.
 * - **Themed Styling**: Utilizes the application's main color for cohesive design.
 *
 * Props:
 * - `img`: A ReactNode representing the image or icon for the resource.
 * - `courseName`: A string representing the title of the resource.
 *
 * Dependencies:
 * - **Chakra UI**: For layout and styling (`Box`, `Flex`, `Text`).
 * - **Custom Components**:
 *   - `CustomButton`: A button component used for the call-to-action.
 * - **Next.js Image**: For optimized image rendering.
 *
 * Styling:
 * - The circular container uses the application's main color (`mainColor`) and includes a shadow for depth.
 * - The title is displayed in a bold and centered format for emphasis.
 * - The button includes an icon for visual appeal and action context.
 *
 * Layout:
 * - Circular image/icon container at the top.
 * - Centered title text below the image.
 * - A call-to-action button at the bottom.
 *
 * Accessibility:
 * - The image and button include `alt` text for screen readers.
 * - Text and button styles are designed to maintain readability and usability across devices.
 */

import { Box, Text, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { colors } from "@/styles/global-info";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Image from "next/image";
import more from "@/public/icons/more.png";

interface Props {
  img: ReactNode;
  courseName: string;
}
const ResourcesCard: React.FC<Props> = ({ img, courseName }) => {
  const { mainColor } = colors;
  return (
    <>
      <Flex
        height={{ base: "100%", sm: "300px" }}
        gap="15px"
        alignItems="center"
        justifyContent="space-between"
        direction="column"
        bgColor="#fff"
      >
        <Box
          width={{ base: "120px", '2xl': "130px", xl: "173px", sm: "120px" }}
          height={{ base: "111px", '2xl': "130px", xl: "173px", sm: "111px" }}
          bgColor={mainColor}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          shadow="0px 11px 10px 0px rgba(0, 0, 0, 0.2)"
        >
          {img}
        </Box>
        <Box>
          <Text
            color={mainColor}
            textAlign="center"
            fontWeight="700"
            fontSize={{ base: "18px", lg: "23px", md: "25px", sm: "18px" }}
          >
            {" " + courseName}
          </Text>
        </Box>
        <CustomButton
          sizeType="secondary"
          text="  المزيد...  "
          icon={<Image width={25} height={25} src={more} alt="icon" />}
          ButtonColor="green"
        />
      </Flex>
    </>
  );
};
export default ResourcesCard;
