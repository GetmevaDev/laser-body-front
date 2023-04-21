import Image from "next/image";
import Link from "next/link";

import { Button, Typography } from "@/components/ui";

import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({ banner }) => (
  <div className={styles.banner}>
    <div className={styles.banner_left}>
      <Image
        width={600}
        height={500}
        alt={banner[0].alt}
        src={banner[0].image?.data?.attributes?.url}
      />

      <div className={styles.block}>
        <Typography className={styles.title}>{banner[0].title}</Typography>
        <Link href="/shop-women">
          <Button>{banner[0].button}</Button>
        </Link>
      </div>
    </div>
    <div className={styles.banner_right}>
      <Image
        width={600}
        height={500}
        alt={banner[1]?.alt}
        src={banner[1].image?.data?.attributes?.url}
      />
      <div className={styles.block}>
        <Typography className={styles.title}>{banner[1]?.title}</Typography>
        <Link href="/shop-man">
          <Button>{banner[1].button}</Button>
        </Link>
      </div>
    </div>
  </div>
);
