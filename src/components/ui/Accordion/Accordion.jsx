import React from "react";

import { Typography } from "../Typography/Typography";

import AccordionItem from "./Item/AccordionItem";

import styles from "./Accordion.module.scss";

export const Accordion = ({ data }) => (
  <div className={styles.accordion}>
    <div className={styles.accordion_inner}>
      <Typography className={styles.title}>
        Frequently Asked Questions
      </Typography>
      <div className="accordion__block">
        <div className="accordion__inner">
          {data.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <AccordionItem title={item.text} content={item.description} />
            </div>
          ))}
        </div>

        {/* <div className="accordion__inner">
          {data?.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <AccordionItem title={item.title} content={item.content} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  </div>
);
