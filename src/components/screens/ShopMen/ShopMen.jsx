import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Services, Source } from "@/components/ui";
import { fetchAPI } from "@/components/utils";

export const ShopMen = ({ data }) => (
  <Layout title="Shop men">
    <Banner
      image={data?.banner?.image?.data?.attributes?.url}
      title={data?.banner?.title}
      description={data?.banner?.description}
    />

    <Source sub="Men" />

    <Services services={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
  </Layout>
);
