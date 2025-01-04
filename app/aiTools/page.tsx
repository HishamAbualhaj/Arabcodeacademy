"use client"
import AiToolPage from "@/Components/AiTool/AiTool";
import AiToolClient from "@/Components/AiTool/AiToolClient";
import Loader from "@/Components/Loader/Loader";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";


interface SearchParams {
  search?: string;
  isFav?: string;
  page?: string;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <AiToolClient />
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" alignItems="center" py="50px">
            <Loader />
          </Box>
        }
      >
        <AiToolPage searchParams={searchParams} />
      </Suspense>
    </>
  );
}

