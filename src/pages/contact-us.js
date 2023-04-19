import React from "react";

import { ContactUs } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export default function ContactUsPage({ attributes }) {
  return <ContactUs data={attributes} />;
}

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("contact-us?populate=deep");

  return {
    props: {
      attributes,
    },
    revalidate: 10, // In seconds
  };
}
