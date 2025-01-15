import { Box } from "@chakra-ui/react";
import SwiperCustom from "../SwiperCustom/SwiperCustom";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
import NotFound from "../NotFound/NotFound";


interface Review {
  reviewText: string;
  price: number;
  reviewerName:string;
  reviewerLastName:string;
  rating: number;
  imageURL: string;
  date: Date;
}
const ReviewSection = async ({}) => {
  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/reviews`
  );

  let reviews: Review[] = [];
  if (response.ok) {
    const data = await response.json();
    if (Array.isArray(data.reviews)) {
      reviews = data.reviews;
    }
  } 
  if (!reviews || reviews.length === 0){
    return(<NotFound/>)
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
