"use client";
import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection/CourseSection";
import ResourcesSection from "@/Components/ResourceSection/ResourcesSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import Header from "@/Components/Header/Header";
import Landing from "@/Components/Landing/Landing";
import DiscountBanner from "@/Components/DiscountBanner";
export default function Home() {
  return (
    <>
      {/* <DiscountBanner startDate="" endDate="" announcementText="احصل على خصم"></DiscountBanner> */}
      <Header />
      <Landing />
      <ResourcesSection />
      <CourseSection />
      <ReviewSection />
    </>
  );
}
