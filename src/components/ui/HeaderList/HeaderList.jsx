import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./HeaderList.module.scss";

const list = [
  {
    id: 1,
    name: "Home us",
    path: "/",
  },

  {
    id: 2,
    name: "About us",
    path: "/about",
  },

  {
    id: 3,
    name: "Mens Menu",
    path: "/shop-man",
  },

  {
    id: 4,
    name: "Womens Menu",
    path: "/shop-women",
  },

  {
    id: 5,
    name: "Contact Us",
    path: "/contact-us",
  },
];

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
