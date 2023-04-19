import React from "react";

import { Carousel } from "../Carousel/Carousel";
import { Typography } from "../Typography/Typography";

import styles from "./Testimonials.module.scss";

export const Testimonials = ({ data, title }) => (
  <div className={styles.testimonials}>
    <div className={styles.testimonials_inner}>
      <Typography className={styles.title} tag="h2">
        {title}
      </Typography>

      <Carousel testimonials={data?.testimonial_item} />
    </div>
  </div>
);
