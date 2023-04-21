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
      alt={data?.banner?.alt}
      leftLink={data?.banner?.button_left_link}
      rightLink={data?.banner?.button_right_link}
      buttons
    />
    {console.log(data, " about")}
    <Source sub="About" />

    <Description description={data?.description} />
  </Layout>
);
