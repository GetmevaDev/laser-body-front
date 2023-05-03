import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../../Button/Button";

import styles from "./ServiceItem.module.scss";

export const ServiceItem = ({ text, image, button }) => (
  <div className={styles.service_inner}>
    <div className={styles.service}>
      <div className={styles.image_inner}>
        <Image
          width={345}
          height={330}
          src={image?.data?.attributes?.url}
          alt="services-item"
          className={styles.image}
        />
        <Link href={button?.button_link} className={styles.link}>
          <Button className={styles.button}>{button?.button_text}</Button>
        </Link>
      </div>

      <div className={styles.name}>{text}</div>
    </div>
  </div>
);
