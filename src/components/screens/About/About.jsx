import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Description, Source } from "@/components/ui";

export const About = ({ data }) => (
  <Layout title="About" description="About" data={data}>
    <Banner
      image={data?.banner?.image?.data?.attributes?.url}
      title={data?.banner?.title}
      page
      textButtons={data?.banner}
      buttons
    />

    <Source sub="About" />

    <Description description={data?.description} />
  </Layout>
);
