import React from "react";

import { Typography } from "../Typography/Typography";

import AccordionItem from "./Item/AccordionItem";

import styles from "./Accordion.module.scss";

export const Accordion = ({ data, dataRight, titleLeft, titleRight }) => (
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
          <h2 className={styles.title_faq}>{titleLeft}</h2>
          {data?.map((item) => (
            <div key={item.id} className={styles.item}>
              <AccordionItem title={item.text} content={item.description} />
            </div>
          ))}
        </div>

        <div
          className="accordion__inner"
          itemScope=""
          itemType="https://schema.org/FAQPage"
        >
          <h2 className={styles.title_faq}>{titleRight}</h2>

          {dataRight?.map((item) => (
            <div key={item.id} className={styles.item}>
              <AccordionItem title={item.text} content={item.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
