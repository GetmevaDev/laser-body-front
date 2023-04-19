import Image from "next/image";
import React from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

import styles from "./OurService.module.scss";

export const OurService = ({ data }) => (
  <div className={styles.our}>
    <div className={styles.services}>
      <Image
        width={618}
        height={500}
        src={data?.Image_left?.data?.attributes?.url}
        alt="body"
      />

      <div className={styles.info}>
        <Typography tag="h2">{data?.title}</Typography>

        <div className={styles.description}>{data?.description}</div>
        <Button>{data?.button}</Button>
      </div>
    </div>
  </div>
);
