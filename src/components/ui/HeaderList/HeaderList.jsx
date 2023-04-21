/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./HeaderList.module.scss";

export const HeaderList = ({ className, navigation }) => {
  const [nav, setNav] = useState(false);

  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul
        className={classNames(
          nav ? [styles.menu, styles.active].join(" ") : [styles.menu],
          {},
          [className]
        )}
      >
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

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <i className="bx bx-window-close bx-rotate-180" />
        ) : (
          <i className="bx bx-menu-alt-right" />
        )}
      </div>
    </nav>
  );
};
