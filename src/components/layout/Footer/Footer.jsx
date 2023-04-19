import React from "react";

import { HeaderList, Logo, Rgm } from "@/components/ui";

import styles from "./Footer.module.scss";

export const Footer = ({ navigation }) => (
  <footer className={styles.footer}>
    <Logo copy className={styles.logo} navigation={navigation} />

    <HeaderList className={styles.footer_list} navigation={navigation} />

    <Rgm />
  </footer>
);
