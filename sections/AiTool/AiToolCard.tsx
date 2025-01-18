/**
 * AiToolCard Component
 *
 * A reusable card component designed to display details about AI tools in a visually engaging and functional way. 
 * The component supports responsive design, user interaction for marking favorites, and conditional rendering 
 * based on authentication status.
 *
 * @component
 *
 * @example
 * <AiToolCard
 *   aiImage="https://example.com/tool-image.jpg"
 *   aiName="AI Tool Name"
 *   functionality="Generates text-based summaries"
 *   description="This tool helps you create concise summaries from large text inputs."
 *   tag="Text Processing"
 *   isFav={true}
 * />
 *
 * @param {string} [aiImage] - URL of the image for the AI tool. Defaults to a placeholder image.
 * @param {string} aiName - Name of the AI tool.
 * @param {string} functionality - Brief description of the AI tool's functionality.
 * @param {string} description - Detailed description of the AI tool.
 * @param {string} tag - Tag or category related to the AI tool.
 * @param {boolean} isFav - Indicates whether the tool is marked as a favorite.
 *
 * @returns {React.ReactElement}
 * Renders an AI tool card featuring:
 * - A responsive layout with image, name, tag, functionality, and description.
 * - A toggle button to mark the tool as a favorite, updating based on user interaction.
 * - Conditional logic to handle authentication and redirect unauthenticated users to the login page.
 *
 * Features:
 * - **Responsive Design**: Adapts seamlessly between mobile and desktop views using Chakra UI's `useBreakpointValue`.
 * - **Favorite Functionality**: Authenticated users can mark tools as favorites with real-time UI updates and toast notifications.
 * - **Authentication Handling**: Redirects unauthenticated users to the login page when attempting to mark favorites.
 * - **Customizable Styling**: Integrates with the app's global theme via the `colors` object.
 */

"use client";
import { Box, Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { colors } from "@/styles/global-info";
import ReadMore from "@/public/icons/readMore.svg";
import Added from "@/public/icons/added.svg";
import NotAdded from "@/public/icons/notAdded.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";

interface AiToolCard {
  aiImage?: string;
  aiName: string;
  functionality: string;
  description: string;
  tag: string;
  isFav: boolean;
}

const AiToolCard: React.FC<AiToolCard> = ({
  aiImage,
  aiName,
  functionality,
  description,
  tag,
  isFav,
}) => {
  const cardStyles = {
    width: useBreakpointValue({ base: 280, xl: 400 }),
    height: useBreakpointValue({ base: 411, xl: 478 }),
    imageHeight: useBreakpointValue({ base: 130, xl: 193 }),
  };

  const [isFavourite, setIsFavourite] = useState(false);
  const { isLoggedIn} = useAuth();
 const router = useRouter()
  const setFavourite=()=>{
if(isLoggedIn){
  if(!isFavourite){
  toast.success('تم عملية الإضافة بنجاح', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      });
      setIsFavourite(true);}
      else{
        toast.success('تم عمليةالإزالة بنجاح', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });
          setIsFavourite(false);
      }
 
}else{
  router.push('/login')
}
  }
  useEffect(() => {
    setIsFavourite(isFav);
  }, [isFav]);
  return (
    <Box shadow="0px 1px 20px 2px rgba(0, 0, 0, 0.25)" position="relative">
      <Image
        src={aiImage ?? "/ai-tool-card-images/upward.jpg"}
        alt="Ai Image Tool"
        width={cardStyles.width}
        height={cardStyles.imageHeight}
      />
      <Box padding="12px">
        <Flex
          py={{ base: "12px", xl: "19px" }}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Text
            color={colors.mainColor}
            fontSize={{ base: "16px", xl: "23px" }}
            fontWeight={700}
            lineHeight={{ base: "19px", xl: "28px" }}
          >
            {aiName}
          </Text>
          <Text
            direction="ltr"
            color={colors.mainColor}
            fontSize={{ base: "16px", xl: "20px" }}
            fontWeight={700}
            lineHeight={{ base: "19px", xl: "28px" }}
          >
            {tag}
          </Text>
          <Text
            lineClamp="2"
            minH="50px"
            alignSelf="start"
            marginTop="10px"
            color={colors.mainColor}
            fontSize={{ base: "14px", xl: "18px" }}
            fontWeight={700}
            lineHeight={{ base: "18px", xl: "25px" }}
          >
            {functionality}
          </Text>
        </Flex>
        <Text
          minH="40px"
          color={colors.mainColor}
          fontSize={{ base: "14px", xl: "17px" }}
          fontWeight={500}
          lineHeight={{ base: "16px", xl: "20px" }}
          textAlign="right"
        >
          {description}
        </Text>
        <Flex>
          <CustomButton
            text="المزيد"
            sizeType="thirdly"
            icon={<ReadMore></ReadMore>}
            ButtonColor="green"
            margin="0 auto"
          />
        </Flex>
      </Box>
      <Flex
        position="absolute"
        width="50px"
        height="50px"
        borderRadius="50%"
        shadow="0px 2px 4px 2px rgba(0, 0, 0, 0.25)"
        top={"14px"}
        left={"14px"}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={ setFavourite}
      >
        {isLoggedIn?(isFavourite ? <Added /> : <NotAdded />):<NotAdded />}
      </Flex>
    </Box>
  );
};

export default AiToolCard;
