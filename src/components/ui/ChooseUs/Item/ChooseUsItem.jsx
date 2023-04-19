import Image from "next/image";
import React from "react";

import styles from "./ChooseUsItem.module.scss";

const cards = [
  {
    id: 1,
    name: "Advanced Technology",
    icon: <Image width={40} height={40} src="/svg/laser.svg" alt="laser" />,
    description:
      "We use state-of-the-art laser hair removal technology that is safe, effective, and suitable for various skin types and hair colors. This ensures optimal results for each individual client.",
  },

  {
    id: 2,
    name: "Advanced Technology",
    icon: (
      <Image
        width={40}
        height={40}
        src="/svg/validation.svg"
        alt="validation"
      />
    ),
    description:
      "We use state-of-the-art laser hair removal technology that is safe, effective, and suitable for various skin types and hair colors. This ensures optimal results for each individual client.",
  },

  {
    id: 3,
    name: "Advanced Technology",

    icon: (
      <Image
        width={40}
        height={40}
        src="/svg/hydrotherapy.svg"
        alt="hydrotherapy"
      />
    ),
    description:
      "We use state-of-the-art laser hair removal technology that is safe, effective, and suitable for various skin types and hair colors. This ensures optimal results for each individual client.",
  },

  {
    id: 4,
    name: "Advanced Technology",
    icon: (
      <Image
        width={40}
        height={40}
        src="/svg/hydrotherapy.svg"
        alt="hydrotherapy"
      />
    ),
    description:
      "We use state-of-the-art laser hair removal technology that is safe, effective, and suitable for various skin types and hair colors. This ensures optimal results for each individual client.",
  },

  {
    id: 5,
    name: "Advanced Technology",
    icon: (
      <Image
        width={40}
        height={40}
        src="/svg/hydrotherapy.svg"
        alt="hydrotherapy"
      />
    ),
    description:
      "We use state-of-the-art laser hair removal technology that is safe, effective, and suitable for various skin types and hair colors. This ensures optimal results for each individual client.",
  },

  {
    id: 6,
    name: "Advanced Technology",
    icon: (
      <Image
        width={40}
        height={40}
        src="/svg/hydrotherapy.svg"
        alt="hydrotherapy"
      />
    ),
    description:
      "We use state-of-the-art laser hair removal technology that is safe, effective, and suitable for various skin types and hair colors. This ensures optimal results for each individual client.",
  },
];

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
