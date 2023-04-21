import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

import styles from "./OurService.module.scss";

export const OurService = ({ data }) => (
  <div className={styles.our}>
    <div className={styles.services}>
      <div className={styles.service_img}>
        <Image
          width={618}
          height={500}
          src={data?.Image_left?.data?.attributes?.url}
          alt={data?.alt}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <Typography tag="h2">{data?.title}</Typography>

        <div className={styles.description}>{data?.description}</div>
        <Link href={data?.button_link}>
          <Button>{data?.button}</Button>
        </Link>
      </div>
    </div>
  </div>
);
