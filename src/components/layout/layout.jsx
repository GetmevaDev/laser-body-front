import React from "react";
import useSWR from "swr";

import Meta from "../seo/Meta";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import styles from "./layout.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Layout = ({ children, title, description }) => {
  const {
    data: navigation,
    isError,
    isLoading,
  } = useSWR("http://localhost:1337/api/navigation?populate=deep", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <Meta title={title} description={description}>
      <main className={styles.layout}>
        <Header navigation={navigation} />
        {children}

        <div className={styles.border_inner}>
          <div className={styles.border} />
        </div>

        <Footer navigation={navigation} />
      </main>
    </Meta>
  );
};
