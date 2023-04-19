import Link from "next/link";

import styles from "./Source.module.scss";

export const Source = ({ sub }) => (
  <div className={styles.source}>
    <Link className={styles.title} href="/">
      Home
    </Link>
    <h2 className={styles.path}>» {sub}</h2>
  </div>
);
