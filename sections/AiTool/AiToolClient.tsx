/**
 * AiToolClient Component
 *
 * A client-side component for managing the AI tool search and favorites functionality. 
 * It provides a search bar and a toggle button to filter tools based on the "favorites" status.
 * The component integrates seamlessly with Next.js routing and supports real-time URL query updates.
 *
 * @component
 *
 * @example
 * <AiToolClient />
 *
 * @returns {React.ReactElement}
 * Renders a user interface for:
 * - Searching AI tools using a search bar.
 * - Toggling a "favorites" filter with a responsive button.
 * - Dynamically updating the URL query parameters based on user interactions.
 *
 * Features:
 * - **Search Functionality**: Allows users to input a search term and submit it, updating the URL's query parameters.
 * - **Favorites Toggle**: A button to filter AI tools by their "favorites" status, visually updating its state with icons.
 * - **Responsive Design**: Adapts to different screen sizes, ensuring accessibility across devices.
 * - **URL Query Integration**: Utilizes Next.js `useRouter` and `useSearchParams` for managing query parameters.
 * - **Custom Styling**: Styled using Chakra UI and integrates with the app's global color scheme.
 *
 * Props & State:
 * - **searchValue** (`string`): Holds the current search term, defaulting to the value from the URL query parameter.
 * - **toggle** (`boolean`): Indicates whether the "favorites" filter is active, syncing with the URL query parameter.
 *
 * Methods:
 * - **handleSubmit**: Handles the form submission for the search bar, updating the query parameters.
 * - **handleToggle**: Toggles the "favorites" filter state and updates the query parameters.
 */

"use client"
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Flex, Button, Text, Icon,Box  } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { HiHeart } from "react-icons/hi";
import SearchBar from "@/Components/SearchBar/SearchBar";
import { colors } from "@/styles/global-info.js";

export default function AiToolClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams?.get("search") || "");
  const [toggle, setToggle] = useState(searchParams?.get("isFav") === "true");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?search=${searchValue}&isFav=${toggle}&page=1`);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
    router.push(`?search=${searchValue}&isFav=${!toggle}&page=1`);
  };

  return (
    <Box
    marginTop="50px"
    marginInline="auto"
    maxW="1650px"
    paddingInline="20px"
  >
    <Flex
      justifyContent={{
        base: "center",
        lg: "space-between",
        xl: "space-between",
      }}
      alignItems="center"
      flexDirection={{ base: "column-reverse", lg: "row", xl: "row" }}
      gap={8}
      marginTop={"3%"}
    >
      <Button
        aria-label="Toggle Favorites"
        width={{ base: "", lg: "140px", md: "160px", sm: "100px" }}
        height={{ base: "", lg: "44px", md: "50px", sm: "40px" }}
        onClick={handleToggle}
        bg="white"
        borderRadius="10px"
        boxShadow="0px 1px 10px 1px rgba(0, 0, 0, 0.25)"
        cursor="pointer"
        _hover={{
          boxShadow: "md",
          transform: "scale(1.05)",
        }}
      >
        <Text color={colors.mainColor} fontWeight="bold">
          المفضلة
        </Text>
        {toggle ? (
          <Icon fontSize="2xl" color={colors.mainColor} fontWeight="bold">
            <HiHeart />
          </Icon>
        ) : (
          <Icon fontSize="2xl" color={colors.mainColor} fontWeight="bold">
            <CiHeart />
          </Icon>
        )}
      </Button>

      <form onSubmit={handleSubmit}>
        <SearchBar
          value={searchValue}
          placeholder="...Chatgpt"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </Flex>
    </Box>
  );
}
