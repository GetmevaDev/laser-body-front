import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Rgm.module.scss";

export const Rgm = () => (
  <div className={styles.rgm}>
    <Link href="https://kaykovmedia.com/">
      <Image src="/logo-2.svg" width={82} height={46} alt="rgm" />
    </Link>

    <div className={styles.web}>
      Web Design & Digital Marketing by
      <p className={styles.robert}>Kaykov Media</p>
    </div>
  </div>
);
