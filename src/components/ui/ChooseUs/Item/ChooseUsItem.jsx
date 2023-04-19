import Image from "next/image";
import React from "react";

import styles from "./ChooseUsItem.module.scss";

export const ChooseUsItem = ({ cards }) => (
  <div className={styles.cards}>
    {cards?.map((card) => (
      <div className={styles.card} key={card.id}>
        <div className={styles.icon}>
          <Image
            width={40}
            height={40}
            src={card?.icon?.data?.attributes?.url}
            alt={card.text}
          />
        </div>
        <div className={styles.name}>{card.text}</div>
        <div className={styles.description}> {card.description}</div>
      </div>
    ))}
  </div>
);
