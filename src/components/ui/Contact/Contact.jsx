import Image from "next/image";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Contact.module.scss";

export const Contact = ({ page, title, data, date, iframe }) => (
  <div className={page ? styles.contact_page : styles.contact}>
    <div className={styles.contact_us}>
      {!page && (
        <Typography tag="h2" className={styles.title}>
          {title}
        </Typography>
      )}
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image
            alt="phone"
            width={32}
            height={32}
            src={data[0]?.icon?.data?.attributes?.url}
          />

          <a href={`tel:${data[0]?.text}`} className={styles.link}>
            {data[0]?.text}
          </a>
        </li>

        <li className={styles.item}>
          <Image
            alt="location"
            width={32}
            height={32}
            src={data[1]?.icon?.data?.attributes?.url}
          />

          <div className={styles.link}>{data[1]?.text}</div>
        </li>

        <li className={styles.item}>
          <Image
            alt="clock"
            width={32}
            height={32}
            src={data[2]?.icon?.data?.attributes?.url}
          />

          <div className={styles.date}>
            {date?.map((date) => (
              <div className={styles.date_inner} key={date.id}>
                <p className={styles.day}>{date.day}</p>
                <div className={styles.time}>{date.time}</div>
              </div>
            ))}
          </div>
        </li>

        <li>{page && <Button>Book now</Button>}</li>
      </ul>
    </div>

    <div className={styles.map}>
      <iframe
        className={styles.iframe}
        title="laser body"
        src={iframe}
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);
