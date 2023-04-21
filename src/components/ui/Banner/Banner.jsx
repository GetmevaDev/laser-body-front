import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button, Typography } from "@/components/ui";

import styles from "./Banner.module.scss";

export const Banner = ({
  title,
  description,
  image,
  buttons,
  page,
  textButtons,
  alt,
  leftLink,
  rightLink,
}) => (
  <section className={styles.banner}>
    <Image
      width={1200}
      height={500}
      src={image}
      className={styles.image}
      alt={alt}
    />
    <div className={page ? styles.page : styles.info}>
      <Typography className={page ? styles.title_page : styles.title}>
        {title}
      </Typography>
      <p className={styles.description}>{description}</p>
      {buttons && (
        <div className={styles.buttons}>
          <a href={`tel:${leftLink}`}>
            <Button>{textButtons?.button_left}</Button>
          </a>
          <Link href={rightLink}>
            <Button>{textButtons?.button_right}</Button>
          </Link>
        </div>
      )}
    </div>
  </section>
);
