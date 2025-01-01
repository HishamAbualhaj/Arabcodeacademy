"use client"
import AiToolPage from "@/Components/AiTool/AiTool";
import AiToolClient from "@/Components/AiTool/AiToolClient";
import Loader from "@/Components/Loader/Loader";
import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
export default function Page({ searchParams }: { searchParams: any }) {
  return (
    <>
      <AiToolClient />
      <Suspense
      fallback={
        <Box display="flex" justifyContent="center" alignItems="center" py="50px">
         <Loader/>
        </Box>
      }
    ></Suspense>
      <AiToolPage searchParams={searchParams} />
    </>
  );
}
