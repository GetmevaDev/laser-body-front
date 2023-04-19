import classNames from "classnames";
import React from "react";

import styles from "./Typography.module.scss";

export const Typography = ({ tag = "h1", children, className }) => {
  const Component = tag;
  return (
    <Component className={classNames(styles.typography, className)}>
      {children}
    </Component>
  );
};
