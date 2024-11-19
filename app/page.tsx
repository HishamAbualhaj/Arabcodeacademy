"use client"
import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import ResourcesSection from "@/Components/ResourcesSection";
import QuizzSection from "@/Components/QuizzSection/QuizzSection";
import { Contact } from "@/Components/Contact";
export default function Home() {
  return (
    <>
      <QuizzSection />
      <ResourcesSection />
      <Contact />
      <CourseSection />
      <ReviewSection /> 
    </>
  );
}
