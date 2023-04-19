import Image from "next/image";

import { Button, Typography } from "@/components/ui";

import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({ banner }) => (
  <div className={styles.banner}>
    <div className={styles.banner_left}>
      <Image
        width={600}
        height={500}
        alt={banner[0].title}
        src={banner[0].image?.data?.attributes?.url}
      />

      <div className={styles.block}>
        <Typography className={styles.title}>{banner[0].title}</Typography>
        <Button>{banner[0].button}</Button>
      </div>
    </div>
    <div className={styles.banner_right}>
      <Image
        width={600}
        height={500}
        alt={banner[1]?.title}
        src={banner[1].image?.data?.attributes?.url}
      />
      <div className={styles.block}>
        <Typography className={styles.title}>{banner[1]?.title}</Typography>
        <Button>{banner[1]?.button}</Button>
      </div>
    </div>
  </div>
);
