import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Services, Source } from "@/components/ui";

export const ShopMen = ({ data }) => (
  <Layout title="Shop men">
    <Banner
      image={data?.banner?.image?.data?.attributes?.url}
      title={data?.banner?.title}
      description={data?.banner?.description}
      alt={data?.banner?.alt}
    />

    <Source sub="Men" />

    <Services services={data?.services?.service_item} button={data?.services} />
  </Layout>
);
