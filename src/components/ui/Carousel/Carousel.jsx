import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { CarouselItem } from "./CarouselItem/CarouselItem";

import styles from "./Carousel.module.scss";

export const Carousel = ({ testimonials }) => (
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {testimonials?.map((item) => (
      <SwiperSlide key={item.id}>
        <CarouselItem {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);
