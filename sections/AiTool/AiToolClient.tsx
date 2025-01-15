
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

  const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");
  const [toggle, setToggle] = useState(searchParams.get("isFav") === "true");

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
