import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./HeaderList.module.scss";

export const HeaderList = ({ className, navigation }) => {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul className={classNames(styles.list, className)}>
        {navigation?.data?.attributes?.navigation?.Navigation?.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link
              href={item.path}
              className={
                router.pathname === item.path ? styles.active : styles.link
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
