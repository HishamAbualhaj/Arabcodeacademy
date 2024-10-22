import React from "react";
import DiscountBanner from "./Components/DiscountBanner";

export default function Home() {
  return (
 <>
      <DiscountBanner
        startTime={new Date("2024-10-01T08:00:00")} 
        endTime={new Date("2024-10-31T23:59:59")} 
        announcementText="خصومات بنسبة 20% على الكورسات" 
      />
 </>
  );
}
