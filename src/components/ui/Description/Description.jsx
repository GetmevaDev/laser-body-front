import React from "react";

import styles from "./Description.module.scss";

export const Description = ({ description }) => (
  <div className={styles.description}>
    <div
      className={styles.text}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `	${description}`,
      }}
    />
  </div>
);
