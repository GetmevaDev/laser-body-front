import React from "react";

import { ShopMen } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export default function ShopMenPage({ attributes }) {
  return <ShopMen data={attributes} />;
}

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("shop-men-page?populate=deep");

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}
