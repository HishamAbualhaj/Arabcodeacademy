import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { colors } from "@/styles/global-info";
import Left from "@/public/icons/pagination_left.svg";
import Right from "@/public/icons/pagination_right.svg";

interface MyComponentProps {
  setCurrentPageNum: (value: number) => void;
  currentPageNum: number;
}
const Pagination: React.FC<MyComponentProps> = ({
  setCurrentPageNum,
  currentPageNum,
}) => {
  const count = 20;
  // determine what value our pagination will start from
  const [currentPageNumber, setCurrentPageNumber] = useState(5);
  const [isActive, setIsActive] = useState<number>(currentPageNum);
  // when the current pagination changes
  useEffect(() => {
    setCurrentPageNum(isActive);
  }, [isActive]);
  const arr = Array.from(
    { length: currentPageNumber },
    (_, index) => index + 1
  );
  const [pagination, setPagination] = useState(arr);

  function handlePagination(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // conside e.target as html element , which will allow us to access the innerText property
    if (Number((e.target as HTMLDivElement).innerText)) {
      setIsActive(Number((e.target as HTMLDivElement).innerText));
    }
  }
  function handleRightPagination() {
    // if current value is greater than the whole collection then dont increase
    if (!(isActive >= count)) {
      setIsActive(isActive + 1);
    }
    // if current value is greater than currentPageNumber then go to the next collection
    // 1 - 5
    // 5 - 9 // that why we currentPageNumber - 1
    // etc
    if (isActive >= currentPageNumber - 1) {
      let arr: number[] = Array.from(
        { length: 5 },
        (_, index) => index + currentPageNumber
      );
      setPagination(arr);
      setCurrentPageNumber(currentPageNumber + 5);
    }
  }
  function handleLeftPagination() {
    if (!(isActive <= 1)) {
      setIsActive(isActive - 1);
    }
    if (isActive <= currentPageNumber - 5) {
      let arr;
      if (currentPageNumber - 5 === 5) {
        arr = pagination.map((item) => item - 4);
      } else {
        arr = pagination.map((item) => item - 5);
      }
      setPagination(arr);
      setCurrentPageNumber(currentPageNumber - 5);
    }
  }
  return (
    <>
      <Flex justifyContent="center" py="15px">
        <Flex alignItems="center" gap="15px">
          <Box cursor="pointer" onClick={handleRightPagination}>
            <Right width="22px" height="22px" />
          </Box>
          <Flex dir="ltr" gap="5px">
            {pagination.map((item) => (
              <Box
                onClick={handlePagination}
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                fontSize="20px"
                color={item === isActive ? "white" : colors.mainColor}
                border={
                  item === isActive ? "" : `2px solid ${colors.mainColor}`
                }
                bg={item === isActive ? colors.mainColor : "white"}
                borderRadius="100%"
                width="40px"
                height="40px"
              >
                <Box>{item > count ? "..." : item}</Box>
              </Box>
            ))}
          </Flex>
          <Box cursor="pointer" onClick={handleLeftPagination}>
            <Left width="22px" height="22px" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Pagination;
