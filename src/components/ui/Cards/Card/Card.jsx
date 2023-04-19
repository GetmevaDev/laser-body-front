import Image from "next/image";
import React from "react";

import { Typography } from "../../Typography/Typography";

import styles from "./Card.module.scss";

export const Card = ({ title, description, icon }) => (
  <div className={styles.card}>
    <div className={styles.icon}>
      <Image
        width={40}
        height={40}
        src={icon?.data?.attributes?.url}
        alt="hairs"
      />
    </div>

    <Typography tag="h4" className={styles.card_title}>
      {title}
    </Typography>

    <div className={styles.description}>{description}</div>
  </div>
);
