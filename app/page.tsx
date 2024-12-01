"use client";
import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection";
import ResourcesSection from "@/Components/ResourcesSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import Header from "@/Components/Header/Header";
import Landing from "@/Components/Landing/Landing";
export default function Home() {
  return (
    <>
      <Header />
     <Landing />
      {/* <ResourcesSection /> */}
      <CourseSection />
      <ReviewSection />
    </>
  );
}
