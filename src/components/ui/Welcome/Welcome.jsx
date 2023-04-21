import Image from "next/image";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Welcome.module.scss";

export const Welcome = ({ data }) => (
  <div className={styles.welcome}>
    <div className={styles.welcome_left}>
      <Typography tag="h2" className={styles.title}>
        {data?.title}
      </Typography>

      <div className={styles.description}>{data?.description}</div>

      <div className={styles.phone}>
        <div className={styles.phone_icon}>
          <Image
            width={32}
            height={32}
            src={data?.icon?.data?.attributes?.url}
            alt={data?.alt_icon}
          />
        </div>

        <div className={styles.tel}>
          <a href="tel:(718) 1234567" className={styles.link}>
            {data?.phone}
          </a>
          <div className={styles.call}> {data?.text_under_phone}</div>
        </div>
      </div>

      <Button className={styles.button}> {data?.button}</Button>
    </div>
    <div className={styles.welcome_right}>
      <Image
        width={620}
        height={500}
        alt={data?.alt_right_image}
        src={data?.right_image?.data?.attributes?.url}
        className={styles.image}
      />
    </div>
  </div>
);
