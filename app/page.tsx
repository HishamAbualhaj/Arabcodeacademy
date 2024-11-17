import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection";
import ResourcesSection from "@/Components/ResourcesSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
export default function Home() {
  return (
    <>
      <ResourcesSection />
      <CourseSection />
      <ReviewSection /> 
    </>
  );
}
