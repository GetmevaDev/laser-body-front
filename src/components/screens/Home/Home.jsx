import React from "react";

import { Layout } from "@/components/layout";
import {
  Accordion,
  Cards,
  ChooseUs,
  Contact,
  HomeBanner,
  OurService,
  Source,
  Testimonials,
  Welcome,
} from "@/components/ui";

const data = [
  {
    title: "In just 3 hours, learn basic HTML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },

  {
    title: "In just 3 hours, learn basic HTML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },

  {
    title: "In just 3 hours, learn basic HTML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },

  {
    title: "In just 3 hours, learn basic HTML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
];

export const Home = ({ data }) => {
  console.log(data, "data");
  return (
    <Layout title="Home" description="description">
      <HomeBanner banner={data?.banner} />

      <Welcome data={data?.welcome} />

      <Cards cards={data?.cards?.card} />

      <OurService data={data?.service} />

      <Accordion data={data?.faq?.faq_item} />

      <ChooseUs
        data={data?.choose_us?.choose_us_item}
        title={data?.choose_us?.title}
      />

      <Testimonials
        data={data?.testimonials}
        title={data?.testimonials?.title}
      />
      <Contact
        title={data?.contact_us?.title}
        data={data?.contact_us?.contact_us_tem}
        date={data?.contact_us?.date_info}
        iframe={data?.contact_us?.iframe}
      />
    </Layout>
  );
};
