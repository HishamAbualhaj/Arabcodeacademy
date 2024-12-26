"use client";
import React, { useState, useEffect } from "react";
import { Flex, Button, Text, Icon, Box, SimpleGrid } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { HiHeart } from "react-icons/hi";
import SearchBar from "@/Components/SearchBar";
import { colors } from "@/styles/global-info.js";
import Loader from "@/Components/Loader/Loader";
import NotFound from "@/Components/NotFound/NotFound";
import AiToolCard from "./AiToolCard";
import Pagination from "../Pagination/Pagination";
interface Tool {
  tool_id: number;
  title: string;
  description: string;
  isFav: boolean;
  imageURL: string;
  tags: string;
}
export default function AiTool() {
  const [searchValue, setSearchValue] = useState("");
  const[totalItems,setTotalItems]=useState(1);
  const[numOnOnePage,setNumOnOnePage]=useState(0);
  const [toggle, setToggle] = useState(false);
  const [tools, setTools] = useState<Tool[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAiTool(searchValue, toggle ? "true" : "false", 1);
  };

  const getAiTool = async (
    searchValue: string,
    isFav: string,
    currentPageNum: number
  ) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoader(true);
    try {
      const baseUrl = `${
        process.env.NEXT_PUBLIC_API_ENDPOINT
      }/aitools?page=${currentPageNum}&page_size=8&search=${searchValue || ""}`;

      const url = isFav === "true" ? `${baseUrl}&isFav=true` : baseUrl;

      const response = await fetch(url);

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();

      console.log("Fetched Data:", data);
      if (Array.isArray(data.data)) {
        setNumOnOnePage(data.page_size) 

        setTotalItems(data.total_items); 
        setTools(data.data);
      } else {
        console.error("Expected an array, but received:", typeof data, data);
        setTools([]);
      }
      setLoader(false);
    } catch (error) {
      console.error("Failed to fetch AI tools:", error);
      setLoader(false);
    }
    
  };

  const handleClick = () => {
    setToggle((prevToggle) => {
      const newToggle = !prevToggle;
      getAiTool(searchValue, newToggle ? "true" : "", 1);
      return newToggle;
    });
  };

  useEffect(() => {
    getAiTool(searchValue, toggle ? "true" : "false", currentPageNum);
  }, [currentPageNum]);

  if (loader) {
    return <Loader />;
  }
  if (tools.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      {}
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
        >
          <Button
            aria-label="Toggle Favorites"
            width={{ base: "", lg: "140px", md: "160px", sm: "100px" }}
            height={{ base: "", lg: "44px", md: "50px", sm: "40px" }}
            onClick={handleClick}
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
        <SimpleGrid
          py="40px"
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          gap="20px"
        >
          {tools.map((s, index) => (
            <AiToolCard
              key={index}
              aiName={s.title}
              description={s.description}
              functionality={s.description}
              aiImage={undefined}
              tag={s.tags[0]}
              isFav={s.isFav}
            />
          ))}
        </SimpleGrid>

        <Pagination
        totalItems={totalItems}
        itemsPerPage={numOnOnePage}
          setCurrentPageNum={setCurrentPageNum}
          currentPageNum={currentPageNum}
        />
      </Box>
    </>
  );
}
