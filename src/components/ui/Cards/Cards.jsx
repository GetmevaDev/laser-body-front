import React from "react";

import { Card } from "./Card/Card";

import styles from "./Cards.module.scss";

export const Cards = ({ cards }) => (
  <div className={styles.cards}>
    <div className={styles.cards_inner}>
      {cards?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  </div>
);
