"use client";

import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Left from "@/public/icons/pagination_left.svg";
import Right from "@/public/icons/pagination_right.svg";
import { colors } from "@/styles/global-info";

interface PaginationProps {
  currentPageNum: number;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPageNum,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationRange = 5;
  const [pagination, setPagination] = useState<number[]>([]);

  useEffect(() => {
    const start = Math.max(1, currentPageNum - Math.floor(paginationRange / 2));
    const end = Math.min(totalPages, start + paginationRange - 1);
    const newPagination = Array.from(
      { length: end - start + 1 },
      (_, index) => start + index
    );
    setPagination(newPagination);
  }, [currentPageNum, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set("page", page.toString());
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      window.location.href = newUrl;
    }
  };

  return (
    <Flex justifyContent="center" py="15px">
      <Flex alignItems="center" gap="15px">
      <Box
          cursor="pointer"
          onClick={() => handlePageChange(currentPageNum + 1)}
          opacity={currentPageNum === totalPages ? 0.5 : 1}
          pointerEvents={currentPageNum === totalPages ? "none" : "auto"}
        >
          <Right width="22px" height="22px" />
        </Box>

        <Flex dir="ltr" gap="5px">
          {pagination.map((item) => (
            <Box
              key={item}
              onClick={() => handlePageChange(item)}
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              fontSize="20px"
              color={item === currentPageNum ? "white" : colors.mainColor}
              border={
                item === currentPageNum ? "" : `2px solid ${colors.mainColor}`
              }
              bg={item === currentPageNum ? colors.mainColor : "white"}
              borderRadius="100%"
              width="40px"
              height="40px"
            >
              {item}
            </Box>
          ))}
        </Flex>
        <Box
          cursor="pointer"
          onClick={() => handlePageChange(currentPageNum - 1)}
          opacity={currentPageNum === 1 ? 0.5 : 1}
          pointerEvents={currentPageNum === 1 ? "none" : "auto"}
        >
          <Left width="22px" height="22px" />
        </Box>
      
      </Flex>
    </Flex>
  );
};

export default Pagination;
