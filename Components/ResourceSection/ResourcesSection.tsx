/**
 * ResourcesSection Component
 *
 * A dynamic section showcasing a collection of resource cards inside a swiper carousel. 
 * Each card represents a resource with an icon and a name, providing an interactive way 
 * for users to explore available learning tools and materials.
 *
 * @component
 *
 * @example
 * <ResourcesSection />
 *
 * @returns {React.ReactElement}
 * Renders a swiper-based resource section with responsive design and card components.
 *
 * Features:
 * - **Interactive Swiper Carousel**: Utilizes the `SwiperCustom` component for smooth navigation between resource cards.
 * - **Resource Cards**: Each card, built using the `CoursesCard` component, displays a resource with an icon and name.
 * - **Dynamic Content**: Resource data is mapped from the `dataCard` array, ensuring easy updates and scalability.
 * - **Responsive Layout**: Adjusts the number of visible slides based on screen size.
 * - **Custom Navigation**: Includes styled arrow navigation for easy control of the swiper carousel.
 *
 * Components:
 * - **CoursesCard**: Represents individual resource cards with an icon and a title.
 * - **SwiperCustom**: A customized Swiper component for carousel functionality.
 * - **SwiperSlide**: Defines each slide within the Swiper carousel.
 *
 * Props:
 * - No external props are passed to this component. It relies on the internal `dataCard` array for content.
 *
 * Dependencies:
 * - **Chakra UI**: For layout and styling (`Box`).
 * - **Next.js Image**: For optimized image rendering.
 * - **Swiper**: For carousel functionality (`SwiperCustom` and `SwiperSlide`).
 *
 * Styling:
 * - Uses Chakra UI for layout, padding, and shadow effects to ensure a clean and cohesive design.
 * - Resource cards have consistent spacing and alignment for better user experience.
 *
 * Data:
 * - The `dataCard` array contains objects representing resources. Each object has:
 *   - `id`: A unique identifier.
 *   - `name`: The name of the resource.
 *   - `imgPath`: The path to the resource's icon.
 *
 * Layout:
 * - A central box contains the swiper carousel.
 * - Each slide in the swiper contains a resource card.
 * - Navigation arrows are styled and positioned for easy access.
 *
 * Accessibility:
 * - The `alt` property in images ensures screen readers can describe the resource.
 * - Navigation buttons are designed for keyboard and mouse interaction.
 */

import React from "react";
import CoursesCard from "@/Components/ResourceSection/ResourcesCard";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import SwiperCustom from "../SwiperCustom/SwiperCustom";
import { SwiperSlide } from "swiper/react";
import Arrow_slider from "@/public/icons/swiper-arrow-2.svg";
const dataCard = [
  { id: 1, name: "دروس وانماط الميدجورني", imgPath: "/icons/book.png" },
  { id: 2, name: "بنك الأسئلة التقنية", imgPath: "/icons/list.png" },
  { id: 3, name: "قاموس المصطلحات التقنية", imgPath: "/icons/education.png" },
  { id: 4, name: "لغة الضاد", imgPath: "/icons/letter.png" },
  { id: 5, name: "دليل أدوات الذكاء الاصطناعي", imgPath: "/icons/ai.png" },
  { id: 6, name: "دروس الفيديو القصيرة", imgPath: "/icons/videoLogo.png" },
];

const ResourcesSection: React.FC = () => {
  return (
    <Box zIndex="10" marginY="-40px" px={{ base: "80px"}} width="100%" position="relative" mx="auto">
      <Box
        shadow="0px 1px 20px 3px rgba(0, 0, 0, 0.2)"
        borderRadius="10px"
        bgColor="white"
        maxW={{ base: "720px", md: "900px" }}
        mx="auto"
        padding="10px"
        py={{ base: "25px", lg: "40px" }}
      >
        <SwiperCustom
          px=""
          maxW="100%"
          swiperClass="swiper-section-3"
          nextBtn="swiper-next-3"
          prevBtn="swiper-prev-3"
          breakpoint={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          isPagination={false}
          sliderNumber={3}
          arrow={<Arrow_slider />}
          swiperslide={dataCard.map((item) => (
            <SwiperSlide key={item.id}>
              <CoursesCard
                img={
                  <Image
                    src={item.imgPath}
                    alt={item.name}
                    width={65}
                    height={65}
                  />
                }
                courseName={item.name}
              />
            </SwiperSlide>
          ))}
          py={undefined}
        />
      </Box>
    </Box>
  );
};

export default ResourcesSection;
