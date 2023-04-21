import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Contact, Source } from "@/components/ui";

export const ContactUs = ({ data }) => (
  <Layout title="Contact us" description="Contact us">
    <Banner
      image={data?.banner?.image?.data?.attributes?.url}
      title={data?.banner?.title}
      alt={data?.banner?.alt}
      page
    />

    <Source sub="Contact us" />

    <Contact
      page
      data={data?.contact_us?.contact_us_tem}
      date={data?.contact_us?.date_info}
      iframe={data?.contact_us?.iframe}
      buttonLink={data?.contact_us?.button_link}
    />
  </Layout>
);
