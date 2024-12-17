"use client";
import { Box, Flex,VStack } from "@chakra-ui/react";
import SwiperCustom from "../SwiperCustom";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
import Loader from "@/Components/Loader";
import NotFound from "@/Components/NotFound";
import { useEffect, useState } from "react";
interface Review {
  reviewText: string;
  price: number;
  reviewerName:string;
  reviewerLastName:string;
  rating: number;
  imageURL: string;
  date: Date;
}
const ReviewSection = ({}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  const getReviews = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/reviews`
      );
  
      if (!response.ok) {
        throw new Error(`Error fetching courses: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched Data reve:", data.reviews); 
    
      if (Array.isArray(data.reviews)) {
        setReviews(data.reviews);
      } else {
        console.error("Expected an array, but received:", typeof data, data);
        setReviews([]); 
        
      }
      setLoader(false);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      setReviews([]);
      setLoader(false)
    }
  };
  

  useEffect(() => {
    getReviews();
  }, []);
if(loader){
  return(
  <VStack marginBlock="8%">
  <Loader/>
  </VStack>
)
}
if(reviews.length===0){
  return(
    <VStack  marginBlock="8%">
  <NotFound/>
  </VStack>
)
}
  return (
    <Flex justifyContent={"center"}>
      <Box
        position={"relative"}
        maxW="1650px"
        height={{ base: "438px", xl: "639px", "2xl": "622px" }}
        py={{ base: "90px", xl: "151px", "2xl": "111px" }}
      >
        <Box marginTop="40px">
          <SwiperCustom
            swiperClass="swiper-section-4"
            nextBtn="swiper-next-4"
            prevBtn="swiper-prev-4"
            isPagination={false}
            breakpoint={{
              0: { slidesPerView: 1 },
              1280: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1736: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            swiperslide={reviews.map((reviewCard,index) => {
              return (
                <SwiperSlide key={index}>
                  <ReviewCard
                    name={`${reviewCard.reviewerName} ${reviewCard.reviewerLastName}`}
                    comment={reviewCard.reviewText}
                    rating={reviewCard.rating}
                   // image={reviewCard.imageURL}
                   image="/images/profile/sophia.png"
                    date={`${reviewCard.date}`}
                  />
                </SwiperSlide>
              );
            })}
            sliderNumber={3}
            arrow={
              <Box width={{ base: "40px", xl: "80px", "2xl": "70px" }}>
                <Arrow_slider />
              </Box>
            }
          />
        </Box>
      </Box>
    </Flex>
  );
};
export default ReviewSection;
