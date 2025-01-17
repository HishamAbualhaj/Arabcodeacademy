/**
 * ReviewSection Component
 *
 * A functional component that fetches and displays a list of user reviews in a swiper layout. Each review is represented
 * as a card, showcasing details like the user's name, comment, rating, and review date. The swiper allows users to navigate
 * through multiple reviews, and a "Not Found" message is displayed if no reviews are available.
 *
 * @component
 *
 * Features:
 * - Fetches review data from an API endpoint dynamically.
 * - Renders user reviews in a responsive swiper layout using `SwiperCustom` and `SwiperSlide`.
 * - Displays individual review details via the `ReviewCard` component.
 * - Shows a `NotFound` component when no reviews are available.
 *
 * @returns {React.ReactElement}
 * The component renders a responsive section containing a swiper of user reviews or a "Not Found" message when no reviews
 * are available.
 *
 * Review Data Format:
 * - The component expects an array of review objects fetched from the API.
 * - Each review object should have the following structure:
 *   - `reviewText`: {string} - The text of the user's review.
 *   - `reviewerName`: {string} - The first name of the reviewer.
 *   - `reviewerLastName`: {string} - The last name of the reviewer.
 *   - `rating`: {number} - The rating given by the reviewer (1 to 5).
 *   - `imageURL`: {string} - The URL of the reviewer's profile image.
 *   - `date`: {Date} - The date of the review.
 *
 * API Integration:
 * - Endpoint: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/reviews`
 * - Method: GET
 * - Fetches review data from the API and renders them dynamically.
 *
 * Styling and Responsiveness:
 * - Utilizes Chakra UI for styling.
 * - Adapts layout to different screen sizes using responsive breakpoints.
 * - Includes navigation arrows for the swiper, styled for a consistent user experience.
 *
 * Usage Example:
 * ```jsx
 * <ReviewSection />
 * ```
 *
 * This component is suitable for use in any application that requires showcasing user feedback, such as e-commerce platforms,
 * educational websites, or SaaS products.
 */


import { Box } from "@chakra-ui/react";
import SwiperCustom from "../SwiperCustom";
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
