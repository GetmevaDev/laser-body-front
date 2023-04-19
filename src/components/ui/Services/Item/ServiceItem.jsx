import Image from "next/image";
import React from "react";

import styles from "./ServiceItem.module.scss";

export const ServiceItem = ({ text, image }) => (
  <div className={styles.service}>
    <Image
      width={345}
      height={330}
      src={image?.data?.attributes?.url}
      alt="services-item"
      className={styles.image}
    />

    <div className={styles.name}>{text}</div>
  </div>
);
