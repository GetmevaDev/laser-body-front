import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Logo.module.scss";

export const Logo = ({ copy, className, navigation }) => (
  <Link href="/" className={styles.logo}>
    <Image
      src={
        navigation?.data?.attributes?.navigation?.Logo?.data?.attributes?.url
      }
      width={341}
      height={50}
      alt=""
      className={classNames(styles.images, className)}
    />

    {copy && (
      <div className={styles.copyright}>
        © 2023 <p className={styles.laser}>LaserBody360</p> All rights reserved
      </div>
    )}
  </Link>
);
