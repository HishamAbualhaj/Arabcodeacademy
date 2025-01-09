"use client"

import Loader from "@/Components/Loader/Loader";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";


interface SearchParams {
  search?: string;
  isFav?: string;
  page?: string;
}
const AiToolPage = dynamic(() => import("../../Components/AiTool/AiToolPage"), {
  ssr: true, 
});

const AiToolClient = dynamic(() => import("../../Components/AiTool/AiToolClient"), {
  ssr: true, 
});
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

