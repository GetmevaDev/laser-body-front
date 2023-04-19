import Image from "next/image";
import React from "react";

import styles from "./Rgm.module.scss";

export const Rgm = () => (
  <div className={styles.rgm}>
    <Image src="svg/rgm.svg" width={82} height={36} alt="rgm" />

    <div className={styles.web}>
      Web Design & Digital Marketing by{" "}
      <p className={styles.robert}>Robert Gerov Media</p>
    </div>
  </div>
);
