import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { CarouselItem } from "./CarouselItem/CarouselItem";

// import styles from "./Carousel.module.scss";

export const Carousel = ({ testimonials }) => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    slidesPerGroup={1}
    breakpoints={{
      // when window width is >= 576px
      576: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      1280: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {console.log(testimonials, "test")}
    {testimonials?.map((item) => (
      <SwiperSlide key={item.id}>
        <CarouselItem {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);
