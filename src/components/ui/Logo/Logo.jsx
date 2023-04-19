import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./Logo.module.scss";

export const Logo = ({ copy, className, navigation }) => (
  <Link href="/">
    <img
      src={
        navigation?.data?.attributes?.navigation?.Logo?.data?.attributes?.url
      }
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
