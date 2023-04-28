import Image from "next/image";
import React from "react";

import styles from "./CarouselItem.module.scss";

export const CarouselItem = ({ name, description, icon, alt }) => (
  <div className={styles.item}>
    <div className={styles.item_top}>
      <div className={styles.avatar}>
        {!icon?.data === null && (
          <Image
            width={77}
            height={77}
            src={icon?.data?.attributes?.url}
            alt={alt}
          />
        )}
      </div>
      <div className={styles.name}>{name}</div>
    </div>

    <div className={styles.item_bottom}>
      <div className={styles.description}>{description}</div>
      <div className={styles.rating}>
        {Array(
          [1, 2, 3, 4, 5].map((item) => (
            <Image
              width={19}
              height={19}
              src="/svg/star.svg"
              alt="star"
              key={item}
            />
          ))
        )}
      </div>
    </div>
  </div>
);
