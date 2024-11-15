"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Tajawal } from "next/font/google";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"], // Corrected property name
});

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
       <main className={tajawal.className}>
      <ColorModeProvider {...props} />
      </main>
    </ChakraProvider>
  )
}
