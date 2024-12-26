"use client";
import { Box,VStack } from "@chakra-ui/react";
import SwiperCustom from "../SwiperCustom";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
import Loader from "@/Components/Loader/Loader";
import NotFound from "@/Components/NotFound/NotFound";
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
    <Box py={{ base: "90px", xl: "151px", "2xl": "111px" }}>
      <Box position="relative">
        <SwiperCustom
          px={{ base: "60px" }}
          maxW="1550px"
          swiperClass="swiper-section-4"
          nextBtn="swiper-next-4"
          prevBtn="swiper-prev-4"
          isPagination={false}
          breakpoint={{
            0: { slidesPerView: 1, spaceBetween: 40 },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1536: {
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
          arrow={<Box width={{ base: "40px", xl: "80px", "2xl": "70px" }}>
            <Arrow_slider />
          </Box>} py={undefined}        />
      </Box>
    </Box>
  );
};
export default ReviewSection;
