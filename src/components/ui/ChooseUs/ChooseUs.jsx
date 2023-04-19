import React from "react";

import { Typography } from "..";

import { ChooseUsItem } from "./Item/ChooseUsItem";

import styles from "./ChooseUs.module.scss";

export const ChooseUs = ({ data, title }) => (
  <div className={styles.choose_us}>
    <Typography tag="h2" className={styles.title}>
      {title}
    </Typography>
    <ChooseUsItem cards={data} />
  </div>
);
