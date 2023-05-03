import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "@/components/hooks";
import { Button, Typography } from "@/components/ui";

import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({ banner, bannerMobile }) => {
  const isMatches = useMediaQuery("(max-width: 640px)");

  return (
    <div>
      {!isMatches ? (
        <div className={styles.banner}>
          <div className={styles.banner_left}>
            <Image
              width={600}
              height={500}
              alt={banner[0].alt}
              src={banner[0].image?.data?.attributes?.url}
            />

            <div className={styles.block}>
              <Typography className={styles.title}>
                {banner[0].title}
              </Typography>
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
              <Typography className={styles.title}>
                {banner[1]?.title}
              </Typography>
              <Link href="/shop-man">
                <Button>{banner[1].button}</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.banner}>
          <div className={styles.banner_left}>
            <Image
              width={600}
              height={500}
              alt={bannerMobile.alt}
              src={bannerMobile.image?.data?.attributes?.url}
            />

            <div className={styles.block_media}>
              <div className={styles.left}>
                <Typography className={styles.title}>
                  {bannerMobile?.title_left}
                </Typography>

                <Link href="/shop-women">
                  <Button>{bannerMobile?.button_left}</Button>
                </Link>
              </div>

              <div className={styles.right}>
                <Typography className={styles.title}>
                  {bannerMobile?.title_right}
                </Typography>
                <Link href="/shop-man">
                  <Button>{bannerMobile?.button_right}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
