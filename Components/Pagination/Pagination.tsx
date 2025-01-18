/**
 * Pagination Component
 *
 * A customizable pagination control for navigating through pages of items in a list or grid. 
 * This component dynamically calculates the number of pages based on total items and items per page,
 * and displays a range of page numbers along with navigational arrows for going to the next or previous page.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the Pagination component.
 * @param {number} props.currentPageNum - The current active page number.
 * @param {number} props.totalItems - The total number of items to paginate through.
 * @param {number} props.itemsPerPage - The number of items displayed on each page.
 *
 * @returns {React.ReactElement}
 * Renders a flex container with navigational arrows and clickable page numbers that allow the user to 
 * navigate through different pages. The navigation arrows are disabled on the first and last pages respectively.
 *
 * Features:
 * - Calculates the total number of pages based on `totalItems` and `itemsPerPage`.
 * - Displays a fixed number of page numbers around the current page, providing context and easy access 
 *   to adjacent pages.
 * - Includes navigational arrows (left and right) for moving to the next or previous pages.
 * - Arrows and page numbers update the URL to reflect the current page state, supporting direct linking 
 *   and bookmarking.
 * - Employs conditional rendering and styling to indicate the current page and to disable navigation at the 
 *   bounds of the page range.
 *
 * Usage:
 * Place this component below lists or grids that require pagination. It is suitable for data tables, search 
 * results, or any list format that extends beyond a single page worth of content. This component improves 
 * usability by allowing users to navigate through large sets of data easily.
 */


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
