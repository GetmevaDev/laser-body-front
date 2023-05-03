import React from "react";

import { ServiceItem } from "./Item/ServiceItem";

import styles from "./Services.module.scss";

export const Services = ({ services, button }) => (
  <div className={styles.services}>
    {services?.map((item) => (
      <ServiceItem key={item.id} {...item} button={button} />
    ))}
  </div>
);
