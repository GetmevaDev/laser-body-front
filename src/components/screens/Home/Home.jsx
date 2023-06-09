import React from "react";

import { Layout } from "@/components/layout";
import {
  Accordion,
  Cards,
  ChooseUs,
  Contact,
  HomeBanner,
  OurService,
  Testimonials,
  Welcome,
} from "@/components/ui";

export const Home = ({ data }) => (
  <Layout title="Home" description="description">
    <HomeBanner banner={data?.banner} bannerMobile={data?.banner_mobile} />

    <Welcome data={data?.welcome} />

    <Cards cards={data?.cards?.card} />

    {console.log(data, " data")}

    <OurService data={data?.service} />

    <Accordion
      data={data?.faq?.faq_item_left}
      dataRight={data?.faq?.faq_item_right}
      titleLeft={data?.faq?.title_faq_left}
      titleRight={data?.faq?.title_faq_right}
    />

    <ChooseUs
      data={data?.choose_us?.choose_us_item}
      title={data?.choose_us?.title}
    />

    <Testimonials data={data?.testimonials} title={data?.testimonials?.title} />
    <Contact
      title={data?.contact_us?.title}
      data={data?.contact_us?.contact_us_tem}
      date={data?.contact_us?.date_info}
      iframe={data?.contact_us?.iframe}
    />
  </Layout>
);
