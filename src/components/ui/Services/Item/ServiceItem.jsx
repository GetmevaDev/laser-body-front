import Image from "next/image";
import React from "react";

import { Button } from "../../Button/Button";

import styles from "./ServiceItem.module.scss";

export const ServiceItem = ({ text, image }) => (
  <div className={styles.service}>
    <div className={styles.image_inner}>
      <Image
        width={345}
        height={330}
        src={image?.data?.attributes?.url}
        alt="services-item"
        className={styles.image}
      />
    </div>

    <Button className={styles.button}>shop now</Button>

    <div className={styles.name}>{text}</div>
  </div>
);
