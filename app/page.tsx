"use client";
import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection/CourseSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import ResourcesSection from "@/Components/ResourceSection/ResourcesSection";
import QuizzSection from "@/Components/QuizzSection/QuizzSection";
import { Contact } from "@/Components/Contact/Contact";
import Intro from "@/Components/IntroSection/Intro";
import VideoBackground from "@/Components/VideoBackground";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Suspense } from "react";
import Landing from "@/Components/Landing/Landing";
import Brief from "@/Components/Brief/Brief";
import Loader from "@/Components/Loader/Loader";


export default function Home() {
  const videoSrc =
    useBreakpointValue({
      base: "/videos/aca-video-mobile.mp4",
      "2xl": "/videos/aca-video-desktop.mp4",
    }) ?? "/videos/aca-video-mobile.mp4";
  return (
    <>
    
    
 <Landing />
      <ResourcesSection />
      <VideoBackground videoSrc={videoSrc}>
        <Intro />
      </VideoBackground>
      <Suspense
      fallback={
        <Box display="flex" justifyContent="center" alignItems="center" py="50px">
         <Loader/>
        </Box>
      }
    >
      <CourseSection />
      </Suspense>
      <QuizzSection />
      <Brief />
      <Contact />
      <Suspense
      fallback={
        <Box display="flex" justifyContent="center" alignItems="center" py="50px">
         <Loader/>
        </Box>
      }
    >
      <ReviewSection /> 
      </Suspense>
    </>
  );
}
