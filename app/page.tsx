"use client";
import React from "react";
import  "@/styles/globals.css"
// import DiscountBanner from "../Components/DiscountBanner";
import "../styles/swiper_home.css";
// import Brief from "@/Components/Brief";
// import QuizzSection from "@/Components/QuizzSection/QuizzSection";
// import { Contact } from "@/Components/Contact";
import CourseCard from "@/Components/CourseCard";
import { Flex } from "@chakra-ui/react";
import CourseSection from "@/Components/CourseSection";
// import DiscountBanner from "@/Components/DiscountBanner";
export default function Home() {
  return (
    <>
      {/* <DiscountBanner announcementText="خصومات بنسبة 20% على الكورسات" /> */}
      {/* <QuizzSection />
      <Brief />
      <Contact /> */}
      <CourseSection></CourseSection>
    </>
  );
}

// function Slide() {
//   return (
//     <>
//       <Flex
//         className={[landing.bg_image, landing.full_screen_h].join(" ")}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <div className={`${landing.container}`}>
//           <Flex
//             alignItems={{ base: "center", md: "start" }}
//             direction={{ base: "column-reverse", xl: "row" }}
//             gap={20}
//           >
//             <Flex
//               alignItems={{ base: "center", xl: "end" }}
//               gap={50}
//               direction={{ base: "column-reverse", md: "column" }}
//               align="end"
//             >
//               <div className="text">
//                 <Text
//                   textAlign={{ base: "center", xl: "right" }}
//                   fontSize={{ base: "20px", lg: "27px", xl: "23px" }}
//                   lineHeight={"27.6px"}
//                   fontWeight={900}
//                   maxW={{ base: "400px", md: "690px", xl: "685px" }}
//                 >
//                   {hero[0].secondary_text}
//                 </Text>
//                 <Text
//                   textAlign={{ base: "center", xl: "right" }}
//                   fontSize={{ base: "20px", lg: "27px", xl: "23px" }}
//                   lineHeight={"27.6px"}
//                   fontWeight={900}
//                   marginTop={"25px"}
//                   maxW={{ base: "400px", md: "690px", xl: "685px" }}
//                 >
//                   {hero[0].secondary_text_mt}
//                 </Text>
//               </div>
//               <Button
//                 text="المسارات التعليمية"
//                 px={"51px"}
//                 py={"20px"}
//                 bgColor="rgba(0, 190, 152, 1)"
//                 rounded={10}
//                 color="white"
//                 fontSize={17}
//                 fontWeight={900}
//                 icon={<Chalkboard width="30" height="24" />}
//               />
//             </Flex>

//             <Text
//               textAlign={{ base: "center", xl: "right" }}
//               fontSize={{ base: "40px", lg: "50px", xl: "40px" }}
//               lineHeight={{ base: "45px", lg: "60px", xl: "48px" }}
//               fontWeight={900}
//               maxW={{ base: "220px", md: "562px", xl: "640px" }}
//             >
//               {hero[0].primary_text}
//             </Text>
//           </Flex>
//         </div>
//       </Flex>
//     </>
//   );
// }
