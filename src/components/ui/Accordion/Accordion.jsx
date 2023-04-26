import React from "react";

import { Typography } from "../Typography/Typography";

import AccordionItem from "./Item/AccordionItem";

import styles from "./Accordion.module.scss";

export const Accordion = ({ data }) => (
  <div className={styles.accordion}>
    <div className={styles.accordion_inner}>
      <Typography className={styles.title} tag="h2">
        Frequently Asked Questions
      </Typography>
      <div className="accordion__block">
        <div
          className="accordion__inner"
          itemScope=""
          itemType="https://schema.org/FAQPage"
        >
          {data.map((item) => (
            <div key={item.id} className={styles.item}>
              <AccordionItem title={item.text} content={item.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
