import { ShopWomen } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export default function ShopWomanPage({ attributes }) {
  return <ShopWomen data={attributes} />;
}

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("shop-women-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}
