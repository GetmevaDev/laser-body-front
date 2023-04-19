/* eslint-disable react/button-has-type */
import classnames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

export const Button = ({
  type = "button",
  disabled,
  loading,
  startIcon,
  endIcon,
  children,
  className,
  ...props
}) => {
  const classes = classnames(
    styles.button,
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className
  );

  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};
