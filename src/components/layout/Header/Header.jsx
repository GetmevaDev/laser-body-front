import React from "react";

import { HeaderList, Logo } from "@/components/ui";

import styles from "./Header.module.scss";

export const Header = ({ navigation }) => (
  <header className={styles.header}>
    <Logo navigation={navigation} />
    <HeaderList navigation={navigation} />
  </header>
);
