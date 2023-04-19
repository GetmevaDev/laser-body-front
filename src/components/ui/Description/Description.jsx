import React from "react";

import styles from "./Description.module.scss";

export const Description = ({ description }) => (
  <div className={styles.description}>
    <div
      className={styles.text}
      dangerouslySetInnerHTML={{
        __html: `	${description}`,
      }}
    />
  </div>
);
