"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { Tajawal } from "next/font/google";
import { system } from "./theme";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"], // Corrected property name
});

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <main className={tajawal.className}>
          {props.children}
        </main>
      </ThemeProvider>
    </ChakraProvider>
  );
};
