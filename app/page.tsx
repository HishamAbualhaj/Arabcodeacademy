"use client"
import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import ResourcesSection from "@/Components/ResourcesSection";
import QuizzSection from "@/Components/QuizzSection/QuizzSection";
import  {Contact}  from "@/Components/Contact/Contact";
import Intro from "@/Components/IntroSection/Intro";
import VideoBackground from "@/Components/VideoBackground";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const videoSrc = useBreakpointValue({
    base:"/videos/aca-video-mobile.mp4", 
    "2xl": "/videos/aca-video-desktop.mp4" 
  }) ?? "/videos/aca-video-mobile.mp4";
  return (
    <>
  
      <QuizzSection />
      <ResourcesSection />
      <VideoBackground videoSrc= {videoSrc}>
        <Intro />
      </VideoBackground>
      <Contact />
      <CourseSection />
      <ReviewSection /> 
    </>
  );
}
